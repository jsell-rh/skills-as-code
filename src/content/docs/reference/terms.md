---
title: Terms
description: Canonical terminology used by this documentation.
---

## Skill

A reusable Markdown-based instruction artifact that an agent can load.

## Source Skill

A structured, declarative source resource used to render a skill.

## Compiled Skill

A flat skill directory generated from source resources and loaded by an agent runtime.

## Base

A reusable Kustomize resource tree that defines common skill prose.

## Overlay

A Kustomize customization that inherits from a base and applies local changes.

## Markdown Block

An addressable unit of Markdown prose in the source envelope.

## Locked Block

A Markdown block that overlays cannot remove or change.

## Allowed Patch Path

A JSON Pointer path that enterprise policy permits overlays to modify.

## AIBOM

An AI Bill of Materials for an agent run. It records resolved skills, activated skills, ancestry, digests, policy checks, and runtime identity.

## Resolver

The component that fetches bases, overlays, and remote refs and produces a resolved source graph.

## Compiler

The component that turns verified source resources into flat agent-loadable skill artifacts.

## Verifier

The component that checks rendered source resources against schema and policy before compilation.
