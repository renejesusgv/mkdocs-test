---
title: Markdown Guide for Contributors
summary: Wizeline syntax guide to writing using Markdown.
sections:
  - For Contributors/Content Creation Guides
document-type: tutorial
---

# Markdown Guide for Contributors

This guide helps you to effectively create documents using Markdown by providing
tips and guidance in a compact, easy-to-navigate way. Use this guide to get
familiar with the Markdown features and syntax.

## What is Markdown?

Markdown is a plain text formatting syntax. Markdown lets you write using an
easy-to-read, easy-to-write plain text format, then convert it to structurally
valid HTML.

Writing your documents using Markdown has multiple benefits, such as:

- The source text is readable and portable.
- The files are easy to maintain.
- The syntax is simple.
- Markdown is platform-independent.

The following sections cover the basics for writing content using Markdown.

## Creating a Markdown Document

You can create Markdown documents directly on websites that support it like
GitHub and Reddit, and many desktop and Web-based applications let you create
and preview the formatted text.

On [Visual Studio Code](https://code.visualstudio.com/) once you save your plain
text file with the `.md` or `.markdown` extension, the editor enables the
preview window for your document.

## Syntax and Style

This section covers the basic syntax you need to format the contents of your documents using Markdown.

### Basic Document Layout  

The basic document in Markdown consists of the following elements:

```markdown
# Document Title

## Section

Content

### Subsection

More content
```

From the previous layout, consider the following:

- The document title is a level one heading; the title usually matches the filename.
- The document is separated into sections or level two headings.  
- Each section can include subsections or level three headings; you can create further levels as needed.

### Headings

To create a heading, add number signs (#) in front of a word or phrase. The
amount of number signs that you use corresponds to the heading level.

> **Note**: There is a limit at six number signs for header levels.

The following are some examples of headings:

```markdown
# This is an H1

## This is an H2

###### This is an H6
```

> **Important**: For compatibility, always add a space between the number signs and
> the heading name. Some Markdown applications don't interpret the heading
> correctly when the single space is missing.

### Emphasis

Emphasis works in a few different ways:

- **Italics**:  

    Input: `*asterisks* or _underscores_`  
    Output: *asterisks* or _underscores_

- **Bold**:  

    Input: `**asterisks** or __underscores__`  
    Output: **asterisks** or __underscores__

- **Combined emphasis**:  

    Input: `**asterisks and _underscores_**`  
    Output: **asterisks and _underscores_**

- **Strikethrough**:  

    Input: `~~Scratch this.~~`  
    Output: ~~Scratch this.~~

### Line Breaks

To create a line break (`<br>`), end a line with two or more spaces and then type return.  

To separate paragraphs, type return twice.

### Lists

Unordered lists use hyphens as list markers:

```markdown
- First item
- Second item
- Third item
```

- First item
- Second item
- Third item

Indent one or more items to create a nested list:

```markdown
- First item
    - Indented item
- Second item
```

- First item
  - Indented item
- Second item

To create an ordered list, add line items with numbers followed by periods.

```markdown
Ordered List:

1. Item number one
2. Item number two
3. Item number three
```

The rendered output looks like this:

Ordered List:

1. Item number one
2. Item number two
3. Item number three

For longer ordered lists that can change, Markdown can interpret "lazy numbering" or using number "1" for all instances:

```markdown
List with "lazy numbering":

1. Item 1
1. Item 2
    1. Item 1
    1. Item 2
1. Item 3
```

The rendered output looks like this:

List with "lazy numbering":

1. Item 1
1. Item 2
   1. Item 1
   1. Item 2
1. Item 3

### Links

To create a link, enclose the link text in brackets and then follow it immediately with the URL in parentheses.

```markdown
Visit the [Markdown Guide website](https://www.markdownguide.org/) for more information.
```

The rendered output looks like this:

> Visit the [Markdown Guide website](https://www.markdownguide.org/) for more information.

### Images

To add images follow the same syntax used for links, but start with (!) to denote an image reference. The source of the
image can be an address or a local file.

Here is an example of an image taken from a Web address:

```markdown
![A flower](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujf-PCBT_fnN056fqMNSkcfL4jYzTlvfiPw&usqp=CAU)
```

The rendered output looks like this:

>![A flower](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujf-PCBT_fnN056fqMNSkcfL4jYzTlvfiPw&usqp=CAU)

To customize images when using Markdown you can use HTML syntax:

```markdown
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujf-PCBT_fnN056
fqMNSkcfL4jYzTlvfiPw&usqp=CAU" width="150" height="100"/>
```

The rendered output looks like this:

><img
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRujf-PCBT_fnN056fqMNSkcfL4jYzTlvfiPw&usqp=CAU"
width="150" height="100"/>

### Tables

To add a table, use three or more hyphens (---) to create each column’s header, and use pipes (|) to separate each column.

```markdown
| Column 1    | Column 2    |
| ----------- | ----------- |
| Item        | Text        |
| Item        | Text        |
```

The rendered output looks like this:

>| Column 1    | Column 2    |
>| ----------- | ----------- |
>| Item        | Text        |
>| Item        | Text        |

Note that the input table does not need to be aligned with the help of spacing to render correctly:

```markdown
| Column 1 | Column 2 |
| ------ | ---- |
| Item | Text |
| Item 2| More Text |
```

The rendered output looks like this:

>| Column 1 | Column 2 |
>| ------ | ---- |
>| Item | Text |
>| Item 2| More Text |

### Blockquotes

To create a blockquote, start a line with a "greater than" (>) symbol followed by an
optional space. Nesting blockquotes is easy; you can indicate the different
levels by the number of "greater than" symbols:

```markdown
> You can create blockquotes with the "greater than" symbol.
> And even include different *styles* of **text**.
>> You can nest blockquotes too. 
>>> Indicate nesting levels with the number of "greater than" symbols.
```

The rendered output looks like this:

> You can create blockquotes with the "greater than" symbol and even include different *styles* of **text**.  
>> You can nest blockquotes too.
>>> Indicate nesting levels with the number of "greater than" symbols.

### Code Elements

To denote a word or phrase as code, enclose it in backticks (`):

```markdown
This is a `code element`.
```

The rendered output looks like this:

> This is a `code element`.

To create a code block, enclose it in triple backticks (```).

## References and Further Reading

Consult the following resources for more information on using Markdown:

[Markdown Guide](https://www.markdownguide.org/) - Free and open-source reference guide

[Markdown Project](https://daringfireball.net/projects/markdown/) - By John Gruber

[Markdown Style Guide](https://google.github.io/styleguide/docguide/style.html) - Google Open Source

[Mastering Markdown](https://guides.github.com/features/mastering-markdown/) - GitHub Guides

[Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) - By Adam Pritchard
