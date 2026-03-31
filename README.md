# Ganesan Muthumani — Portfolio

> A modern personal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.
> Designed to showcase projects, skills, experience, and contact information in a clean, interactive format.

**Live Website:**
https://my-portfolio-muthumani.vercel.app

---

# Project Overview

This portfolio is a **single-page developer portfolio** for **Ganesan Muthumani**, a Full-Stack Developer based in Singapore.
It acts as a digital resume, project showcase, and contact platform for recruiters and hiring managers.

The website focuses on:

* Clean developer-style UI
* Smooth scroll animations
* Responsive layout (mobile, tablet, desktop)
* Interactive elements (custom cursor, parallax background)
* Structured project and experience presentation

---

# Tech Stack

| Layer           | Technology                    | Purpose                        |
| --------------- | ----------------------------- | ------------------------------ |
| Framework       | Next.js 14                    | App Router, routing, SSR       |
| Language        | TypeScript                    | Type safety                    |
| Styling         | Tailwind CSS                  | Utility-first styling          |
| Fonts           | Google Fonts (Syne + DM Mono) | Display + monospace typography |
| Animations      | CSS + Intersection Observer   | Scroll reveal animations       |
| Deployment      | Vercel                        | Hosting & CI/CD                |
| Package Manager | npm                           | Dependency management          |

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

---

# Project Structure

```
portfolio/
│
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── Cursor.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── useScrollReveal.ts
│
├── public/
│   ├── resume.pdf
│   └── photo.jpg
│
├── tailwind.config.js
├── postcss.config.js
├── next.config.js
├── tsconfig.json
├── package.json
└── README.md
```

---

# Page Sections

The website is a **single scrollable page** with the following sections:

1. **Hero Section** – Introduction, role, CTA buttons
2. **About** – Bio, skills, profile card
3. **Projects** – Featured projects and other work
4. **Experience** – Internship, education, certifications
5. **Contact** – Links, phone, email, availability status
6. **Footer**

Navigation bar allows smooth scrolling to each section.

---

# How It Works (Under the Hood)

### Scroll Reveal Animation

Elements with `.reveal` class are observed using **Intersection Observer**.

When element enters viewport:

* opacity → 0 → 1
* translateY → 28px → 0
* animation duration → 0.7s

This creates smooth scroll-in animations across the website.

---

### Custom Cursor

The cursor consists of:

* Dot → follows mouse instantly
* Ring → follows with delay (smooth trailing effect)

On hover over links/buttons:

* Dot shrinks
* Ring expands and fades

---

### Parallax Background Grid

Mouse movement slightly shifts background grid to create depth effect.

```
offsetX = (mouseX / screenWidth - 0.5) × 18
offsetY = (mouseY / screenHeight - 0.5) × 18
```

---

### Experience Tabs

Experience section uses React state:

```
const [active, setActive] = useState(0);
```

Clicking tabs updates the content panel dynamically.

---

# Components Reference

| Component       | Description                     |
| --------------- | ------------------------------- |
| Cursor          | Custom animated cursor          |
| Header          | Sticky navigation bar           |
| Hero            | Landing section                 |
| About           | Bio + skills                    |
| Projects        | Project showcase                |
| Experience      | Work, education, certifications |
| Contact         | Contact section                 |
| useScrollReveal | Scroll animation hook           |

---

# Design System

## Colors

| Token          | Hex     |
| -------------- | ------- |
| Background     | #090909 |
| Card           | #101010 |
| Border         | #1e1e1e |
| Primary Text   | #e6e3dc |
| Secondary Text | #7a7a7a |
| Accent         | #c8f542 |

## Typography

| Usage    | Font    |
| -------- | ------- |
| Headings | Syne    |
| Body     | DM Mono |

---

# Getting Started

### Clone the repository

```
git clone https://github.com/yourusername/portfolio.git
```

### Install dependencies

```
npm install
```

### Run development server

```
npm run dev
```

Open:

```
http://localhost:3000
```

---

# Customization Guide

You can edit:

* **Hero text** → `components/Hero.tsx`
* **About content** → `components/About.tsx`
* **Projects** → `components/Projects.tsx`
* **Experience** → `components/Experience.tsx`
* **Contact info** → `components/Contact.tsx`
* **Colors / fonts** → `tailwind.config.js`
* **Resume file** → `/public/resume.pdf`

---

# Deployment

This project is deployed using **Vercel**.

Steps:

1. Push project to GitHub
2. Go to Vercel
3. Import repository
4. Deploy
5. Done

---

# Author

**Ganesan Muthumani**
Full-Stack Developer
Singapore

---

# Final Note

This portfolio was designed and built from scratch using **Next.js, TypeScript, and Tailwind CSS**, focusing on performance, responsiveness, and clean UI design.

---

**Built by Ganesan Muthumani · 2025**
