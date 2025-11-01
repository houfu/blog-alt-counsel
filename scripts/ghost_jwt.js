#!/usr/bin/env node

/**
 * Ghost Admin API JWT Token Generator - Pure Node.js
 * 
 * Generates JWT tokens for Ghost Admin API authentication.
 * Supports both environment variables and settings.json configuration.
 * 
 * Environment Variables (preferred for Docker):
 *   GHOST_SITE_URL          - Your Ghost site URL (e.g., https://yourblog.com)
 *   GHOST_ADMIN_API_KEY     - Your Ghost Admin API key (id:secret format)
 *   GHOST_API_VERSION       - API version (default: v6.0)
 * 
 * Usage:
 *   node ghost_jwt.js                    # Generate token using env vars or settings.json
 *   node ghost_jwt.js --config custom.json  # Use custom config file
 *   node ghost_jwt.js --print-headers    # Print HTTP headers for curl
 *   node ghost_jwt.js --examples         # Show usage examples
 *   node ghost_jwt.js --quiet            # Only output the token
 */

const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');

/**
 * Load Ghost configuration from environment variables
 */
function loadConfigFromEnv() {
    const config = {};
    
    // Required environment variables
    const requiredEnvVars = {
        'GHOST_SITE_URL': 'site_url',
        'GHOST_ADMIN_API_KEY': 'admin_api_key'
    };
    
    for (const [envVar, configKey] of Object.entries(requiredEnvVars)) {
        const value = process.env[envVar];
        if (value) {
            config[configKey] = value;
        } else {
            return null; // Missing required env var, fall back to file
        }
    }
    
    // Optional environment variables
    config.api_version = process.env.GHOST_API_VERSION || 'v6.0';
    
    // Derive admin_api_url from site_url if not provided
    config.admin_api_url = process.env.GHOST_ADMIN_API_URL || 
                           `${config.site_url}/ghost/api/admin`;
    
    return config;
}

/**
 * Load Ghost configuration from JSON file
 */
function loadConfigFromFile(configFile = '../settings.json') {
    const configPath = path.resolve(configFile);
    
    if (!fs.existsSync(configPath)) {
        throw new Error(`Configuration file '${configFile}' not found`);
    }
    
    try {
        const settings = JSON.parse(fs.readFileSync(configPath, 'utf8'));
        
        if (!settings.ghost) {
            throw new Error("Configuration file must contain 'ghost' section");
        }
        
        const ghostConfig = settings.ghost;
        const requiredKeys = ['admin_api_key', 'site_url'];
        
        for (const key of requiredKeys) {
            if (!ghostConfig[key]) {
                throw new Error(`Ghost configuration must contain '${key}'`);
            }
        }
        
        return ghostConfig;
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw new Error(`Invalid JSON in configuration file: ${error.message}`);
        }
        throw error;
    }
}

/**
 * Load configuration from environment variables or file
 */
function loadConfig(configFile = null) {
    // Try environment variables first
    const envConfig = loadConfigFromEnv();
    if (envConfig) {
        if (!process.argv.includes('--quiet')) {
            console.error('📡 Using configuration from environment variables');
        }
        return envConfig;
    }
    
    // Fall back to file
    const file = configFile || 'settings.json';
    if (!process.argv.includes('--quiet')) {
        console.error(`📄 Using configuration from ${file}`);
    }
    return loadConfigFromFile(file);
}

/**
 * Generate JWT token for Ghost Admin API
 */
function generateJwtToken(adminApiKey, expiresInMinutes = 5) {
    if (!adminApiKey.includes(':')) {
        throw new Error("Admin API key must be in format 'id:secret'");
    }
    
    const [keyId, keySecret] = adminApiKey.split(':', 2);
    
    // Convert hex secret to buffer
    let secretBuffer;
    try {
        secretBuffer = Buffer.from(keySecret, 'hex');
    } catch (error) {
        throw new Error("Secret part of API key must be valid hex");
    }
    
    // Create JWT payload
    const now = Math.floor(Date.now() / 1000);
    const payload = {
        iat: now,
        exp: now + (expiresInMinutes * 60), // Max 5 minutes
        aud: '/admin/'
    };
    
    // Generate token
    const token = jwt.sign(payload, secretBuffer, {
        algorithm: 'HS256',
        header: { kid: keyId }
    });
    
    return token;
}

/**
 * Print usage examples
 */
function printUsageExamples(token, siteUrl, apiVersion = 'v6.0') {
    const adminApiUrl = `${siteUrl}/ghost/api/admin`;
    
    console.log('\nUsage Examples:');
    console.log('================');
    console.log('\n1. Get all posts:');
    console.log(`curl -H 'Authorization: Ghost ${token}' \\`);
    console.log(`     -H 'Accept-Version: ${apiVersion}' \\`);
    console.log(`     '${adminApiUrl}/posts/'`);
    
    console.log('\n2. Search for docassemble posts:');
    console.log(`curl -H 'Authorization: Ghost ${token}' \\`);
    console.log(`     -H 'Accept-Version: ${apiVersion}' \\`);
    console.log(`     '${adminApiUrl}/posts/?filter=title:~docassemble,plaintext:~docassemble'`);
    
    console.log('\n3. Create a new post:');
    console.log(`curl -X POST -H 'Authorization: Ghost ${token}' \\`);
    console.log(`     -H 'Accept-Version: ${apiVersion}' \\`);
    console.log(`     -H 'Content-Type: application/json' \\`);
    console.log(`     -d '{"posts": [{"title": "My New Post", "html": "<p>Content here</p>"}]}' \\`);
    console.log(`     '${adminApiUrl}/posts/'`);
}

