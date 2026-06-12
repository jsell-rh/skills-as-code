---
title: Terms
description: Canonical terminology used by this site.
---

## Skill

A Markdown instruction artifact loaded by an agent.

## Source Skill

A `SKILL.md` file used as compiler input.

## Organization Skill

The shared base skill owned by the organization.

## Team Skill

A downstream `SKILL.md` that supplies team-owned sections.

## Repository Skill

A downstream `SKILL.md` that supplies repository-owned sections.

## Section

A Markdown section headed by a `##` heading.

## Required Section

A section marked with `<!-- @required -->` that must be supplied downstream before final output.

## Final Section

A section marked with `<!-- @final -->` that downstream sources cannot replace.

## Vendored Skill

The clean `SKILL.md` output checked into the consuming repository for the agent to load.
