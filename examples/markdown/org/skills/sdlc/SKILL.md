---
name: enterprise-sdlc
description: Enterprise SDLC skill for Jira-driven code changes.
---

# Enterprise SDLC

## Read The Jira Issue

Use Jira integration to read the assigned issue. The Jira project is declared in the Jira Project Context section.

## Jira Project Context <!-- @required -->

<!-- Team must declare the Jira project key and any project-specific issue lookup rules. -->

## Implement

Use the issue acceptance criteria as the source of truth. Keep changes narrow.

## Team Implementation Guidelines <!-- @required -->

<!-- Team must add engineering guidance that applies across its repositories. -->

## Repository Context <!-- @required -->

<!-- Repository must add local ownership and verification guidance. -->

## Security Review <!-- @final -->

Review the diff for authentication, authorization, injection, secret exposure, and sensitive data handling risks.
