PAGES_MD := $(wildcard md/pages/*.md)
LECTURES_MD := $(wildcard md/lectures/*.md)

PAGES_HTML := $(PAGES_MD:md/pages/%.md=pages/%.html)
LECTURES_HTML := $(LECTURES_MD:md/lectures/%.md=lectures/%.html)

# Path relative to makefile
PAGE_TEMPLATE := ./assets/templates/page.html

# Path relative to output
PAGE_STYLE := ../assets/css/style.css

PANDOC_OPTIONS = --standalone \
								 --table-of-contents \
								 --css $(PAGE_STYLE) \
								 --template $(PAGE_TEMPLATE)

all: $(PAGES_HTML) $(LECTURES_HTML)

lectures/%.html: md/lectures/%.md
	pandoc $(PANDOC_OPTIONS) -o $@ $<

pages/%.html: md/pages/%.md
	pandoc $(PANDOC_OPTIONS) -o $@ $<


clean:
	rm lectures/*.html
	rm pages/*.html
