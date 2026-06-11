---
title: Resource Shape
description: The source shape used by the three-level example.
---

This is a source shape for managing Markdown skills. It is not a new runtime format.

```yaml
# /org/skills/sdlc/skill.yaml
apiVersion: skills.agent.dev/v1alpha1
kind: Skill
metadata:
  name: string
spec:
  description: string
  target: SKILL.md
  inputs:
    key:
      value: string
      description: string
  contract:
    requiredOverrides:
      - string
    requiredBlocks:
      - string
    lockedBlocks:
      - string
    allowedPatchPaths:
      - string
  blocks:
    block-id:
      order: number
      markdown: string
```

## Notes

- `inputs` are values the compiler can render into Markdown.
- `blocks` are addressable Markdown sections.
- `order` controls output order.
- `contract` controls what downstream overlays must provide and cannot change.
- The compiler emits ordinary `SKILL.md`.
