#!/usr/bin/env node
/**
 * Skills Context Injector for Claude Code
 *
 * Scans ./skills directory (in current working directory) for SKILLS.md files
 * and injects available skills as a markdown table into Claude's context at session start.
 *
 * Expected directory structure:
 *     your-project/
 *         skills/
 *             skill-name-1/
 *                 SKILLS.md
 *             skill-name-2/
 *                 SKILLS.md
 *
 * Expected SKILLS.md format:
 *     ---
 *     description: "Brief description of the skill"
 *     when_to_use: "When to apply this skill"
 *     ---
 *
 *     # Additional content...
 */

const fs = require("fs");
const path = require("path");

let matter;
try {
  matter = require("gray-matter");
} catch (error) {
  console.error(
    "[session_start.js] Error: gray-matter not installed. Run: npm install gray-matter in ~/.claude/hooks/"
  );
  process.exit(1);
}

/**
 * Log error messages to stderr (won't be injected into context)
 */
function logError(message) {
  console.error(`[session_start.js] ${message}`);
}

/**
 * Read and parse JSON input from stdin
 */
async function readHookInput() {
  return new Promise((resolve) => {
    let data = "";

    process.stdin.on("data", (chunk) => {
      data += chunk;
    });

    process.stdin.on("end", () => {
      try {
        const parsed = JSON.parse(data);
        resolve(parsed);
      } catch (error) {
        logError(`Failed to parse JSON input: ${error.message}`);
        resolve({});
      }
    });
  });
}

/**
 * Get the skills directory path from current working directory
 */
function getSkillsDirectory(hookInput) {
  const cwd = hookInput.cwd || process.cwd();
  return path.join(cwd, "skills");
}

/**
 * Find all directories containing SKILLS.md files
 * Returns array of SKILLS.md file paths
 */
function findSkills(skillsDir) {
  if (!fs.existsSync(skillsDir)) {
    logError(`Skills directory not found: ${skillsDir}`);
    return [];
  }

  const stats = fs.statSync(skillsDir);
  if (!stats.isDirectory()) {
    logError(`Skills path is not a directory: ${skillsDir}`);
    return [];
  }

  const skills = [];

  try {
    const items = fs.readdirSync(skillsDir);

    for (const item of items) {
      const itemPath = path.join(skillsDir, item);
      const itemStats = fs.statSync(itemPath);

      if (itemStats.isDirectory()) {
        const skillsFile = path.join(itemPath, "SKILL.md");
        if (fs.existsSync(skillsFile)) {
          const fileStats = fs.statSync(skillsFile);
          if (fileStats.isFile()) {
            skills.push(skillsFile);
          }
        }
      }
    }
  } catch (error) {
    logError(`Error scanning skills directory: ${error.message}`);
  }

  return skills;
}

/**
 * Parse SKILLS.md front matter and extract metadata
 * Returns: { skillName, description, whenToUse } or null if parsing fails
 */
function parseSkillMetadata(skillsFile) {
  const skillName = path.basename(path.dirname(skillsFile));

  try {
    const content = fs.readFileSync(skillsFile, "utf-8");
    const parsed = matter(content);

    let description = parsed.data.description || "N/A";
    let whenToUse = parsed.data.when_to_use || "N/A";

    // Handle cases where values might be empty
    if (!description || description.trim() === "") {
      description = "N/A";
    }
    if (!whenToUse || whenToUse.trim() === "") {
      whenToUse = "N/A";
    }

    return {
      skillName,
      description,
      whenToUse,
    };
  } catch (error) {
    logError(`Error parsing ${skillsFile}: ${error.message}`);
    return null;
  }
}

/**
 * Format skills data as a markdown table
 * Returns formatted markdown string
 */
function formatSkillsTable(skillsData) {
  if (!skillsData || skillsData.length === 0) {
    return "";
  }

  // Sort alphabetically by skill name
  skillsData.sort((a, b) =>
    a.skillName.toLowerCase().localeCompare(b.skillName.toLowerCase())
  );

  // Build markdown table
  const lines = [
    "## Available Skills",
    "",
    "| Skill | Description | When to Use |",
    "|-------|-------------|-------------|",
  ];

  for (const { skillName, description, whenToUse } of skillsData) {
    // Escape pipe characters in content
    const escapedDescription = description.replace(/\|/g, "\\|");
    const escapedWhenToUse = whenToUse.replace(/\|/g, "\\|");

    lines.push(
      `| ${skillName} | ${escapedDescription} | ${escapedWhenToUse} |`
    );
  }

  return lines.join("\n");
}

/**
 * Main execution flow
 */
async function main() {
  // Read hook input (contains session info)
  const hookInput = await readHookInput();

  // Get skills directory from current working directory
  const skillsDir = getSkillsDirectory(hookInput);

  // Find all SKILLS.md files
  const skillsFiles = findSkills(skillsDir);

  if (skillsFiles.length === 0) {
    logError(`No skills found in ${skillsDir}`);
    process.exit(0);
  }

  // Parse metadata from each skill
  const skillsData = [];
  for (const skillsFile of skillsFiles) {
    const metadata = parseSkillMetadata(skillsFile);
    if (metadata) {
      skillsData.push(metadata);
    }
  }

  if (skillsData.length === 0) {
    logError("No valid skills metadata found");
    process.exit(0);
  }

  // Format and output table to stdout (this gets injected into context)
  const table = formatSkillsTable(skillsData);
  console.log(table);

  // Log success to stderr
  logError(`Successfully injected ${skillsData.length} skills into context`);

  process.exit(0);
}

// Run the script
main().catch((error) => {
  logError(`Unexpected error: ${error.message}`);
  process.exit(1);
});