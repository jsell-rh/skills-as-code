# Skills as Code

Markdown-first contracts for prose-based agent skills.

Skills as Code is a documentation and specification draft for managing today's `SKILL.md` prose across organization, team, and repository levels. It proposes a low-friction path:

```text
# /README.md
base SKILL.md -> team SKILL.md -> repository SKILL.md -> vendored SKILL.md
```

The pattern keeps compatibility with current flat skill formats while adding required sections, final organization-owned sections, clean vendored output, and deterministic review.

## What Is Included

- Starlight documentation site in `src/content/docs/`.
- Markdown-first example in `examples/markdown/`.
- Organization SDLC skill, payments team skill, repository skill, manifest, and vendored output sample.

## Commands

```bash
# /scripts/verify-local.sh
pnpm install --ignore-scripts
pnpm run build
```

## Development

```bash
# /scripts/dev.sh
pnpm run dev
```

## Project Status

This is a concept draft for a Markdown-first skill composition standard. The docs define the workflow for resolving Markdown sources, verifying contracts, and emitting clean `SKILL.md`.
