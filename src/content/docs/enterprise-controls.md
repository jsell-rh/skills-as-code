---
title: Enterprise Controls
description: Ownership, review, and enforcement controls for production skill use.
---

The enterprise value of Skills as Code is controlled delegation.

Platform teams define shared skill prose. Product teams adapt approved blocks. Policy decides which adaptations are legal.

## Ownership Model

### Platform-Owned Bases

Platform, developer-experience, or security engineering owns base skill source.

Base skills define:

- Required Markdown blocks.
- Locked Markdown blocks.
- Allowed patch paths.
- Approved command patterns.
- Denied command patterns.
- Source ownership.
- Review ownership.

### Team-Owned Overlays

Product teams own overlays.

Good overlays localize prose:

- Repository-specific test command.
- Service-specific references.
- Additional stricter guidance.
- Team-specific review checklist items.

Bad overlays weaken the skill:

- Remove security review prose.
- Remove run-record or AIBOM language.
- Add broad shell or network guidance outside approved policy.
- Replace precise review requirements with vague instruction text.
- Hide ancestry by copying a base skill into a local folder.

## Policy Gate

Policy is evaluated after render and before compile.

The verifier should fail the build when:

- A patch touches an undeclared path.
- A locked block is missing or changed.
- Rendered Markdown contains a denied command.
- Rendered Markdown contains a command outside approved patterns.
- A protected environment uses a mutable remote ref.
- The compiled artifact cannot emit AIBOM metadata.

## CI Gate

A minimal CI gate should run in every repository that publishes or consumes controlled skills:

```bash
# /scripts/build-skill.sh
kustomize build skills/sdlc/payments > build/rendered/payments-sdlc.yaml
skillc verify --policy policies/enterprise-sdlc.yaml build/rendered/payments-sdlc.yaml
skillc compile --out build/skills build/rendered/payments-sdlc.yaml
skillc aibom preview --out runs/PAY-1842/aibom.json build/rendered/payments-sdlc.yaml
```

The merge fails if verification fails.

## Release Gate

Production installation should prefer compiled, signed skill directories over raw source checkout.

The runtime or installer should verify:

- Compiled skill digest.
- Source graph digest.
- Signature.
- Compiler identity.
- Policy bundle identity.
- AIBOM emission capability.

## Exception Model

Exceptions should be explicit resources.

An exception records:

- Requesting team.
- Markdown block or path being changed.
- Policy being bypassed.
- Approver.
- Expiration date.
- Compiled digest produced by the exception.

Exceptions that live only in chat, tickets, or local edits are not auditable enough for production use.

## Audit Questions

A mature deployment can answer:

- Which skills are approved for this repository?
- Which base skill did this team inherit?
- Which overlays were applied?
- Which locked blocks were present in the compiled skill?
- Which policy checks passed before execution?
- Which skills were activated in a specific run?
- Which commands were introduced or authorized by skill prose?
- Which human approved any exception?
