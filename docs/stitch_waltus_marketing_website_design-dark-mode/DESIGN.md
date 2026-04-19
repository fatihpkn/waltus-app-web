# Dark Mode Design Reference

## Overview

This folder contains the dark-mode variant of the Waltus marketing website design, produced by Stitch. The `code.html` file is the self-contained reference implementation.

The dark mode experience shares the same layout, typography, and component structure as the light mode design (see `../stitch_waltus_marketing_website_design/DESIGN.md`). The only differences are the color tokens and a slightly adjusted shadow spec.

---

## Implementation Strategy

Dark mode is implemented using **Tailwind CSS `darkMode: "media"`**. All components use `dark:` utility variants that activate automatically when the OS/browser reports `prefers-color-scheme: dark`. No JavaScript or user-facing toggle is required.

---

## Dark Mode Color Palette

These tokens are active when `@media (prefers-color-scheme: dark)` matches.

| Token | Value |
|---|---|
| `background` | `#0b0d0e` |
| `surface` | `#0b0d0e` |
| `surface-dim` | `#0b0d0e` |
| `surface-bright` | `#343a3d` |
| `surface-container-lowest` | `#060809` |
| `surface-container-low` | `#191c1e` |
| `surface-container` | `#1e2123` |
| `surface-container-high` | `#282a2d` |
| `surface-container-highest` | `#323537` |
| `surface-variant` | `#44474e` |
| `on-surface` | `#e1e2e4` |
| `on-surface-variant` | `#c4c6cf` |
| `on-background` | `#e1e2e4` |
| `primary` | `#3245b1` |
| `primary-container` | `#3245b1` |
| `on-primary` | `#ffffff` |
| `on-primary-container` | `#dee0ff` |
| `primary-fixed` | `#dee0ff` |
| `primary-fixed-dim` | `#bbc3ff` |
| `inverse-primary` | `#142b9a` |
| `secondary` | `#bec3f4` |
| `secondary-container` | `#3e446d` |
| `on-secondary` | `#272e55` |
| `on-secondary-container` | `#dee0ff` |
| `tertiary` | `#ffb690` |
| `tertiary-container` | `#ffb28a` |
| `on-tertiary` | `#000000` |
| `on-tertiary-container` | `#341100` |
| `outline` | `#8e9099` |
| `outline-variant` | `#44474e` |
| `inverse-surface` | `#e1e2e4` |
| `inverse-on-surface` | `#191c1e` |
| `surface-tint` | `#bbc3ff` |
| `error` | `#ffb4ab` |
| `error-container` | `#93000a` |
| `on-error` | `#690005` |
| `on-error-container` | `#ffdad6` |

---

## Dark Mode Visual Adjustments

### Shadow Spec
In dark mode, ambient shadows are deeper to provide contrast against dark surfaces:

```css
.editorial-shadow {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4), 0 0 1px rgba(255, 255, 255, 0.1);
}
```

In light mode the same class uses:
```css
.editorial-shadow {
  box-shadow: 0 20px 40px rgba(25, 28, 30, 0.06);
}
```

### Nav Bar
The dark nav adds a subtle bottom border to separate it from the page:
```
dark:border-b dark:border-white/5
```

### Card Borders
Cards in dark mode add a `border border-white/5` to provide a soft definition against the dark surface background without breaking the "No-Line" rule for section separators.

### Primary Gradient
The primary gradient remains unchanged between modes:
```css
background: linear-gradient(135deg, #142b9a 0%, #3245b1 100%);
```

---

*End of Document*
