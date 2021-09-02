---
title: Using GitHub Actions
summary: Recopilation of some of the best practices when working with GHA.
authors:
    - Elisa Guerrero
labels: wizeline, sre
sections: 
  - For Contributors/Tools
document-type: reference
---

# Using GitHub Actions

This document describes the best practices to consider when working with GitHub Actions (GHA).

## Audience

The main objective of this document is to help the team share the importance of working with GitHub Actions.
This guide is for anyone who wants to implement any automation idea that can solve a maintenance task
or guide a user to complete a task.

## Benefits of GitHub Actions

GitHub Actions facilitates automating all your software workflows; it helps you build, test, and deploy
applications. You can also use it to automate other tasks common to your developer workflows: triaging
and managing issues, automating releases, and collaborating with your user base.

> This document can be modified depending of the needs of the project.

## Keep Actions Minimal

Developers want their code to be easy to read and maintain. Follow these practices to write better code:

- Workflows must have at least one job
- Each [job](https://docs.github.com/en/actions/reference/workflow-syntax-for-github-actions#jobs) must have a unique identifier
- Start job identifiers with a letter or an underscore
- Avoid installing unnecessary dependencies.
- Use Github [caching](https://github.com/actions/cache) to save data and restore it later.

The longer an action takes to set up and run, the more time you spend waiting. Separate actions in different files if they are not related to each other.

## Limit Environment Variables

Declare environment variables with the narrowest possible scope;
this prevents polluting the global environment context, making it easier to know the process in any step or job.

## Keep Your Secrets Safe

Use [encrypted secrets](https://docs.github.com/en/actions/reference/encrypted-secrets) when you work
with sensitive information in Github Actions. For more security tips for GHA, go to the
[Github Actions](https://docs.github.com/en/actions/learn-github-actions/security-hardening-for-github-actions) website.
