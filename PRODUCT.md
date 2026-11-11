# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary: employers.** Recruiters and hiring managers evaluating Cody for IT and software roles. They usually arrive from a resume, job application, or LinkedIn, and scan quickly to judge experience, range, and whether the work is real.
- **Secondary: prospective Electric Trident clients.** Companies and organizations looking for a custom web app or AI platform. They need to see that Cody ships production work and know how to reach the consultancy.

## Product Purpose

Cody Thornell's personal portfolio covers his experience, education, and projects. It is his main professional showcase, and it started as a way to learn web development in the open.

A visit succeeds when the visitor:
- opens a project (its detail page, live site, store listing, or GitHub),
- goes on to LinkedIn or GitHub, or
- becomes an Electric Trident lead by emailing cody@electrictrident.com or visiting electrictrident.com.

## Positioning

Cody covers both sides of technical work, which few student or early-career portfolios can claim:
- **IT operations:** he manages a team of 12+ students at the WMU CAE Center and works with Active Directory, Group Policy across 300+ endpoints, Linux, and Oracle EBS.
- **Shipped software:** 20+ projects, including apps in the App Store and Google Play, client sites, and hackathon wins.

On top of that he is studying for an MBA, focused on the business side of technology, and co-founded a consultancy (Electric Trident) that has five client organizations.

## Operating Context

- Visitors arrive from resumes, applications, LinkedIn, and shared links. Each project has its own Open Graph card, so a shared project link previews well.
- AI agents read `public/llms.txt`, a plain-text summary of the whole site.
- Projects can be filtered by category: AI/ML, Web Dev, Hackathon, Mobile, IT Tools, AR/VR. They open in a modal on the home and listing pages, and every project also has its own page at `/projects/<slug>`.
- `/contact` has a form with a honeypot field. It is the only way to reach Cody personally.

## Capabilities and Constraints

- **Stack:** Next.js 15 App Router, TypeScript, Tailwind CSS 4, shadcn/ui, Framer Motion, Lenis, and next-themes, hosted on Vercel. Microsoft Clarity provides analytics.
- **Single source of project content:** `lib/projects.ts`. Shared site metadata lives in `lib/site.ts`. The listing, modal, detail page, sitemap, OG image, and JSON-LD are all generated from these files.
- **`public/llms.txt` is maintained by hand.** Update it whenever experience or projects change.
- **Blog:** the route is currently disabled (moved to `app/_blog`). Whether it comes back is undecided.
- **Light and dark themes are both required.** Neither theme is the canonical one.

## Brand Commitments

- **Name and title:** Cody Thornell, "IT and Software Developer". He is an MBA/CS student at Western Michigan University in Kalamazoo, MI.
- **Voice:** first person, plain, and direct.
- **Electric Trident** is the consultancy Cody co-founded. It builds custom web apps and AI platforms for clients. Its logo is `public/companies/electric-trident.png`, and its public contact is cody@electrictrident.com.
- **No personal email address appears anywhere on the site.** Personal contact goes only through `/contact`. Publishing the Electric Trident email is fine.

## Evidence on Hand

- **Projects:** every entry in `lib/projects.ts`, with screenshots in `public/projects/` (940×788).
- **Awards:**
  - VolleyNet: 3 Pitch Grants
  - Shelf: 2 Pitch Awards
  - HackWMU 2024: 1st Place
  - MWC3 2024: 1st Place
  - sprint.dev 2025: 1st Place
  - Bronco 2026: Top 3 (NASA BioExplorer)
  - Localhost 2025: Top 5 (FlightBrief AI)
- **Press:**
  - WMU News on Cultivate269 and ATOM Medic
  - Western Herald on BroncoNav
  - Michigan SBDC on Shelf
- **Live products:** VolleyNet's App Store and Google Play listings, plus the live sites linked from each project.
- **Logos and photo:** employer and school logos in `public/companies/`, and Cody's profile photo at `public/pfp.png`.
- **Electric Trident's "5 satisfied companies/organizations"** is a claim the site makes as written.
- **Not on hand, so never fabricate it:**
  - testimonials or quotes
  - Electric Trident client logos or case studies beyond the listed projects
  - user, revenue, or traffic metrics beyond those already stated
  - a downloadable resume (the button is currently commented out)

## Product Principles

1. **The work is the proof.** Shipped projects, live links, awards, and press carry the argument. Any claim should be one click away from the artifact that backs it.
2. **Employers first, clients close behind.** The Electric Trident path stays visible and easy to act on, but it never pushes the hiring story aside.
3. **Both disciplines are first-class.** IT operations and software development are both core strengths, and neither is presented as a footnote to the other.
4. **Only true claims.** Every statement traces back to `lib/projects.ts`, the resume, or a linked source.

## Accessibility & Inclusion

WCAG 2.2 AA is a hard requirement in both the light and dark themes. The site is itself evidence of Cody's accessibility work. BroncoNav, for example, was built to WCAG standards with a VPAT and screen reader testing.
