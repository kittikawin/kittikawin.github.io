# Kittikawin Design System

> A design system for **Ball's personal profile website** — a quiet, editorial space for a Thai .NET engineer and writer.

## Who this is for

**Kittikawin "Ball"** is a Thai software developer currently working on **KrungSri Nimble** (the digital arm of Krungsri Bank, Thailand). He publishes regular technical essays on Medium — primarily about **.NET, C#, software architecture, secrets management, refactoring, and developer discipline.**

His online presence is a single personal profile site + GitHub profile README. This design system defines the visual + written identity for that personal site so it feels like a grown‑up writer's portfolio rather than a boilerplate developer template.

## Sources

| Source | Location | Status |
| --- | --- | --- |
| Personal site repo | `github.com/kittikawin/kittikawin.github.io` | Stub only (single `<h1>`). No existing styling. |
| GitHub profile README | `github.com/kittikawin/kittikawin` | Contains bio, tech-stack icons, blog links. **Primary content reference.** |
| Medium blog | `medium.com/@kittikawin_ball` | Content & voice reference for "CONTENT FUNDAMENTALS". |
| LinkedIn | `linkedin.com/in/kittikawin-ball` | Linked from profile. |
| Gmail | `kittikawin.ball@gmail.com` (pattern from README) | Linked from profile. |

**No existing visual design system was provided**, so this system is a thoughtful proposal — not a recreation. We establish a clean, editorial, engineer‑minded direction that fits the voice of the blog posts and the .NET-adjacent heritage.

---

## Index

Root files:
- **`README.md`** (this file) — product context, content + visual foundations, iconography.
- **`colors_and_type.css`** — CSS custom properties for colors, type, spacing, radii, shadows, motion. **Import this first.**
- **`SKILL.md`** — entry point when this system is consumed as a Claude Skill.

