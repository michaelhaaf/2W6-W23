def split_path:
  . / "/"
;

def slice_first:
  .[1:]
;

def slice_last:
  .[:-1]
;

def basename: 
  split_path | last
;

def capitalize:
  . / "" | map(ascii_downcase) | .[:1] |= map(ascii_upcase) | add
;

def uri_to_label:
  basename | gsub("-"; " ")? | . / " " | map(capitalize) | join(" ")
;

def url_to_breadcrumb:
  {"href": ., "label": (. | uri_to_label)}
;

split_path | [""] + slice_first | slice_last | join("/") | 
  {
    "currentPage": (
      . | url_to_breadcrumb + 
      {
        "ancestors": [
          (. | split_path | slice_last | join("/") | url_to_breadcrumb), 
          (. | split_path | slice_last | slice_last | join("/") | url_to_breadcrumb),
          (. | split_path | slice_last | slice_last | slice_last | join("/") | url_to_breadcrumb)
        ]
      }
    )
  }
