---
title: Terms
description: Canonical terminology used by this site.
---

## Skill

A Markdown instruction artifact loaded by an agent.

## Source Skill

A structured YAML resource used to manage and render skill Markdown.

## Base

The organization-owned source skill.

## Overlay

A Kustomize customization that inherits a base and applies allowed patches.

## Block

An addressable Markdown section in the source skill.

## Locked Block

A block that downstream overlays cannot change.

## Required Override

A field that downstream overlays must replace before compilation.

## Required Block

A block that downstream overlays must add before compilation.

## Compiled Skill

The final `SKILL.md` loaded by the agent.
