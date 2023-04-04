#!/usr/bin/env python
import sys
import re
import os
from bs4 import BeautifulSoup
from settings import LISTINGS_PATH, TEMPLATE_PATH


# FUNCTIONS #

# Regex: find number groups and insert spaces around them.
# inspired by: https://stackoverflow.com/a/59338244
def beautifyName(filename):
    filename = os.path.splitext(filename)[0]
    return re.sub(r' ?(\d+) ?', r' \1 ', filename).capitalize()


# Scales linearly in number of listing categories
def insert_listing(listing_name, template_soup):
    with open(f"{LISTINGS_PATH}/{listing_name}.html") as fh:
        listing_soup = BeautifulSoup(fh, "html.parser")
    listing_elem = template_soup.find(id=listing_name)
    listing_elem.clear()

    for listing in listing_soup:
        list_item = template_soup.new_tag("li")
        listing.string = beautifyName(listing.string)
        list_item.append(listing)
        listing_elem.append(list_item)


# MAIN #

with open(TEMPLATE_PATH) as fh:
    template_soup = BeautifulSoup(fh, "html.parser")

insert_listing("lecture-listing", template_soup)
insert_listing("assignment-listing", template_soup)

print(template_soup.prettify())
