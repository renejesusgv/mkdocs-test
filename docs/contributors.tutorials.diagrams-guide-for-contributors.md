---
title: Diagrams Guide for Contributors
summary: An overview to learn how to use some usefuls diagram types 
sections: 
  - For Contributors/Tools
document-type: tutorial
---

# Diagrams Guide for Contributors

MermaidJS is the library we use to transform text into cool-looking diagrams. It supports different types of diagrams; the list is here, and every item
has a link to the official library's documentation.

- [Flowcharts](https://mermaid-js.github.io/mermaid/#/flowchart)
- [Sequence](https://mermaid-js.github.io/mermaid/#/sequenceDiagram)
- [Class](https://mermaid-js.github.io/mermaid/#/classDiagram)
- [State](https://mermaid-js.github.io/mermaid/#/stateDiagram)
- [Entity Relationship](https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram)
- [User Journey](https://mermaid-js.github.io/mermaid/#/user-journey)
- [Gantt](https://mermaid-js.github.io/mermaid/#/gantt)
- [Pie Chart](https://mermaid-js.github.io/mermaid/#/pie)
- [Requirement](https://mermaid-js.github.io/mermaid/#/requirementDiagram)

This document is not an extensive guide on creating complex diagrams but a reference overview of what you can do using Mermaid in Wizedocs. We hope
Wizeliners can get the best out of the library.

## Turn Text into Diagrams

To start creating diagrams, you need to define a block of lines that contains the diagram. The symbols we use for this are the triple
backticks → \`\`\` or,  the triple tildes → `~~~`. Ensure to wrap with triple backticks or tildes at the start and at the  end and write
either `mermaid` or `diagram`. For example:

>**Note**: The empty line is where you write your mermaid-syntaxed text.

~~~markdown
  
  ```mermaid
    
  ```

~~~

## Flowchart Diagrams

To use flowchart diagrams, use the keyword `graph`. This creates a
vertical-oriented flowchart, but you can also create a horizontal-oriented one,
by simply adding the letters `LR`, which stand for _Left to Right_. Then you can
define nodes and their flow with different keywords or symbols. For example:

~~~markdown

  ```diagram

    graph LR
      A[Hard] -->|Text| B(Round)
      B --> C{Decision}
      C -->|One| D[Result 1]
      C -->|Two| E[Result 2]

  ```

~~~

The previous snippet creates the following:

~~~diagram

  graph LR
    A[Hard] -->|Text| B(Round)
    B --> C{Decision}
    C -->|One| D[Result 1]
    C -->|Two| E[Result 2]

~~~

## Sequence Diagrams

Use the `sequenceDiagram` keyword for this kind of diagram, which renders the next lines as sequence diagrams. You can also change the type of
arrow for each interaction. To see the different types of arrows available, see the
[Messages](https://mermaid-js.github.io/mermaid/#/sequenceDiagram?id=messages) section from the Mermaid documentation.

~~~markdown

  ```mermaid
    sequenceDiagram
      Alice->>John: Hello John, how are you?
      loop Healthcheck
          John->>John: Fight against hypochondria
      end
      Note right of John: Rational thoughts!
      John-->>Alice: Great!
      John->>Bob: How about you?
      Bob-->>John: Jolly good!
  ```

~~~

The previous code results in the following:

~~~mermaid
  sequenceDiagram
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
~~~

## Class diagrams

Use the `classDiagram` keyword for this kind of diagram. You can write down classes, their attributes, methods, and relations.
You can also configure their visibility settings. Consult the
[Visibility](https://mermaid-js.github.io/mermaid/#/classDiagram?id=visibility) section from the Mermaid documentation.

~~~markdown

  ```mermaid
    classDiagram
      Animal <|-- Duck
      Animal <|-- Fish
      Animal <|-- Zebra
      Animal : +int age
      Animal : +String gender
      Animal: +isMammal()
      Animal: +mate()
      class Duck{
        +String beakColor
        +swim()
        +quack()
      }
      class Fish{
        -int sizeInFeet
        -canEat()
      }
      class Zebra{
        +bool is_wild
        +run()
      }
  ```

~~~

The previous snippet results in the following:

~~~mermaid
  classDiagram
    Animal <|-- Duck
    Animal <|-- Fish
    Animal <|-- Zebra
    Animal : +int age
    Animal : +String gender
    Animal: +isMammal()
    Animal: +mate()
    class Duck{
      +String beakColor
      +swim()
      +quack()
    }
    class Fish{
      -int sizeInFeet
      -canEat()
    }
    class Zebra{
      +bool is_wild
      +run()
    }
~~~

## Entity Relationship Diagrams

To enable these diagrams, use the `erDiagram` keyword.
Consult the relationship syntax for these diagrams in the
[Relationship Diagram](https://mermaid-js.github.io/mermaid/#/entityRelationshipDiagram?id=relationship-syntax) section from the Mermaid documentation.

~~~markdown

  ```mermaid
    erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
      string registrationNumber
      string make
      string model
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
      string firstName
      string lastName
      int age
    }
  ```

~~~

The previous snippet results in the following:

~~~mermaid
  erDiagram
    CAR ||--o{ NAMED-DRIVER : allows
    CAR {
        string registrationNumber
        string make
        string model
    }
    PERSON ||--o{ NAMED-DRIVER : is
    PERSON {
        string firstName
        string lastName
        int age
    }
~~~
