---
name: enterprise-sdlc
description: Payments API SDLC guidance.
---

# Enterprise SDLC

## Read The Jira Issue

Use the Jira skill to read the assigned issue. The Jira project is declared in the Jira Project Context section.

## Jira Project Context

Use Jira project `PAY`.

## Implement

Use the issue acceptance criteria as the source of truth. Keep changes narrow.

## Team Implementation Guidelines

Prefer ledger-safe changes, preserve audit trails, and include migration notes for schema changes.

## Repository Context

Use this repository's CONTRIBUTING.md, CODEOWNERS, and local verification guidance before final response. Payment authorization code lives in `src/authz/`.

## Security Review

Review the diff for authentication, authorization, injection, secret exposure, and sensitive data handling risks.