/**
 * Print environment variable setup help
 */
function printEnvVarHelp() {
    console.log('\n🐳 Docker Environment Variable Setup:');
    console.log('=====================================');
    console.log('Add these to your docker-compose.yml:');
    console.log('');
    console.log('environment:');
    console.log('  - GHOST_SITE_URL=https://yourblog.com');
    console.log('  - GHOST_ADMIN_API_KEY=your_id:your_secret_hex');
    console.log('  - GHOST_API_VERSION=v6.0');
    console.log('');
    console.log('Or create a .env file:');
    console.log('GHOST_SITE_URL=https://yourblog.com');
    console.log('GHOST_ADMIN_API_KEY=your_id:your_secret_hex');
    console.log('GHOST_API_VERSION=v6.0');
    console.log('');
    console.log('Or set them in your shell:');
    console.log('export GHOST_SITE_URL="https://yourblog.com"');
    console.log('export GHOST_ADMIN_API_KEY="your_id:your_secret_hex"');
}

/**
 * Print help message
 */
function printHelp() {
    console.log('Ghost Admin API JWT Token Generator - Node.js');
    console.log('==============================================');
    console.log('');
    console.log('Usage: node ghost_jwt.js [options]');
    console.log('');
    console.log('Options:');
    console.log('  --config, -c <file>     Configuration file path (fallback if env vars not set)');
    console.log('  --expires, -e <minutes> Token expiry in minutes (1-5, default: 5)');
    console.log('  --print-headers, -H     Print HTTP headers for curl commands');
    console.log('  --examples              Show usage examples');
    console.log('  --quiet, -q             Only output the token');
    console.log('  --env-help              Show environment variable setup help');
    console.log('  --help, -h              Show this help message');
    console.log('');
    console.log('Environment Variables (Docker-friendly):');
    console.log('  GHOST_SITE_URL          Ghost site URL');
    console.log('  GHOST_ADMIN_API_KEY     Admin API key (id:secret)');
    console.log('  GHOST_API_VERSION       API version (default: v6.0)');
    console.log('');
    console.log('The script will use environment variables if available,');
    console.log('otherwise fall back to the specified config file.');
}

/**
 * Parse command line arguments
 */
function parseArgs() {
    const args = {
        config: null,
        expires: 5,
        printHeaders: false,
        examples: false,
        quiet: false,
        envHelp: false,
        help: false
    };
    
    for (let i = 2; i < process.argv.length; i++) {
        const arg = process.argv[i];
        
        switch (arg) {
            case '--config':
            case '-c':
                args.config = process.argv[++i];
                break;
            case '--expires':
            case '-e':
                const expires = parseInt(process.argv[++i]);
                if (isNaN(expires) || expires < 1 || expires > 5) {
                    throw new Error('Expires must be between 1 and 5 minutes');
                }
                args.expires = expires;
                break;
            case '--print-headers':
            case '-H':
                args.printHeaders = true;
                break;
            case '--examples':
                args.examples = true;
                break;
            case '--quiet':
            case '-q':
                args.quiet = true;
                break;
            case '--env-help':
                args.envHelp = true;
                break;
            case '--help':
            case '-h':
                args.help = true;
                break;
            default:
                if (arg.startsWith('-')) {
                    throw new Error(`Unknown option: ${arg}`);
                }
        }
    }
    
    return args;
}

/**
 * Main function
 */
function main() {
    try {
        const args = parseArgs();
        
        if (args.help) {
            printHelp();
            return;
        }
        
        if (args.envHelp) {
            printEnvVarHelp();
            return;
        }
        
        // Load configuration (env vars or file)
        const config = loadConfig(args.config);
        
        // Generate token
        const token = generateJwtToken(config.admin_api_key, args.expires);
        
        if (args.quiet) {
            console.log(token);
        } else {
            console.log('Ghost Admin API JWT Token');
            console.log('=========================');
            console.log(`Site URL: ${config.site_url}`);
            console.log(`Expires in: ${args.expires} minutes`);
            console.log(`Token: ${token}`);
            
            if (args.printHeaders) {
                const apiVersion = config.api_version || 'v6.0';
                console.log('\nHTTP Headers:');
                console.log(`Authorization: Ghost ${token}`);
                console.log(`Accept-Version: ${apiVersion}`);
                console.log('Content-Type: application/json');
            }
            
            if (args.examples) {
                const apiVersion = config.api_version || 'v6.0';
                printUsageExamples(token, config.site_url, apiVersion);
            }
        }
        
    } catch (error) {
        console.error(`Error: ${error.message}`);
        
        // Provide helpful hints for common errors
        if (error.message.includes('not found')) {
            console.error('');
            console.error('💡 Try one of these solutions:');
            console.error('1. Set environment variables (recommended for Docker):');
            console.error('   export GHOST_SITE_URL="https://yourblog.com"');
            console.error('   export GHOST_ADMIN_API_KEY="your_id:your_secret"');
            console.error('');
            console.error('2. Create settings.json with your Ghost credentials');
            console.error('');
            console.error('3. Use --config to specify a different config file');
            console.error('');
            console.error('Run --env-help for Docker setup instructions');
        }
        
        process.exit(1);
    }
}

// Run if called directly
if (require.main === module) {
    main();
}

// Export for use as a module
module.exports = {
    generateJwtToken,
    loadConfig,
    loadConfigFromEnv,
    loadConfigFromFile
};
