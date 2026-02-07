# CLAUDE.md

This file provides guidance for AI assistants (and developers) working in this repository.

## Repository Overview

- **Repository**: Claude-code-test
- **Owner**: hisashikato-eng
- **Status**: New repository — project scaffolding is being established.

## Project Structure

This is a newly initialized repository. As the project grows, document the structure here:

```
Claude-code-test/
├── CLAUDE.md          # AI assistant guidance (this file)
└── ...                # Project files to be added
```

## Development Workflow

### Git Conventions

- **Default branch**: To be established (first push will create it)
- **Branch naming**: Feature branches should use descriptive names (e.g., `feature/add-auth`, `fix/login-bug`)
- **Commit messages**: Use clear, imperative-mood messages (e.g., "Add user authentication", "Fix null pointer in login flow")
- Keep commits focused — one logical change per commit

### Getting Started

```bash
# Clone the repository
git clone <repository-url>
cd Claude-code-test

# (Add setup instructions here as the project evolves)
```

## Build & Test Commands

<!-- Update these sections as tooling is added to the project -->

- **Install dependencies**: _TBD — add when package manager is configured_
- **Build**: _TBD_
- **Run tests**: _TBD_
- **Lint**: _TBD_
- **Format**: _TBD_

## Code Style & Conventions

<!-- Document coding standards as they are established -->

- Follow consistent formatting (configure a formatter like Prettier, Black, rustfmt, etc.)
- Use a linter appropriate for the chosen language
- Write tests for new functionality
- Keep functions small and focused

## Key Patterns & Architecture

<!-- Document architectural decisions and patterns as they emerge -->

_To be documented as the project takes shape._

## AI Assistant Guidelines

When working in this repository:

1. **Read before writing** — Always read existing files before modifying them.
2. **Stay focused** — Only make changes that are directly requested. Avoid unnecessary refactoring.
3. **Run checks** — After making changes, run the project's test and lint commands (once configured).
4. **Update this file** — When adding significant tooling, dependencies, or architectural patterns, update CLAUDE.md to reflect the current state.
5. **Security** — Never commit secrets, credentials, or .env files. Check for sensitive data before staging.
6. **Minimal changes** — Prefer small, targeted edits over large rewrites.

## Dependencies

<!-- List key dependencies and their purposes as they are added -->

_No dependencies configured yet._

## Environment & Configuration

<!-- Document environment variables, config files, and setup requirements -->

_No environment configuration yet._
