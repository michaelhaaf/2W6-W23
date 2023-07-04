# Goals

  1. content separate from presentation
    - e.g. define source once, build to web/slides/pdf/.zip/etc. targets according to defined rules
  1. click and drag file addition
    - e.g. add an assignment by dropping a folder in the right directory
  1. automatically update presentation/indexes across the site when changes occur
    - using make, only updated files are processed

# Solution outline


1. Every new folder in the CONTENT directory will automatically produce a new folder in the DOCS directory.

  - Content is defined in CONTENT, presentation is served in DOCS

1.1 If a folder is empty, it is ignored
1.2 If a folder does not contain index.md in CONTENT, an index.html is generated using `tree` and `pandoc` + `index.tmpl` .
1.2 If a folder contains index.md in CONTENT, it is translated to index.html in DOCS using `pandoc` and the templates specified in index.md metadata.
  1.2.1
1.4

# Proposed structure (abridged)

- Source
```
content/
    | - lectures/
        | - lecture-01/
            | - index.md
            | - resources/
                | - some-img.jpg 
    | - assignments/
        | - assignment-01/
            | - index.md
            | - some-dir/
                | - file1.txt
                | - file2.txt
        | - assignment-02/
            | - file1.txt
            | - file2.txt
    | - about/
        | - syllabus/
            | - index.md
        | - course-outline/
            | - index.md
        | - course-calendar/
            | - index.md
        | - this-site/
            | - index.md
```

- Result
```
docs/
    | - index.html (auto-generated redirect to about/this-course/)
    | - lectures/
        | - lecture-01/
            | - index.html
            | - resources/
                | - some-img-low.png
                | - some-img-mobile.png
                | - some-img-full.png 
    | - assignments/
        | - assignment-01/
            | - index.html
            | - _index.html_ (?) (auto generated)
            | - some-dir/
                | - file1.txt
                | - file2.txt
        | - assignment-02/
            | - index.html (auto generated)
            | - file1.txt
            | - file2.txt
    | - about/
        | - this-course/
            | - index.html
        | - course-outline/
            | - index.html
        | - course-calendar/
            | - index.html
        | - this-site/
            | - index.html
```

# Other ideas for content

| - announcements/
  (an rss feed that I can get to sync with Moodle or something, configure an auto update?)
| - 
