---
title: Wizeline Docs Project Charter
summary: A brief description of my document.
status: Planning
labels: wizeline, docops, project, onepager
sections: 
  - About
document-type: explanation
---

## Introduction

Single source of truth (SSOT) is a concept used to ensure that everyone in an organization bases their business decisions on
the same information. As Wizeline continues to grow, this becomes a more significant challenge as the company does not have a clear SSOT or
governance to keep it. Wizeline has tried to achieve this on different occasions but has failed to maintain it.

As software services companies have adopted the DevOps - Agile methodology to deliver software at high speed, Wizeline's
documentation and writing process lack the same ability.

The team believes that adopting a git, Docops, and a Docs-like-code approach can help Wizeline achieve a true SSOT.

Adopting these practices enables Wizeline members to collaborate using the same or similar tools that Wizeline uses for software such as governance, linting,
 reviewing, publishing, automation, analytics, notifications, scanning, asynchronous collaboration.

## Scope

 The following is the scope of this project:

- Start with Engineering Practices and Disciplines information.
- Single source of guides, tutorials, how-to's, explanations, and discussions about why teams do things in Wizeline.
- Deliver value ASAP, not just tooling or processes.
- Automate the review, simple governance, and publishing of documents.
- Demonstrate the MVP Value (have a single SSOT with governance + tooling).

## Success Criteria

The following are the factors that decide if this project is successful in the eyes of the stakeholders:

- Wizeline Tech Horizontal Orgs (Portfolios is nice to have) have an SSOT for all documentation.
- Propose a documentation flow similar to the CI/CD flow for software development.
- Documentation structure favors reader accessibility over content creation accessibility.
- Reusability of content.
- Content is searchable.
- Analytics on documentation.
- Collaboration is asynchronous to favor remote or different time zone collaboration.

## Deliverables

The following are the deliverables of the project:

- Must be tangible (for example, a product or service).
- Signals the completion of a project phase.
- An important sign for the client.
- A point for the client to sign-off on project status.

## Budget

This section includes the cost estimate and information about spending authority. The team does not have budget information at this phase of the project.

## Milestones

The milestones that determine that the project is complete are the following:

- Can be conceptual or tangible.
- Signals the reaching of a key stage in the project.
- An important sign for the team.
- A point for project management to select project goal alignment.

The following list comprises the items for completing the project.

- Pitch Idea to DLs.
- Get People assigned to solve the problem (if possible, get Wizeliners assigned in PSA).
- Create a clear value proposition of how Wizeline should address the documentation problem.
      - Document problem statement.
      - Document why SSOT is important.
      - Document why governance is important for a SSOT.
      - Document why maintenance is important for a SSOT.
      - Document why automation and decentralization are important.
      - Document why is it important to decouple reading from writing.
      - Document Structure for the main user (the reader).
      - Document Wizeline Style Guide.
      - Document content creation cycle/process/guidelines.
- Wizeline Guideline Creation
      - Language style guide.
      - Content Types guide.
      - Content Style guide per type.
      - Document Creation cycle guide.
      - Contribution guide.
      - Versioning guide.
      - Maintenance guide.
      - Review guide.
      - Request for contribution guide.
      - Documentation Structure for readers guide.
      - Documentation Analytics.
- Document analysis of confluence.
- Document analysis of github + static site.
- Decide and commit on how to solve the documentation problem.
- Set MVP structure.
- Set MVP  Automation to highlight value proposition.
      - Markdownlint.
      - Vale (style guide validation).
      - Flag old content.
      - Nav builder.
      - mkdocs Publishing.
      - Front matter validation.
      - Naming convention validation.
      - CODEOWNER review PRs.
      - Contributions from read only users.
      - Grammar Check.
      - Structure Check.
- Set MVP with General governance to high-level value proposition (content that is relevant, up to date, useful,
     traceable, searchable, available, trustful).
- Set MVP to highlight Accessibility for the reader.
- Set MVP to highlight Accessibility for the content creator.

## Constraints and Assumptions

`what are the project’s known and unknown parameters at this point?`

## Summary of Risks

`a high-level overview of significant threats to the project’s success`

