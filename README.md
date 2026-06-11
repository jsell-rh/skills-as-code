# Skills as Code

Build agent skills like production supply-chain artifacts.

Skills as Code is a documentation and specification draft for enterprise-grade agent skill governance. It proposes a simple path:

```text
structured skill source -> Kustomize overlay -> policy verification -> compiled SKILL.md -> AIBOM
```

The pattern keeps compatibility with current flat skill formats while adding the missing enterprise layers: inheritance, review boundaries, policy gates, deterministic output, and run provenance.

## What Is Included

- Starlight documentation site in `src/content/docs/`.
- Minimal Kustomize-compatible example in `examples/minimal/`.
- Base SDLC skill, payments overlay, policy resource, compiled skill sample, and AIBOM sample.

## Commands

```bash
pnpm install --ignore-scripts
pnpm run build
kustomize build examples/minimal/overlays/payments
```

## Development

```bash
pnpm run dev
```

## Project Status

This is a rigorous concept draft, not a finished compiler or standard. The `skillc` commands shown in the docs describe the intended reference CLI contract.
