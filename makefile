SHELL := /bin/bash -O globstar

include makefile.config

# DIRECTORIES
ARCHIVE_DIRS  := $(shell find content/assignments content/tutorials -maxdepth 1 -mindepth 1 -type d)
CONTENT_DIRS  := $(shell find content -type d)
STATIC_DIRS    := $(shell find assets/static -mindepth 1 -type d)
PANDOC_DIRS    := $(shell find assets/pandoc -mindepth 1 -type d)

# PREREQUISITES
CONTENT       := $(foreach dir, $(CONTENT_DIRS), $(wildcard $(dir)/*.*))
CONTENT_MD    := $(foreach dir, $(CONTENT_DIRS), $(wildcard $(dir)/*.md))
STATIC        := $(foreach dir, $(STATIC_DIRS), $(wildcard $(dir)/*.*))
PANDOC        := $(foreach dir, $(PANDOC_DIRS), $(wildcard $(dir)/*.*))

# TARGETS
CONTENT_ZIPS  := $(addsuffix .zip, $(ARCHIVE_DIRS))
DOCS          := $(CONTENT:content/%=docs/%)
DOCS_HTML     := $(CONTENT_MD:content/%.md=docs/%.html)
DOCS_STATIC   := $(STATIC:assets/%=docs/%)
METADATA      := $(filter assets/pandoc/metadata/%, $(PANDOC))

## MAKE RULES

.PHONY: all clean clean-parcel metadata debug metadata docs docs_static docs_html

all: $(CONTENT_ZIPS) $(METADATA) $(DOCS) $(DOCS_STATIC) $(DOCS_HTML) 

clean:
	rm -rf docs/*

clean-parcel:
	find . -depth -type d -name "node_modules" -exec rm -rf {} \;
	find . -depth -type d -name ".parcel-cache" -exec rm -rf {} \;

metadata: $(METADATA)

docs: $(DOCS)

docs_static: $(DOCS_STATIC)

docs_html: $(DOCS_HTML)

debug:
	@echo $(METADATA)

# Indebted to https://www.andrewheiss.com/blog/2020/01/10/makefile-subdirectory-zips/ for getting this approach right
.SECONDEXPANSION:

# TODO: shouldn't need to repeat @echo commands for each rule.

$(CONTENT_ZIPS): %.zip : $$(shell find % -type f ! -path "%/.*")
	@echo "CHANGES TO:" $?
	@echo "Re-archiving..."
	cd $(basename $@)/.. && \
		zip -FSr $(notdir $@) $(notdir $(basename $*)) -x $(notdir $(basename $*))/.\*
	@echo "Done."

$(METADATA): $(CONTENT)
	@echo "CHANGES TO:" $?
	@echo "Re-indexing..."
	cd ./content && tree $(TREE_OPTIONS) | \
		jq '.[] | .name |= "2W6-W23"' | \
		jq -f "../$(SCRIPTS_DIR)/pretty-uri-labels.jq" > "../$(DATA_DIR)/$(INDEX_METADATA)"
	@echo "Done."

$(DOCS): docs/% : $$(filter content/%, $(CONTENT))
	@echo "CHANGES TO:" $?
	@echo "Copying to docs..."
	mkdir -p $(dir $@) && cp $< $@
	@echo "Done."

$(DOCS_STATIC): docs/% : $$(filter assets/%, $(STATIC))
	@echo "CHANGES TO:" $?
	@echo "Copying to docs..."
	mkdir -p $(dir $@) && cp $< $@
	@echo "Done."

$(DOCS_HTML): docs/%.html : $$(filter content/%.md, $(CONTENT_MD)) $(PANDOC)
	@echo "CHANGES TO:" $?
	@echo "Re-building..."
	pandoc $(PANDOC_OPTIONS) -o $@ $<
	@echo "Done."
