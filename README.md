# shipkit — landing page

Landing site for an AI project-building startup that helps college students ship real, production-grade AI projects.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

- `app/` — layout, global styles, page composition
- `components/` — section components (Hero, Problem, WhatWeDo, HowItWorks, WhyDifferent, Projects, Founder, JoinCTA, Footer, Nav)
- `tailwind.config.ts` — brand tokens (dark + electric violet accent)

## Notes

- The wordmark is a placeholder (`shipkit.`) — swap when logo is ready.
- The join form is client-side only — wire it to an API route, Resend, or a Google Sheet when needed.
- Instagram / WhatsApp links in the join CTA are placeholders (`#`).
