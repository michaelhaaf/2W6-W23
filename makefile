## VARIABLES 

# Markdown source
PAGES_MD := $(wildcard md/pages/*.md)
LECTURES_MD := $(wildcard md/lectures/*.md)
HOME_MD := ./md/pages/home.md

# HTML target
LISTINGS_HTML := $(wildcard assets/listings/*.html)
PAGES_HTML := $(PAGES_MD:md/pages/%.md=pages/%.html)
LECTURES_HTML := $(LECTURES_MD:md/lectures/%.md=lectures/%.html)

# Path relative to makefile
PAGE_TEMPLATE := ./assets/templates/page.html
HIGHLIGHT_STYLE := ./assets/css/code-highlight.theme
HTML_WRITER := ./assets/filters/separate-alt-figcaption.lua
DATE_WRITER := ./assets/filters/last-updated.lua
# Path relative to output
PAGE_STYLE := ../assets/css/style.css

# Common options
PANDOC_OPTIONS = --standalone \
	--table-of-contents \
	--toc-depth=2 \
	--section-divs \
	--lua-filter=$(DATE_WRITER) \
	--css $(PAGE_STYLE) \
	--template $(PAGE_TEMPLATE) \
	--highlight-style $(HIGHLIGHT_STYLE) \
	--to $(HTML_WRITER)
TREE_OPTIONS = -H . \
							 -L 1 \
							 --noreport \
							 --si \
							 -D \
							 --charset utf-8 \
							 --I index.html
FIND_OPTIONS = -maxdepth 1 \
							 -type d \


## MAKE RULES

all: $(PAGE_TEMPLATE) $(PAGES_HTML) $(LECTURES_HTML)

clean:
	rm lectures/*.html
	rm pages/*.html

# Run this if a new file has been added to a dynamic contect directory 
listings:
	tree lectures -H ../lectures | htmlq "body p a" | grep html > ./assets/listings/lecture-listing.html
	tree assignments -L 1 -H ../assignments | htmlq "body p a" | tail -n +2 > ./assets/listings/assignment-listing.html
	tree tutorials -L 1 -H ../tutorials | htmlq "body p a" | tail -n +2 > ./assets/listings/tutorial-listing.html
	./assets/build-scripts/generate-index-files assignments
	./assets/build-scripts/generate-index-files tutorials

# If dynamic content directories changed, update template and mark all targets for update
$(PAGE_TEMPLATE): assets/listings/*.html
	cp $(PAGE_TEMPLATE) ./assets/templates/page.html.backup 
	python ./assets/build-scripts/insert-listings.py > $(PAGE_TEMPLATE)
	touch $(PAGES_MD) $(LECTURES_MD)

lectures/%.html: md/lectures/%.md
	touch $(HOME_MD)
	pandoc $(PANDOC_OPTIONS) -o $@ $<

pages/%.html: md/pages/%.md
	touch $(HOME_MD)
	pandoc $(PANDOC_OPTIONS) -o $@ $<
