# Portfolio Theme System

All shared color decisions live in `src/styles/tokens.css`. Components should use semantic roles such as `--brand`, `--surface` or `--muted`; they should not introduce a new hex value when an existing role fits.

## Theme palette

| Role           | CSS token              | Light — Sky            | Dark — Deep Space       | Usage                                     |
| -------------- | ---------------------- | ---------------------- | ----------------------- | ----------------------------------------- |
| Brand          | `--brand`              | `#168BDA`              | `#5EA8FF`               | Active navigation, links, primary actions |
| Strong brand   | `--brand-strong`       | `#0B6FB8`              | `#347FE4`               | Hover and pressed states                  |
| Accent         | `--accent`             | `#56C2FF`              | `#63D7FF`               | Supporting glow and secondary controls    |
| Highlight      | `--highlight`          | `#F6C453`              | `#F6C453`               | Focus rings and small emphasis only       |
| Page           | `--page`               | `#F4FAFF`              | `#050816`               | Main canvas                               |
| Surface        | `--surface`            | `#FFFFFF`              | `#0A1024`               | Cards and dialogs                         |
| Soft surface   | `--surface-soft`       | `#EAF6FF`              | `#101A33`               | Nested panels and icon wells              |
| Raised surface | `--surface-raised`     | `#FFFFFF`              | `#121E39`               | Hovered or floating panels                |
| Text           | `--text`               | `#0B233D`              | `#EFF7FF`               | Primary copy                              |
| Muted text     | `--muted`              | `#607D98`              | `#94A8C3`               | Supporting copy                           |
| Chrome         | `--chrome`             | translucent cloud blue | translucent cosmic blue | Header                                    |
| Dock           | `--dock-bg`            | deep ocean blue        | near-black cosmic blue  | Proof Dock                                |
| Neutral logo   | `--brand-icon-neutral` | `#111827`              | `#F8FBFF`               | GitHub, Notion and Vercel marks           |

## Progress spectrum

| Segment | Token               | Meaning              |
| ------- | ------------------- | -------------------- |
| Green   | `--progress-green`  | Entry / beginning    |
| Yellow  | `--progress-yellow` | Early exploration    |
| Orange  | `--progress-orange` | Deeper evidence      |
| Red     | `--progress-red`    | Contact / completion |

The colors form one continuous progress ring. They do not represent quality or skill level.

## Shared-use rules

1. New components import no palette file; the tokens are globally available through `styles/index.css`.
2. Use `--brand-rgb` when an alpha channel is necessary: `rgba(var(--brand-rgb), 0.2)`.
3. Use `--surface` and `--surface-soft` instead of hard-coded white or navy panels.
4. White remains valid only when content sits on a guaranteed dark/brand background.
5. The old `--purple`, `--yellow` and `--sky` names are compatibility aliases. New code must use semantic names.
6. Cursor artwork has a light-theme and dark-theme pair, but both remain blue and retain the same shape.
7. Motion must use `--ease` or `--ease-out` and continue to respect the portfolio motion toggle and `prefers-reduced-motion`.
8. `tien-rooster-mark.svg` is the single logo source for both site identity and favicon.

## File ownership

| File                      | Responsibility                                            |
| ------------------------- | --------------------------------------------------------- |
| `tokens.css`              | Theme values, shared color and motion tokens              |
| `foundation.css`          | Reset, typography, page-level layout primitives           |
| `shared-ui.css`           | Reusable buttons, headings and badges                     |
| `navigation.css`          | Header, Proof Dock and display controls                   |
| `motion.css`              | Cross-section motion language and reduced-motion behavior |
| Section CSS files         | Layout unique to that section; consume shared tokens      |
| `src/config/portfolio.js` | Shared navigation, résumé, contact and social data        |
