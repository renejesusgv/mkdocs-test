---
title: Theme Overriding
summary: Guide to explain user basic stuff before starting developing theme features
sections: 
  - For Contributors/Tools
document-type: tutorial
---

# Theme Overriding

MkDocs enables the user to change and override not just the CSS stylesheets or JavaScript; you can also override your template's structure. See the
[Customizing Your Theme](https://www.mkdocs.org/user-guide/customizing-your-theme/?) section from the MkDocs official documentation.

As the Wizeline Docs as Code project utilizes the Material theme for MkDocs, consult the
[Customization](https://squidfunk.github.io/mkdocs-material/customization/) section from their official repository.

This guide helps you to customize the components that the project uses throughout the site. To add custom HTML, CSS, and JavaScript for using it exclusively
on a specific document or page, add it to the same document's contents.

MkDocs supports HTML natively without any additional configuration, enabling you to use `<style>` and `<script>` tags. Here's an example:

```HTML
This goes inside the-page-you-are-creating.md
---------------------------------------------

<style>
  h1 {color:red;}
  p {color:blue;}
</style>

<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>
mermaid.init();  // <-- you can call objects that come from libraries.
document.getElementById("demo").innerHTML = "Hello JavaScript!";
</script>

<h1>Title in red</h1>
<p>Paragraph in blue</p>
```

The following sections detail the steps to modify the frontend of the site.

## CSS

You can create a class that can be called anywhere on the site as long as you configure an `extra_css` property in the `mkdocs.yml` that includes its location
. You can reference more than one file and a different directory; see the following example:

```yaml
extra_css:
- stylesheets/extra.css
- nav-styles/nav-item.css
```

Your project needs to have both directories and files to work. Based on the example above, this is how the structure of your project folder must be. The
directories of stylesheets must be inside the `docs` folder.

```markdown
.
├─ docs/
│  └─ stylesheets/
│     └─ extra.css
│  └─ nav-styles/
│     └─ nav-item.css
└─ mkdocs.yml
```

## JavaScript

To add JavaScript to the site, follow the same steps from the CSS section. Here is an example of implementing JavaScript:

```yaml
extra_javascript:
  - javascripts/extra.js
```

```markdown
.
├─ docs/
│  └─ javascripts/
│     └─ extra.js
└─ mkdocs.yml
```

## HTML

You can replace MkDocs and Material templates entirely. Consult the following resources for more information:

- [Developing Themes](https://www.mkdocs.org/dev-guide/themes/) for MkDocs
- [Extending the Theme](https://squidfunk.github.io/mkdocs-material/customization/#extending-the-theme) for Material MkDocs

Templates are written in simple HTML using the help of Jinja to replace variables with other values. Consult
[Jinja's Documentation](https://jinja.palletsprojects.com/en/3.0.x/) for more information.

Two ways of customizing templates exist:

### Overriding Complete Files (AKA Partials)

To enable this option, add a `custom_dir` property that contains the files to override in the `mkdocs.yml` file. Add this property with the directory's name
under `docs` as a sub-property of `theme`. See the following example:

```yaml
theme:
  name: material
  custom_dir: overrides
```

This directory must follow the structure of the base MkDocs theme:

```markdown
.
├─ .icons/                             # Bundled icon sets
├─ assets/
│  ├─ images/                          # Images and icons
│  ├─ javascripts/                     # JavaScript
│  └─ stylesheets/                     # Stylesheets
├─ partials/
│  ├─ integrations/                    # Third-party integrations
│  │  ├─ analytics.html                # - Google Analytics
│  │  └─ disqus.html                   # - Disqus
│  ├─ languages/                       # Localized languages
│  ├─ footer.html                      # Footer bar
│  ├─ header.html                      # Header bar
│  ├─ language.html                    # Localized labels
│  ├─ logo.html                        # Logo in header and sidebar
│  ├─ nav.html                         # Main navigation
│  ├─ nav-item.html                    # Main navigation item
│  ├─ palette.html                     # Color palette
│  ├─ search.html                      # Search box
│  ├─ social.html                      # Social links
│  ├─ source.html                      # Repository information
│  ├─ source-date.html                 # Last updated date
│  ├─ source-link.html                 # Link to source file
│  ├─ tabs.html                        # Tabs navigation
│  ├─ tabs-item.html                   # Tabs navigation item
│  ├─ toc.html                         # Table of contents
│  └─ toc-item.html                    # Table of contents item
├─ 404.html                            # 404 error page
├─ base.html                           # Base template
└─ main.html                           # Default page
```

You can replace any file mirroring its directory place. For example, to change the `nav.html` file, create the file that will replace the original under
`/overrides/partials/nav.html`. It doesn't matter that it is just one or multiple files; MkDocs will replace only the elements found under `overrides`,
leaving the rest untouched.

### Overriding Blocks

This option will save you a lot of work because you will override just parts instead of complete files. To enable this option, you also need to set the
`override` property in the `mkdocs.yml` as we did in the [Partials](./#overriding-complete-files-aka-partials) section. The difference this time is that
we are just going to create one HTML file under this directory. The filename is `main.html,` and the layout is as follows:

```markdown
.
├─ overrides/
│  └─ main.html
└─ mkdocs.yml
```

After this, you can start writing custom components using the [Jinja](https://jinja.palletsprojects.com/en/3.0.x/) syntax. Here is the complete list of
[template variables](https://www.mkdocs.org/dev-guide/themes/#template-variables) that MkDocs uses. Also, consult
[Template Blocks](https://squidfunk.github.io/mkdocs-material/customization/#overriding-blocks-recommended) for the Material theme if you are looking
for specific elements.

Retaking the example where we change the `nav` item, write the following in `main.html` :

```html
{% extends "base.html" %} <!-- this line is important for keeping all the 
                               files and HTML as if there were no changes.-->

{% block site_nav %} <!-- template block from Material for MkDocs -->

<!-- custom HTML to add to this block, also with extra_css -->
<h1 class="customNavItem pointer">Extra nav item - FIXED </h1>

{{ super() }} <!-- template variable from MkDocs to get the nav list -->
{% endblock %}
```
