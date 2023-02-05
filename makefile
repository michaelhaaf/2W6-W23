## VARIABLES 

# Markdown source
PAGES_MD := $(wildcard md/pages/*.md)
LECTURES_MD := $(wildcard md/lectures/*.md)

# HTML target
LISTINGS_HTML := $(wildcard assets/listings/*.html)
PAGES_HTML := $(PAGES_MD:md/pages/%.md=pages/%.html)
LECTURES_HTML := $(LECTURES_MD:md/lectures/%.md=lectures/%.html)

# Path relative to makefile
PAGE_TEMPLATE := ./assets/templates/page.html
HIGHLIGHT_STYLE := ./assets/css/code-highlight.theme
# Path relative to output
PAGE_STYLE := ../assets/css/style.css
# Common options
PANDOC_OPTIONS = --standalone \
								 --table-of-contents \
								 --css $(PAGE_STYLE) \
								 --template $(PAGE_TEMPLATE) \
								 --highlight-style $(HIGHLIGHT_STYLE)

## MAKE RULES

all: $(PAGE_TEMPLATE) $(PAGES_HTML) $(LECTURES_HTML)

clean:
	rm lectures/*.html
	rm pages/*.html

# Run this if a new file has been added to a dynamic contect directory 
listings:
	tree lectures -H ../lectures | htmlq "body p a" | grep html > ./assets/listings/lecture-listing.html
	tree assignments -L 1 -H ../assignments | htmlq "body p a" | tail -n +2 > ./assets/listings/assignment-listing.html

# If dynamic contect directories changed, update template and mark all targets for update
$(PAGE_TEMPLATE): assets/listings/*.html
	cp $(PAGE_TEMPLATE) ./assets/templates/page.html.backup 
	python ./assets/build-scripts/update-listings.py > $(PAGE_TEMPLATE)
	touch $(PAGES_MD) $(LECTURES_MD)

lectures/%.html: md/lectures/%.md
	pandoc $(PANDOC_OPTIONS) -o $@ $<

pages/%.html: md/pages/%.md
	pandoc $(PANDOC_OPTIONS) -o $@ $<
