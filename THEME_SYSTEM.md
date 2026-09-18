# Portfolio theme and motion

The interface is built with Tailwind CSS 4 utilities. `src/styles/index.css` registers semantic Tailwind colors that read from `src/styles/tokens.css`, so the same utility classes work in both themes.

| Utility                  | Token         | Purpose                    |
| ------------------------ | ------------- | -------------------------- |
| `bg-page`                | `--page`      | Main canvas                |
| `bg-surface`             | `--surface`   | Cards and dialogs          |
| `text-ink`               | `--text`      | Primary text               |
| `text-muted`             | `--muted`     | Supporting text            |
| `bg-brand`, `text-brand` | `--brand`     | Main purple accent         |
| `bg-accent`              | `--accent`    | Secondary cyan accent      |
| `bg-highlight`           | `--highlight` | Small highlights and focus |

Theme selection sets `data-theme` on the root element. Tailwind's `dark:` variant follows this attribute, while semantic colors update through the tokens. New components should use utilities and semantic colors before adding CSS.

The remaining CSS files have narrow responsibilities:

- `foundation.css`: root sizing, typography, focus, skip link and page defaults.
- `workflow-tools.css`: marquee keyframes, edge mask and theme-aware logo card tints.
- `reveal.css`: shared intersection reveal and center-origin project reveal.
- `motion.css`: composed hero entrance and reduced-motion behavior.
- `cursor.css`: compact purple cursor on precise-pointer devices.

The motion toggle stores an explicit user preference and can override the operating system default. Without an explicit choice, the initial preference follows `prefers-reduced-motion`.
