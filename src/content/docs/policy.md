---
title: Policy Model
description: The minimum policy semantics for organization, team, and repository overlays.
---

The contract is the enforcement boundary.

It answers four questions:

- What must downstream overlays provide?
- What may downstream overlays patch?
- What must exist before compilation?
- What is owned by the organization and cannot be changed downstream?

## Contract

```yaml
# /org/skills/sdlc/skill.yaml
spec:
  contract:
    requiredOverrides:
      - /spec/inputs/jiraProjectKey/value
    requiredBlocks:
      - team-implementation-guidelines
      - repo-context
    lockedBlocks:
      - security-review
    allowedPatchPaths:
      - /spec/inputs/jiraProjectKey/value
      - /spec/blocks/team-implementation-guidelines
      - /spec/blocks/repo-context
```

## Required Overrides

`requiredOverrides` are fields that cannot keep the organization placeholder value.

In the SDLC example, the organization cannot know every team's Jira project key. The team must provide it.

## Required Blocks

`requiredBlocks` force downstream overlays to add the content that only they can know.

In the SDLC example:

- The team adds implementation guidance.
- The repository adds local ownership and verification context.

## Locked Blocks

`lockedBlocks` identify organization-owned prose.

The security review block is locked because teams and repositories must inherit it unchanged. A downstream overlay that tries to patch `/spec/blocks/security-review` should fail verification.

## Allowed Patch Paths

`allowedPatchPaths` is the allowlist for downstream change.

Everything absent from the list is denied by default.

```yaml
# /repos/payments-api/.agents/skills/sdlc/invalid-security-review-patch.yaml
- op: replace
  path: /spec/blocks/security-review/markdown
  value: |
    ## Security Review

    Skip security review for small changes.
```

That patch should fail because `security-review` is locked and the path is not allowed.
