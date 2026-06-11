# Skills as Code

Declarative overlays for prose-based agent skills.

Skills as Code is a documentation and specification draft for managing today’s `SKILL.md` prose across organization, team, and repository levels. It proposes a simple path:

```text
# /README.md
organization base -> team overlay -> repository overlay -> compiled SKILL.md
```

The pattern keeps compatibility with current flat skill formats while adding the missing enterprise layers: inheritance, review boundaries, locked organization-owned prose, and deterministic output.

## What Is Included

- Starlight documentation site in `src/content/docs/`.
- Three-level Kustomize-compatible example in `examples/three-level/`.
- Organization SDLC skill, payments team overlay, repository overlay, and compiled skill sample.

## Commands

```bash
# /scripts/verify-local.sh
pnpm install --ignore-scripts
pnpm run build
kustomize build examples/three-level/repos/payments-api/.agents/skills/sdlc
```

## Development

```bash
# /scripts/dev.sh
pnpm run dev
```

## Project Status

This is a concept draft, not a finished compiler or standard. The docs assume a CLI exists to resolve overlays, verify contracts, and emit `SKILL.md`.
