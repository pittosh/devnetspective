---
title: Effective artifacts to use on modern WOA/SaaS projects
author: Shahid N. Shah
type: post
excerpt: This post summarizes the recommended artifacts in an agile methodology called SPEED
date: 2008-11-23T04:58:35+00:00
url: /blog/effective-artifacts-to-use-on-modern-woasaas-projects/
categories:
  - Netspective Blogs
  - Uncategorized

---

This post summarizes the recommended artifacts in an agile methodology called SPEED (Streamlined Process for Effective Enterprise Development) &#8211; seediagram below.

### Overview

Let&#8217;s start with some overall thoughts before we dive into this busy picture:


  
* **Grouping**: Artifacts are grouped into the functional areas that comprise software project teams: Management, Analysis, Development, Documentation, Testing, and Operations. Many artifacts related to software products are also created by teams that take the software to market and interface with prospects and customers: Services, Marketing, and Sales.

* **Minimalism**: Strictly limit artifacts to only those that directly help conceive and build quality software.Ensure that each artifact has &#8220;consumers&#8221; who will use the artifact and derive value. On agile projects, every artifact should be as &#8220;lean and mean&#8221; as possible.If a one-page diagram or writeup suffices, that is ideal. If not, still try to be as brief as possible.
 
* **Iterations**: Most artifacts should be created in an iterative fashion.They often start out as a simple outline and then get fleshed out as the project proceeds and details become known. Some artifacts (shown in <em>italics</em>) are useful when they are initially created and can subsequently be abandoned as the project proceeds (e.g. a GUI Storyboard doesn&#8217;t need to be updated after its purpose is served and the actual GUI is being built).

* **Ownership**: While many artifacts are created in a collaborative fashion it is generally recommended that one person &#8220;owns&#8221; each artifact and acts as its &#8220;committer.&#8221; This will ensure the artifact&#8217;s conceptual integrity and improve quality.

* **Maintainability**: Push technical documentation to lowest level possible (e.g., in code instead of a design document).This vastly improves the chances that such documentation will be read and later maintained as the code matures.

* **Reviews**: Only expend limited quality assurance (QA) efforts on artifacts that are project or customer deliverables. For only these artifacts, clarify their compliance with guidelines (use of templates, adherence to standards, etc.)

Note that some artifact names have portions enclosed in angle brackets this is a notation to indicate a templatized name that should be substituted by an actual name (e.g., <Component> Design may be instantiated as Authentication Design).Now let&#8217;s walk through some high-level commentary about the artifacts shown in the diagram grouped by functional area.


### Management


  * As a project is initiated, the Program Manager creates a project Strategy and Initiation Plan to kick things off and gain approval for proceeding. These two artifacts address broad &#8220;why, what, how, and when&#8221; questions about the project.The Project Sponsor uses these artifacts to gain approval for the project.
 
  * The Process Coach creates process artifacts ( **Methodology**, **Artifacts**diagram, and **Internal Release Process**) collectively specify the software development lifecycle (SDLC) and periodically refines these as the team learns from execution. At the end of internal releases or the whole project, the team reflects on how things went and captures lessons learned in **Internal** **Release Assessments** or a **Post Mortem Report** respectively. These lessons drive ongoing process tuning by the Process Coach.

  * The Program Manager works with the Initiation Team to create a **Communications Plan ** shows how the team members will communicate (meetings/huddles, collaboration tools) and captures how to spread the word about the project both internally and externally.

  
  * After project approval, the Program Manager works with various Functional Team Leads to create a Release/Staffing Plan. This artifact defines the project&#8217;s incremental phases/internal releases and the team structure and staffing/roles.The Program Manager collaborates with the Release Manager to coordinate internal and external releases.
  
  * As the project kicks off, each Functional Team Lead (for Analysis, Development, Testing, and Documentation) creates a **<Functional>** **Team Plan** showing who will do what at a macro level. For each internal release, Team Plans are subsequently detailed to show tasks/assignments/effort estimates and load balanced on a weekly basis during execution. Functional Team Leads e-mail a **<Functional>** Team Weekly Status update to the Program Manager who conducts a weekly team meeting and distributes an overall project Status Report <Week>



### Analysis

  * The Business Architect (typically a domain expert and/or a power user) defines germane terminology in a Glossary, portrays the typical users as Personas, and describes what they want to do with the software via informal User Stories.

  * Product Managers define the project&#8217;s high-level ** Scope ** and create a compelling presentation showcasing the project&#8217;s ** Highlights **. They should also create a ** Functional Architecture ** diagram to illustrate the macro logical components of the system and their interrelationships, while a concomitant spreadsheet explains what each of these components signify. 
    
  * The Analysts also create a Domain Model spreadsheet listing the business entities that the software will operate with. 
  * As Business/Functional Analysts work with Architects and Developers to analyze and design the system, they create ** Concept Models ** to capture what the user&#8217;s mental model is for the software&#8217;s underlying concepts. The Wireframe Modeler creates wireframe GUI layouts packaged into a ** GUI Storyboard **, while styles and branding are specified via a ** Visual Design Concept ** by the Graphics Designer. Detailed user interactions are modeled via ** <Component> ** ** GUI Statecharts ** and other specifications are captured as ** <Component> ** ** Requirements **these artifacts are started by Analysts but completed by Architects and Developers during development.
  


### Development


  * Early on in the project, Architects evaluate macro technical choices via Alternatives> Evaluation matrices (scores against weighted criteria). Developers may be involved to build throwaway Prototypes to explore details of some of these technical alternatives.
  
  * Before much code is written, the Build Engineer should work with Developers to define and automate Configuration Management (CM) and Continuous Integration (CI) and capture relevant tools/steps in a Build Process document.
  
 
  * The high-level structure of the software should be captured by Architects in a Technical Architecture diagram & document. Architects and Developers then create <Component> Design documents to propose, solidify, and explain the non-trivial aspects of the code. How existing code or customers will be affected may be formally analyzed and documented in Impact Analysis writeups jointly created by Architects and Developers. If security is important to the project, a formal architectural risk analysis by a Security Architect will result in a Threat Model outlining the key vulnerabilities/Abuse Cases of the system, which then should be mitigated via design or code changes. To help explain the system <Component> Object/Data Models are often created by Architects and Developers, initially &#8220;as planned&#8221; and finally &#8220;as built.&#8221;
  
 
  * Various technical standards (API Strategy, <GUI, Server, Database> Coding Standards, and GUI Style Guidelines) should be defined by Architects and Developers early on in the project and refined as the design and code evolves.
  
 
  * If there is legacy or pre-existing code that will be leveraged by the project, a Code Reuse Assessment writeup capturing components, their responsibilities, and key collaborations is very helpful. Data conversion steps for upgrading customers are captured in a Data Conversion Plan.
  
 
  * An <Internal Release> consists of demonstrable code and a growing set of unit tests will eventually grow into the External Release at the end of the project. <Internal Release> Notes at the end of each cycle are used to communicate what features, fixes, and known limitations people should be aware of as the growing codebase is tested.
  
 
  * As external components are incorporated into the code, Developers must add them to the Off-the-Shelf Components list to ensure proper licensing and version tracking/upgrades.
  

  

### Testing


 
  * The Testing Team Lead creates a risk-driven Test Strategy document to specify the overall approach and needs for testing including environment/tools, automation strategy, and quality metrics.
  
 
  * The Testing Team Lead creates an Issue Tracking Workflow & Submission Checklist to clarify how issues (defects and/or enhancements) are submitted, fixed, verified and to specify severity level definitions and need for supporting information when submitting issues.
  
 
  * The Testing Team Lead and Testers collaborate to create <Area> Test Plans for various functionality and non-functional areas which are subsequently fleshed out by Manual Testers as Test Cases/Data or by Test Automation Specialits as Regression Test Scripts/Data.
  
 
  * The Testing Team Lead delivers internal testing results via a Test Execution Report detailing what tests passed or failed and comments from Testers and output from failed test scripts. If external validation for specialized areas is sought, they result in <Usability, Security, Performance> Assessment Reports.
  


### Documentation


 
  * Technical Writers produce User Documentation such as online help/tutorials, user/training guides, and external release notes.
  
 
  * Many systems also ship with Product Content like tips, best practices, templates, and samples which are typically created by Professional Services staff.
  


### Operations


 
  * The Operations Manager creates a Deployment Strategy to define how the software will be moved into production and to map out the various configurations needed for the live system.
  
 
  * The Operations Manager should also create an Operational Readiness Checklist to ensure that all the i&#8217;s are dotted and t&#8217;s are crossed as the system is moved into production.
  


### Services


 
  * Most enterprise-class software requires a set of Professional Services Offerings defined by the Professional Services Team who also is responsible for creating specific Customer Upgrade Strategy documents and Implementation Plans.
  


### Marketing


 
  * The Marketing Manager creates a Product Launch Strategy to plan the activities surrounding the &#8220;go to market&#8221; timeframe.
  
 
  * The Marketing Specialist creates Product Collateral to assist in sales efforts.
  


### Sales


 
  * The Sales Manager in collaboration with the Sales Account Executives creates a Product Sales Strategy to clarify the target markets and pricing.
  
 
  * The Sales Support Specialist creates a Sales Presentation and Sales Demo as the project is wrapping up so that these will be ready alongside the finished software.
  

