# Ghost AI Design System

Ghost AI is a gaming data-management product: it ingests analytics from live games, synthesizes it into readable analysis, and turns findings into actionable tasks and project plans for studio teams (producers, live-ops, data analysts).

## Sources
- `uploads/AMZN_DESIGN.md` — a Figma-extraction of a **generic shadcn/ui community component kit** ("shadcn/ui components with variables & Tailwind classes — Updated January 2026 (Community) (Copy)", 78 pages, ~6800 components). This is **not** Ghost AI's own product file — it is a public shadcn/ui reference library the team pointed us at for structural grounding (spacing scale, radii, shadow steps, component inventory: Accordion, Alert, Alert Dialog, Aspect Ratio, Avatar, Badge, Breadcrumb, Button Group, and dozens more pages not fully expanded here).
- No Ghost AI brand file (logo, product screenshots, marketing site) was provided. Every visual identity decision below (color direction, voice, dark-first theming) was made fresh for Ghost AI, using the shadcn kit only for structural tokens (spacing/radius/shadow values) and component shapes, per user direction gathered via clarifying questions.

## What's real vs. invented
- **Verbatim from source:** spacing scale, radius scale, shadow/elevation steps, and the *shape* of components (button sizes, badge types, breadcrumb variants) — copied exactly, not rounded to a different grid.
- **Invented for Ghost AI:** the color system (lime-green accent kept from the source palette, dark-mode-first semantic surfaces authored new since the source kit is light-only), the wordmark treatment, tone of voice, and all UI kit content/copy (fictional game titles, metrics, task text).
- **No logo exists.** Wherever a mark would go, we render the plain wordmark "Ghost**AI**" in Geist — see `guidelines/brand-wordmark.html`. Do not invent a logo.

## Layout
- `styles.css` — root stylesheet, `@import`s only. Link this one file.
- `tokens/` — `colors.css`, `typography.css`, `spacing.css`, `radius.css`, `shadow.css`, `fonts.css` (Google Fonts substitution, see Typography below).
- `base.css` — global resets (link/selection/scrollbar/focus-visible/`prefers-reduced-motion`).
- `guidelines/` — 14 foundation specimen cards (Colors, Type, Spacing, Brand groups in the Design System tab; includes `accessibility.html`).
- `GHOST_AI_DESIGN.md` — the full design standard: principles, quality bar, content voice, interaction states, and the WCAG 2.2 AA accessibility floor (§7). Load this as always-on context before any Ghost AI UI build.
- `components/` — reusable React primitives, grouped by concern:
  - `core/` — Button, Badge
  - `forms/` — Input, Select, Checkbox, Switch
  - `surfaces/` — Card, Alert, Avatar (+ AvatarGroup)
  - `navigation/` — Tabs, Breadcrumb
  - `overlay/` — Dialog, Tooltip
- `ui_kits/` — full-screen recreations:
  - `dashboard/` — analytics overview (KPIs, trend chart, action items)
  - `task-board/` — kanban-style project plan (the "synthesize into tasks" surface)
  - `report-detail/` — a single analysis report with retention breakdown + suggested actions
- `assets/` — no logo provided; empty aside from a note (see Iconography below).

## Content fundamentals
**Voice:** analytical, precise, pro-tool. Ghost AI talks to data/live-ops people, not consumers — no hype, no exclamation points, minimal fluff. Sentences are short and lead with the number or the finding, not the framing.
- "D7 retention down 1.1pp week-over-week" — not "Uh oh! Retention took a dip 📉"
- "142,381 events processed" — not "We crunched a LOT of data for you!"
- "Investigate D7 retention dip — Patch 4.2" (task titles read like Jira tickets: verb + object + qualifier)

**Casing:** sentence case throughout (buttons, headers, labels). No title case, no all-caps except tiny eyebrow labels (e.g. "SUGGESTED ACTIONS" at 12px, letter-spaced) used sparingly as section dividers, never as body copy.

**Pronouns:** second person for the product addressing the user ("Ask Ghost AI"), first person plural avoided. No "I" — this is a tool, not a persona.

