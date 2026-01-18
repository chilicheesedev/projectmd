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

## Getting Started

PROJECT.md is just a markdown file with a specific structure. Choose how you want to create it:

### Option 1: Copy the template

Grab the [template from GitHub](https://github.com/chilicheesedev/projectmd/blob/main/templates/PROJECT.md) and copy it into your project root.

### Option 2: Download via curl

```bash
curl -sO https://raw.githubusercontent.com/chilicheesedev/projectmd/main/templates/PROJECT.md
```

### Option 3: Use the CLI (Node.js)

```bash
npx project-md init
```

The CLI also provides helper commands for updating:

```bash
npx project-md log "Implemented auth flow"
npx project-md status blocked
npx project-md next "Fix login bug"
npx project-md deviate  # interactive
npx project-md sync     # updates git info
```

### Option 4: Create it manually

Create `PROJECT.md` in your repo root and use the structure below.

---

## Template Structure

```markdown
# Project: {name}

> {One-line description}

---

## 📍 Current Reality

> **This section is the truth. If it conflicts with anything else, this wins.**

| Field | Value |
|-------|-------|
| **Status** | 🟡 In Progress |
| **Active Branch** | `main` |
| **Active Directory** | `/src/` |
| **Last Session** | 2024-01-14 |
| **Next Step** | Implement refresh tokens |
| **Blocked By** | Nothing |

---

## 🚫 Boundaries

> **AI must respect these. No exceptions.**

### Do Not Modify
- `/app-v1/**` – Deprecated, all work happens in /app-v2/
- `/migrations/**` – Only modify via migration commands

### Do Not Suggest
- **Prisma** – We use Supabase client directly
- **CSS Modules** – Tailwind only

---

## ⚠️ Deviations from Original Plan

> **We consciously changed direction. AI must respect these decisions.**

| Date | Original Plan | What We Did Instead | Why |
|------|---------------|---------------------|-----|
| 01-14 | localStorage for tokens | HTTP-only cookies | Security best practice |
| 01-10 | Prisma ORM | Supabase client | Less complexity |

---

## 📋 Roadmap

### Phase 1: Auth ← CURRENT
- [x] User model
- [ ] Login flow ← YOU ARE HERE
- [ ] Password reset

### Phase 2: Core Features
- [ ] Dashboard
- [ ] Settings

---

## 📓 Session Log

> **Most recent first.**

### 2024-01-14
- Implemented login page
- Decided: HTTP-only cookies instead of localStorage
- **Next:** Refresh token rotation

### 2024-01-12
- Set up Supabase, created schema
- **Next:** Build login UI

---

## 📝 Notes

- Test user: test@example.com / password123
- Staging deploys on push to `develop`
```

---

## Using with AI Assistants

### Cursor

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

### Claude / ChatGPT / Other

Start your session with:

```
Here is my PROJECT.md:

[paste content]

Please respect Boundaries and Deviations. Current Reality is the source of truth.
```

---

## Updating PROJECT.md

### With the CLI (if using Node.js)

```bash
npx project-md log "Implemented feature X"
npx project-md status in-progress
npx project-md next "Build feature Y"
npx project-md deviate
npx project-md sync
```

### With your AI assistant

Ask Cursor/Claude to update it for you:

**At the end of a session:**
```
Update PROJECT.md:
1. Add a session log entry for today
2. Update "Next Step" with what to do next
3. Update "Status" if it changed
4. Add any new deviations we made
```

**Quick updates:**
```
Add to PROJECT.md session log: "Implemented auth, fixed session bug"
```

```
Add deviation to PROJECT.md: Planned Redux, using Zustand instead – simpler for our needs
```

```
Update PROJECT.md status to blocked – waiting for API credentials
```

### Manually

It's just markdown. Open the file and edit it.

---

## Why PROJECT.md?

### vs .cursorrules

`.cursorrules` is for AI instructions. PROJECT.md captures project state – which branch is active, what deviated from plan, what happened last session. It's for humans *and* AI.

### vs README

README explains what the project *is*. PROJECT.md captures where you *are* – current state, active scope, deviations, history.

### vs Memory tools

Memory tools (mcp-memory-service, OpenMemory) remember facts: "user prefers Tailwind." PROJECT.md captures structure: "V2 is active, V1 is deprecated, we skipped Prisma intentionally."

---

## Best Practices

**Update at natural breakpoints**
- End of session
- After a significant decision
- When switching context

**Keep Session Log brief**
```markdown
### 2024-01-14
- Built login UI
- Decided: cookies > localStorage
- Next: refresh tokens
```

**Be explicit about Boundaries**
```markdown
### Do Not Modify
- `/v1/**` – Legacy, do not touch
```

**Deviations are decisions, not failures**
```markdown
| Planned: Prisma | Actual: Supabase | Why: Less complexity |
```

---

## Roadmap

- [x] v0.1 – Template
- [x] v0.2 – CLI commands (log, status, next, deviate, sync)
- [ ] v0.3 – `open <service>` command
- [ ] v0.4 – Git hooks for auto-sync
- [ ] Future – **RepoBrain**: Fully automated project state tracking

---

## The Vision: RepoBrain

PROJECT.md is manual. You maintain it (with AI help).

The real fix is full automation: a background daemon that watches git and filesystem, auto-generates the single source of truth, and enforces boundaries mechanically.

I'm calling it **RepoBrain**. Star this repo to follow the journey.

---

## Contributing

Found a bug? Have an idea? [Open an issue](https://github.com/chilicheesedev/projectmd/issues).

## License

MIT

---

**Built for developers who use AI to code.**

[GitHub](https://github.com/chilicheesedev/projectmd) · [X](https://X.com/chilicheesedev)