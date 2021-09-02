---
title: GitHub Project and Static Site as SSOT
labels: ssot, github
sections: 
  - About
document-type: explanation
---

# Analysis of a GitHub Project and a Static Site as a Single Source of Truth

The purpose of this document is to present a brief analysis of using GitHub and a static site as a Single Source of Truth (SSOT) for Wizeline.

## Advantages and Disadvantages of Using GitHub to build a Single Source of Truth

Using GitHub to build an SSOT has some advantages and disadvantages, this
section considers those that have a bigger impact.

### Advantages

GitHub and a static site as an SSOT have the following advantages:

- **Version control**: GitHub is built with version control in mind, it is its
  main purpose, and on the platform each file has a history that makes it easy
  to explore the changes that occurred to it.
- **Collaboration**: This is one of the main features of GitHub, it enables a
  seamless collaborative workflow with the help of
  [branches](https://docs.github.com/en/github/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches)
  and [pull
  requests](https://docs.github.com/en/github/collaborating-with-pull-requests).
- **Confidentiality**: Customizable permissions enable you to restrict access to projects.
- **Tool integration**: GitHub provides flexibility with a wide range of tools
  and integrations that can improve the user experience and help create a more
  agile workflow. [GitHub Marketplace](https://github.com/marketplace?type=)
  offers numerous applications, some of them and some features are free.
  Additionally GitHub can integrate with third-party platforms like Amazon and Google Cloud.
- **Already used**: The majority of technical users within the organization are familiar with GitHub and use it to collaborate on projects.
- **Identity and access**: GitHub has transparent tools to manage access to
  repositories; this article on [identity and access management for your
  enterprise](https://docs.github.com/en/github-ae@latest/admin/authentication/managing-identity-and-access-for-your-enterprise/about-identity-and-access-management-for-your-enterprise)
  details the access options for an organization.
- **Markdown**: GitHub interprets Markdown language natively. You can create and
  edit documents within the platform.
- **Governance**: You can setup governance rules for the project that work
  best for the organization and update as needed. This article on [leadership
  and governance](https://opensource.guide/leadership-and-governance/) explores
  the topic in depth.
- **Cost**: You can create projects using numerous free tier features and the
 services that incur a fee are affordable.

### Disadvantages

GitHub and a static site as an SSOT have the following disadvantages:

- **Adoption rate**: Depending on the technical level of the user, adoption
  rates can vary. It is difficult for first-time users of GitHub, Git and
  version control in general, to adapt to the tools.
- **Accessibility**: Compared to Confluence, creating and sharing content on
  GitHub requires a few more steps; therefore, there is a learning curve for
  non-technical users.
- **Security**: GitHub offers the possibility of private repositories, but there
  is a low level of detail that you can set up. If a user has access to a
  repository it means access to the whole project. Additionally, GitHub provides
  the security settings; therefore, they don't depend on the organization.
  GitHub security breaches can expose your projects.

## GitHub as a Single Source of Truth for Wizeline

The following sections explore the different things Wizeline must consider
to implement GitHub as an SSOT for Wizeline.

### How to Allow Any Wizeliner to Contribute

GitHub was created with collaboration in mind, but it also provides the ability
to manage access with a certain degree of granularity. You can change permissions
for a team or person as indicated in this article about [managing teams and people with access to your repository](https://docs.github.com/en/github/administering-a-repository/managing-repository-settings/managing-teams-and-people-with-access-to-your-repository).

### How to Keep Information Up to Date

With the integrations and tools available for GitHub, you can run automatic
checks for your documentation to verify the status of the content. For example,
you can run tests to check that any links included in the documents are working
properly.

GitHub enables teams to avoid manual tasks that are slow and prone to errors.
For this reason, documentation maintenance becomes an easier, more efficient
task when using this tool.

### How to Decentralize the Governance of Documentation

With the help of automation, you can implement strategies that make new content
go through certain filters before publishing. These filters can work at
different tiers, going from recommendations to errors. The
workflow does not get interrupted and it is not depending only on a review from
a human. This makes it possible to operate with an approach that looks more like
guardrails rather than that of gatekeepers.

### How to Propose Changes Across Multiple Documents or Pages

One of the main advantages of using Git is that you can propose changes across
various documents with one request. This increases flexibility and enables
collaborations to make a bigger impact.

### How to Make Contributing Accessible for Non-Technical and Technical users

Technical users are already familiar with version control and can easily adapt
to this style of collaboration. However there is a learning curve to consider
with non-technical users; they need to become familiar with the terms and tools
for Git and GitHub. The organization must design a teaching strategy for
those who are using this system for the first time.

### How to Make Finding Information Easy and Intuitive

[Searching
code and
files](https://docs.github.com/en/github/searching-for-information-on-github/getting-started-with-searching-on-github/about-searching-on-github)
on GitHub is not only limited to knowing a few key words or the name of the
specific file. The search capabilities of the site are extensive and useful.

On the static site side, finding information depends on the configurations set
in place. This gives the team flexibility to better adapt to the needs of the
users and is superior to other platforms that don't have the option to modify
the search process.

### How to Make Async Collaboration Possible

Async collaboration can come in the form of collaborative editing and review
processes. This is one of the main features that the organization can take
advantage of when using GitHub. There is a seamless contribution and review
process in place. Teams must agree on a few rules and the platform can
handle the rest.

### How to Make Wizeliners Aware of Needed Contributions

GitHub enables you to create projects, this functionality includes a board that
aligns with agile methodologies and follows the same structure as Jira boards
and Trello, tools that the members of the organization already know and use.

### How to Get Feedback from the Right People for Contributions

Similar to using Confluence, Wizeline needs tooling and governance to achieve
this, but many of the tools that enable this on GitHub are free and have a
seamless integration to the workflow.
