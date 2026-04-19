# Waltus — Marketing Website

The official marketing and landing page for **Waltus**, a fintech app built around *Finance with total clarity*. The site is designed following the "Financial Sanctuary" design system — high-end editorial minimalism with generous negative space, confident typography, and a single deep-Indigo accent color.

## Design Reference

Full design system documentation lives in [`docs/stitch_waltus_marketing_website_design/DESIGN.md`](./docs/stitch_waltus_marketing_website_design/DESIGN.md).

Dark mode palette and visual adjustments are documented in [`docs/stitch_waltus_marketing_website_design-dark-mode/DESIGN.md`](./docs/stitch_waltus_marketing_website_design-dark-mode/DESIGN.md).

## Tech Stack

| Tool | Purpose |
|---|---|
| [Astro](https://astro.build/) | Static site framework |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first CSS via `@tailwindcss/vite` |
| [Cloudflare Workers](https://workers.cloudflare.com/) | Static asset hosting via `@astrojs/cloudflare` |
| [Google Fonts — Manrope](https://fonts.google.com/specimen/Manrope) | Display & headline typography |
| [Google Fonts — Inter](https://fonts.google.com/specimen/Inter) | Body & label typography |
| [Material Symbols Outlined](https://fonts.google.com/icons) | Icon system |

## Dark & Light Mode

Theming follows the OS/browser color scheme automatically via `prefers-color-scheme`. No JavaScript or user-facing toggle is needed. All Tailwind `dark:` variants activate when the system is in dark mode. There is no manual theme selection in the current release — the architecture supports adding one in the future by switching to `darkMode: "class"`.

## 🚀 Project Structure

```
waltus-app-web/
├── docs/
│   ├── stitch_waltus_marketing_website_design/
│   │   ├── DESIGN.md          ← Full design system documentation
│   │   ├── code.html          ← Light mode reference implementation
│   │   └── screen.png
│   └── stitch_waltus_marketing_website_design-dark-mode/
│       ├── DESIGN.md          ← Dark mode palette & adjustments
│       ├── code.html          ← Dark mode reference implementation
│       └── screen.png
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BaseHead.astro         ← Global <head> meta, fonts
│   │   ├── NavBar.astro           ← Fixed glassmorphism navigation
│   │   ├── Footer.astro           ← 4-column footer
│   │   ├── HeroSection.astro      ← Headline + phone mockup
│   │   ├── SerenitySection.astro  ← Editorial stats block
│   │   ├── NarrativeSection.astro ← "Every penny accounted for"
│   │   ├── WalletSection.astro    ← 3-column feature cards
│   │   ├── TestimonialsSection.astro ← Social proof
│   │   ├── FaqSection.astro       ← Common questions
│   │   └── CtaSection.astro       ← Final call-to-action
│   ├── layouts/
│   │   └── Layout.astro           ← Base page layout
│   ├── pages/
│   │   └── index.astro            ← Landing page (composes all sections)
│   ├── styles/
│   │   └── global.css             ← Tailwind import + design tokens + custom utilities
│   └── consts.ts                  ← Site title & description
├── astro.config.mjs
├── tailwind.config.mjs            ← (Tailwind v4 config lives in global.css via @theme)
└── wrangler.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                           | Action                                           |
| :-------------------------------- | :----------------------------------------------- |
| `npm install`                     | Installs dependencies                            |
| `npm run dev`                     | Starts local dev server at `localhost:4321`      |
| `npm run build`                   | Build your production site to `./dist/`          |
| `npm run preview`                 | Preview your build locally, before deploying     |
| `npm run astro ...`               | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help`         | Get help using the Astro CLI                     |
| `npm run build && npm run deploy` | Deploy your production site to Cloudflare        |
| `npm wrangler tail`               | View real-time logs for all Workers              |

## Analytics

OpenPanel is wired in **client-only mode**. It uses a public client ID and does **not** require a secret.

Set this environment variable before running the Astro build:

```bash
PUBLIC_OPENPANEL_CLIENT_ID=your_client_id npm run build
```

For local development, you can also place it in a `.env` file:

```bash
PUBLIC_OPENPANEL_CLIENT_ID=your_client_id
```

The first rollout tracks:

- Automatic OpenPanel tracking for page views, outgoing links, and default browser/device/referrer attributes
- Manual `cta_clicked` events for the main CTA buttons in the navbar, hero section, and final CTA section
