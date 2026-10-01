Modern Ghibli Atelier — Design System & Visual Specification (DESIGN.md)
1. Aesthetic Manifesto & Philosophy
This portfolio embodies the soul of Studio Ghibli's pastoral warmth (organic botany, hand-crafted mindfulness, matcha, cedar wood, and lush tranquility) evolved through the lens of high-end contemporary Japanese editorial design (e.g., POPEYE, Kinfolk, and Komorebi Atelier).
The Dual Paradigm:
Ghibli Organic Warmth: Earthy tones, pressed botanical textures, gentle ambient soundscapes, authentic paper surfaces, and welcoming character.
Modern Editorial Precision: Crisp hairline borders, generous architectural whitespace, typographic hierarchy, unboxed metadata discipline, and zero cartoonish clichés.
2. Anti-AI Slop Mandate & Zero-Pill Discipline
To ensure the portfolio is uniquely handcrafted and free from generic "AI web generator" aesthetics:
Zero Static Pill Enclosures: No wrapping tags, dates, or metadata in candy pill capsules or chunky bordered chips. Metadata is rendered as clean, unboxed editorial typography separated by subtle dots (·) or slashes (/).
No Badge Sandwiches: Cards must never start with a stack of 3 floating colorful pills. Headings and primary titles lead with clarity and prominence.
No Mechanical / Pseudo-Technical Clutter: Prohibit // 01_CORE comments, fake latency flags, mock server tickers, or arbitrary innovation scorecards.
Architectural Framing Over Loud Borders: Replace harsh 3px cartoon borders with refined hairline rules (border border-[#2d3b2a]/15 or border-[#43604a]/25), subtle warm cream backgrounds (#FBF8F3), and soft natural paper diffusion.
Restrained Visual Accents: Washi accents and botanical motifs are treated with delicate minimalism rather than chaotic sticker bombing.
3. Curated Color Palette (60-30-10 System)
60% Dominant Neutral Canvas
Parchment Canvas (#F7F4EC): Atmospheric warm paper ground.
Atelier Cream (#FCFAF5): Clean structural card interior with delicate grain.
Soft Oat Sand (#EFE9DD): Secondary container and divider surface.
30% Structural & Botanical Tones
Evergreen Ink (#182619): High-contrast, deeply legible dark ink for typography and primary borders.
Cedar Sage (#3D573F): Primary brand green for active states, key headers, and focus elements.
Forest Moss (#587559): Secondary green for subheadings and borders.
Celadon Pistachio (#D6E3D1): Soft calming surface highlights and active button backdrops.
10% High-Intent Accents
Persimmon Terracotta (#B85338): High-intent focal accent for alerts, primary actions, and warm highlight seals.
Morning Pond Mist (#64828E): Muted atmospheric slate blue for digital architecture folios.
4. Typographic Architecture
Hierarchy	Typeface	Size	Weight / Line-Height	Role
Editorial Display (H1)	Fraunces / Newsreader	32px – 44px	SemiBold (600), Tight tracking	Primary hero headlines, exhibition titles
Section Headlines (H2/H3)	Fraunces / Plus Jakarta Sans	20px – 28px	Bold (700), Leading-snug	Section titles, project names
Body Prose	Plus Jakarta Sans	14px – 15px	Regular (400) & Medium (500), 1.6em	Descriptions, case overviews, bios
Editorial Eyebrows	Space Mono / Plus Jakarta Sans	11px – 12px	Bold (700), Tracking-widest, Uppercase	Volume indicators, categories, section labels
Technical & Metadata	Space Mono	10px – 12px	Tabular numerals, Regular	Deliverables, active years, IDs
5. Component Contracts
Top Bar & Navigation (3-Zone Contract)
Zone 1 (Brand): Clean serif wordmark (Malya Maritza) with quiet status dot (Available for 2026).
Zone 2 (Nav Links): Single-line editorial text links with animated bottom indicator line.
Zone 3 (Interactive Utilities): Minimalist audio play/pause toggle with waveform indicator + Next.js guide action.
The Landscape Archive Books
Architectural folio binders with clean spine tabs, volume labels, and tactile tab switches.
Project cards feature 16:10 preview frames, clear deliverable checklists, and a direct link to the interactive case study detail view.
Experience & Journey Map
Concise profile cards with organization logos, active years, and current positions.
Clicking any card opens a curated chronological journey map modal with verified milestones and archival photo frames.
Certificate Gallery
Dual-mode viewer: Smooth touch-enabled horizontal slider and responsive 4-column grid.
Clean inspection modal highlighting verified issuers, credentials, and skills without layout shift.





---
name: Botanical Scrapbook Garden
colors:
  surface: '#fcf9f0'
  surface-dim: '#dcdad1'
  surface-bright: '#fcf9f0'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ea'
  surface-container: '#f1eee5'
  surface-container-high: '#ebe8df'
  surface-container-highest: '#e5e2da'
  on-surface: '#1c1c17'
  on-surface-variant: '#434840'
  inverse-surface: '#31312b'
  inverse-on-surface: '#f3f1e8'
  outline: '#74796f'
  outline-variant: '#c3c8bd'
  surface-tint: '#4c6544'
  primary: '#435c3c'
  on-primary: '#ffffff'
  primary-container: '#5b7553'
  on-primary-container: '#ddfad0'
  inverse-primary: '#b2cfa7'
  secondary: '#954832'
  on-secondary: '#ffffff'
  secondary-container: '#ff9c82'
  on-secondary-container: '#78311e'
  tertiary: '#3c5a66'
  on-tertiary: '#ffffff'
  tertiary-container: '#54737f'
  on-tertiary-container: '#e1f6ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#cdebc1'
  primary-fixed-dim: '#b2cfa7'
  on-primary-fixed: '#092007'
  on-primary-fixed-variant: '#354d2e'
  secondary-fixed: '#ffdbd1'
  secondary-fixed-dim: '#ffb5a1'
  on-secondary-fixed: '#3b0800'
  on-secondary-fixed-variant: '#77311d'
  tertiary-fixed: '#c7e8f5'
  tertiary-fixed-dim: '#abccd9'
  on-tertiary-fixed: '#001f28'
  on-tertiary-fixed-variant: '#2c4b56'
  background: '#fcf9f0'
  on-background: '#1c1c17'
  surface-variant: '#e5e2da'
typography:
  display-lg:
    fontFamily: Epilogue
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Epilogue
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 28px
    fontWeight: '700'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Epilogue
    fontSize: 22px
    fontWeight: '600'
    lineHeight: 30px
  headline-sm:
    fontFamily: Epilogue
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 26px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 26px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 22px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 18px
  label-lg:
    fontFamily: Epilogue
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Epilogue
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-sm:
    fontFamily: Epilogue
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.25rem
---

## Brand & Style

This design system draws inspiration from Studio Ghibli countryside pastoralism, cozy nostalgic web shrines, and botanical pressed-flower scrapbooks. It blends the playful warmth of vintage desktop OS chrome (window headers, simulated URL bars, close/minimize dots, index folder tabs) with handcrafted physical ephemera like dashed sewing stitches, linen textures, washi tape labels, and archival notebook binder grids.

The emotional tone is comforting, whimsical, contemplative, and artisanal. It invites users into a slow-living creative sanctuary. Target audiences include illustrators, indie game developers, nature writers, craftspeople, and nostalgic web creators seeking an intimate, personal space that feels tactile rather than algorithmic.

## Colors

The palette takes inspiration from moss-covered stones, vintage parchment stationery, sunlit water pools, and clay flowerpots:

- **Primary (`#5B7553` - Deep Garden Sage):** Anchor color used for primary buttons, window title bars, strong borders, and prominent headings. Supported by leafy tint `#8FA87B`, misty tint `#D2E3C8`, and soft wash `#E8EFE6`.
- **Secondary (`#D97D64` - Terracotta Blossom):** Used intentionally for active highlights, heart icons, notifications, and warm call-to-actions.
- **Tertiary (`#94B4C1` - Pond Ripple Sky):** Secondary accent for media players, audio badges, info badges, and gentle hover glazes. Accompanied by `#CDE1E8` for subtle container fills.
- **Neutral (`#FAF7EE` - Cream Linen Vellum):** Warm paper backdrop. Supported by surface parchment `#F5EFE0`, card vellum `#FDFBF7`, and ink border tone `#414F3D` for readable text and crisp vintage outlines.

## Typography

The type system blends the rounded, storybook warmth of **Epilogue** for titles, retro OS headers, and scrapbook tabs, with the crystal-clear readability of **Plus Jakarta Sans** for running body text and captions.

- **Epilogue** delivers tactile personality: its organic curves mirror ink stamps and vintage storybook titles without sacrificing digital legibility.
- **Plus Jakarta Sans** balances the display personality with open apertures and balanced proportions, ensuring long artist statements, journal logs, and bios remain effortless to read.
- Tracking is slightly relaxed for smaller labels (`label-md` and `label-sm`) to emulate classic typewriter or embossed label tape.

## Layout & Spacing

The layout is structured around an **archival desktop window container** set over a subtle botanical gingham or textured pastel background. The primary content lives inside a centered window frame resembling an illustrated retro browser or binder notebook.

- **Desktop (>= 1024px):** A constrained central canvas (max-width 980px) split into an asymmetric 2-column or 3-column binder layout (e.g., left profile/navigation sidebar 280px, main garden display cards 660px).
- **Tablet (768px - 1023px):** Fluid layout within 92% screen width, maintaining tab bars along the top edge of the window.
- **Mobile (< 768px):** Single-column stacked stack. Retro window headers collapse controls into a compact toolbar, and horizontal tab groups become horizontally scrollable pill ribbons.
- **Grid & Gutters:** Internal sub-containers leverage a flexible 4-column micro-grid with consistent 16px (`1rem`) gutters. Outer padding maintains breathing room to simulate scrapbook margins.

## Elevation & Depth

Visual depth is achieved through **physical stationery layering and tactile outlines** rather than diffuse modern drop shadows:

1. **Retro Window Stroke:** Windows and primary cards feature a crisp `2px solid #5B7553` outline with a subtle solid offset shadow: `box-shadow: 3px 3px 0px #5B755326` or deep garden shadow `4px 4px 0px #414F3D33`.
2. **Pressed Paper Tabs:** Top folder tabs visually overlap window borders with a bottom border knockout, mimicking physical filing dividers.
3. **Dashed Needle Stitching:** Inner framing inserts use a `1.5px dashed #8FA87B` or `#D2E3C8` border to resemble sewn fabric patches and scrapbook framing.
4. **Washi Tape & Stickers:** Accent badges, status widgets, and photo stickers employ a tiny `-1deg` to `+1.5deg` rotation with a warm ambient contact tint (`0 2px 4px rgba(91, 117, 83, 0.12)`).

## Shapes

The design system embraces soft, pillowy contours inspired by cozy vintage electronics and handcrafted paper goods:

- **Window Shells & Outer Frames:** 16px to 24px (`rounded-lg` / `rounded-xl`) perimeter corners for a friendly, approachable OS silhouette.
- **Tabs & Browser Address Bars:** Rounded top corners (`12px 12px 0 0`) for tabs, and full pill capsules (`9999px`) for simulated search inputs, tag pills, and URL bubbles.
- **Photo Cutouts:** Alternating soft rectangular containers with rounded corners (`12px`) and circular avatar vignettes (`50%` radius) framed with decorative double borders.

## Components

### Retro Window Chrome
- **Header Bar:** Sage green (`#5B7553`) or pale mint (`#D2E3C8`) bar containing three circular window controls (`_`, `□`, `✕` or heart/flower dots), alongside page title in uppercase `label-md`.
- **Search / URL Capsule:** Pill-shaped cream container (`#FAF7EE`) with an inset search icon, typewriter URL text, and a miniature bookmark heart button.

### Book Tabs & Navigation
- **Scrapbook Tabs:** Situated directly above or below the window header. Active tab matches the background cream (`#FAF7EE`) of the active viewport with a 2px top and side stroke; inactive tabs sit recessed in `#E8EFE6` with lower opacity text.
- **Dotted Tab Stitches:** Underlines on hover take the form of miniature dashed lines with soft spring transitions.

### Buttons
- **Primary Button:** Solid `#5B7553` background with parchment white text (`#FAF7EE`), 2px solid `#414F3D` border, `rounded-md` (8px), and 2px flat press-down state (`transform: translate(2px, 2px)` on active).
- **Secondary Button:** Cream `#FDFBF7` with `#5B7553` border and text. Hover shifts to soft mint `#E8EFE6`.
- **Terracotta Accent Button:** `#D97D64` with `#FAF7EE` text for key highlights and subscription/contact actions.

### Cards & Media Frames
- **Polaroid / Botanical Specimen Card:** Cream `#FDFBF7` card with a thick bottom margin for handwritten captions, framed by a `1.5px dashed #8FA87B` border.
- **Notepad Container:** Pale parchment `#F5EFE0` with subtle horizontal ruled guide lines in `#E8EFE6` spaced at 24px intervals.

### Form Inputs & Checkboxes
- **Input Fields:** Recessed `#FDFBF7` pill or 8px rounded box with a `1.5px solid #8FA87B` border, placeholder text in soft sage `#8FA87B`.
- **Checkboxes:** Rounded squares (4px radius) with an earthy olive border; checked state displays a hand-drawn checkmark or miniature sprout icon in `#5B7553`.
- **Radio Buttons:** Circular frame with a centered solid olive seedling or terracotta dot.

### Chips & Badges
- **Status Pills:** Pill capsules (`rounded-full`) in `#E8EFE6` featuring green status indicators (e.g., "🌱 tending garden", "🎧 listening to lofi").
- **Sticker Tags:** Skewed tags (`-1deg`) in soft terracotta or pond blue with dashed borders mimicking stamped kraft stickers.

## Component Architecture & Implementation Plan

### 1. Core Modular Components (`/components`)
*   **`RetroWindow.tsx`**: The primary wrapper for sections (e.g., profile, case studies).
    *   **Header Bar**: Sage green (`#5B7553`) or pale mint (`#D2E3C8`). Must contain three circular window controls (`_`, `□`, `✕`).
    *   **Main Container**: Outline `2px solid #5B7553` with `rounded-lg` or `rounded-xl` (16px - 24px) corners.
*   **`BotanicalButton.tsx`**: Used for primary CTAs (e.g., "Explore Archive Books").
    *   **Styling**: Background `#5B7553`, text `#FAF7EE`, border `2px solid #414F3D`.
    *   **Interaction**: Apply `transform: translate(2px, 2px)` for the active/press state.
*   **`ScrapbookTab.tsx`**: Navigation system elements.
    *   **Active Tab**: Cream background (`#FAF7EE`) with a 2px top and side border.
    *   **Inactive Tab**: Recessed styling with `#E8EFE6` background.
*   **`PolaroidCard.tsx`**: Container for list items like "Organizational Experience".
    *   **Styling**: Must use a `1.5px dashed #8FA87B` border to mimic fabric stitching.

### 2. Page Assembly (`app/page.tsx`)
*   **Hero Section**: Use `RetroWindow` to wrap the user profile. Include a circular avatar image (`border-radius: 50%`) framed with a decorative double border.
*   **The Landscape Archive Books**: Render a grid layout for projects (System Analysis, Frontend Web, Gamification). Apply a consistent 1rem (16px) gap/gutter for internal and external spacing.
*   **Detailed Case Study**: Use the `Plus Jakarta Sans` font variable for body text and checkmarks to ensure readability for information system modules (e.g., Damakara project).
*   **Washi Tape Accents**: For status badges or sticker labels, apply a slight rotation (`-1deg` to `+1.5deg`) combined with a soft, transparent `box-shadow` to simulate physical stickers.
*   **Footer Layout ("Let's Connect")**: Use an asymmetrical 2-column layout (e.g., 280px for the contact form, remaining space for profile links). Apply a pale parchment background (`#F5EFE0`) with horizontal separator lines every 24px to mimic a notepad container.