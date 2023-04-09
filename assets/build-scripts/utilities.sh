#!/usr/bin/env bash

# This file is a placeholder for certain scripts that I do not currently need but want to keep close at hand.


# (1) Divide .html in two halves on element of choice, replace relative path using sed and htmlq
PAGE_TEMPLATE := ./assets/templates/page.html
htmlq -f "$(PAGE_TEMPLATE)" -r "article *" | sed 's#\.\./#\.\./\.\./#g' | sed '/<article/q' > ./assets/templates/page-intro.html
htmlq -f "$(PAGE_TEMPLATE)" -r "article *" | sed 's#\.\./#\.\./\.\./#g' | sed -n -e '/<\/article>/,$p' > ./assets/templates/page-outro.html
