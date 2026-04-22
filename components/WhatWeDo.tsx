"use client";

import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import SpotlightCard from "./motion/SpotlightCard";

const bullets = [
  {
    label: "intellect",
    body: "Every project starts from a real problem you live with — not a template. We scope it, you ship it."
  },
  {
    label: "connection",
    body: "A 1:1 mentor who has shipped in industry. Weekly pairing sessions. Code reviews that teach."
  },
  {
    label: "growth",
    body: "A live URL, a clean README, and an interview story recruiters actually remember."
  }
];

const examples = [
  "AI email sorter",
  "Resume screener",
  "Study planner",
  "Meeting summarizer",
  "Campus event aggregator",
  "Class notes indexer",
  "Job-tracker + follow-ups",
  "Lecture → flashcards"
];

export default function WhatWeDo() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-cream-light/40">
      <div className="container-page">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <div>
            <Reveal>
              <span className="section-eyebrow">
                <span>02 ·</span> What we do
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-3">
                AI projects hiring teams
                <br />
                <span className="gradient-text italic">actually care about</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-lg muted">
                We deploy real AI projects for students — built around a
                problem you actually face, shipped to a live URL, ready for
                your resume. The kind of work recruiters bring up in the first
                interview, not the kind they scroll past.
              </p>
            </Reveal>

            <Stagger className="mt-8 space-y-5" stagger={0.1}>
              {bullets.map((b) => (
                <StaggerItem key={b.label}>
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gold-soft ring-1 ring-gold/40"
                      whileHover={{ rotate: 90, scale: 1.12 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <span className="text-sm text-gold-deep">✦</span>
                    </motion.div>
                    <p>
                      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-gold-deep">
                        {b.label}
                      </span>
                      <span className="mt-1 block text-ink-muted">
                        {b.body}
                      </span>
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          <Reveal direction="left" delay={0.2}>
            <SpotlightCard className="relative">
              <div className="flex items-center justify-between">
                <span className="chip font-mono">examples.ts</span>
                <span className="font-mono text-xs text-ink-faint">
                  8 of ∞
                </span>
              </div>
              <Stagger
                className="mt-5 flex flex-wrap gap-2"
                stagger={0.05}
                delayChildren={0.2}
              >
                {examples.map((e, i) => (
                  <StaggerItem key={e}>
                    <motion.span
                      whileHover={{ scale: 1.06, y: -2 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="inline-flex cursor-default items-center gap-2 rounded-lg border border-line bg-cream/60 px-3 py-2 text-sm text-ink transition hover:border-gold/50 hover:text-gold-deep"
                    >
                      <span className="font-mono text-xs text-ink-faint">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {e}
                    </motion.span>
                  </StaggerItem>
                ))}
              </Stagger>
              <div className="mt-6 rounded-lg border border-line bg-cream-light/70 p-4 font-mono text-[12px] leading-relaxed">
                <div className="text-ink-faint">// the only rule</div>
                <div>
                  <span className="text-gold-deep">const</span>{" "}
                  <span className="text-ink">project</span> ={" "}
                  <span className="text-green-700">
                    "something you'd actually use"
                  </span>
                  ;
                  <motion.span
                    className="ml-1 text-gold"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 1.1, repeat: Infinity }}
                  >
                    ▍
                  </motion.span>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
