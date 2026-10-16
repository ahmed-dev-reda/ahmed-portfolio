# Ahmed Reda — Portfolio

A premium bilingual (Arabic/English) portfolio for **Ahmed Reda**, Frontend Developer — built with the **Obsidian & Gold** design system.

## Tech Stack

| Layer | Tech |
| --- | --- |
| Framework | Next.js (App Router, Turbopack) |
| UI | React 19, TypeScript 5 |
| Styling | Tailwind CSS v4 (CSS-based config — no `tailwind.config.ts`) |
| Components | shadcn/ui-style primitives (`components/ui/*`) |
| i18n | next-intl v4 (centralized `i18n/routing.ts` + `i18n/request.ts`) |
| Theme | next-themes (dark mode is default) |
| Motion | framer-motion |
| Icons | lucide-react, react-icons |
| Forms | react-hook-form + Web3Forms + sonner toasts |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000/ar/portfolio](http://localhost:3000/ar/portfolio) (Arabic default) or `/en/portfolio` for English.

## Routes

```
/                     → redirects to /ar/portfolio
/[locale]/portfolio   → curated projects grid + filter chips + metrics
/[locale]/resume      → experience, education, skills, tooling, freelance CTA
/[locale]/about       → bio + services
/[locale]/blog        → "coming soon" empty state
/[locale]/contact     → contact details + socials + contact form
/[locale]/not-found   → 404
```

Locales: `ar` (default, RTL) · `en` (LTR). Language switching preserves the current route.

## Design System — Obsidian & Gold

- Dark theme default: background `#131313`, gold accent `#ffdb70`, warm muted text `#cfc6b1`
- Light theme: background `#faf8f3`, deep gold `#b8860b`
- Typography: Plus Jakarta Sans (headlines), Inter (body), Cairo (Arabic, applied via `[dir="rtl"] body`)
- All tokens live in `app/globals.css` via `@theme inline` + CSS variables
- Card elevation: `.card-glow` — 1px gold border, lift + gold glow on hover

## Project Structure

```
app/
  layout.tsx                 root: fonts, ThemeProvider, Toaster
  page.tsx                   redirect → /ar/portfolio
  [locale]/
    layout.tsx               dir/lang + NextIntlClientProvider
    not-found.tsx
    (main)/
      layout.tsx             Header + Sidebar + MainStage + Footer
      portfolio|resume|about|blog|contact/page.tsx
components/
  providers/ThemeProvider.tsx
  layout/                    Header, Sidebar, Footer, MainStage, TabNav, SectionHeader, toggles
  sections/                  FilterChips, ProjectCard, PortfolioView, Timeline, SkillBar,
                             ServiceCard, MetricStrip, AdvisoryCTA, ContactForm
  ui/                        button, badge, input, textarea, label, separator, dropdown-menu
data/                        profile, projects, resume, services, metrics
i18n/                        routing.ts, request.ts
messages/                    ar.json, en.json
proxy.ts                     next-intl locale proxy (Next 16 file convention)
```

## Configuration Notes

- **Contact form**: replace `YOUR_WEB3FORMS_ACCESS_KEY` in `components/sections/ContactForm.tsx` with your Web3Forms access key.
- **CV file**: place the PDF at `public/cv/ahmed-reda-cv.pdf`.
- **Images**: project thumbnails are expected at `public/images/projects/*.webp` (cards degrade gracefully if missing).
- **Contact details**: update `data/profile.ts` (email/phone were placeholders in the spec; a placeholder address is set there).

## Commands

```bash
npm run dev    # dev server (Turbopack)
npm run build  # production build
npm run start  # serve production build
npm run lint   # eslint
```

