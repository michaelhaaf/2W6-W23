### VARIABLES ###
SHELL := /bin/bash -O globstar

# TODO idea: find content -type d  -> foreach dir wildcard the *.md
SUBDIR := $(find content -type d)

# TODO lots of debugging. Use `make debug`

# Markdown source TODO learn how to glob properly in makefile
SOURCE_MD := $(wildcard $(foreach subdir, $(SUBDIR), $(subdir)/*.md))
# HTML target docs TODO learn how to match target/source structure (may need script tbh)
TARGET_HTML := $(SOURCE_MD:content/about/calendar/%.md=docs/about/calendar/%.html)
# Archive source TODO add tutorials as well
SOURCE_ARCHIVE := $(patsubst %/,%,$(wildcard content/assignments/*/))
# .zip target
TARGET_ZIPS := $(addsuffix .zip, $(SOURCE_ARCHIVE))

# HTML Template sources

# Path relative to makefile
DATA_DIR := ./assets/pandoc/
# Path relative to data_dir
NAV_METADATA := ./metadata/navigation.json
HTML_WRITER := ./filters/separate-alt-figcaption.lua
DATE_WRITER := ./filters/last-updated.lua
CODEBLOCK_WRITER := ./filters/codeblock-lang-attr.lua
# Path relative to output TODO context-aware (make into pandoc variable)
PAGE_STYLE := ../assets/css/style.css

# Common options
PANDOC_OPTIONS = --standalone \
	--table-of-contents \
	--toc-depth=4 \
	--section-divs \
	--number-sections \
	--lua-filter=$(DATE_WRITER) \
	--lua-filter=$(CODEBLOCK_WRITER) \
	--css $(PAGE_STYLE) \
	--template $(PAGE_TEMPLATE) \
	--to $(HTML_WRITER)
TREE_OPTIONS = -I "_*" \
							 -L 2 \
							 --noreport \
							 -d \
							 -f \
							 -J 


## MAKE RULES

.PHONY: all clean navigation clean-parcel debug

all: $(TARGET_ZIPS) $(SOURCE_MD) $(TARGET_HTML)

clean:
	rm -rf docs/*

clean-parcel:
	find . -depth -type d -name "node_modules" -exec rm -rf {} \;
	find . -depth -type d -name ".parcel-cache" -exec rm -rf {} \;

navigation:
	cd ./content && tree $(TREE_OPTIONS) | \
		jq '.[] | .name |= "2W6-W23"' | \
		jq -f $(JQ_SCRIPT) > $(NAV_METADATA)

debug:
	@echo $(SOURCE_MD)
	@echo $(TARGET_HTML)
	@echo $(SOURCE_ARCHIVE)
	@echo $(TARGET_ZIPS)

# Indebted to https://www.andrewheiss.com/blog/2020/01/10/makefile-subdirectory-zips/ for getting this approach right
.SECONDEXPANSION:

$(TARGET_ZIPS): %.zip : $$(shell find % -type f ! -path "%/.*")
	cd $(basename $@)/.. && \
		zip -FSr $(notdir $@) $(notdir $(basename $*)) -x $(notdir $(basename $*))/.\*

# TODO use data-dir? this is about html template updates
# $(SOURCE_MD): %.html: $$(shell find assets/html/ -type f)
# # touch $(SOURCE_MD)

$(TARGET_HTML): $(SOURCE_MD)
	pandoc $(PANDOC_OPTIONS) -o $@ $<
