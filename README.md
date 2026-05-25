# Human Gyroscope

Marketing and booking website for the Human Gyroscope — a 360° multi-axis ride available for events across the Bay Area.

**Live site:** [humangyro.com](https://humangyro.com)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 14](https://nextjs.org/) (App Router) |
| Language | TypeScript |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Hosting | [Vercel](https://vercel.com/) |
| Forms | [Formspree](https://formspree.io/) |
| Domain | Porkbun |

---

## Project Structure

```
src/
├── app/               # Next.js App Router — one folder per page
│   ├── layout.tsx     # Root layout (shared header + footer)
│   ├── page.tsx       # Home
│   ├── about/
│   ├── gallery/
│   ├── book/
│   └── faq/
├── components/        # Reusable UI components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ReviewCard.tsx
│   ├── ScrollingBanner.tsx
│   ├── SectionHeading.tsx
│   └── VideoEmbed.tsx
└── data/              # Static content — no database required
    ├── reviews.ts
    └── nav.ts
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Local development

```bash
# Install dependencies
npm install

# Start the dev server (hot reload included)
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build for production

```bash
npm run build
npm run start
```

---

## Deployment

This site deploys automatically to Vercel on every push to `main`.

1. Push to GitHub
2. Vercel detects the push and runs `npm run build`
3. If the build passes, the new version goes live

### Connecting your Porkbun domain

In Vercel → Project → Settings → Domains, add `humangyro.com`. Vercel provides the DNS records to add in your Porkbun dashboard.

---

## Configuration Checklist

Before going live, update these placeholders:

- [ ] `src/app/page.tsx` — replace `YOUR_VIDEO_ID` with your YouTube video ID
- [ ] `src/app/book/page.tsx` — replace `YOUR_FORMSPREE_ID` with your Formspree form ID
- [ ] `src/app/about/page.tsx` — replace placeholder copy with your real story
- [ ] `src/app/gallery/page.tsx` — add real photos and video IDs
- [ ] `src/data/reviews.ts` — update with real reviews

---

## Adding Content

**New review:** Add an object to the `reviews` array in `src/data/reviews.ts`. TypeScript will enforce the shape.

**New page:** Create `src/app/<slug>/page.tsx`. It's automatically routed to `/<slug>` and picks up the shared layout.

**New nav link:** Add an entry to `src/data/nav.ts`. Both the Header and Footer consume this array — one change, updates both.
