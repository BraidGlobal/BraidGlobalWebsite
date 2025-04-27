# BraidGlobalWebsite
Braid Global's Repo for Website

Here's a prompt you can use to the standardized CSS:

# HTML/CSS Standardization Guidelines

## Overview
We're standardizing our CSS class names to improve code readability and maintainability. When developing HTML components, please use our new CSS class naming convention instead of the previous cryptic class names.

## How to Format Your HTML

1. **Use semantic class names** that describe the style's purpose rather than abstract identifiers.
2. **Reference the CSS mapping** below when building components.
3. **Combine multiple classes** as needed to apply different styles.

## Base Component Classes
- `box-container` (replaces `w-box`) - For div containers
- `responsive-image` (replaces `w-image`) - For images
- `heading-style` (replaces `w-heading`) - For headings
- `link-block` (replaces `w-link`) - For links/buttons
- `html-content` (replaces `w-html-embed`) - For embedded HTML content

## Layout & Display Classes
- `flex` - Display as flex container
- `block` - Display as block
- `hidden` - Hide element
- `full-width` - 100% width
- `width-60-percent` - 60% width
- `width-auto` - Auto width
- `width-30em` - 30em width
- `width-2em` - 2em width
- `max-width-1440` - Max width 1440px
- `max-width-100` - Max width 100%
- `height-auto` - Auto height

## Flex Properties
- `flex-row` - Direction row
- `flex-column` - Direction column
- `align-center` - Align items center
- `align-start` - Align items start
- `align-self-center` - Align self center
- `align-self-end` - Align self flex-end
- `justify-center` - Justify content center
- `justify-end` - Justify content end
- `justify-start` - Justify content start
- `gap-row-2em` - Row gap 2em
- `gap-col-0` - Column gap 0
- `gap-col-2em` - Column gap 2em
- `gap-col-4em` - Column gap 4em

## Positioning
- `pos-absolute` - Position absolute
- `pos-static` - Position static
- `top-0` - Top 0
- `left-0` - Left 0
- `right-0` - Right 0
- `z-index-0` - z-index 0
- `z-index-1` - z-index 1

## Overflow Control
- `overflow-x-hidden` - Hide horizontal overflow
- `overflow-y-hidden` - Hide vertical overflow
- `overflow-x-visible` - Show horizontal overflow
- `overflow-y-visible` - Show vertical overflow

## Margins & Padding
- `margin-left-0` - No left margin
- `margin-top-0` - No top margin
- `margin-bottom-0` - No bottom margin
- `margin-right-0` - No right margin
- `padding-top-6em` - Top padding 6em
- `padding-bottom-3em` - Bottom padding 3em
- `padding-left-6em` - Left padding 6em
- `padding-left-0` - No left padding
- `padding-right-2em` - Right padding 2em

## Typography
- `font-gyst` - Gyst variable font
- `font-roboto` - Roboto font
- `font-size-6em` - Font size 6em
- `font-size-2em` - Font size 2em
- `font-size-1-75em` - Font size 1.75em
- `font-size-4em` - Font size 4em
- `font-size-1-5em` - Font size 1.5em
- `font-weight-400` - Regular weight
- `font-weight-500` - Medium weight
- `font-weight-600` - Semi-bold weight
- `text-color-white` - White text
- `text-decoration-none` - No text decoration
- `text-align-center` - Center text
- `text-wrap-nowrap` - No text wrapping
- `text-wrap-balance` - Balanced text wrapping

## Background & Borders
- `bg-light-gray` - Light gray background
- `bg-black` - Black background
- `bg-transparent` - Transparent background
- `bg-dark-blue` - Dark blue background
- `bg-gradient-light-to-dark` - Light to dark gradient
- `bg-mission` - Mission background image
- `bg-size-cover` - Background size cover
- `border-transparent` - Transparent border
- `border-radius-1-2em` - 1.2em border radius

## Example

Instead of:
```html
<div class="w-box c19h6nqn c1b9v5g3 cmbyyrb c1q6i7yp c2wwlta c1e5gpog cla8mwk c11rz54 chd5vcl">
```

Use:
```html
<div class="box-container flex align-center justify-center flex-column full-width overflow-x-visible overflow-y-visible max-width-1440 padding-bottom-0vh">
```