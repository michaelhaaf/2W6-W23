-- Problem:
--    while the implicit-figure extension is useful, it conflates image alt tag and figcaptions. This is semantically inappropriate (will cause screen readers to read the same information twice. will cause screen readers to read the same information twice.)
--
-- Solution:
--    In lieu of real solution (see https://github.com/jgm/pandoc-types/pull/83)...
--    custom lua HTML writer that manages alt, figcaption, and title elems explicitly
--
-- Procedure:
--    Figure elements that contain defined alt and title attributes:
--      - place title content in figcaption
--      - set title to empty
--      - leave alt-text as-is
--
-- The code that follows is copied/adapted from pandoc's sample.lua custom writer (see man pandoc(1)). 
--
-- It was certainly more involved than I was expecting. I ultimately could not figure out how to serialize the img.caption element without rewriting the entirety of sample.luas methods. 
--
-- sample.lua methods are scoped inside a filter (element_filter) which I can use to process the img.caption (a list of inlines) using the inlines.walk(filter) api.
--
-- The sample.lua methods needed extra stringifying (the pandoc element nesting goes deep) in order to ultimately result in a well-formatted html string.

local stringify = (require("pandoc.utils")).stringify

-- Character escaping
local function escape(s, in_attribute)
  return s:gsub("[<>&\"']", function(x)
    if x == "<" then
      return "&lt;"
    elseif x == ">" then
      return "&gt;"
    elseif x == "&" then
      return "&amp;"
    elseif in_attribute and x == '"' then
      return "&quot;"
    elseif in_attribute and x == "'" then
      return "&#39;"
    else
      return x
    end
  end)
end

-- Helper function to convert an attributes table into
-- a string that can be put into HTML tags.
local function attributes(attr)
  local attr_table = {}
  for x, y in pairs(attr) do
    if y and y ~= "" then
      table.insert(attr_table, " " .. x .. '="' .. escape(y, true) .. '"')
    end
  end
  return table.concat(attr_table)
end

-- Helper function to really make sure that a string is a string
local function toString(s)
  return escape(stringify(s))
end

-- I've adapted the set of functions from sample.lua and used them instead
-- as an extra custom filter. In case I get some object which needs styling
-- (so stringify won't work) but isn't yet in string format, I can
-- "walk" that element with this filter.
--
-- Why? Just for the img.caption, which comes as a Lua list of Inlines (Str, Space, Em, etc.)
local element_filter = {

  -- [Comment adapted from sample.lua, square brackets around my insertions]
  -- The functions that follow render corresponding pandoc elements.
  -- s is always [not yet, needs to become] a string,
  -- attr is always a table of attributes, and
  -- items is always an array of strings (the items in a list).
  -- Comments indicate the types of other variables.

  Str = function(s)
    return toString(s)
  end,

  Space = function()
    return " "
  end,

  SoftBreak = function()
    return "\n"
  end,

  LineBreak = function()
    return "<br/>"
  end,

  Emph = function(s)
    return "<em>" .. toString(s) .. "</em>"
  end,

  Strong = function(s)
    return "<strong>" .. toString(s) .. "</strong>"
  end,

  Subscript = function(s)
    return "<sub>" .. toString(s) .. "</sub>"
  end,

  Superscript = function(s)
    return "<sup>" .. toString(s) .. "</sup>"
  end,

  SmallCaps = function(s)
    return '<span style="font-variant: small-caps;">' .. s .. "</span>"
  end,

  Strikeout = function(s)
    return "<del>" .. toString(s) .. "</del>"
  end,

  Link = function(s, tgt, tit, attr)
    return '<a href="'
        .. escape(tgt, true)
        .. '" title="'
        .. escape(tit, true)
        .. '"'
        .. attributes(attr)
        .. ">"
        .. toString(s)
        .. "</a>"
  end,

  Code = function(s, attr)
    return "<code" .. attributes(attr) .. ">" .. toString(s) .. "</code>"
  end,

  InlineMath = function(s)
    return "\\(" .. toString(s) .. "\\)"
  end,

  DisplayMath = function(s)
    return "\\[" .. toString(s) .. "\\]"
  end,

  SingleQuoted = function(s)
    return "&lsquo;" .. toString(s) .. "&rsquo;"
  end,

  DoubleQuoted = function(s)
    return "&ldquo;" .. toString(s) .. "&rdquo;"
  end,

  Span = function(s, attr)
    return "<span" .. attributes(attr) .. ">" .. toString(s) .. "</span>"
  end,

  RawInline = function(format, str)
    if format == "html" then
      return str
    else
      return ""
    end
  end,

  Cite = function(s, cs)
    local ids = {}
    for _, cit in ipairs(cs) do
      table.insert(ids, cit.citationId)
    end
    return '<span class="cite" data-citation-ids="' .. table.concat(ids, ",") .. '">' .. toString(s) .. "</span>"
  end,

  Plain = function(s)
    return toString(s)
  end,

  Para = function(s)
    return "<p>" .. toString(s) .. "</p>"
  end,

  -- lev is an integer, the header level.
  Header = function(lev, s, attr)
    return "<h" .. lev .. attributes(attr) .. ">" .. toString(s) .. "</h" .. lev .. ">"
  end,

  BlockQuote = function(s)
    return "<blockquote>\n" .. toString(s) .. "\n</blockquote>"
  end,

  HorizontalRule = function()
    return "<hr/>"
  end,

  LineBlock = function(ls)
    return '<div style="white-space: pre-line;">' .. table.concat(ls, "\n") .. "</div>"
  end,

  CodeBlock = function(s, attr)
    return "<pre><code" .. attributes(attr) .. ">" .. toString(s) .. "</code></pre>"
  end,

  BulletList = function(items)
    local buffer = {}
    for _, item in pairs(items) do
      table.insert(buffer, "<li>" .. toString(item) .. "</li>")
    end
    return "<ul>\n" .. table.concat(buffer, "\n") .. "\n</ul>"
  end,

  OrderedList = function(items)
    local buffer = {}
    for _, item in pairs(items) do
      table.insert(buffer, "<li>" .. toString(item) .. "</li>")
    end
    return "<ol>\n" .. table.concat(buffer, "\n") .. "\n</ol>"
  end,

  DefinitionList = function(items)
    local buffer = {}
    for _, item in pairs(items) do
      local k, v = next(item)
      table.insert(buffer, "<dt>" .. toString(k) .. "</dt>\n<dd>" .. table.concat(v, "</dd>\n<dd>") .. "</dd>")
    end
    return "<dl>\n" .. table.concat(buffer, "\n") .. "\n</dl>"
  end,
}

-- Helper function to convert a set of image properites into
-- a string that can be put into HTML tags.
-- In particular, allows me to control the alt, title, and caption content
-- I agree with https://github.com/jgm/pandoc/issues/4737
--    the title (additional descriptor) becomes alt
--    the caption (bracketed text) becomes figcaption
function CaptionedImage(src, title, caption, attr)
  return '<figure>\n<img src="'
      .. escape(src, true)
      .. '" '
      .. attributes(attr)
      .. 'alt="'
      .. escape(title, true)
      .. '"/>'
      .. "<figcaption>"
      .. caption
      .. "</figcaption>\n</figure>"
end

-- Helper function to convert any given HTML element into
-- a string that can be put into HTML tags.
function Element(elem)
  local filter = element_filter
  return stringify(elem:walk(filter))
end

-- Finally, where the magic happens.
-- If an img has defined alt, title, and caption properties, rearrange the content
-- (see function CaptionedImage)
-- Otherwise, just return the image and let the normal pandoc behavior take place.
function Writer(doc, opts)
  local filter = {
    Image = function(img)
      -- only modify if caption, alt, and title are defined
      if img.alt and img.title and img.caption then
        local content = CaptionedImage(img.src, img.title, Element(img.caption), img.attributes)
        return pandoc.RawInline("html", content)
      else
        return img
      end
    end,
  }
  return pandoc.write(doc:walk(filter), "html", opts)
end
