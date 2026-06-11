---
title: AIBOM
description: Required fields for an AI Bill of Materials for agent runs.
---

An AIBOM is an AI Bill of Materials for an agent run.

It records which skill artifacts were resolved, which were activated, which policies checked them, and which runtime produced the result.

## Minimum Fields

```jsonc
// /runs/PAY-1842/aibom.json
{
  "schema": "https://skills.agent.dev/schemas/aibom/v1alpha1",
  "subject": {},
  "agent": {},
  "resolvedSkills": [],
  "activatedSkills": [],
  "checks": []
}
```

## `subject`

The work item or software context affected by the agent run.

Recommended fields:

- `repository`
- `revision`
- `taskId`
- `workspace`

## `agent`

The runtime and model context.

Recommended fields:

- `runtime`
- `runtimeVersion`
- `model`
- `invocationId`
- `startedAt`
- `finishedAt`

## `resolvedSkills`

All skills available to the agent after resolution.

Required fields:

- `name`
- `source`
- `ref`
- `digest`
- `relationship`

Relationships should distinguish at least:

- `base`
- `overlay`
- `component`
- `compiled`

## `activatedSkills`

Skills that were actually loaded or invoked during the run.

Required fields:

- `name`
- `digest`
- `activatedAt`
- `steps`

## `checks`

Policy, schema, signature, and verification results.

Required fields:

- `name`
- `result`
- `artifact`

## Open Questions

The initial AIBOM should be deliberately conservative. It should not include full prompts, secrets, private file contents, or complete command output by default.

Enterprise deployments should decide separately how much run artifact detail belongs in the AIBOM itself versus in referenced, access-controlled stores.
