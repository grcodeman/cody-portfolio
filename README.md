<div align="center">

# Cody Thornell — Portfolio

Personal site for my experience, education, and projects.
Built to learn web dev in the open, and kept as my main showcase.

**[codythornell.com](https://codythornell.com)**

[![Next.js](https://img.shields.io/badge/Next.js-15.3-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Vercel-deployed-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com)

</div>

---

## Pages

| | |
|---|---|
| **Home** | Who I am, my IT and software experience, and education |
| **Projects** | Everything I've built — web, mobile, AI/ML, AR/VR, hackathons, and IT tooling |
| **Blog** | Writing on what I'm working on and learning (coming soon) |
| **Contact** | Get in touch |

## Stack

| Layer | Tool |
|---|---|
| Framework | [Next.js 15](https://nextjs.org) (App Router, TypeScript) |
| Styling | [Tailwind CSS 4](https://tailwindcss.com) + [shadcn/ui](https://ui.shadcn.com) |
| Motion | [Framer Motion](https://www.framer.com/motion/) + [Lenis](https://lenis.darkroom.engineering) smooth scroll |
| Theming | [next-themes](https://github.com/pacocoursey/next-themes) |
| Icons | [lucide-react](https://lucide.dev), [react-icons](https://react-icons.github.io/react-icons/) |
| Analytics | [Microsoft Clarity](https://clarity.microsoft.com) |
| Hosting | [Vercel](https://vercel.com) |

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build    # production build
npm run start    # serve the build
npm run lint     # eslint
```

> [!TIP]
> To run a production build while `npm run dev` is running, send it to a different
> directory so the two don't fight over `.next`:
> ```bash
> NEXT_DIST_DIR=.next-verify npm run build
> ```

## Structure

```
app/
  page.tsx              # home — bio, experience, education, featured projects
  projects/             # listing, plus [slug] detail pages + per-project OG images
  blog/  contact/
  opengraph-image.tsx   # site-wide social card
  robots.ts  sitemap.ts
components/             # Header, Footer, ProjectCard, ProjectModal, ProjectGallery…
lib/
  projects.ts           # every project — the single source of truth
  site.ts               # canonical URL and shared site metadata
public/
  projects/             # screenshots (940×788)
  companies/            # employer + school logos
  llms.txt              # plain-text summary for LLMs and AI agents
```

Adding a project means adding one entry to [`lib/projects.ts`](lib/projects.ts). The
listing, modal, detail page, sitemap entry, OG image, and structured data all follow
from it.

## Credit

Followed this [tutorial video](https://www.youtube.com/watch?v=12ZeRqf5CQE) from
**How To Web Dev** on YouTube to get started, then took it well past that — navigation,
blog, contact page, project pages, and the rest.
