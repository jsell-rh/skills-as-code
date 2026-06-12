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

A downstream `SKILL.md` that fills team-owned sections.

## Repository Skill

A downstream `SKILL.md` that fills repository-owned sections.

## Manifest

A repository file, normally `skills.yaml`, that declares ordered source skills and vendored output paths.

## Section

A Markdown section headed by a `##` heading.

## Required Section

A section marked with `<!-- @required -->` that must be completed downstream before final output.

## Final Section

A section marked with `<!-- @final -->` that downstream sources cannot replace.

## Vendored Skill

The clean `SKILL.md` output checked into the consuming repository for the agent to load.

## Merge Report

A generated report showing which source filled, replaced, kept, rejected, or failed each section.

## Lock File

A generated provenance file recording source refs, digests, compiler version, and output digest.