## Team and Organization

The team in charge of this initiative consist of the following people:

| Team Member     | Project Role                       | Github Handle |
|-----------------|------------------------------------|---------------|
| Charly Castro   | Project Manager                    | @charlycastro |
| Laura Mata      | Site Reliability Engineer (SRE)    | @lauraehm     |
| Elisa Guerrero  | Site Reliability Engineer (SRE)    | @hiimwarrior  |
| Alan Malagón    | Software Engineer                  | @AlanMalagon  |
| René Gaspar     | Software Engineer                  | @renejesusgv  |
| Brenda Leyva    | Technical Writer                   | @BrendaLPhys  |
| Gerardo Velasco | Technical Writer                   | @geravm       |
| Armando Salazar | Technical Writer                   | @armando-slzr |

The following are previous collaborators for the project:

| Team Member     | Project Role                  | Github Handle |
|-----------------|-------------------------------|---------------|
| Charly Castro   | Project Manager               | @charlycastro |
| Esteban Castaño | Software Reliability Engineer | @estebancrw   |
| Saul Ortigoza   | Software Reliability Engineer | @sortigoza    |
| Luis Carbajal   | Software Reliability Engineer | @luisc09      |
| Mario Morales   | Technical Writer              | @moralesmario |
| Silvia Alvarado | Technical Writer              | @sAlvaradoM   |

## Approvals

The following list represents the approval levels for the different requirements of the project:

- IT - Administration and governance on other tools
- Eng Leads - Commitment and promotion
- Others (TBD, non-tech users to validate use cases)

## Notes

### Drive Issues

The following list represents some multiple issues that drive this effort:

- Visibility: It is hard to find information; links for documentation are non-readable.
- Governance: There is no way to ensure people follow recommended guidelines or processes, such as:
      - Styles
      - Templates
      - Confidentiality
      - TW publishing process (research, write, review, polish,  publish)
      - No way to add metadata
      - Outdated content
      - Automation
- Google Drive has limited searching capabilities.
- If someone leaves the company, content automatically gets migrated to the next responsible, but there is a risk of losing this information.

### Drive Pros

- Granularity on who can see what (confidentiality).
- Accessibility, effortless for everyone to add content.
- Good integration with G Suite.
- Somewhat good simultaneous collaboration.

## References and Further Reading

Consult the following resources for more information:

- [DocOps Task Force](https://wizeline.atlassian.net/wiki/spaces/WTW/pages/1322189220/DocOps+Task+Force)
- [DocOps Purpose and Gitflow Process](https://wizeline.atlassian.net/wiki/spaces/WTW/pages/2166915087/TW-KB-0002+DocOps+Purpose+and+GitFlow+Processes)
- [DocOps Slides](https://docs.google.com/presentation/d/11p6qzwtPjYn8-2U5lzqOHTUeaDSsAyV0GwSjwhwlSGg/edit)
- [DocOps Handbook](https://wizeline.atlassian.net/wiki/spaces/WTW/pages/1434615826/DocOps+Handbook)
- [Success Story of DocOps for Customers](https://docs.google.com/presentation/d/1OOMBnMu1vdbOsg7zj8kVHr3QroKKRC20xYRivbAX9Rw/edit#slide=id.p)
- [Demo Site](https://expert-disco-b7c7c5a6.pages.github.io/index.html)
- [Demo Site Repo](https://github.com/wizeline/wizedocs)
- Proposed SSG: [mkdocs](https://www.mkdocs.org/)
- [Success Story from Gitlab YT Video](https://www.youtube.com/watch?v=pY5i0Io86UQ)
- [Resources from YT Video](https://gitlab.com/williamchia/git-merge-2018/tree/master)
- [Recommendations for Limiting a topic](https://www.brookdalecc.edu/humanities-institute/english/english-composition/limiting-the-topic/)
- [A Possible Doc Structure System](https://documentation.divio.com/introduction/)
- [Another Good Doc Structure](https://docs-guide.readthedocs.io/en/latest/structure/)
- [Old Wizeline Docs Repository](https://github.com/wizeline/wize-docs)
