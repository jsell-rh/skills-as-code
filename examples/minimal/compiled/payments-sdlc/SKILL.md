---
name: payments-enterprise-sdlc
description: Enterprise SDLC guidance for agentic code changes.
metadata:
  sourceDigest: sha256:8b1a...
  resolvedFrom:
    - enterprise-sdlc@sha256:4e2d...
    - payments-overlay@sha256:91ac...
---

# Enterprise SDLC

Use this skill when making code changes in an enterprise repository.

## Planning

Before editing files, write a short plan that names the intended change, the files likely to be touched, and the verification command you expect to run.

## Testing

Run `make test-payments` after modifying payment service code. Include the command and result in the final response.

## Security Review

Review the diff for authentication, authorization, injection, secret exposure, unsafe deserialization, and sensitive data handling risks before finalizing the work.

## Run Record

Record the activated skill name, resolved skill digest, commands run, files changed, verification result, and unresolved risks so the run can be represented in an AIBOM.
