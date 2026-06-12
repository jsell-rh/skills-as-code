---
title: Enterprise Notes
description: Enterprise controls that should surround the Markdown MVP.
---

The Markdown MVP is an adoption path, not a complete enterprise supply-chain system. These controls make the expected workflow reviewable.

## Pinning

Repository manifests should pin shared sources to immutable refs whenever possible.

```yaml
# /repos/payments-api/skills.yaml
skills:
  enterprise-sdlc:
    sources:
      - github.com/acme/skills/org/sdlc/SKILL.md@7f2c0d4
      - github.com/acme/skills/teams/payments/sdlc/SKILL.md@v0.8.0
      - .skills-src/sdlc/SKILL.md
    output: .claude/skills/sdlc/SKILL.md
    lock: skills.lock.yaml
```

Mutable refs such as `main` are acceptable for local exploration, but CI should require an immutable ref or a resolved lock file.

## Provenance Lock

The lock file records what was compiled. It is not an AIBOM; it is the minimum provenance needed to review and reproduce vendored output.

```yaml
# /repos/payments-api/skills.lock.yaml
compiler:
  name: skills
  version: 0.1.0
skills:
  enterprise-sdlc:
    output: .claude/skills/sdlc/SKILL.md
    outputDigest: sha256:9f3a...
    sources:
      - path: github.com/acme/skills/org/sdlc/SKILL.md
        ref: 7f2c0d4
        digest: sha256:1b2c...
      - path: github.com/acme/skills/teams/payments/sdlc/SKILL.md
        ref: v0.8.0
        digest: sha256:4d5e...
      - path: .skills-src/sdlc/SKILL.md
        digest: sha256:7a8b...
```

## Trust Boundaries

| Boundary | Trust Rule |
| --- | --- |
| Organization source | May define required sections and final sections. |
| Team source | May fill team-owned required sections. |
| Repository source | May fill repository-owned required sections and allowed local sections. |
| Compiler | Must be pinned in CI and produce deterministic output. |
| CI | Must regenerate, verify, and fail on drift. |
| Vendored output | Loaded by the agent; generated, reviewed, and committed. |
| Agent | Does not interpret contract annotations. |

## Update Workflow

Treat shared skill updates like dependency updates.

```bash
# /repos/payments-api
vim skills.yaml
skills compile --manifest skills.yaml
skills verify --manifest skills.yaml --check
git diff .claude/skills .skills/reports skills.lock.yaml
```

Review the generated skill diff and merge report before committing.

## Scope Boundary

This MVP intentionally avoids:

- Runtime skill resolution.
- Templates.
- Kustomize resources or patches.
- AIBOM/run BOM generation.
- Build-script orchestration.

Those can be layered later. The MVP should first prove that Markdown source, strict merge rules, and vendored output are adoptable.
