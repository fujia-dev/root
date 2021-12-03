#!/usr/bin/env sh

typedoc

git add -A
git commit -m "docs: publish docs"
git push origin main
