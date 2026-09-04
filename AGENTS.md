# Portfolio Direction and Editing Rules

This file records the product intent of this portfolio. Read it before making
content, layout, information-architecture, or project-order changes.

## 1. Primary positioning

- This portfolio exists to present **Trần Ngọc Tiến as a Full-stack
  Developer**.
- The primary technical direction is web development:
  - Frontend: React, TypeScript/JavaScript, HTML, CSS, Tailwind CSS.
  - Backend: Node.js, Express, REST APIs, authentication and validation.
  - Data: MySQL, PostgreSQL and related database design.
  - Engineering depth: testing, performance, reliability, deployment and
    scaling.
- Do not reposition the owner as a Mobile Developer, Flutter Developer, IoT
  Developer or Embedded Developer unless the owner explicitly changes the
  portfolio's career direction.
- Do not make Flutter, mobile, ESP32, IoT or media processing the headline,
  primary specialization or dominant capability group.

## 2. Role of mobile projects

- Flutter/mobile work is earlier and supporting experience.
- It demonstrates transferable skills such as UI implementation, state
  management, data flow, API integration, realtime communication and product
  delivery.
- Present this experience honestly, but always connect it back to the main
  full-stack direction.
- Do not hide or delete mobile projects merely because they are not web
  projects. They remain valid evidence of engineering experience until stronger
  full-stack projects are added.

## 3. Project-list behavior

- The Projects section is intentionally expandable.
- Exactly the first **three projects** should be visible by default.
- Project 4 and every later project (5, 6, and so on) must remain available
  through the **View More Projects** interaction.
- Never remove the fourth project as a way to shorten the page.
- Preserve the expandable list behavior when refactoring the section.
- New, stronger full-stack projects should be placed earlier in the list.
  Older or supporting projects can move behind View More, but should not be
  deleted without an explicit request.
- Each project should state clearly:
  - what the project does;
  - what Tiến personally owned or contributed;
  - the important engineering decision or problem;
  - which tools were used and what each tool was used for;
  - what evidence a reviewer can inspect.

## 4. IoT Health Monitor context

- IoT Health Monitor is a **university/classroom learning project**.
- It is not Tiến's specialization, capstone direction or representative career
  focus.
- Keep it after the three default projects, inside the expandable area, unless
  the owner explicitly requests another order.
- Label it as an academic/team prototype and avoid language that implies
  clinical validation, production readiness or professional specialization.
- Do not promote it into the hero, primary capabilities, headline project or
  principal case study.
- Communicate this context on the public page with concise tags such as `Course
Project` and `IoT Prototype`. Do not place blunt disclaimers such as "this is
  not my specialization" in visible portfolio copy.

## 5. Project context tags

- Use compact project tags to communicate origin, format and status without
  interrupting the project story with defensive explanations.
- Current tag vocabulary:
  - MoneyBoys: `University Team Project`, `Finance App`.
  - Mobile Teleprompter: `Team Project`, `In Development`.
  - Sky Tonight: `Team Project`, `Astronomy App`.
  - IoT Health Monitor: `Course Project`, `IoT Prototype`.
- Prefer short, neutral labels such as `Personal Project`, `Team Project`,
  `Course Project`, `Client Project`, `In Development`, `Prototype` or
  `Production` when applicable.
- Tags must describe context truthfully. Do not invent client, production or
  commercial status.

## 6. Skills and tools

- Do not present skills as an unexplained keyword wall.
- Use the pattern: **capability → tool → purpose → evidence**.
- Separate proven/current capabilities from topics that are still being
  deepened.
- Full-stack skills must remain primary. Mobile and IoT tools belong in a
  clearly labeled supporting-experience context.
- Do not invent metrics, ownership, production usage or repository evidence.

## 7. Current learning direction

- Do not frame the owner as relearning basic server creation or basic CRUD.
- The intended next layer is production-oriented full-stack engineering:
  - performance measurement and profiling;
  - query analysis and indexing;
  - automated testing and failure handling;
  - logging and observability;
  - caching and background jobs;
  - CI/CD and deployment;
  - reliability and horizontal scaling;
  - service boundaries and microservices only when justified by measured
    constraints.
- Microservices are not a decorative seniority signal. Present them as an
  architectural decision with costs and a concrete reason.
- Present learning topics as a horizontally scrollable list that can grow over
  time rather than limiting the section to three fixed cards.
- On desktop, show exactly three learning cards in the viewport. Keep later
  cards accessible with the arrow controls, but do not display a horizontal
  scrollbar below the list.
- Let the three desktop cards use the available container width. Keep them
  compact vertically by avoiding oversized visuals, excessive padding and
  large empty body areas; do not solve vertical sizing issues by narrowing the
  rail.
