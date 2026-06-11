---
title: System Model
description: The render, verify, compile, and attest model for prose-based skills.
---

Skills as Code separates **managed source** from **runtime format**.

Teams manage structured Markdown source. CI renders and verifies it. Agents receive ordinary `SKILL.md`. Auditors receive provenance.

```text
# /README.md
source graph
  -> render
  -> verify
  -> compile
  -> activate
  -> attest
```

## Source Graph

The source graph is the complete set of bases, overlays, patches, policy resources, and references used to produce a skill.

The graph must be discoverable before execution. That requirement prevents unmanaged skill drift.

Minimum graph records:

- Resource identity.
- Source location.
- Resolved ref.
- Digest.
- Relationship to other resources.
- Policy bundle used for verification.

## Render

Rendering applies Kustomize semantics to the source graph.

The rendered object is still managed Markdown source. It is not yet the `SKILL.md` file an agent loads.

Verification must inspect rendered output, not only individual patches, because multiple valid patches can compose into an invalid final skill.

## Verify

Verification is structural.

The verifier checks rendered Markdown source against schema, contract, and enterprise policy. It should reject output that violates locked blocks, approved patch paths, command patterns, remote-ref requirements, or AIBOM requirements.

Verification is not a model prompt. It is a deterministic gate.

## Compile

Compilation turns verified Markdown source into an agent-loadable skill directory.

The compiled output can be a normal skill:

```text
# /build/skills/payments-sdlc/tree.txt
payments-enterprise-sdlc/
  SKILL.md
  references/
  scripts/
```

Compilation should be deterministic. The same source graph, compiler version, and policy bundle should produce the same digest.

## Activate

Activation is runtime use.

The runtime must distinguish:

- **Resolved skills:** available after resolution.
- **Compiled skills:** concrete `SKILL.md` artifacts made available to the agent.
- **Activated skills:** skills loaded or invoked during the run.

This distinction matters for audit. Availability, installation, and use are different claims.

## Attest

Attestation produces an AIBOM.

The AIBOM ties a run to the skills that influenced it. It should include the source graph, rendered source digest, compiled skill digest, verification results, activation events, and runtime identity.

The AIBOM is not a chat transcript. It is the supply-chain record for agentic work.

## Non-Goals

The system model does not attempt to define a new skill execution language. It does not assume routines, phases, or runtime step execution.

Runtime sandboxing, command approvals, code review, and human accountability remain required controls.
