---
title: Threat Model
description: Supply-chain and command-injection risks created by reusable agent skill prose.
---

Skills are executable context written as prose.

They may not be binaries, but they can influence high-impact outcomes: commands, file edits, code review, network access, deployment steps, and run reporting.

## Assumptions

- Skill text can influence model behavior.
- Skill metadata can influence discovery and invocation.
- Skill scripts can execute with local permissions.
- Skill references may contain untrusted text.
- Overlays can unintentionally weaken base skill prose.
- Agent runtimes still need sandboxing, approvals, and audit logs.

## Risks

### Malicious Skill Source

An attacker publishes or modifies a skill that appears useful but includes unsafe instructions, excessive tool access, command guidance, or prompt-injection text.

Controls:

- Trusted source policy.
- Immutable remote refs.
- Code review.
- Signature verification.
- Static scanning.
- AIBOM capture.

### Unsafe Overlay

A local overlay weakens an enterprise base skill.

Controls:

- Allowed patch paths.
- Locked Markdown blocks.
- Command pattern validation.
- Verification after render.
- Explicit exception resources.

### Prompt Injection In Trusted-Looking Content

A skill can import references, scripts, or Markdown that appears operational but contains instruction text intended to redirect the agent.

Controls:

- Review trusted instruction files separately from untrusted reference material.
- Keep high-impact actions behind runtime approvals.
- Use least-privilege tool access.
- Scan rendered Markdown before compilation.

### Command Injection

Skills often recommend commands or include scripts. Any dynamic value that reaches shell execution is a command-injection boundary.

Controls:

- Command allowlists.
- Command deny lists.
- Markdown command extraction.
- No shell interpolation for untrusted input.
- Script signing or review.
- Runtime command approval.

### Shadow Skill Drift

A team copies a base skill and edits it locally. The organization loses ancestry, version, and policy guarantees.

Controls:

- Inheritance through Kustomize resource references.
- CI rejection of unmanaged skill folders in protected repositories.
- AIBOM ancestry.
- Central catalog of approved bases.

## Security Invariants

The system fails closed when:

- A remote base cannot be fetched.
- A protected environment uses a mutable ref.
- A patch changes a locked Markdown block.
- Rendered Markdown contains a denied command.
- Rendered Markdown fails command pattern validation.
- A compiled digest does not match the source graph.
- The runtime cannot emit an AIBOM.

## Boundaries

Do not encode enforcement only in skill prose.

Skills can request behavior. Runtime controls enforce boundaries.

Keep these outside skill text:

- Filesystem sandboxing.
- Network access.
- Secret access.
- Deployment credentials.
- Command approval.
- Human review.
- Audit storage.
