---
title: Wizeline Docs as Code
summary: Wizeline docs as code description and collaboration instructions.
authors:
    - Mario Morales
    - Brenda Leyva
labels: wizeline, tw
sections: 
  - For Contributors/Tools
document-type: how-to-guide
---

# Wizeline Docs as Code

Wizeline Docs as Code is an internal documentation strategy to establish an
SSOT. The goal is for Wizeliners to create, maintain, and share internal
documentation across the different disciplines using the proposed site built
with [MkDocs](https://www.mkdocs.org) and [Material for
MkDocs](https://squidfunk.github.io/mkdocs-material/).

## Setting up Wizeline Docs as Code Locally

To set up Wizeline Docs as Code in your local environment, follow the steps in the
[`wizedocs/mkdocs_README.md`](https://github.com/wizeline/wizedocs/tree/main/mkdocs_README.md) directory.

## Collaborating

You can add new pages to the Wizeline Docs as Code repository to update the site
using the GitHub user interface (UI) or via the Command Line Interface (CLI).

### Adding New Pages Using the GitHub UI

To add a new page using the [GitHub](https://github.com/) UI, follow the next steps:

1. Navigate to the
   [`wizedocs/docs/`](https://github.com/wizeline/wizedocs/tree/main/docs)
   directory in the Wizeline Docs as Code repository.

2. Click the **Add file** button on the top right corner and choose to **Create
   a new file** or **Upload files** if you have a document ready.

   >**Note**: Use the navigation levels to name your `.md` file. Separate the
   >navigation levels that lead to your document with a period and use hyphens
   >instead of spaces. For example, if you have a document named "Style Guide for
   >Contributors" in a writing section under contributors, name your file as follows:
   >
   >`contributors.writing.style-guide-for-contributors.md`

3. Create a Markdown file with the documentation you want to add to the site.

   >**Important**: Your document must include the following details before
   >its contents:  
   > `---`  
   > title: [*Title of your document*]  
   > summary: [*Include a brief description of your document*]  
   > authors: [*Include your name and the names of any additional collaborators*]  
   > labels: [*Key words separated by a comma, example: "wizeline, tw"*]  
   > sections: [*Path to section in navigation, example: "For Everyone/SRE"*]  
   > document-type: [*Tutorial, How-to Guide, Reference or Explanation*]  
   > `---`  
   >
   > You can consult this
   > [raw document](./contributors.tutorials.markdown-guide-for-contributors.md)
   > to see an example.

4. Fill the fields in the **Commit new file** section.

5. Select the **Create a new branch for this commit and start a pull request** option.

6. Click the **Commit new file** button.

### Adding New Pages via CLI

To add a new page using the command line, follow the next steps:

1. Clone the repository:

   ```bash
   git clone git@github.com:wizeline/wizedocs.git
   ```

2. Navigate to your local `wizedocs/docs/` directory and create your own branch
   as follows:  

   ```bash
   git checkout -b your-branch
   ```

   >**Note**: Give your branch a name that relates to the document you are creating.

3. Create a new `.md` file into the `wizedocs/docs/` folder. Remember to follow
   the naming convention described in step two of [Adding New Pages Using the GitHub
   UI](#adding-new-pages-using-the-github-ui) and include
   the details described in step three at the top of your document.

4. Add to Git the files you create and modify using the `add` command:

    ```bash
   git add 'your-document.md'
    ```

5. Commit and push your changes:

   ```bash
   git commit -m 'description of commit'
   git push -u origin your-branch
   ```

6. Go to the GitHub
   [repository](https://github.com/wizeline/wizedocs) and create a pull request;
   this action enables you to add a reviewer for the document. Once you complete
   the review and everything looks good, you can continue the process and merge
   the changes. At this point your document will appear on the site.

## References and Further Reading

Consult the following resources for more information on MkDocs and using Git:

- Detailed information about writing your documents with MkDocs is available on the [MkDocs official website](https://www.mkdocs.org/user-guide/writing-your-docs/).
- GitHub branching, pull requests, and merging resources:
  - [Creating a New Branch in GitHub Made
    Effortless](https://zepel.io/blog/how-to-create-a-new-branch-in-github/) by
    Vikash Koushik.
  - [Git Branches FAQ](https://www.git-tower.com/learn/git/faq/create-branch/)
    from the Tower website.
  - [Creating a Pull
    Request](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)
    from GitHub Docs.
  - [Pull Request Tutorial](https://yangsu.github.io/pull-request-tutorial/) by
    Yang Su.
  - [Merging a Pull
    Request](https://docs.github.com/en/github/collaborating-with-pull-requests/incorporating-changes-from-a-pull-request/merging-a-pull-request)
    from GitHub Docs.