Folders:
- **`assets/tech-icons/`** — SVG icons for tech stack logos (C#, Azure, VS Code, etc.) imported from the profile README.
- **`assets/brand/`** — brand marks and primitives (monogram, wordmark).
- **`ui_kits/website/`** — JSX components + interactive `index.html` for the personal site UI kit (hero, post list, single post, about).
- **`preview/`** — design system preview cards (foundations, components, brand).

---

## CONTENT FUNDAMENTALS

**Voice at a glance:** Direct. Practical. Lightly self‑deprecating. First‑person. Writes like a senior engineer giving a junior a two‑minute tip — not like a conference speaker.

### Tone & register
- **Conversational but technical.** Short declarative sentences, then a clarifying beat. Never breathless.
- **Opinionated but humble.** Titles take strong stances ("Every .NET Team Should…", "What You're Doing Wrong") — body text hedges appropriately ("In most codebases I've seen…", "This isn't always the right call.").
- **Lightly self‑aware, not jokey.** The GitHub bio uses exactly one emoji per item and one `:rofl:` shortcode: *"I'm currently learning everything 🤣"*. Humour is a light seasoning, never the main course.
- **Practical over academic.** Code is the proof. If you can't show it in 6 lines, it probably doesn't belong in the post.

### Pronouns & perspective
- **First person singular** when sharing experience: *"I've been using this pattern for two years."*
- **Second person** when giving advice: *"You don't need a framework for this — a plain class will do."*
- Never **"we"** unless quoting a team decision. No royal "we," no fake editorial "we."
- **"Thai developer"** self-identifies — the site can nod to Thai heritage warmly (color, a few words of Thai on the About page) without being a tourism brochure.

### Casing
- **Title Case** for headlines and post titles ("Why Every .NET Team Should Use the Outbox Pattern"). 
- **Sentence case** for UI labels, buttons, nav.
- **UPPERCASE + letterspacing** only for tiny eyebrow labels ("POSTED ON", "TAGS", "NOW").

### Emoji & symbols
- **Sparing use.** The GitHub README uses emoji as list bullets (🔭 🌱 😄 ⚡ 📕). On the website, reserve them for the same purpose: contact row icons, "Now" page bullets. **Never inside prose.**
- `➡️` is used as a "more" pointer — keep this pattern.
- Prefer SVG tech‑stack icons (already in `assets/tech-icons/`) over emoji for any tool/language reference.

### Copy examples — follow these patterns

```
Hero headline    → "Hi there, I'm Ball — a Thai developer."
Eyebrow          → "WRITING ON .NET, ARCHITECTURE, AND CRAFT"
Post card meta   → "Apr 14 · 6 min read · .NET"
CTA (primary)    → "Read the post"
CTA (secondary)  → "More on Medium ➡️"
Empty state      → "No posts here yet. Try the archive."
404              → "This page is learning everything. Try the home page."
```

### Length guidance
- **Hero tagline:** ≤ 10 words.
- **Post summary:** 1–2 sentences, ≤ 220 characters.
- **About page:** 2–3 paragraphs, ≤ 200 words.
- **Meta / captions:** ≤ 60 characters.

---

## VISUAL FOUNDATIONS

The site should read like a **personal magazine column**, not a developer dashboard. The visual vocabulary is warm paper, ink type, one confident accent, and a lot of generous whitespace.

### Colors
- **Accent — Ink Blue `#1E40AF`.** Single confident accent used for links, the active nav item, and the primary button. Nods to .NET/Azure heritage without being corporate purple.
- **Highlight — Warm Amber `#D97706`.** Used **very sparingly**: tags on post cards, the "Now" indicator dot, underline on the author's name. Echoes Thai warmth.
- **Paper neutrals** — a warm off‑white scale (`#FBFAF7` → `#C7C1B3`). Avoid cold blue‑greys. The page background is **never** pure white.
- **Ink text** — near‑black (`#111111`) for titles, warm dark grey (`#3A3A36`) for body. Softer greys (`#6B6B64`, `#9A998F`) for meta and captions.
- **Code** — dark ink background (`#0E1116`) with VS Code‑style syntax colors, matching Ball's primary toolset.

### Typography
- **Display — Fraunces** (variable serif). Used for h1–h4 and pull quotes. The optical‑size axis lets large titles breathe and small subheads tighten up. Slightly literary, not stuffy.
- **Body — Inter.** The workhorse. 16px base, 1.55 line‑height for long-form reading.
- **Mono — JetBrains Mono.** Code blocks, inline code, eyebrow labels, post meta. The eyebrow label pattern (monospace UPPERCASE 12px, tracking +14%) is a **signature motif** — use it.
- **Thai fallback** — IBM Plex Sans Thai / Sarabun when rendering Thai characters.

> Fonts are loaded via Google Fonts inside `colors_and_type.css`. **If you need the files offline, flag this substitution to the user — no `.ttf` files are shipped in this system.**

### Spacing
- **4px base grid.** Tokens `--space-1` through `--space-10` (4 → 128).
- Section rhythm on pages is `--space-8` (64px) between sections, `--space-7` (48px) between major blocks within a section.
- Body copy **capped at 58ch** (`--measure-narrow`) for comfortable long-form reading.

### Backgrounds
- **Full-bleed paper `--bg-1`** is the default. No gradients on page backgrounds.
- **Occasional tinted blocks** (`--accent-soft`, `--highlight-soft`) for callouts — flat, never gradient.
- **No repeating patterns, no textures.** The warmth comes from the paper color, not from noise overlays.
- Hero uses generous whitespace with **a single ink-blue rule** above the headline — no hero image.

### Animation & motion
- **Calm, never bouncy.** Duration 120–360ms, `cubic-bezier(0.2, 0.7, 0.2, 1)` standard easing.
- Page transitions: **none.** Link navigation is instant.
- Hover transitions: color only (120ms). No scale, no lift on cards.
- The only "delight" moment: post cards get a **2px ink underline under the title on hover**, drawn left-to-right in 200ms. Everything else is still.
- `prefers-reduced-motion: reduce` → remove the underline animation too.

### Hover states
- **Links:** darken to `--link-hover` (`#1E3A8A`). No underline toggle — links are always underlined.
- **Buttons (primary):** background `--accent` → `--accent-hover`, no scale.
- **Cards (post list):** title gets animated underline (see above). Card itself stays still — no shadow lift, no translate.
- **Icons:** opacity 1 → 0.7.

### Press / active states
- **Buttons:** darken one more step, shift down 1px (`translateY(1px)`), remove shadow.
- **Nav links:** no special state — active nav item has a persistent ink rule underneath.

### Borders & rules
- **Hairline `1px solid rgba(17,17,17,0.08)`** between post cards and around avatar/figure frames. Called `--border-1`.
- **Stronger `rgba(17,17,17,0.14)`** on form inputs.
- **Ink rule `2px solid var(--fg-1)`** — a signature editorial device. Used above hero, under the site header, under section titles. **This is the load-bearing visual detail of the system.**

### Shadows
- **Soft paper shadows for cards:** `--shadow-sm` and `--shadow-md`. Small offsets, warm ink tint, no colored glow.
- **Hard ink shadow `4px 4px 0 rgba(17,17,17,0.9)`** called `--shadow-ink` — used on the primary CTA and the avatar frame for an editorial/print feel. Use this 1–2 times per page maximum.

### Transparency & blur
- **Site header** gets `backdrop-filter: blur(10px)` with a 0.72 alpha paper background when scrolled — only place in the system using blur.
- No glass panels elsewhere. No frosted modals.

### Corner radii
- **4px** for inline code, small chips.
- **8px** for post cards, buttons, form inputs.
- **14px** for feature cards / callouts.
- **Pill (999px)** for tags only.
- **No fully-round avatars.** Avatars use `--radius-lg` (14px) with the ink shadow — an editorial/zine move rather than the usual tech-bro circle.

### Card anatomy
A standard post card is:
- Warm paper bg (`--bg-1` with a `--border-1` bottom rule only — **no full border, no shadow**).
- Eyebrow (mono, uppercase, accent color) for tag.
- h3 title (Fraunces, 600).
- 1–2 line summary (Inter, `--fg-2`).
- Meta row: date · read time (mono, `--fg-3`).
- **The card is the list item, not a box.** Post lists read as a table of contents, not a grid of tiles.

### Imagery vibe
- **Minimal imagery.** This site is text-first. No hero photos, no stock.
- When images are needed: **warm, slightly desaturated, grain-free.** A single square avatar in the About page and nothing else.
- **Absolutely no AI-gradient illustrations.**

### Layout rules
- **Single column, centered, 1080px max.** Reading column is narrower (58ch) within it.
- **Site header is sticky** and uses the blur treatment described above.
- **Footer** is plain text on a tinted `--bg-2` block with the ink rule separator.

---

## ICONOGRAPHY

This site's iconography is **small, restrained, and mixed-source** — matching the profile README's existing pattern.

### Existing assets (in `assets/tech-icons/`)
Imported from `kittikawin/kittikawin` profile repo. **These are the canonical tech-stack icons** — reuse them wherever a tool/language is referenced:

| File | Use |
| --- | --- |
| `csharp.svg`, `visual-studio.svg`, `vscode.svg` | Primary stack (C# / .NET / VS / VS Code) |
| `azure.svg` | Cloud / hosting references |
| `html5.svg`, `css3.svg`, `javascript.svg`, `typescript.svg` | Web stack |
| `github.svg`, `gitlab.svg` | Source control |
| `gmail-light-30.svg`, `linkedin-light-30.svg` | Contact row — **these two are the canonical contact icons.** Don't substitute. |

### UI icons — Lucide (CDN)
For generic UI iconography (arrows, chevrons, menus, RSS, search, external-link), use **[Lucide](https://lucide.dev)** via CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="arrow-right"></i>
```

**Why Lucide:** 1.5px stroke weight, rounded joins, neutral personality — matches the editorial restraint of this system. Alternatives like Heroicons skew too chunky; Phosphor's variants are too ornate.

> **⚠ Substitution flag:** Ball's profile README doesn't define a UI icon set, so Lucide is our pick. **Please confirm** or swap to a preferred set — easy to change in one place.

### Emoji
Used **only** as list bullets on the About / Now pages, mirroring the GitHub README pattern:
- 🔭 current work  
- 🌱 currently learning  
- ⚡ fun fact  
- 📕 latest blog posts  
- 👋 greeting (hero only)

**Never use emoji inside prose or on buttons.**

### Unicode characters used as icons
- `·` (middle dot) as a meta separator: `Apr 14 · 6 min read · .NET`.
- `➡️` as a "more" pointer matching the README.
- `—` (em dash) for tagline punctuation.
- `&nbsp;` between contact icons, per the README pattern.

### What NOT to do
- Don't draw custom SVG icons by hand.
- Don't mix icon sets (Lucide + Font Awesome + emoji in the same row).
- Don't rasterize the SVG tech icons — they're authored at small sizes, scale them via CSS `width`.

---

## Caveats & substitutions to confirm

- **No existing visual identity was in the repo.** This system is a proposal, not a recreation. The personal site repo (`kittikawin.github.io`) is a literal stub. The voice comes from the profile README + Medium titles.
- **Fonts are Google Fonts only.** No `.ttf` files are shipped. Provide files if you want offline fonts.
- **Iconography substitution: Lucide** for generic UI icons. Swap if preferred.
- **Avatar is a placeholder `KB` glyph.** Drop a real portrait into `assets/brand/` and swap the `.kb-avatar` contents.
- **Medium post list is curated** from titles in the profile README — representative, not a live feed.

## Using this system

```html
<link rel="stylesheet" href="/colors_and_type.css" />
```

Then reference tokens:

```css
.post-card {
  background: var(--bg-1);
  border-bottom: 1px solid var(--border-1);
  padding: var(--space-6) 0;
}
.post-card h3 {
  font-family: var(--font-display);
  color: var(--fg-1);
}
```

See the preview cards in the Design System tab for live specimens of every token in use.
