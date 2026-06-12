---
title: Markdown Contract
description: The Markdown-first contract shape used by the MVP example.
---

The MVP source format is `SKILL.md`.

```md
# /org/skills/sdlc/SKILL.md
---
name: enterprise-sdlc
description: Enterprise SDLC skill for Jira-driven code changes.
---

# Enterprise SDLC

## Normal Section

Normal prose may be inherited or replaced by a downstream section with the same normalized heading.

## Required Section <!-- @required -->

<!-- Downstream source must supply this section before final output. -->

## Final Section <!-- @final -->

Downstream source cannot replace this section.
```

## Notes

- The source file is valid Markdown with ordinary YAML frontmatter.
- Section identity is normalized `##` heading text with annotations stripped.
- Required sections create abstract-base behavior.
- Final sections protect organization-owned prose.
- The compiler emits clean `SKILL.md`.
