# PROJECT.md

**So I remember. So my AI remembers.**

A simple context file for every project. Works with Cursor, Claude, Copilot, and your own brain.

---

## The Problem

You come back to a project after 2 weeks. You forgot:
- How to run it
- What port it uses
- Where the env variables come from
- What you were working on
- What's broken

Your AI assistant doesn't know either. Every session starts from zero.

## The Solution

One file. `PROJECT.md`. Lives in your repo root.

Contains everything you (and your AI) need to get back up to speed in 30 seconds:
- Tech stack & key files
- How to install and run
- Environment variables
- Current status & what's next
- Known issues
- Links to external services

---

## Install

### Option 1: npx (if you have Node.js)

```bash
npx project-md init
```

### Option 2: curl (any system)

```bash
curl -sO https://raw.githubusercontent.com/chilicheesedev/project-md/main/templates/PROJECT.md
```

### Option 3: Manual

Copy the [template](./templates/PROJECT.md) into your project root.

---

## Usage

1. Run `npx project-md init` or download the template
2. Open `PROJECT.md` and fill in the blanks
3. Update it when you end a coding session
4. Next time you (or your AI) open the project → instant context

### Pro tip: Tell your AI about it

Start your Cursor/Claude session with:

> "Read PROJECT.md first"

Or add to your Cursor rules:

```
Always read PROJECT.md at the start of a session.
```

---

## What's in the template?

```
PROJECT.md
├── AI Context
│   ├── Summary
│   ├── Tech Stack
│   ├── Key Files
│   ├── Architecture Decisions
│   └── Do Not Suggest (prevents bad AI advice)
├── Quick Start
│   ├── Prerequisites
│   ├── Install & Run
│   ├── Environment Variables
│   └── URLs
├── Current Status
│   ├── State (🟢 Ready / 🟡 In Progress / 🔴 Blocked)
│   ├── Last Session notes
│   ├── Current Branch
│   └── Recent Changes
├── Known Issues
├── External Services (with dashboard links)
├── Commands Reference
└── Notes
```

---

## Works with any stack

PROJECT.md is just a markdown file. It works with:

- JavaScript / TypeScript (Node, Next.js, Vite, etc.)
- Python (Django, FastAPI, Flask)
- Rust (Actix, Axum)
- Go (Gin, Echo)
- PHP, Ruby, or anything else

No dependencies. No lock-in. Just markdown.

---

## Roadmap

- [x] v0.1 – Basic template
- [ ] v0.2 – Auto-detection (git info, env vars, framework)
- [ ] v0.3 – `project-md update` command
- [ ] v0.4 – `project-md log` for quick session notes

---

## Why not just use README?

README is for others. PROJECT.md is for you.

README explains what the project is. PROJECT.md captures where you left off, what's broken, and how to pick it back up.

---

## Contributing

Found a bug? Have an idea? Open an issue or PR.

---

## License

MIT

---

**Built for developers who use AI to code.**