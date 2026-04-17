Manually trigger the session wrap-up: summarize current `posts/` changes into the relevant `discussion.md` file(s) and commit.

This runs the same logic that fires automatically on SessionEnd. Use it when:
- You want to commit a post snapshot mid-session without ending Claude
- SessionEnd didn't fire (some environments skip it)
- You want to force a wrap even though the state-file guard would otherwise skip it

Run:

```bash
rm -f .claude/state/last-wrap-* 2>/dev/null
bash .claude/hooks/session-wrap.sh
```

After running, report what was committed (check `git log -1`) or why nothing happened (check `.claude/state/session-wrap.log`).

If the user wants to skip the auto-commit this time, use `CLAUDE_HOOK_SESSION_SKIP_WRAP=1 bash .claude/hooks/session-wrap.sh` instead — it will exit immediately.