- Use a compact horizontal composition inside each learning card: a square
  visual thumbnail on the left and the learning content on the right. Do not
  use a full-width rectangular banner image above the content.
- The horizontal learning cards must still feel visually substantial. Use a
  prominent square thumbnail and enough vertical space for a complete card;
  avoid compressing the component into a thin toolbar-like strip.
- Use the image-left/content-right layout only on genuinely wide screens. At
  laptop and narrower widths, place the square visual above the text so the
  content column never collapses into narrow, word-by-word lines.
- Keep learning-card text comfortably readable at the site's 80% root font
  size. Descriptions, tags and source links must not be reduced merely to keep
  cards short; preserve legibility before compactness.
- Each topic should include a small visual, a concise explanation, relevant
  technology tags and a link to an authoritative learning resource.
- Official documentation links are welcome when they clarify what is being
  studied. Keep the topics beyond beginner CRUD material.
- Do not add a detached summary or milestone bar below the learning list unless
  it communicates a concrete, necessary piece of information.

## 8. Language and tone

- Public-facing copy must sound confident, natural and portfolio-ready rather
  than like an internal explanation of positioning decisions.
- Avoid defensive or corrective phrases such as:
  - "not my specialization";
  - "not another basic CRUD server";
  - "earlier projects prove my transferable direction";
  - explanations of why a project was kept, moved or hidden.
- Express the positive value directly. Let hierarchy, tags and project order
  communicate secondary context.
- Section headings must be short and immediately scannable. Prefer familiar
  portfolio language such as `Featured Projects`, `Full-stack Toolkit` and
  `Currently Learning`. Put supporting meaning in the subtitle instead of
  turning the title into a sentence.
- Do not expose implementation notes, content strategy or instructions to the
  visitor.

## 9. Content hierarchy

The preferred narrative order is:

1. Full-stack positioning and value proposition.
2. Project evidence, with three visible projects and an expandable archive.
3. Web-focused capabilities tied to tool purpose and evidence.
4. A compact production-engineering growth direction.
5. Contact information.

Avoid repeating the same stack description in the hero, projects, skills,
learning section and footer. Each section must answer a different question.

### Case-study presentation

- A case study should feel like a visual product story, not a document made of
  equally weighted text boxes.
- Lead with real project imagery and a compact role/stack/result summary.
- Group the narrative into a small number of distinct stages such as problem,
  decision and outcome. Avoid splitting closely related ideas into repetitive
  cards such as separate problem/context/challenge blocks.
- Use diagrams, icons, color and spacing to make architecture, contribution and
  tool purpose scannable before the visitor reads the supporting copy.
- Keep paragraphs concise and preserve clear visual hierarchy between project
  evidence, engineering decisions and supporting detail.

### Motion design

- Motion should be a recognizable part of the portfolio experience, not a
  single repeated fade-up applied everywhere.
- Give major areas distinct behavior: a composed hero entrance, visual reveals
  for project evidence, staggered capability and learning cards, animated data
  flows, and deliberate dialog transitions.
- Prefer transform and opacity animation, keep continuous ambient movement
  subtle, and reserve stronger motion for entry, hover or direct interaction.
- Pointer parallax may add depth on precise-pointer devices, but must not be
  required to understand or use the interface.
- Keep the desktop cursor familiar and restrained: use a compact purple arrow
  and a purple hand pointer for interactive elements. Do not add orbit rings,
  crosshairs, trailing labels, or cursor effects that compete with the content.
  Preserve the native cursor on touch or coarse-pointer devices.
- Always respect both the portfolio motion toggle and the operating system's
  `prefers-reduced-motion` setting on first use. An explicit choice in the
  portfolio motion toggle may override the system default. Reduced motion must
  preserve all content and interactions without long transitions.

## 10. Pre-edit checklist

Before completing a future portfolio change, verify all of the following:

- Is Full-stack Developer still the unmistakable primary identity?
- Is mobile clearly supporting experience rather than the career target?
- Are three projects visible before View More?
- Are project 4 and later projects still reachable through View More?
- Is IoT Health Monitor still presented as an academic learning project?
- Does every tool shown have a clear purpose or supporting evidence?
- Does the learning direction emphasize production depth instead of beginner
  backend material?
- Were any projects, claims or interactions removed without an explicit reason?
- Does all visible copy sound natural to a recruiter, without defensive or
  behind-the-scenes explanations?
- Is project context expressed through polished tags where possible?

If a requested change appears to conflict with these established decisions,
preserve this direction and clarify the conflict with the owner before making a
career-positioning or project-visibility change. An explicit new decision from
the owner can update this file and supersede the relevant rule.
