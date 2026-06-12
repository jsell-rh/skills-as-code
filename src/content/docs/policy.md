---
title: Policy Model
description: The minimum policy semantics for Markdown-first skill contracts.
---

The contract is the enforcement boundary. The agent reads Markdown; the compiler enforces the contract before Markdown reaches the agent.

## Annotations

The MVP uses two section annotations:

```md
# /org/skills/sdlc/SKILL.md
## Jira Project Context <!-- @required -->

<!-- Team must declare the Jira project key. -->

## Security Review <!-- @final -->

Review authentication, authorization, injection, secret exposure, and sensitive data handling risks.
```

## Required Sections

`<!-- @required -->` marks a section that must be supplied downstream before final output.

Required sections are how an organization creates abstract-base behavior without sentinel values or template syntax. The base skill remains readable Markdown, but the compiler refuses to emit final output until each required section has concrete prose.

## Final Sections

`<!-- @final -->` marks organization-owned prose that downstream sources cannot replace.

The security review block is final because teams and repositories must inherit it unchanged. If a downstream source includes `## Security Review`, verification fails.

## Heading Identity

The MVP uses normalized heading text as section identity. This keeps authoring friction low: no block IDs, no schema file, no path syntax.

The compiler should be strict:

- Strip annotations before comparing headings.
- Fail on duplicate headings in a single source.
- Require exact heading matches for required and final sections.
- Report unmatched downstream headings as appended sections.
- Emit a merge report showing every section kept, replaced, supplied, appended, or rejected.

## Clean Output

Annotations are compile-time metadata. The vendored skill should not contain `@required`, `@final`, or instructional placeholder comments.

```md
# /repos/payments-api/.claude/skills/sdlc/SKILL.md
## Security Review

Review authentication, authorization, injection, secret exposure, and sensitive data handling risks.
```
