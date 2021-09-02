#!/bin/bash

# mkdocs scrtipt for deploying mkdocs static site to gh-pages branch
# [link](https://www.mkdocs.org/user-guide/deploying-your-docs/) it can use the 
# following env variables to custumize its  behavior  
# REQUIREMENTS, CUSTOM_DOMAIN,C ONFIG_FILE, GITHUB_TOKEN or PERSONAL_TOKEN, GITHUB_ACTOR. 
# some of these are auto populated by github actions
# Ref https://github.com/mhausenblas/mkdocs-deploy-gh-pages

set -e

function print_info() {
    echo -e "\e[36mINFO: ${1}\e[m"
}

if [ -n "${REQUIREMENTS}" ] && [ -f "${GITHUB_WORKSPACE}/${REQUIREMENTS}" ]; then
    pip install -r "${GITHUB_WORKSPACE}/${REQUIREMENTS}"
else
    REQUIREMENTS="${GITHUB_WORKSPACE}/requirements.txt"
    if [ -f "${REQUIREMENTS}" ]; then
        pip install -r "${REQUIREMENTS}"
    fi
fi

if [ -n "${GITHUB_TOKEN}" ]; then
    print_info "setup with GITHUB_TOKEN"
    remote_repo="https://x-access-token:${GITHUB_TOKEN}@${GITHUB_DOMAIN:-"github.com"}/${GITHUB_REPOSITORY}.git"
elif [ -n "${PERSONAL_TOKEN}" ]; then
    print_info "setup with PERSONAL_TOKEN"
    remote_repo="https://x-access-token:${PERSONAL_TOKEN}@${GITHUB_DOMAIN:-"github.com"}/${GITHUB_REPOSITORY}.git"
fi

if ! git config --get user.name; then
    git config --global user.name "${GITHUB_ACTOR}"
fi

if ! git config --get user.email; then
    git config --global user.email "${GITHUB_ACTOR}@users.noreply.${GITHUB_DOMAIN:-"github.com"}"
fi

./tools/nav_builder.py

if output=$(git status --porcelain) && [ -z "$output" ]; then
  # Working directory clean
  echo "no changes all good"
else 
  # Uncommitted changes
  echo "pending to update mkdocs"
  echo "COMMIT_REPO=TRUE" >> $GITHUB_ENV

fi

