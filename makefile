## VARIABLES 

# Markdown source
PAGES_MD := $(wildcard md/pages/*.md)
LECTURES_MD := $(wildcard md/lectures/*.md)
HOME_MD := ./md/pages/home.md

# HTML target
LISTINGS_HTML := $(wildcard assets/listings/*.html)
PAGES_HTML := $(PAGES_MD:md/pages/%.md=pages/%.html)
LECTURES_HTML := $(LECTURES_MD:md/lectures/%.md=lectures/%.html)

# subdir source
ASSIGNMENT_DIRS := $(patsubst %/,%,$(wildcard assignments/*/))
TUTORIAL_DIRS := $(patsubst %/,%,$(wildcard tutorials/*/))

# .zip target
ASSIGNMENT_ZIPS := $(addsuffix .zip, $(ASSIGNMENT_DIRS))
TUTORIAL_ZIPS := $(addsuffix .zip, $(TUTORIAL_DIRS))

# Path relative to makefile
PAGE_TEMPLATE := ./assets/templates/page.html
ASSIGNMENTS_TEMPLATE := ./assets/templates/assignments.html.backup
TUTORIALS_TEMPLATE := ./assets/templates/tutorials.html.backup
HIGHLIGHT_STYLE := ./assets/css/code-highlight.theme
HTML_WRITER := ./assets/filters/separate-alt-figcaption.lua
DATE_WRITER := ./assets/filters/last-updated.lua
# Path relative to output
PAGE_STYLE := ../assets/css/style.css

# Common options
PANDOC_OPTIONS = --standalone \
	--table-of-contents \
	--toc-depth=5 \
	--section-divs \
	--number-sections \
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

.PHONY: all clean indices clean-parcel

all: $(ASSIGNMENT_ZIPS) $(TUTORIAL_ZIPS) $(PAGE_TEMPLATE) $(PAGES_HTML) $(LECTURES_HTML) 

clean:
	rm lectures/*.html
	rm pages/*.html

clean-parcel:
	find . -depth -type d -name "node_modules" -exec rm -rf {} \;
	find . -depth -type d -name ".parcel-cache" -exec rm -rf {} \;

indices:
	tree lectures -H ../lectures | htmlq "body p a" | grep html > ./assets/listings/lecture-listing.html
	htmlq -f pages/assignments.html "#TOC > ul > li > ul a" | sed 's/href="/href="..\/pages\/assignments\.html/' | sed 's/ id=".*"//' > ./assets/listings/assignment-listing.html
	./assets/build-scripts/generate-index-files assignments
	./assets/build-scripts/generate-index-files tutorials

# Indebted to https://www.andrewheiss.com/blog/2020/01/10/makefile-subdirectory-zips/ for getting this approach right
.SECONDEXPANSION:

$(ASSIGNMENT_ZIPS): %.zip : $$(shell find % -type f ! -path "%/.*")
	tree lectures -H ../lectures | htmlq "body p a" | grep html > ./assets/listings/lecture-listing.html
	htmlq -f pages/assignments.html "#TOC > ul > li > ul a" | sed 's/href="/href="..\/pages\/assignments\.html/' | sed 's/ id=".*"//' > ./assets/listings/assignment-listing.html
	./assets/build-scripts/generate-index-files assignments
	cd $(basename $@)/.. && zip -FSr $(notdir $@) $(notdir $(basename $*)) -x $(notdir $(basename $*))/.\*

$(TUTORIAL_ZIPS): %.zip : $$(shell find % -type f ! -path "%/.*")
	tree lectures -H ../lectures | htmlq "body p a" | grep html > ./assets/listings/lecture-listing.html
	htmlq -f pages/tutorials.html "#TOC > ul > li > ul a" | sed 's/href="/href="..\/pages\/tutorials\.html/' | sed 's/ id=".*"//' > ./assets/listings/tutorial-listing.html
	./assets/build-scripts/generate-index-files tutorials
	cd $(basename $@)/.. && zip -FSr $(notdir $@) $(notdir $(basename $*)) -x $(notdir $(basename $*))/.\*

$(PAGE_TEMPLATE): %.html: $$(shell find assets/listings/ -type f)
	cp $(PAGE_TEMPLATE) ./assets/templates/page.html.backup 
	python ./assets/build-scripts/insert-listings.py --document template > $(PAGE_TEMPLATE)
	touch $(PAGES_MD) $(LECTURES_MD)

lectures/%.html: md/lectures/%.md
	touch $(HOME_MD)
	pandoc $(PANDOC_OPTIONS) -o $@ $<

pages/%.html: md/pages/%.md
	touch $(HOME_MD)
	pandoc $(PANDOC_OPTIONS) -o $@ $<

pages/assignments.html: md/pages/assignments.md
	touch $(HOME_MD)
	pandoc $(PANDOC_OPTIONS) -o $(ASSIGNMENTS_TEMPLATE) $<
	python ./assets/build-scripts/insert-listings.py --document assignments > pages/assignments.html

pages/tutorials.html: md/pages/tutorials.md
	touch $(HOME_MD)
	pandoc $(PANDOC_OPTIONS) -o $(TUTORIALS_TEMPLATE) $<
	python ./assets/build-scripts/insert-listings.py --document tutorials > pages/tutorials.html
