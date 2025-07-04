# DealBrief Design Guide — v2

## Classic Finance Aesthetic (Revised)

DealBrief must project the quiet authority of a legacy investment bank, not the hyper‑polish of consumer fintech.  This guide preserves the original conservatism while adding modern usability safeguards and explicit specs for data‑dense cybersecurity screens.

---

## Core Design Principles

| # | Principle                            | Key Rules                                                                                                                          |
| - | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1 | **Authority Through Restraint**      | Flat design, minimal color, typography + whitespace create hierarchy.                                                              |
| 2 | **Timeless > Trendy**                | No glassmorphism / gradients / neumorphism. Rectangular macro‑layouts; 0 or 2 px corner radius only on small interactive elements. |
| 3 | **Trust Through Familiarity**        | Patterns familiar to finance pros; conservative palette; classical serif headers.                                                  |
| 4 | **Subtle Feedback, Never Spectacle** | Micro‑interactions ≤ 150 ms (opacity, color, shadow). No motion that draws focus away from content.                                |

---

## Color System

### Palette Tokens

```css
:root {
  /* Primary */
  --color-primary-700: #002244;
  --color-primary-600: #003366; /* brand navy */
  --color-primary-100: #c8d1dd;

  /* Success */
  --color-success-600: #2c5530; /* forest */
  --color-success-100: #d3e1d4;

  /* Danger */
  --color-danger-600: #8b0000; /* burgundy */
  --color-danger-100: #e8cfcf;

  /* Neutrals */
  --color-black:   #1a1a1a;
  --color-gray-800:#2d2d2d;
  --color-gray-600:#5e5e5e;
  --color-gray-400:#959595;
  --color-gray-200:#d4d4d4;
  --color-gray-100:#e8e8e8;
  --color-cream:   #fffef9;
  --color-white:   #ffffff;
}
```

### Usage Guidelines

| Color                 | Primary Uses                        |
| --------------------- | ----------------------------------- |
| `--color-primary-600` | Links, primary actions, headers     |
| `--color-success-600` | Positive metrics, confirmed actions |
| `--color-danger-600`  | Error, high‑risk alerts             |
| Grays & cream         | Text, borders, background           |

All text/background pairings **must** meet WCAG AA (4.5 : 1) for body copy and 3 : 1 for large text.

---

## Typography

### Font Stack

```css
/* Headings */
font-family: Georgia, "Times New Roman", serif;

/* Body */
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

### Fluid Type Scale (clamp)

| Token          | CSS                                    | Pixels @ 1440 px | Pixels @ 375 px |
| -------------- | -------------------------------------- | ---------------- | --------------- |
| `--fs-h1`      | `clamp(2.25rem, 2vw+1.5rem, 3rem)`     | 48               | 36              |
| `--fs-h2`      | `clamp(1.75rem, 1.5vw+1rem, 2.25rem)`  | 36               | 28              |
| `--fs-h3`      | `clamp(1.5rem, 1.3vw+0.8rem, 1.75rem)` | 28               | 24              |
| `--fs-body`    | `1rem`                                 | 16               | 16              |
| `--fs-small`   | `0.875rem`                             | 14               | 14              |
| `--fs-caption` | `0.75rem`                              | 12               | 12              |

Rules:

* Headings always serif, normal weight 400.
* Body text uses system sans, weight 400.
* Never exceed weight 500.
* Captions/labels may be uppercase; ensure contrast.

---

## Layout & Spacing

* Base grid unit: **8 px**.
* Section padding: **5 × base (40 px)** desktop; clamp to **3 × base** on mobile.
* Max container: `min(1200px, 92vw)`.
* Columns: 12‑column CSS grid; product cards default to 3‑up → 1‑up on mobile.
* Line height: 1.7 body, 1.3 headings.

---

## Component Library

### Buttons

```css
.btn-primary {
  padding: 14px 32px;
  background: var(--color-primary-600);
  border: 1px solid var(--color-primary-600);
  color: var(--color-white);
  font-size: var(--fs-small);
  letter-spacing: 0.5px;
  text-transform: uppercase;
  border-radius: 0; /* fidelity to legacy look */
  transition: background-color .15s ease;
}
.btn-primary:hover {
  background: var(--color-primary-700);
  border-color: var(--color-primary-700);
}
.btn-primary:disabled {
  background: var(--color-gray-200);
  border-color: var(--color-gray-200);
  color: var(--color-gray-600);
  cursor: not-allowed;
}
```

### Form Elements

```css
input[type="text"], select {
  padding: 12px 16px;
  background: var(--color-white);
  border: 1px solid var(--color-gray-400);
  border-radius: 2px; /* micro radius for touch comfort */
  font-size: 0.9375rem; /* 15px */
  transition: box-shadow .15s ease, border-color .15s ease;
}
input:focus {
  border-color: var(--color-primary-600);
  box-shadow: 0 0 0 1px var(--color-primary-600);
}
input.error {
  border-color: var(--color-danger-600);
}
```

### Cards

```css
.card {
  background: var(--color-white);
  border: 1px solid var(--color-gray-200);
  padding: 40px;
  transition: box-shadow .15s ease;
}
.card:hover {
  box-shadow: 0 4px 8px rgba(0,0,0,0.08);
}
```

### Navigation Bar

* Fixed top, white background.
* 2 px solid navy bottom border.
* Logo: Georgia 28 px, navy.
* Links: 13 px uppercase, letter‑spacing 0.5 px.
* Hover: underline only.

### Status Pills

| State    | BG / Text             |
| -------- | --------------------- |
| Neutral  | `#e8e8e8` / `#2d2d2d` |
| Info     | `#c8d1dd` / `#003366` |
| Success  | `#d3e1d4` / `#2c5530` |
| Warning  | `#fff4d1` / `#8a6f2d` |
| Critical | `#e8cfcf` / `#8b0000` |

