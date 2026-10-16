---
name: Obsidian & Gold Portfolio
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#cfc6b1'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#98907d'
  outline-variant: '#4d4637'
  surface-tint: '#e6c35b'
  primary: '#fffaf6'
  on-primary: '#3c2f00'
  primary-container: '#ffdb70'
  on-primary-container: '#775f00'
  inverse-primary: '#735c00'
  secondary: '#c6c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b5b5b5'
  tertiary: '#f2fdff'
  on-tertiary: '#00363d'
  tertiary-container: '#85eefe'
  on-tertiary-container: '#006c78'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe088'
  primary-fixed-dim: '#e6c35b'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#574500'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#95f1ff'
  tertiary-fixed-dim: '#6bd6e5'
  on-tertiary-fixed: '#001f24'
  on-tertiary-fixed-variant: '#004f57'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-2xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 52px
    letterSpacing: -0.02em
  headline-2xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '600'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: 0em
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: 0em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
    letterSpacing: 0.01em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.06em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-desktop: 2rem
  margin: 1rem
  margin-tablet: 1.5rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2rem
---

## Brand & Style
This design system defines a high-end, bespoke digital identity for an executive creative director and senior product designer. It marries architectural restraint with gallery-grade prestige, projecting technical mastery, decisive curation, and quiet confidence.

The design language synthesizes **Minimalism** and **Tactile Dark UI**:
- Surfaces are matte, charcoal-toned monolithic planes that recede into the backdrop.
- Warm amber/gold accents function as precise beams of focused light, signaling intent, active states, and tactile interactions without visual noise.
- Clean typography and calculated border luminescence elevate the interface from a standard portfolio to a refined physical artifact (akin to an archival portfolio box or a luxury watch dial).

## Colors
The palette is built strictly for high-contrast dark environments, anchoring on deep neutral planes punctuated by a radiant, warm golden amber.

### Palette Architecture
- **Canvas Base (`#121212`)**: The foundational deep charcoal canvas. Provides zero eye strain while avoiding absolute `#000000` pitch black to preserve subtle depth.
- **Card Surfaces (`#1e1e1e`)**: Slightly elevated dark gray container surface. Retains a crisp structural separation against the base.
- **Secondary Surfaces (`#252525`)**: Inner card layers, input backgrounds, and inset containers.
- **Primary Text (`#ffffff`)**: 100% white for crisp typographic clarity, headlines, and primary actions.
- **Secondary Text (`#d6d6d6`)**: Soft silver-gray for secondary metadata, descriptions, dates, and body text.
- **Muted Text (`#808080`)**: Tertiary captions, timestamps, and subtle hints.
- **Primary Accent (`#ffdb70`)**: Radiant sunlight amber. Reserved for active navigation indicators, key primary buttons, metric progress fills, and delicate glow states.
- **Border Trim (`rgba(255, 219, 112, 0.15)`)**: The signature luminescent edge used on primary cards and buttons to evoke micro-machined, backlit detailing.

## Typography
Typographic scale leverages **Plus Jakarta Sans** (a geometric, modern grotesque with balanced geometry closely aligned to modern executive design portfolios) for structural headlines, paired with **Inter** for clean readability in dense body blocks, technical skill matrices, and tabular resumes.

- Headlines must maintain tight tracking (`-0.02em` to `-0.01em`) to create a solid visual anchor.
- Section titles feature a decorative warm amber micro-underline (40px wide, 3px height) offset by 8px below the text baseline.
- Labels, tags, and status markers utilize uppercase rendering with expanded tracking (`0.06em`) to inject editorial distinction into technical metadata.

## Layout & Spacing
The layout implements an asymmetric split-architecture designed for portfolio clarity:
1. **Sidebar Column**: Fixed-width (280px on desktop), sticky positioning housing portrait, biographical anchors, contact snippets, and social links.
2. **Main Content Stage**: Dynamic multi-view tab container hosting About, Resume, Portfolio, Blog, and Contact views.

