#!/usr/bin/env python
import re
import os
import glob
import argparse
from bs4 import BeautifulSoup

from settings import (LISTINGS_PATH, TEMPLATE_PATH, LECTURES_PATH,
                      ASSIGNMENTS_PATH, TUTORIALS_PATH)

document_map = {
    "template": TEMPLATE_PATH,
    "lectures": LECTURES_PATH,
    "assignments": ASSIGNMENTS_PATH,
    "tutorials": TUTORIALS_PATH
}


# FUNCTIONS #

def insert_listing(listing_path, document_soup):
    listing_name = os.path.splitext(os.path.basename(listing_path))[0]
    with open(listing_path) as fh:
        listing_soup = BeautifulSoup(fh, "html.parser").find_all('a', recursive=False)
    listing_elem = document_soup.find(id=listing_name)
    listing_elem.clear()

    for listing in listing_soup:
        list_item = document_soup.new_tag("li")
        list_item.append(listing)
        listing_elem.append(list_item)


def insert_raw_listing(listing_path, document_soup):
    listing_name = os.path.splitext(os.path.basename(listing_path))[0]
    with open(listing_path) as fh:
        listing_soup = BeautifulSoup(fh, "html.parser")
    listing_elem = document_soup.find(id=listing_name)
    if listing_elem is not None:
        listing_elem.clear()
        listing_elem.append(listing_soup)


# MAIN #
def main(args):

    with open(document_map.get(args.document)) as fh:
        document_soup = BeautifulSoup(fh, "html.parser")

    if args.document == "template":
        insert_listing(f"{LISTINGS_PATH}/lecture-listing.html", document_soup)
        insert_listing(
            f"{LISTINGS_PATH}/assignment-listing.html", document_soup)
        insert_listing(f"{LISTINGS_PATH}/tutorial-listing.html", document_soup)

    else:
        for listing in glob.glob(f"{LISTINGS_PATH}/{args.document}/*.html"):
            insert_raw_listing(listing, document_soup)

    print(document_soup.prettify())


if __name__ == "__main__":

    parser = argparse.ArgumentParser(
        description='Inserts file listings into specified document markup')
    parser.add_argument('--document',
                        required=True,
                        help='Choose a document to insert listings into.',
                        choices=document_map.keys(),
                        dest='document'
                        )
    args = parser.parse_args()
    main(args)
