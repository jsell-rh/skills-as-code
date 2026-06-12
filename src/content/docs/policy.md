---
title: Rules
description: Policy semantics for Markdown-first skill contracts.
---

The agent reads Markdown. The compiler enforces the contract before Markdown reaches the agent.

## Failure First

Two failures should be obvious to every adopter:

```text
# /repos/payments-api/.skills/errors/missing-required.txt
error: enterprise-sdlc missing required section "Jira Project Context"
fix: add "## Jira Project Context" in a downstream source
```

```text
# /repos/payments-api/.skills/errors/final-override.txt
error: enterprise-sdlc cannot replace final section "Security Review"
owner: /org/skills/sdlc/SKILL.md
conflict: /repos/payments-api/.skills-src/sdlc/SKILL.md
```

## Annotations

The format uses two section annotations:

```md
# /org/skills/sdlc/SKILL.md
## Jira Project Context <!-- @required -->

<!-- Team must declare the Jira project key. -->

## Security Review <!-- @final -->

Review authentication, authorization, injection, secret exposure, and sensitive data handling risks.
```

## Merge Rules

| Case | Rule |
| --- | --- |
| Required section | Must be completed by a later source before output is emitted. |
| Final section | Cannot be replaced by a later source. |
| Normal section | May be replaced by a later source with the same normalized heading. |
| Unknown section | Rejected by default unless explicitly allowed by the manifest. |
| Duplicate heading | Rejected within a single source. |
| Ordering | Base order is preserved; completed required sections occupy their original base position. |
| Frontmatter | Later sources may override `description`; `name` must match. |
| Comments | Contract comments are stripped from vendored output. |

## Heading Identity

Section identity is normalized `##` heading text.

The compiler should:

- Strip `@required` and `@final` annotations before comparing headings.
- Trim leading and trailing whitespace.
- Collapse repeated internal whitespace.
- Ignore headings inside fenced code blocks.
- Fail on duplicate normalized headings in the same source.

## Unknown Sections

Unknown sections are rejected by default. This is stricter than appending everything downstream provides, but it prevents accidental policy bypass through new prose that appears late in the skill.

```yaml
# /repos/payments-api/skills.yaml
skills:
  enterprise-sdlc:
    allowedAppendSections:
      - Rollout Notes
```

## Clean Output

Annotations are compile-time metadata. The vendored skill should not contain `@required`, `@final`, or instructional placeholder comments.

```md
# /repos/payments-api/.claude/skills/sdlc/SKILL.md
## Security Review

Review authentication, authorization, injection, secret exposure, and sensitive data handling risks.
```

## Merge Report

Every compile should produce a merge report for review and CI.

```json
# /repos/payments-api/.skills/reports/enterprise-sdlc.json
{
  "skill": "enterprise-sdlc",
  "result": "pass",
  "sections": [
    { "heading": "Jira Project Context", "action": "filled-required", "source": "teams/payments/skills/sdlc/SKILL.md" },
    { "heading": "Security Review", "action": "kept-final", "source": "org/skills/sdlc/SKILL.md" }
  ]
}
```
