# Ganesan Muthumani — Portfolio

Dark minimal portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Quick Start

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Customization

### Add your photo
1. Drop your photo as `photo.jpg` in `/public/`
2. In `components/About.tsx`, replace the `GM` initials `<div>` with:
```tsx
import Image from "next/image";
// ...
<Image src="/photo.jpg" alt="Ganesan Muthumani" fill className="object-cover rounded-md" />
```

### Add your resume
Drop `resume.pdf` in `/public/` — then add a download link anywhere, e.g. in the Header:
```tsx
<a href="/resume.pdf" download>Download CV</a>
```

### Update accent color
In `tailwind.config.js`, change:
```js
accent: "#c8f542",  // currently lime green
```

## Deploy to Vercel
```bash
# Push to GitHub, then connect repo on vercel.com
# Zero config needed — it just works.
```

## Project Structure
```
portfolio/
├── app/
│   ├── globals.css      # Tailwind + custom utilities
│   ├── layout.tsx       # Metadata
│   └── page.tsx         # Root page
├── components/
│   ├── Cursor.tsx        # Animated custom cursor
│   ├── Header.tsx        # Sticky nav
│   ├── Hero.tsx          # Landing with parallax grid
│   ├── About.tsx         # Bio + skills + contact card
│   ├── Projects.tsx      # Featured + other projects
│   ├── Experience.tsx    # Tabbed work/edu + certs
│   ├── Contact.tsx       # CTA + socials + footer
│   └── useScrollReveal.ts
├── tailwind.config.js
└── public/              # Drop photo.jpg and resume.pdf here
```
