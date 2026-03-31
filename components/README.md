# Ganesan Muthumani — Portfolio

> A dark, minimal personal portfolio website built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.  
> Live at: `https://my-portfolio-muthumani.vercel.app` 

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack](#2-tech-stack)
3. [Project Structure](#3-project-structure)
4. [Page Flow & Sections](#4-page-flow--sections)
5. [How It Works — Under the Hood](#5-how-it-works--under-the-hood)
6. [Components Reference](#6-components-reference)
7. [Design System](#7-design-system)
8. [Getting Started](#8-getting-started)
9. [Customization Guide](#9-customization-guide)
10. [Deployment](#10-deployment)

---

## 1. Project Overview

This is a single-page scrollable portfolio website for **Ganesan Muthumani**, a Full-Stack Developer and Software Programmer based in Singapore.

The portfolio serves as a digital resume and project showcase — designed to be shared with recruiters and hiring managers. It presents personal information, skills, projects, work experience, education, certifications, and contact details in a structured, visually engaging format.

**Key design decisions:**
- Dark theme with a lime-green (`#c8f542`) accent for a clean engineering aesthetic
- Monospace + display font pairing for a technical yet refined look
- Scroll-triggered animations for progressive content reveal
- Custom animated cursor for a distinctive interactive feel
- Fully responsive — works on mobile, tablet, and desktop

---

## 2. Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Framework | Next.js 14 (App Router) | Routing, SSR, project structure |
| Language | TypeScript | Type safety across all components |
| Styling | Tailwind CSS v3 | Utility-first CSS, design tokens |
| Fonts | Google Fonts (Syne + DM Mono) | Display + monospace pairing |
| Animations | CSS Keyframes + Intersection Observer | Scroll reveals, hero animations |
| Deployment | Vercel | Hosting, CI/CD from GitHub |
| Package Manager | npm | Dependency management |

### Dependencies

```json
{
  "next": "14.2.3",
  "react": "^18",
  "react-dom": "^18",
  "tailwindcss": "^3.4.1",
  "typescript": "^5",
  "postcss": "^8",
  "autoprefixer": "^10"
}
```

No third-party animation libraries or UI kits — everything is built from scratch with Tailwind and native browser APIs.

---

## 3. Project Structure

```
portfolio/
│
├── app/                          # Next.js App Router
│   ├── globals.css               # Tailwind directives + custom utilities
│   ├── layout.tsx                # Root HTML layout + metadata (SEO)
│   └── page.tsx                  # Main page — composes all sections
│
├── components/                   # All UI components
│   ├── Cursor.tsx                # Custom animated cursor (dot + ring)
│   ├── Header.tsx                # Sticky navigation bar
│   ├── Hero.tsx                  # Landing / above-the-fold section
│   ├── About.tsx                 # Bio, skills grid, contact card
│   ├── Projects.tsx              # Featured + other projects
│   ├── Experience.tsx            # Work history, education, certifications
│   ├── Contact.tsx               # CTA, social links, footer
│   └── useScrollReveal.ts        # Intersection Observer hook
│
├── public/                       # Static assets (served at root /)
│   ├── resume.pdf                # (Add your resume here)
│   └── photo.jpg                 # (Add your photo here)
│
├── tailwind.config.js            # Tailwind theme — colors, fonts, animations
├── postcss.config.js             # PostCSS config for Tailwind
├── next.config.js                # Next.js configuration
├── tsconfig.json                 # TypeScript configuration
├── package.json                  # Dependencies and scripts
└── README.md                     # This file
```

---

## 4. Page Flow & Sections

The entire site is a **single scrollable page**. Users land on the Hero and scroll through each section in order. The header navigation allows jumping to any section directly.

```
┌─────────────────────────────────────────────┐
│                HEADER (fixed)               │
│  GM.  01.about  02.projects  03.experience  │
│       04.contact                  hire me   │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│                HERO SECTION                 │
│                                             │
│  based in singapore  ────                   │
│                                             │
│  Ganesan                                    │
│  Muthumani   ← outlined text                │
│                                             │
│  Full-Stack Developer · Java & React.js_    │
│                                             │
│  "CS grad passionate about scalable         │
│   systems and thoughtful UX..."             │
│                                             │
│  [view my work]    [get in touch →]         │
│                                             │
│  2+ internships   2+ projects   10+ techs   │
│                                             │
│  ← parallax dot-grid background moves       │
│    with mouse cursor                        │
│                                    scroll ↓ │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│              01. ABOUT ME                   │
│                                             │
│  Self-driven engineer who                   │
│  builds for real impact.                    │
│                                             │
│  Bio paragraph 1 (background + exp)         │
│  Bio paragraph 2 (Jetz ERP mention)         │
│  Bio paragraph 3 (open to roles)            │
│                                             │
│  Skills Grid (6 categories × 4 items):      │
│  Languages │ Frontend │ Backend             │
│  Databases │ Security │ Tools               │
│                                             │
│                     ┌──────────────────┐    │
│                     │  Profile Card    │    │
│                     │  [GM initials]   │    │
│                     │  Ganesan M.      │    │
│                     │  Full-Stack Dev  │    │
│                     │  📍 Singapore    │    │
│                     │  📧 email        │    │
│                     │  📞 phone        │    │
│                     │ [LinkedIn][Git]  │    │
│                     └──────────────────┘    │
│                     ↑ sticky while scrolling│
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│              02. PROJECTS                   │
│                                             │
│  Featured (2-column grid):                  │
│  ┌─────────────────┐  ┌─────────────────┐   │
│  │ 01              │  │ 02              │   │
│  │ ★ APEEN'25 badge│  │                 │   │
│  │ Blockchain      │  │ Gesture         │   │
│  │ Chat App        │  │ Talk AI         │   │
│  │                 │  │                 │   │
│  │ Description...  │  │ Description...  │   │
│  │ [React][ETH]    │  │ [React][NLP]    │   │
│  └─────────────────┘  └─────────────────┘   │
│  ↑ hover: lift + top accent line            │
│                                             │
│  "other things i've built"                  │
│                                             │
│  ┌─────────────────┐  ┌─────────────────┐   │
│  │ ERP Modules     │  │ Static Web      │   │
│  │ (Jetz intern)   │  │ (NSIC intern)   │   │
│  └─────────────────┘  └─────────────────┘   │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│         03. EXPERIENCE & EDUCATION          │
│                                             │
│  Tab sidebar:        Detail panel:          │
│  ┌─────────────┐                            │
│  │▌Jetz ERP ◄──┼──► Software Dev — Intern  │
│  │  NSIC        │    Jun 2025 – Jul 2025    │
│  │  ACGCET      │    Karaikudi, India       │
│  └─────────────┘                            │
│  ↑ click to switch   ▹ Built full-stack...  │
│                      ▹ Dynamic UI...        │
│                      ▹ .NET exposure...     │
│                      ▹ API-DB security...   │
│                                             │
│                      [Node.js][React.js]... │
│                                             │
│  Certifications (3 cards):                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │ NPTEL    │  │ Coursera │  │ TCS NQT  │  │
│  │ Java 70% │  │ CyberSec │  │ 67.85%   │  │
│  └──────────┘  └──────────┘  └──────────┘  │
│                                             │
│  ★ APEEN'25 Portugal — achievement box      │
└─────────────────────────────────────────────┘
         │
         ▼
┌─────────────────────────────────────────────┐
│               04. CONTACT                   │
│                                             │
│  Let's build          LinkedIn ↗            │
│  something      ───►  GitHub ↗              │
│  together.            Email ↗               │
│  (outlined text)      ┌──────────────┐      │
│                       │ +65 8315 3727│      │
│  [say hello →]        └──────────────┘      │
│                                             │
│  ● Available for full-time roles            │
│    Singapore-based                          │
├─────────────────────────────────────────────┤
│  FOOTER                                     │
│  designed & built by Ganesan Muthumani      │
│                          © 2025             │
└─────────────────────────────────────────────┘
```

### Navigation Behavior

- Header is **fixed** at the top on all scroll positions
- Past 40px scroll, header gains **frosted glass** (`backdrop-blur`) + border
- The **active nav link** highlights in accent color based on visible section
- Clicking a nav link **smooth-scrolls** to that section via `scrollIntoView`
- On mobile (`< md`), nav collapses into a **hamburger menu** that overlays below the header

---

## 5. How It Works — Under the Hood

### Rendering Model

`app/page.tsx` is a **Client Component** (`"use client"`) because it calls `useScrollReveal()` which uses browser APIs. All sections are imported and composed here. Next.js handles code splitting per component automatically.

### Scroll Reveal Animations

`useScrollReveal.ts` creates a single `IntersectionObserver` watching all `.reveal` elements:

```
Element enters viewport (threshold: 8%, rootMargin: -50px bottom)
                    ↓
        .visible class added to element
                    ↓
CSS transition fires:
  opacity:   0  →  1        (0.7s cubic-bezier easing)
  translateY: 28px → 0px   (0.7s cubic-bezier easing)
```

Stagger variants add delays:
```
.reveal-d1  →  transition-delay: 0.1s
.reveal-d2  →  transition-delay: 0.2s
.reveal-d3  →  transition-delay: 0.3s
```

Observer unobserves each element after it becomes visible (fires once only).

### Custom Cursor

Two `<div>` elements tracked with refs (not state — avoids unnecessary re-renders):

```
mousemove event
    ├── DOT: position set directly  (no lag, exact)
    └── RING: lerp at 12% per frame via rAF loop
              (smooth trailing effect)

On hover over <a> or <button>:
    dot  → shrinks (smaller)
    ring → grows + fades (larger, more transparent)
```

### Parallax Grid (Hero)

```
mousemove → calculate offset from screen center → translate grid div
  offsetX = (clientX / windowWidth  - 0.5) × 18
  offsetY = (clientY / windowHeight - 0.5) × 18
```

Creates subtle depth — grid appears to float behind content.

### Tabbed Experience

`useState(0)` tracks the active tab index. Clicking a tab updates state → React re-renders the detail panel with the new job's data. The left accent bar moves via:

```css
transform: translateY(calc(activeIndex × 100%))
transition: transform 0.3s cubic-bezier(.16,1,.3,1)
```

### Active Section Detection (Header)

```
scroll event fires
    ↓
Loop through ['about', 'projects', 'experience', 'contact']
    ↓
Get getBoundingClientRect().top for each section element
    ↓
Array.findLast(section => top <= 120px)
    ↓
Set that section's id as active → nav link highlights
```

---

## 6. Components Reference

| Component | Type | State | Key Events |
|---|---|---|---|
| `Cursor` | Client | refs (no re-render) | `mousemove`, `mouseenter/leave` on links |
| `Header` | Client | `active`, `scrolled`, `menuOpen` | `scroll` |
| `Hero` | Client | ref for grid | `mousemove` |
| `About` | Server | none | — |
| `Projects` | Server | none | — |
| `Experience` | Client | `active` tab index | click on tab buttons |
| `Contact` | Server | none | — |
| `useScrollReveal` | Hook (Client) | none | `IntersectionObserver` |

---

## 7. Design System

### Colors

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#090909` | Page background |
| `bg-2` | `#101010` | Card backgrounds |
| `bg-3` | `#181818` | Hover states |
| `border` | `#1e1e1e` | Default borders |
| `border-2` | `#2a2a2a` | Hover borders |
| `text` | `#e6e3dc` | Primary text |
| `text-2` | `#7a7a7a` | Secondary / muted |
| `text-3` | `#3a3a3a` | Tertiary / disabled |
| `accent` | `#c8f542` | CTAs, highlights, active states |

### Typography

| Token | Font | Weight | Usage |
|---|---|---|---|
| `font-display` | Syne | 400–800 | Headings, name, logo, card titles |
| `font-mono` | DM Mono | 300–500 | Body copy, labels, nav, tags, code |

### Animations

| Name | Keyframe | Applied to |
|---|---|---|
| `fadeUp` | opacity+translateY 0→1 | Hero section entries (staggered) |
| `blink` | opacity 1↔0 step | Cursor blink after role text |
| `scrollDot` | top -6px → 100% | Scroll indicator dot in Hero |
| `.reveal` | opacity+translateY (scroll-triggered) | All section content |

---

## 8. Getting Started

### Prerequisites
- Node.js 18 or higher
- npm 9 or higher
- Git



*Built by Ganesan Muthumani · Full-Stack Developer · Singapore · 2025*
