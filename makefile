SHELL := /bin/bash -O globstar

include makefile.config

# DIRECTORIES
ARCHIVE_DIRS  := $(shell find content/assignments content/tutorials -maxdepth 1 -mindepth 1 -type d)
CONTENT_DIRS  := $(shell find content -mindepth 1 -type d)
ASSET_DIRS    := $(shell find assets/* -not -path "*pandoc*" -type d)

# SOURCES
CONTENT       := $(foreach dir, $(CONTENT_DIRS), $(wildcard $(dir)/*.*))
CONTENT_MD    := $(foreach dir, $(CONTENT_DIRS), $(wildcard $(dir)/*.md))
ASSETS        := $(foreach dir, $(ASSET_DIRS), $(wildcard $(dir)/*.*))

# TARGETS
CONTENT_ZIPS  := $(addsuffix .zip, $(ARCHIVE_DIRS))
DOCS          := $(CONTENT:content/%=docs/%)
DOCS_HTML     := $(CONTENT_MD:content/%.md=docs/%.html)
DOCS_ASSETS   := $(ASSETS:assets/%=docs/%)

## MAKE RULES

.PHONY: all clean clean-parcel metadata debug

all: $(CONTENT_ZIPS) $(DOCS) $(DOCS_HTML) $(DOCS_ASSETS)

clean:
	rm -rf docs/*

clean-parcel:
	find . -depth -type d -name "node_modules" -exec rm -rf {} \;
	find . -depth -type d -name ".parcel-cache" -exec rm -rf {} \;

metadata:
	cd ./content && tree $(TREE_OPTIONS) | \
		jq -f '.[] | .name |= "2W6-W23"' | \
		jq -f $(SCRIPTS_DIR)/pretty-uri-labels.jq > $(INDEX_METADATA)

# Indebted to https://www.andrewheiss.com/blog/2020/01/10/makefile-subdirectory-zips/ for getting this approach right
.SECONDEXPANSION:

$(CONTENT_ZIPS): %.zip : $$(shell find % -type f ! -path "%/.*")
	cd $(basename $@)/.. && \
		zip -FSr $(notdir $@) $(notdir $(basename $*)) -x $(notdir $(basename $*))/.\*

$(DOCS): $(CONTENT)
	mkdir -p $(dir $@) && cp $< $@
 
$(DOCS_HTML): $(CONTENT_MD)
	pandoc $(PANDOC_OPTIONS) -o $@ $<

$(DOCS_ASSETS): $(ASSETS)
	mkdir -p $(dir $@) && cp $< $@
