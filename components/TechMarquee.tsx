"use client";

import Marquee from "./motion/Marquee";

const partners = [
  "OPENAI",
  "ANTHROPIC",
  "VERCEL",
  "SUPABASE",
  "POSTGRES",
  "NEXT.JS",
  "PYTHON",
  "LANGCHAIN",
  "WHISPER",
  "PINECONE",
  "FASTAPI",
  "TYPESCRIPT",
  "TAILWIND",
  "STRIPE",
  "NOTION",
  "SLACK"
];

export default function TechMarquee() {
  return (
    <section className="relative border-y border-line bg-cream-light/60 py-8">
      <div className="container-page">
        <p className="text-center text-[11px] font-mono uppercase tracking-[0.3em] text-ink-faint">
          the stack hiring teams are hunting for
        </p>
      </div>
      <div className="relative mt-6 flex flex-col gap-3">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg" />
        <Marquee>
          {partners.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-3 whitespace-nowrap font-display text-xl font-semibold tracking-tight text-ink-muted/70 transition hover:text-ink"
            >
              {t}
              <span className="text-gold/50">◆</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
