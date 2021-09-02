---
title: Mermaid Integration and Configuration with MkDocs
summary: Guide to enable MermaidJS in a MkDocs project 
sections: 
  - For Contributors/Tools
document-type: tutorial
---

# Mermaid Integration and Configuration with MkDocs

## Installation

The `wizedocs` repository has all the tools pre-installed on the site. The following list contains the installation requirements:

- [MkDocs](https://www.mkdocs.org/)

- [Material to run MkDocs](https://squidfunk.github.io/mkdocs-material/)

- [Superfences](https://facelessuser.github.io/pymdown-extensions/installation/) extension. Included in the Material theme for MkDocs.

## MkDocs Configuration

To configure MkDocs, add the following lines to your `mkdocs.yml` file:

~~~yaml
  extra_javascript:
      - https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js
      - extra-javascript/mermaid-custom-calls.js
  markdown_extensions:
    - pymdownx.superfences:
        custom_fences:
          - name: mermaid
            class: mermaid
            format: !!python/name:pymdownx.superfences.fence_div_format
~~~

The `extra_javascript` property retrieves the library MermaidJS remotely, which transforms text to diagrams. The `markdown_extensions` property enables
the use of extensions. You must configure the Custom Fences extension, this is part of Super Fences from
[PyMdown Extensions](https://facelessuser.github.io/pymdown-extensions/). This extension is responsible of transforming the Markdown code blocks with Mermaid
syntax into diagrams. The Mermaid properties do the following:

- `name`: Sets the keyword of the custom fence, it works like defining a programming language to a code block.
- `class`: Sets the text that is going to be added as a `class` attribute within the HTML element you must replace with the code block.
- `format`: Sets the HTML element you must replace with the code block. For more info see
[Custom Fences](https://facelessuser.github.io/pymdown-extensions/extensions/superfences/#formatters) and
[Material for MkDocs Superfences](https://squidfunk.github.io/mkdocs-material/reference/diagrams/#superfences)

This is an example of what happens in the background:

Custom Fences turns a Markdown file:

~~~markdown

  ```mermaid  <-- keyword of the custom fence
     your code here
  ```

~~~

>Remember that code blocks in `.md` files start and end with ``` or ~~~.

Into this:

~~~HTML
  <div class="mermaid">
  </div>
~~~

## JavaScript Configuration

Mermaid renders when the browser generates the `load` event after refreshing the site. MkDocs alse creates
the `load` event when going to the site. If an issue happens, you must create the `mermaid-custom-calls` file.

`mermaid-custom-calls` includes a JavaScript
`setInterval()` function that searches for browser route changes twice every second. When the route changes, it calls `mermaid.init();` making Mermaid
to render the diagrams again, instead of waiting for the next `load` event rendering the diagrams correctly placed.

## Creating Diagrams

The configuration enables the diagram rendering within the project. Every contributor can write text using Mermaid syntax:

~~~markdown

  ```mermaid
  graph TD
      A[Hard] -->|Text| B(Round)
      B --> C{Decision}
      C -->|One| D[Result 1]
      C -->|Two| E[Result 2]
  ```
  
~~~

See the result in a development enviroment when booting the development server and the deployed Wizedocs site:

~~~mermaid
  graph TD
    A[Hard] -->|Text| B(Round)
    B --> C{Decision}
    C -->|One| D[Result 1]
    C -->|Two| E[Result 2]
~~~