**Emoji:** none. Status is communicated with color + badge type + icon (Lucide), never emoji.

**Numbers:** always specific and plausible (percentages to 1 decimal, player counts with commas). Avoid vague claims ("a lot better") — the whole product is about specificity.

## Visual foundations
**Theme:** dark-first (near-black canvas, `--zinc-950` / `#09090b`) with a light-mode override available via `[data-theme="light"]`. Dark suits a data-dense, screen-all-day tool for gaming teams.

**Color:** neutral zinc scale (dark: `#09090b`→`#fafafa`) for structure; one accent — lime-400 (`#a3e635`, verified against both the source Figma and the user's own token snapshot) — used sparingly for the single primary action, active nav state, links, and positive-trend data. Semantic colors (danger/warning/info/success) each get a "muted" background variant (e.g. `--danger-muted`) for alert/badge fills so status colors never compete with the accent. No gradients except a single soft area-chart fill under trend lines — never on backgrounds or buttons.

**Type:** Geist for display/headings/body/labels (600 weight headings, 500 labels, 400 body); Inter reserved for the smallest, densest body text (13px). Geist Mono for anything literally data — IDs, event counts, query strings, timestamps. Headings use tight tracking (-0.01 to -0.02em); everything else normal tracking.

**Spacing:** the source kit's exact scale (4/8/12/16/20/24/32/40/48/56/64px) — no 8pt-grid snapping beyond what the source already defines.

**Corners & cards:** cards are a 1px hairline border (`--border-default`) + `--bg-surface` fill + 12px radius (`--radius-2xl`), **no drop shadow** at rest — shadows are reserved for things that float above content (dialogs, dropdown menus, tooltips). Buttons/inputs use 6px radius (`--radius-md`). Badges use 4px (`--radius-sm`). Avatars/switches are fully round.

**Borders vs. shadow:** default elevation model is border-first, not shadow-first — this keeps the dark theme from looking muddy. Shadows only appear on `--bg-surface-raised` elements (modals, popovers) using the elevation scale in `tokens/shadow.css`.

**Backgrounds:** flat color only. No photography, no illustration, no full-bleed imagery, no textures/grain/patterns — this is a data tool, not a marketing site. The one "image-like" element is the SVG trend chart with a soft gradient fill under the line.

**Motion:** fast and functional, never decorative. Hover/press states use 80–150ms ease transitions (color and a 0.98 scale on press for buttons). No bounce, no infinite loops, no entrance animations on dashboard load.

**Hover / press states:** hover swaps to a lighter/darker step of the same color (e.g. `--accent` → `--accent-hover`), never adds a shadow. Press adds a subtle `scale(0.98)` on buttons. Disabled = 40–50% opacity + `not-allowed` cursor, no color change.

**Focus:** a 3px lime ring at 45% opacity (`--shadow-focus`) on inputs and interactive elements — never an outline-only browser default.

**Transparency/blur:** used only for scrims behind modals (`--scrim`, `rgba(0,0,0,.6)`) and the overlay wash behind dropdown/dialog backdrops. No frosted-glass panels in the main UI.

**Imagery tone:** N/A — no photography in this system (see Backgrounds). If product photography is added later, keep it cool-toned and low-saturation to sit against the dark canvas; avoid warm/golden-hour imagery, which reads off-brand for an ops tool.

## Iconography
The source shadcn kit uses **Lucide** throughout (every icon layer in the extraction is named `lucide/…`). We kept Lucide, loaded from CDN (`unpkg.com/lucide`) rather than copied SVGs, since no icon binaries were exported from Figma. All icons render at 14–16px, `currentColor` (they inherit text color — never a fixed color unless it's a status icon in a semantic color). No emoji, no unicode glyphs as icons, no icon font. Stroke weight/style matches Lucide's default (1.5–2px stroke, no fill) — keep any future custom icon consistent with that.

## Components
Alert, Avatar (+ AvatarGroup), Badge, Breadcrumb, Button (incl. link variant), ButtonGroup, CloseButton, MoreButton (IconButtons), Card, Checkbox, CheckboxCard, Dialog, AlertDialog, Input, SearchInput, Select, Switch, Tabs, Tooltip, DataTable, Table, Separator, AspectRatio, Collapsible, Skeleton, Spinner, Progress, Label, Toggle, ToggleGroup, RadioGroup, Accordion, Textarea, Slider, Popover, DropdownMenu, Pagination, Toast (+ ToastStack), EmptyState, Kbd, ContextMenu, HoverCard, Sheet, Drawer, NavigationMenu, Menubar, Combobox, NativeSelect, ScrollArea, Calendar, DatePicker, DateTimePicker, MonthYearSelector, NaturalLanguagePicker, CommandPalette, InputGroup (+ InputAddon), InputOTP, Field, ListItem, Sidebar, Carousel, Charts (LineChart, AreaChart, BarChart, PieChart, RadarChart, RadialChart), ColorSwatch.

### Intentional additions
The source Figma page list (Accordion, Alert Dialog, Aspect Ratio, Button Group, etc.) is much larger than what's built here — the extraction only summarized ~9 of 78 pages in depth. Given the ambiguity, this build covers the standard primitives Ghost AI's three UI kits actually use (forms, status, navigation, one overlay pattern) rather than the full 78-page shadcn catalog blind. If you need Accordion, Alert Dialog, Tabs-with-content, Command palette, Data Table, etc., ask and we'll build them next against the same tokens.

## Component & token scope
`SCOPE.md` documents, family by family, which of the source Figma kit's ~128 component families and 1053 variables were intentionally left out and why (the kit is a generic shadcn/ui + icon reference library, not a Ghost AI product file). Read it before assuming a gap is an oversight.

## Fonts
**Substitution flagged:** no font binaries were provided. Geist, Geist Mono, and Inter are loaded from Google Fonts (`tokens/fonts.css`) — Geist has shipped on Google Fonts since 2024, so this should visually match, but please attach the original `.woff2` files if you have brand-licensed versions.

## Index
- `styles.css`, `base.css` — link these two for any new page.
- `tokens/*.css` — token source of truth.
- `guidelines/*.html` — 13 specimen cards (Colors ×4, Type ×3, Spacing ×4, Brand ×2).
- `components/<group>/<Name>.jsx` + `.d.ts` + `.prompt.md` — 13 primitives, 5 group cards.
- `ui_kits/dashboard/index.html`, `ui_kits/task-board/index.html`, `ui_kits/report-detail/index.html` — full-screen recreations.
- `SKILL.md` — portable skill definition for Claude Code / other agent surfaces.

## Verified against source Figma
Cross-checked the 13 built components against the attached Figma file's component pages and corrected three drift points found: **Button** radius was 6px, corrected to 10px (`--radius-xl`, matches the Figma primary-button frame). **Badge** radius was 4px, corrected to 8px (`--radius-lg`, matches the Figma "done" badge). **Switch** track was 36×20 with a 16×16 thumb, corrected to the Figma-exact 44×24 track / 20×20 thumb — this also brings it up to the 24×24px accessibility hit-area floor. **Checkbox** kept its 16×16 Figma-exact visual but gained a 24×24px invisible hit area for the same reason. Card, Input, Dialog, Tooltip, Alert, Avatar, Tabs, Breadcrumb, and Select radii already matched.

## Caveats — please help us iterate
1. **Colors and tone are our best guess**, not extracted from a real Ghost AI brand file — if you have any existing marketing site, deck, or app screenshots, attach them and we'll reconcile.
2. **Font substitution** (Geist/Geist Mono/Inter via Google Fonts) needs your real webfont files if you have licensed versions.
3. **Component coverage is intentionally partial** — 13 primitives covering the three UI kits, not the full shadcn 78-page catalog. Tell us which additional components (Accordion, Data Table, Command palette, Alert Dialog, etc.) you actually need in-product.
4. **No logo** exists anywhere in the provided material — we used a plain wordmark. If Ghost AI has a mark, attach it.
