---
title: Resource Shape
description: Minimal illustrative source envelope for prose-based skills.
---

This page documents the example resource shape used in this site. It is not a finalized standard.

The stable claim is the build model:

```text
# /README.md
Markdown source -> Kustomize render -> policy verify -> compiled SKILL.md -> AIBOM
```

The example uses `kind: Skill` with a YAML envelope around Markdown blocks. This gives Kustomize and policy tools something structured to patch and verify while preserving `SKILL.md` as the runtime artifact.

```yaml
# /skills/sdlc/base/skill.yaml
apiVersion: skills.agent.dev/v1alpha1
kind: Skill
metadata:
  name: string
  labels:
    skills.agent.dev/owner: string
spec:
  description: string
  target: SKILL.md
  contract:
    lockedBlocks:
      - string
    allowedPatchPaths:
      - string
    allowedCommandPatterns:
      - string
  blocks:
    - id: string
      markdown: string
```

## Field Notes

### `metadata.name`

The source resource name. The compiler can use this as the generated skill name.

### `spec.description`

The generated skill description.

### `spec.target`

The output file, normally `SKILL.md`.

### `spec.contract.lockedBlocks`

Markdown block identifiers that overlays cannot remove or change. This is the single source of truth for block immutability.

### `spec.contract.allowedPatchPaths`

JSON Pointer paths that overlays may modify.

This should be explicit. Do not treat absent paths as implicitly patchable.

### `spec.contract.allowedCommandPatterns`

Command patterns allowed in rendered Markdown.

This is intentionally coarse in the minimal example. A real verifier should define exactly how it extracts commands from prose, inline code, fenced code blocks, and generated scripts.

### `spec.blocks`

Ordered Markdown blocks that are concatenated during compilation.

Blocks are an authoring and policy convenience. They are not a runtime execution model.

## Derived Fields

Compilers should derive:

- Canonical source digest.
- Rendered source digest.
- Compiled skill digest.
- Source graph.
- Policy result set.
- AIBOM-ready component records.