Radiuses: 2 px; font 12 px bold uppercase.

---

## Data Presentation

1. **Charts**

   * Library‑agnostic theme tokens above.
   * Axis & gridlines: 1 px `#d4d4d4`.
   * Series order: navy → green → burgundy → muted gold `#8a6f2d`.
   * No animations; series reveal may fade ≤ 150 ms.
2. **Tables**

   * Zebra stripes: `#fafafa`.
   * Numeric columns right‑aligned. 1 px grid borders.
   * Sticky header allowed.

---

## Interactive Feedback

| Event              | Allowed                                                        | Prohibited                 |
| ------------------ | -------------------------------------------------------------- | -------------------------- |
| **Hover**          | Color darken ≤ 8 %, subtle shadow, underline                   | Scale, translate, spin     |
| **Focus**          | 1 px outline + 1 px shadow in theme color                      | Removing outline           |
| **Active/Pressed** | Background darken additional 4 %                               | Offset shadow, bounce      |
| **Loading**        | Skeleton blocks (neutral gray), single‑direction shimmer ≤ 1 s | Pulsing or rainbow shimmer |

---

## Iconography

* Use only with text labels.
* Size 16 × 16, stroke 1.5 px, color inherits text.
* Prefer simple finance/security metaphors (shield, chart‑up, lock).

---

## Accessibility

* Contrast per WCAG AA.
* Focus indicators always visible.
* Minimum touch target 44 × 44 px.
* Form errors: inline text + aria‑describedby.

---

## Responsive Guidance

| Breakpoint  | Behavior                                                                |
| ----------- | ----------------------------------------------------------------------- |
| ≥ 1280 px   | 3‑column cards, 12‑col grid gutter 24 px                                |
| 768–1279 px | 2‑column cards, gutter 16 px                                            |
| ≤ 767 px    | Single column, nav links collapse into hamburger, 24 px section padding |

---

## "Don’t" List (unchanged)

Still ban gradients, heavy shadows, bold weights 600+, flashy animations, overly rounded corners, glassmorphism, etc.  The micro‑radius (2 px) and micro‑interaction exceptions above are the only sanctioned deviations.

---

## Final Note

Every new component must map to these tokens and rules.  When a decision is not covered, default to the most conservative solution consistent with legacy finance interfaces and the cybersecurity context—not to consumer neobank aesthetics.
