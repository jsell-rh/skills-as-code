---
title: Markdown Format
description: The Markdown-first contract format.
---

Source skills are `SKILL.md` files with ordinary YAML frontmatter.

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

<!-- Downstream source must fill this section before final output. -->

## Final Section <!-- @final -->

Downstream source cannot replace this section.
```

## Frontmatter

| Field | Rule |
| --- | --- |
| `name` | Required. All composed sources for one skill must use the same name. |
| `description` | Optional. Later sources may replace it. |
| Other fields | Allowed, but the compiler must define merge behavior before relying on them. |

## Sections

| Item | Rule |
| --- | --- |
| Boundary | A section starts at a `##` heading and ends before the next `##` heading. |
| Nested headings | `###` and deeper headings belong to the current `##` section. |
| Code fences | Headings inside fenced code blocks are ignored. |
| Identity | Section identity is normalized `##` heading text with annotations stripped. |
| Empty required section | Treated as unresolved unless completed by a later source. |
| Unknown section | Rejected unless listed in `allowedAppendSections`. |

## Normalization

```text
# /reference/heading-normalization.txt
strip contract annotations
trim leading and trailing whitespace
collapse repeated internal whitespace
compare exact normalized heading text
```

The compiler emits clean `SKILL.md`; annotations and placeholder comments do not reach the agent.
