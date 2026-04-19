# Design System Documentation: The Financial Sanctuary

## 1. Overview & Creative North Star
**Creative North Star: The Financial Sanctuary**

This design system is not a utility; it is a destination. To design for Waltus is to curate an environment of quiet authority and intellectual calm. We move beyond the cluttered, "loud" tropes of traditional fintech by embracing **High-End Editorial Minimalism**. 

Instead of rigid, repetitive grids, we employ intentional asymmetry and generous negative space to guide the eye. We treat the screen like a premium broadsheet or a gallery wall—where the "silence" of white space is as important as the data itself. By layering subtle tonal shifts and utilizing oversized, confident typography, we create an experience that feels architectural, intentional, and human.

---

## 2. Colors & Chromatic Philosophy
The palette is rooted in a neutral foundation of off-whites and soft slates, punctuated by a single, deep Indigo accent.

### The "No-Line" Rule
To achieve a truly premium feel, **1px solid borders are prohibited for sectioning.** Boundaries must be defined solely through background color shifts.
*   **Implementation:** Use `surface_container_low` for a primary section sitting on a `surface` background. The transition between these two tones is the "line."

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—stacked sheets of fine paper or frosted glass.
*   **Base:** `surface` (#f8f9fb)
*   **Low-Level Containers:** `surface_container_low` (#f2f4f6)
*   **High-Contrast Cards:** `surface_container_lowest` (#ffffff)
*   **Nesting:** When placing a card inside a section, use `surface_container_lowest` on top of `surface_container_low` to create a soft, natural lift without a single stroke of a pen.

### The "Glass & Gradient" Rule
Standard flat colors can feel "out-of-the-box." To provide visual "soul":
*   **Glassmorphism:** For floating navigation or modal overlays, use semi-transparent `surface` colors with a `backdrop-filter: blur(20px)`.
*   **Signature Textures:** For main CTAs, use a subtle linear gradient from `primary` (#142b9a) to `primary_container` (#3245b1). This adds a three-dimensional "polish" that feels expensive.

---

## 3. Typography: The Editorial Voice
Typography is our primary tool for expressing "Intelligence" and "Trust."

*   **Display & Headlines (Manrope):** These are the "anchors." Use `display-lg` (3.5rem) with tight letter-spacing for high-impact editorial moments. The weight of Manrope conveys a modern, confident authority.
*   **Body & Titles (Inter):** Inter provides the "utility." It is chosen for its mathematical precision and readability at small scales. 
*   **Hierarchy Note:** Maintain a high contrast between headings and body text. If a headline is `headline-lg`, ensure the surrounding white space is at least 1.5x the line height to let the text "breathe" like a luxury magazine.

---

## 4. Elevation & Depth
In this system, depth is felt, not seen. We favor **Tonal Layering** over structural shadows.

*   **Ambient Shadows:** If an element must "float" (e.g., a primary action button or a critical modal), use an extra-diffused shadow.
    *   *Spec:* `box-shadow: 0 20px 40px rgba(25, 28, 30, 0.06);` 
    *   The shadow should never be pure black; it should be a low-opacity version of `on_surface`.
*   **The Ghost Border Fallback:** If accessibility requirements demand a border, use the **Ghost Border**: `outline_variant` at 15% opacity. It should be just visible enough to define a shape, but never enough to "trap" the content.
*   **Roundedness:** Use the `xl` (1.5rem) scale for large layout containers and `md` (0.75rem) for interactive components like buttons and inputs. This creates a "softened-modern" aesthetic.

---

## 5. Components

### Premium Cards
*   **Structure:** No borders. Use `surface_container_lowest` (#ffffff).
*   **Spacing:** Use "Generous Padding" (min 2rem/32px) to ensure content never feels crowded.
*   **Interaction:** On hover, shift the background to `surface_bright` or increase the ambient shadow opacity by a mere 2%.

### Buttons
*   **Primary:** A gradient of `primary` to `primary_container`. High-contrast `on_primary` (#ffffff) text.
*   **Secondary:** `surface_container_high` background with `primary` text. No border.
*   **Tertiary:** Ghost style. No background, `primary` text, underlined only on hover.

### Input Fields
*   **Visuals:** Use a `surface_container_low` background. Avoid the "box" look; use a bottom-only 2px highlight in `primary` when focused.
*   **Labeling:** Use `label-md` in `on_surface_variant` (#454653) for a muted, sophisticated feel.

### Lists & Data
*   **Forbid Dividers:** Do not use horizontal lines to separate list items. Use vertical white space from the spacing scale.
*   **Micro-Data:** Use `tertiary` (#642800) sparingly for "Intelligent" accents—like a small growth percentage or a specialized tag—to provide a warm, human contrast to the cool Indigo.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical layouts (e.g., a large headline on the left with a small body paragraph offset to the right) to create a premium editorial feel.
*   **Do** prioritize "Reading Time" over "Density." It is better to scroll through a beautiful experience than to see everything at once in a cramped one.
*   **Do** use the Indigo accent (#3245B1) with extreme surgical precision. It should represent action and importance, not decoration.

### Don’t
*   **Don’t** use high-contrast borders or dark drop shadows. They break the "Sanctuary" vibe.
*   **Don’t** use "Fintech Neon." Avoid bright greens or electric blues. Use `tertiary` for warmth and `primary` for strength.
*   **Don’t** center-align long blocks of text. Stick to the editorial left-align to maintain a "structured but human" rhythm.
*   **Don't** use generic icon packs. Ensure icons have a consistent 1.5px or 2px stroke weight to match the Inter typography.

---

## 7. Tech Stack & Tooling

*   **Framework:** [Astro](https://astro.build/) — static site generation with component-level islands.
*   **CSS:** [Tailwind CSS](https://tailwindcss.com/) via `@astrojs/tailwind`. All design tokens above are registered as custom Tailwind color extensions.
*   **Dark Mode:** `darkMode: "media"` — the site automatically follows the OS/browser `prefers-color-scheme` setting. No user-facing toggle is required for the current release; the architecture supports adding one later.
*   **Fonts (Google Fonts):**
    *   `Manrope` (weights 400–800) — Display & Headlines.
    *   `Inter` (weights 300–600) — Body, Labels, UI copy.
*   **Icons:** [Material Symbols Outlined](https://fonts.google.com/icons) — loaded via Google Fonts CSS. All icons use `font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24` as the default.
*   **Deployment:** Cloudflare Workers (static assets) via `@astrojs/cloudflare` adapter.

---

## 8. Dark Mode Token Mapping

The table below maps each light-mode token to its dark-mode counterpart, sourced from `docs/stitch_waltus_marketing_website_design-dark-mode/code.html`.

| Token | Light (`#`) | Dark (`#`) |
|---|---|---|
| `background` | `#f8f9fb` | `#0b0d0e` |
| `surface` | `#f8f9fb` | `#0b0d0e` |
| `surface-dim` | `#d9dadc` | `#0b0d0e` |
| `surface-bright` | `#f8f9fb` | `#343a3d` |
| `surface-container-lowest` | `#ffffff` | `#060809` |
| `surface-container-low` | `#f2f4f6` | `#191c1e` |
| `surface-container` | `#edeef0` | `#1e2123` |
| `surface-container-high` | `#e7e8ea` | `#282a2d` |
| `surface-container-highest` | `#e1e2e4` | `#323537` |
| `surface-variant` | `#e1e2e4` | `#44474e` |
| `on-surface` | `#191c1e` | `#e1e2e4` |
| `on-surface-variant` | `#454653` | `#c4c6cf` |
| `on-background` | `#191c1e` | `#e1e2e4` |
| `primary` | `#142b9a` | `#3245b1` |
| `primary-container` | `#3245b1` | `#3245b1` |
| `on-primary` | `#ffffff` | `#ffffff` |
| `on-primary-container` | `#b7bfff` | `#dee0ff` |
| `primary-fixed` | `#dee0ff` | `#dee0ff` |
| `primary-fixed-dim` | `#bbc3ff` | `#bbc3ff` |
| `inverse-primary` | `#bbc3ff` | `#142b9a` |
| `secondary` | `#555c86` | `#bec3f4` |
| `secondary-container` | `#c6ccfd` | `#3e446d` |
| `on-secondary` | `#ffffff` | `#272e55` |
| `on-secondary-container` | `#4f557f` | `#dee0ff` |
| `tertiary` | `#642800` | `#ffb690` |
| `tertiary-container` | `#883900` | `#ffb28a` |
| `on-tertiary` | `#ffffff` | `#000000` |
| `on-tertiary-container` | `#ffb28a` | `#341100` |
| `outline` | `#757684` | `#8e9099` |
| `outline-variant` | `#c5c5d5` | `#44474e` |
| `inverse-surface` | `#2e3132` | `#e1e2e4` |
| `inverse-on-surface` | `#f0f1f3` | `#191c1e` |
| `surface-tint` | `#4154c0` | `#bbc3ff` |
| `error` | `#ba1a1a` | `#ffb4ab` |
| `error-container` | `#ffdad6` | `#93000a` |
| `on-error` | `#ffffff` | `#690005` |
| `on-error-container` | `#93000a` | `#ffdad6` |

---

## 9. Component Inventory

| Page Section | Astro Component File | Route/Page |
|---|---|---|
| Base `<head>` meta | `src/components/BaseHead.astro` | All pages |
| Top navigation bar | `src/components/NavBar.astro` | All pages |
| Site footer | `src/components/Footer.astro` | All pages |
| Hero (headline + phone mockup) | `src/components/HeroSection.astro` | `src/pages/index.astro` |
| "Built for Serenity" stats | `src/components/SerenitySection.astro` | `src/pages/index.astro` |
| "Every penny, accounted for" | `src/components/NarrativeSection.astro` | `src/pages/index.astro` |
| "The Wallet in your Pocket" | `src/components/WalletSection.astro` | `src/pages/index.astro` |
| "Trusted Presence" testimonials | `src/components/TestimonialsSection.astro` | `src/pages/index.astro` |
| "Common Questions" FAQ | `src/components/FaqSection.astro` | `src/pages/index.astro` |
| Final CTA | `src/components/CtaSection.astro` | `src/pages/index.astro` |
| Base page layout | `src/layouts/Layout.astro` | All pages |

---
*End of Document*