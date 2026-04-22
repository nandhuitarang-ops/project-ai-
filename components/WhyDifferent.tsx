"use client";

import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";

const rows = [
  { us: "A real, deployed project", them: "A 40-hour course certificate" },
  { us: "You write every line", them: "You copy every line" },
  {
    us: "Modern stack: Next.js, Python, LLMs",
    them: "Legacy stack, outdated tooling"
  },
  { us: "One project, fully owned", them: "Ten half-finished demos" },
  {
    us: "A story you can tell in interviews",
    them: "A certificate you can't explain"
  }
];

export default function WhyDifferent() {
  return (
    <section
      id="why"
      className="relative border-t border-line bg-cream-light/40 py-24 sm:py-32"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <Reveal>
            <span className="section-eyebrow">
              <span>04 ·</span> Why NEXIA
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-3">
              Not a course.
              <br />
              <span className="text-stroke italic">
                Not a tutorial. A real project.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg muted">
              No black boxes. You understand every line you ship — because you
              wrote it, debugged it, and deployed it yourself.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-12 overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
            <div className="grid grid-cols-2 border-b border-line bg-cream/60 text-xs font-mono uppercase tracking-wider">
              <div className="flex items-center gap-2 px-5 py-3 tracking-[0.2em] text-gold-deep">
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_8px_rgba(201,162,39,0.6)]"
                  animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                />
                NEXIA
              </div>
              <div className="border-l border-line px-5 py-3 text-ink-faint">
                everyone else
              </div>
            </div>
            {rows.map((r, i) => (
              <motion.div
                key={i}
                className="group grid grid-cols-2 text-sm sm:text-base"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div className="flex items-center gap-3 border-t border-line px-5 py-4 transition group-hover:bg-gold-soft/40">
                  <motion.span
                    className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-gold-soft text-[11px] text-gold-deep ring-1 ring-gold/40"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    ✓
                  </motion.span>
                  <span className="text-ink">{r.us}</span>
                </div>
                <div className="flex items-center gap-3 border-l border-t border-line px-5 py-4 text-ink-muted line-through decoration-ink-faint/60">
                  <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-cream text-[11px] text-ink-faint ring-1 ring-line">
                    —
                  </span>
                  <span>{r.them}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