### Responsive Breakpoints & Reflow
- **Desktop (>= 1200px)**: 280px sticky sidebar + fluid primary content stage (max constrained container width 1200px centered). Gap between sidebar and main stage uses `gutter-desktop`.
- **Tablet (768px – 1199px)**: Sidebar converts to a top banner card with collapsible contact drawer; content stage docks below with `space-lg` gap. Horizontal navigation tab bar docks sticky at the top of the viewport.
- **Mobile (< 768px)**: Single column flow. Sidebar compacts into a profile headpiece. Navigation bar docks as a floating bottom navigation dock with glass backing for ergonomic thumb reach.

## Elevation & Depth
Depth is created through luminosity and layered contrast rather than muddy dark shadows.

- **Base Canvas**: Ground zero at `#121212`.
- **Level 1 (Card & Sidebar Containers)**: Surface `#1e1e1e` bordered with an outer perimeter stroke of `1px solid rgba(255, 219, 112, 0.15)`. Ambient drop shadow: `0 16px 40px -12px rgba(0, 0, 0, 0.6)`.
- **Level 2 (Interactive Overlays & Project Cards)**: Inset card surfaces `#252525` layered over Level 1.
- **Hover & Glow States**: When hovering interactive portfolio items, service cards, or active navigation pills, the border transitions to `1px solid rgba(255, 219, 112, 0.45)` accompanied by a diffuse, warm halo: `box-shadow: 0 0 24px rgba(255, 219, 112, 0.12)`.

## Shapes
Geometry is smooth and consistent:
- **Major Containers (Sidebar, Stage Wrapper, Modal Modals)**: Radius scales at `20px` to create a polished, framing device.
- **Inner Content Cards & Project Thumbnails**: Radius at `16px`.
- **Form Controls, Badges, & Tertiary Elements**: Radius at `12px`.
- **Pills & Status Dots**: Full circular/pill radius (`9999px`) for category filters, status chips, and progress bars.

## Components

### Buttons
- **Primary Action**: Amber fill `#ffdb70`, text `#121212` (semibold weight), border-radius 12px, padding `12px 24px`. Hover triggers `transform: translateY(-2px)` and glow `0 8px 20px rgba(255, 219, 112, 0.25)`.
- **Secondary / Ghost Action**: Background `rgba(255, 219, 112, 0.05)`, border `1px solid rgba(255, 219, 112, 0.15)`, text `#ffffff`. Hover triggers border transition to `rgba(255, 219, 112, 0.5)` and text `#ffdb70`.

### Navigation Tabs (Stage Header)
- Horizontal nav bar positioned at the top right of the stage container.
- Background: `rgba(30, 30, 30, 0.85)` with `backdrop-filter: blur(12px)`.
- Inactive tabs: text `#d6d6d6`, hover transition to `#ffffff`.
- Active tab: text `#ffdb70` with an amber baseline glow indicator or pill background `rgba(255, 219, 112, 0.1)`.

### Cards & Grid Items (Portfolio / Services / Timeline)
- Surfaces feature an internal padding of `space-lg` (24px).
- Timeline components (Resume tab) use an amber vertical guideline (`1px solid rgba(255, 219, 112, 0.2)`) with hollow amber node dots (`8px` circular indicator with `2px` amber ring).
- Portfolio grid items feature an image ratio of 16:10, dark mask overlay on hover, and smooth upward translation (`4px`).

### Progress Bars (Skills Matrix)
- Track: `#252525`, height 8px, border-radius 9999px.
- Value Fill: Linear gradient from `#ffdb70` to `#ffd043` with a soft terminal edge glow.

### Form Inputs
- Background: `#1e1e1e`, border `1px solid rgba(255, 255, 255, 0.08)`, text `#ffffff`, placeholder `#808080`.
- Focus State: Border color `#ffdb70`, box-shadow `0 0 0 1px #ffdb70`.

### Chips & Filter Tags
- Horizontal scrollable filter bar for portfolio categories (e.g., "All", "UI/UX", "Art Direction", "Web3").
- Active chip: `#ffdb70` background, `#121212` text.
- Inactive chip: Transparent background, `#d6d6d6` text, border `1px solid rgba(255, 255, 255, 0.08)`.