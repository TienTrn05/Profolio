# Portfolio Concept: Proof Dock

## Problem to solve

The portfolio already contains useful material, but the experience still follows the familiar landing-page pattern: hero, projects, skills, tools, contact. Adding more sections would make it longer without making it more memorable.

The redesign therefore focuses on **how visitors move through the evidence**, not on adding decorative content.

## Core idea

`Proof Dock` turns navigation into the portfolio's signature interaction.

- The top bar becomes quiet identity chrome: name, role and résumé.
- A floating bottom dock acts as a map of the portfolio.
- The current destination expands so visitors always know where they are.
- Hovering or focusing an item reveals both the section number and its purpose.
- A circular meter shows reading progress without adding another detached bar.
- Contact is part of the story map rather than an unrelated button at the end.

| Chapter       | Meaning      | Visitor question                   |
| ------------- | ------------ | ---------------------------------- |
| `01 / ENTRY`  | Home         | Who is Tiến?                       |
| `02 / PROOF`  | Projects     | What has he built?                 |
| `03 / SYSTEM` | Capabilities | How does he work across the stack? |
| `04 / SETUP`  | Workflow     | Which tools support delivery?      |
| `05 / SIGNAL` | Contact      | How do I start a conversation?     |

## Inspiration, not duplication

- [Salimi](https://www.salimi.my/) demonstrates how floating bottom navigation can become a recognizable part of a portfolio.
- [Akash Parmar's Folio 2026](https://akash-codes.in/case-studies/folio-2026) treats navigation as part of a developer environment rather than generic site chrome.
- [Jilani's portfolio](https://jilani.dev/en/projects/portfolio) makes the visitor's reading depth an explicit product decision.
- [Brittany Chiang](https://brittanychiang.com/) keeps work evidence easy to scan even when the presentation has a strong visual identity.

This implementation does not copy their layouts. It combines a bottom dock, proof-oriented language and the existing purple/yellow identity into a distinct navigation system.

## Interaction specification

### Desktop

- The dock remains centered above the bottom edge.
- The active link expands to include its label.
- Hover or keyboard focus raises a compact preview card.
- An `OPEN TO WORK` marker and reading meter frame the links as a system console.

### Mobile

- The dock keeps five section icons but removes secondary chrome.
- The active item uses color and surface contrast instead of a long label.
- The existing menu remains available for labels and assistive navigation.
- Display settings move above the dock so controls never overlap.

### Motion and accessibility

- All destinations remain ordinary anchor links.
- `aria-current` identifies the active section.
- Hover previews also appear on keyboard focus.
- Preview text is supplementary; each icon link has a complete accessible label.
- Reduced motion removes dock travel without hiding content.

## Content guardrails

- Full-stack positioning remains the primary identity.
- Projects remain the main proof, with exactly three visible before View More.
- Tools describe workflow; capabilities describe knowledge and project evidence.
- Mobile and IoT remain supporting project context.
- No Experience or Qualification section is added without truthful source material.

## Future extensions

1. Convert case-study dialogs into addressable project routes.
2. Add a command palette that opens the same destinations as the dock.
3. Add `Quick Scan / Deep Dive` modes after more full-stack evidence is available.
4. Add a Build Log when truthful project dates and milestones are supplied.
