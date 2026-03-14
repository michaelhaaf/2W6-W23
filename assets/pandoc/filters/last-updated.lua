-- Problem:
--    Would love to dynamically insert the last update date rather than having to enter it manually for each file.
--    But also, would love to have a hardcoded last-update date just in case
--
-- Solution:
--    Pandoc documentation snippet for setting the metadata date to current date:
--      - https://pandoc.org/lua-filters.html#setting-the-date-in-the-metadata
--    For manually setting the date, @kotatsuaki at stackoverflow shows how to use the pandoc API
--      - https://stackoverflow.com/a/72666646
--    My solution is a direct adaptation of the stackoverflow answer.

local stringify = (require("pandoc.utils")).stringify
local pandoc_Str = (require("pandoc")).Str
local os = (require("os"))

function Meta(meta)
  if meta.date then
    local format = "(%d+)-(%d+)-(%d+)"
    local y, m, d = stringify(meta.date):match(format)
    local date = os.time({
      year = y,
      month = m,
      day = d,
    })
    local date_string = os.date("%A, %B %d, %Y", date)
    meta.date = pandoc_Str(date_string)
    meta.datetime = meta.date
  else
    meta.date = os.date("%A, %B %d, %Y")
    meta.datetime = os.date()
  end
  return meta
end
