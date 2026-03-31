@AGENTS.md

## Startup Procedure

**When the user says "start it up", "spin it up", "get everything running", or similar — run through these steps automatically.**

**When the user says "pull in the latest", "catch me up", "what are we working on", or starts a new session — run the Catch Up procedure (Steps 1-2, then Step 6).**

### Step 1: Verify Git Identity
This project uses the `eir3ann` GitHub account. Confirm the local repo config matches:

Expected values:
- user.name: eir3ann
- user.email: chris@cmbro.io

If wrong, fix at repo level only (never touch --global):
- git config user.name "eir3ann"
- git config user.email "chris@cmbro.io"

If a push fails with a 403/authentication error, the Windows Credential Manager may have cached credentials from another project. Tell the user to:
1. Open Windows Credential Manager > Windows Credentials
2. Find git:https://github.com and remove it (or edit to match this project's account)
3. The next push will prompt for fresh credentials

### Step 2: Pull Latest Code
Pull from the default branch: master

### Step 3: Install Dependencies (if needed)
Only run if lock files changed or dependency folders are missing:
- `npm install`

### Step 4: Start Local Dev Server
`npm run dev`
Starts the Next.js development server with Turbopack.

### Step 5: Verify Everything Is Running
- Open http://localhost:3000
- Check terminal output for errors
- All services should show as running

### Step 6: Catch Up on Recent Work
This step is critical for session continuity across machines.

After pulling, read these to rebuild context on what's been worked on:
1. Recent git history: run git log --oneline -20 to scan for recent features/fixes
2. Tracking docs: read all files listed under any "Working Plans" or "Tracking Documents" section in this file
3. Recent changes: run git diff HEAD~5..HEAD --stat to see which files changed recently
4. Summarize what's in progress and ask the user what they'd like to pick up

This is necessary because each Claude Code session starts with zero memory of prior sessions. The only way to know what was worked on is to read the committed code, git history, and tracking documents.

### Port Reference
| Service | Port | Notes |
|---------|------|-------|
| Next.js Dev Server | 3000 | Default Next.js port (Turbopack) |

### Troubleshooting
- Port already in use: Another project may still be running. Kill it with `npx kill-port 3000`
- Build errors after pulling: Try deleting `.next/` and running `npm run build` again
- Dependency issues: Delete `node_modules/` and `package-lock.json`, then run `npm install`
