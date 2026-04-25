# Personal Website UI Kit

Interactive recreation of Kittikawin Ball's personal site — built against this design system.

## Files
- `index.html` — click-through prototype (Home → Writing → Post → About → Now).
- `styles.css` — component styles; imports `colors_and_type.css`.
- `SiteHeader.jsx` / `SiteFooter.jsx` — chrome.
- `Hero.jsx` — home hero.
- `PostList.jsx` — post card + list.
- `PostView.jsx` — single post reader.
- `AboutPages.jsx` — About + Now pages.
- `posts.jsx` — fixtures pulled from Ball's Medium blog.

## Screens
1. **Home** — hero, 3 recent posts.
2. **Writing** — all posts.
3. **Post** — single post with code block, blockquote, tags.
4. **About** — avatar, bio, tech-stack row, contact.
5. **Now** — timestamped what-I'm-doing list.

Route is persisted to `localStorage` so a reload keeps the user in place.

## Source of truth
The existing `kittikawin.github.io` repo is a stub — this kit is a design **proposal** extending the voice of the profile README (`github.com/kittikawin/kittikawin`) and the Medium blog. See the root README for voice + visual foundations.
