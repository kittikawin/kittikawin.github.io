---
name: kittikawin-design
description: Use this skill to generate well-branded interfaces and assets for Kittikawin "Ball" Ball's personal website and writing — a Thai .NET developer's editorial/portfolio aesthetic. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping, production, slides, or throwaway mocks.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick start
- Link `colors_and_type.css` from the skill root for all tokens.
- Import fonts via Google Fonts (Fraunces, Inter, JetBrains Mono) — already set up in the CSS.
- Icons live in `assets/tech-icons/` (tech-stack logos) and `assets/brand/` (monogram + wordmark). For generic UI icons, use Lucide from CDN.
- The UI kit at `ui_kits/website/` is a working reference for layout, header, footer, post cards, and article typography.

## Signature motifs — don't skip these
- **Ink rule (2px solid var(--fg-1))** above hero, under section titles, over the footer. Load-bearing detail.
- **Mono UPPERCASE eyebrow labels** with `letter-spacing: .14em`. Used everywhere a label would be.
- **Hard ink shadow `4px 4px 0 rgba(17,17,17,0.9)`** on the primary CTA and avatar. Used 1–2× per page.
- **Amber underline-highlight** behind the author's name.
- **Post list = table of contents**, never a grid of tiles.
