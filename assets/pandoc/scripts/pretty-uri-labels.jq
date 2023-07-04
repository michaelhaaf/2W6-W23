def basename: 
  . / "/" | last
;

def capitalize:
  . / "" | map(ascii_downcase) | .[:1] |= map(ascii_upcase) | add
;

def uri_to_label:
  basename | gsub("-"; " ") | . / " " | map(capitalize) | join(" ")
;

walk(
    if type=="object"
      then del(.type)
    elif type=="array"
      then map({label: (.name | uri_to_label)} + .)
    else
      .
    end
)
