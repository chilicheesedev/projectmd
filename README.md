# PROJECT.md

**So I remember. So my AI remembers.**

A single source of truth for every project. Works with Cursor, Claude, Copilot, and your own brain.

---

## The Problem

You come back to a project after 2 weeks. You forgot:
- Which folder is actually active (V1? V2?)
- What you decided to do differently from the original plan
- What the next step was supposed to be
- What you told the AI not to touch

Your AI assistant doesn't know either. Worse: it reads your PRD and "fixes" your code back to spec, undoing intentional decisions.

## The Solution

One file. `PROJECT.md`. Lives in your repo root.

Not what you *planned*. What *IS*.

- **Current Reality** – The truth about where you are right now
- **Boundaries** – What AI must not touch or suggest
- **Deviations** – Where you intentionally changed direction (so AI doesn't "fix" it back)
- **Session Log** – What happened, for you and your future self

---

## Install

```bash
npx project-md init
```

Or download the template directly:

```bash
curl -sO https://raw.githubusercontent.com/chilicheesedev/projectmd/main/templates/PROJECT.md
```

---

## Commands

### Initialize
```bash
npx project-md init
```

### Add session log entry
```bash
npx project-md log "Implemented auth, decided to use cookies instead of localStorage"
```

### Update status
```bash
npx project-md status active       # 🟢 Active
npx project-md status in-progress  # 🟡 In Progress
npx project-md status blocked      # 🔴 Blocked
npx project-md status paused       # ⚪ Paused
```

### Update next step
```bash
npx project-md next "Implement password reset flow"
```

### Add a deviation
```bash
npx project-md deviate
# Interactive: What was planned? What did you do? Why?
```

### Sync git info
```bash
npx project-md sync
# Updates branch name and last session date
```

---

## Template Structure

```markdown
## 📍 Current Reality
> This section is the truth. If it conflicts with anything else, this wins.

| Status | 🟡 In Progress |
| Active Branch | `feature/auth` |
| Active Directory | `/src/app-v2/` |
| Next Step | Implement refresh tokens |

## 🚫 Boundaries
### Do Not Modify
- `/app-v1/**` – Deprecated, all work in /app-v2/

### Do Not Suggest  
- **Prisma** – We use Supabase client directly

## ⚠️ Deviations from Original Plan
| Date | Planned | Actual | Why |
|------|---------|--------|-----|
| 01-14 | localStorage | HTTP-only cookies | Security |

## 📓 Session Log
### 2024-01-14
- Implemented login page
- Decided: cookies over localStorage
- Next: refresh token rotation
```

---

## Using with AI Assistants

### Cursor Setup

Add to `.cursorrules` or `.cursor/rules/project.mdc`:

```
Always read PROJECT.md at the start of every session.

Hierarchy of truth:
1. Boundaries – Never violate
2. Current Reality – This is the truth  
3. Deviations – Plan changed, respect the new direction
4. Roadmap – What's planned (check Deviations first)

Before making changes:
- Check "Do Not Modify" paths
- Check "Do Not Suggest" list
- Verify you're in the Active Directory

After significant work, offer to update PROJECT.md.
```

### Claude / ChatGPT

Start your session with:

```
Here is my PROJECT.md:

[paste content]

Please respect Boundaries and Deviations. Current Reality is the source of truth.
```

---

## Updating PROJECT.md with AI

The easiest way to keep PROJECT.md current is to let your AI assistant help.

### At the start of a session

```
Read PROJECT.md and confirm you understand the current state, 
boundaries, and deviations.
```

### During work (when you make a decision)

```
Add a deviation to PROJECT.md:
- Planned: [what the PRD said]
- Actual: [what we're doing instead]  
- Why: [reason]
```

### At the end of a session

```
Update PROJECT.md:
1. Add a session log entry for today
2. Update "Next Step" with what to do next
3. Update "Status" if it changed
4. Add any new deviations we made
```

### Quick update prompts

**Log what you did:**
```
Add to PROJECT.md session log: "Implemented user authentication with Supabase, 
added protected routes, fixed session persistence bug"
```

**Change status:**
```
Update PROJECT.md status to "blocked" – waiting for API credentials
```

**Add boundary:**
```
Add to PROJECT.md boundaries: Do not modify /legacy/** – scheduled for removal in v3
```

**Record a decision:**
```
Add deviation to PROJECT.md: We planned to use Redux but decided on Zustand 
because it's simpler and we don't need time-travel debugging
```

---

## Why Not Just...

### ...use .cursorrules?

`.cursorrules` is for AI instructions. It doesn't capture project state – which branch is active, what deviated from plan, what happened last session.

PROJECT.md is for both humans and AI. After 2 months away, you open one file and know where you are.

### ...use README?

README explains what the project *is*. PROJECT.md captures where you *are* – current state, active scope, intentional deviations, session history.

### ...use a memory tool?

Memory tools (mcp-memory-service, OpenMemory) remember facts: "user prefers Tailwind."

They don't capture project structure: "V2 is active, V1 is deprecated, we skipped Prisma intentionally."

PROJECT.md is structural awareness, not semantic memory.

---

## Best Practices

### Update at natural breakpoints
- End of coding session
- After making a significant decision
- When switching focus to a different part of the project

### Keep Session Log brief
Not a diary. Just enough to job your memory:
```markdown
### 2024-01-14
- Built login UI
- Decided: cookies > localStorage
- Next: refresh tokens
```

### Be explicit about Boundaries
Don't assume AI will figure it out. Tell it directly:
```markdown
### Do Not Modify
- `/v1/**` – Legacy, do not touch
- `/migrations/**` – Only via migration commands
```

### Deviations are not failures
They're documented decisions. Write them proudly:
```markdown
| Planned: Prisma | Actual: Supabase client | Why: Less complexity, built-in auth |
```

---

## Roadmap

- [x] v0.1 – Template + `init` command
- [x] v0.2 – `log`, `status`, `next`, `deviate`, `sync` commands
- [ ] v0.3 – `open <service>` to launch dashboards
- [ ] v0.4 – Git hooks for auto-sync on branch switch
- [ ] Future – RepoBrain: fully automated project state tracking

---

## The Vision: RepoBrain

PROJECT.md is manual. You maintain it (with AI help).

The real fix is full automation: a background daemon that watches git and filesystem, auto-generates the single source of truth, and enforces boundaries mechanically.

I'm calling it **RepoBrain**. If you're interested, star this repo and follow the journey.

---

## Contributing

Found a bug? Have an idea? Open an issue or PR.

---

## License

MIT

---

**Built for developers who use AI to code.**

[GitHub](https://github.com/chilicheesedev/projectmd) · [Twitter](https://twitter.com/chilicheesedev)