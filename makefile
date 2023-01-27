SITE_MD := $(wildcard md/site/*.md)
LECTURES_MD := $(wildcard md/lectures/*.md)

SITE_HTML := $(SITE_MD:md/site/%.md=%.html)
LECTURES_HTML := $(LECTURES_MD:md/lectures/%.md=lectures/%.html)

TEMPLATE := ./templates/web.html

all : $(SITE_HTML) $(LECTURES_HTML)

lectures/%.html: md/lectures/%.md
	pandoc $(PANDOC_OPTIONS) \
		--css ../css/style.css \
		-o $@ $<

%.html: md/site/%.md
	pandoc $(PANDOC_OPTIONS) \
		--css ./css/style.css \
		-o $@ $<
