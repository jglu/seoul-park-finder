# UI Guide

Shared UI defaults for Seoul Park Finder. This is a proposal, so open an issue or comment on the PR if you want to change something.

## Rules

1. **Use tokens, not raw values.** Colors, font sizes, spacing and radius come from `:root` in `style.css`.
   ```css
   /* good */  padding: var(--space-2); color: var(--color-primary);
   /* avoid */ padding: 16px;           color: #178a4a;
   ```
   If you need a new value, add a token instead of hard-coding it.
2. **Buttons use `.btn`.** `<button class="btn">...</button>` gives the shared size, focus ring and hover state.
3. **Tap targets are at least 44px** (`--tap`), because most people will use this on a phone.
4. **Mobile first.** Write the mobile style first, then override inside `@media (min-width: 768px)`.
5. **Keep focus visible.** Don't remove `outline` without giving a replacement.

## Tokens

| Group | Tokens |
|---|---|
| Color | `--color-primary` `--color-primary-dark` `--color-primary-light` `--color-bg` `--color-surface` `--color-text` `--color-text-sub` `--color-border` |
| Difficulty | `--easy` `--moderate` `--hard` |
| Font | `--font` · sizes `--font-title` (18px) `--font-body` (16px) `--font-sub` (14px) |
| Spacing | `--space-1` (8px) `--space-2` (16px) `--space-3` (24px) |
| Shape | `--radius` (14px) `--radius-pill` `--shadow` |
| Size | `--tap` (44px) |

## Layout

```
Mobile (< 768px)              Desktop (≥ 768px)
┌────────────────┐            ┌──────────────┬───────┐
│ header         │            │ header               │
├────────────────┤            ├──────────────┬───────┤
│                │            │              │ info  │
│ map            │            │ map          │ panel │
│                │            │              │ 380px │
├────────────────┤            │              │       │
│ info panel     │            └──────────────┴───────┘
│ (bottom sheet) │
└────────────────┘
```

- `.app-header`: title + header actions
- `.map-area`: map and floating map controls (like `#locate-btn`)
- `.info-panel`: park details and lists; scrolls on its own

## style.css sections

The file is split into numbered sections. Add new styles to the matching section so the file stays easy to find things in:

1. Design tokens · 2. Base · 3. Shared button · 4. Header · 5. Layout · 6. Info panel · 7+. Components / elements created by `app.js`
