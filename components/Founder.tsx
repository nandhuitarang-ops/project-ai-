"use client";

import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";
import SpotlightCard from "./motion/SpotlightCard";

export default function Founder() {
  return (
    <section
      id="founder"
      className="relative overflow-hidden border-t border-line bg-cream-light/40 py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "url('/images/arc.png')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          opacity: 0.18,
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 50%, black 0%, transparent 80%)",
        }}
      />
      <div className="container-page relative z-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="section-eyebrow">
              <span>06 ·</span> Who's behind this
            </span>
          </Reveal>

          <Reveal delay={0.1}>
            <SpotlightCard className="mt-6">
              <div className="flex flex-col items-start gap-5 sm:flex-row">
                <motion.div
                  className="relative h-16 w-16 shrink-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 260 }}
                >
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 rounded-2xl"
                    style={{
                      background:
                        "conic-gradient(from 180deg, #111111, #444444, #111111, #222222)",
                      filter: "blur(12px)",
                      opacity: 0.35
                    }}
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 16,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                  <div className="relative grid h-16 w-16 place-items-center rounded-2xl bg-ink font-display text-xl font-light text-cream shadow-card">
                    n.
                  </div>
                </motion.div>
                <div>
                  <h3 className="font-display text-2xl font-semibold text-ink">
                    A recent grad who's been in the trenches.
                  </h3>
                  <p className="mt-3 muted">
                    I spent three years building AI side-projects while
                    cold-emailing my way into internships. The projects that got
                    me calls back weren't the cleanest — they were the ones
                    that solved something real. Nexia is the loop I wish I had
                    in my second year.
                  </p>
                  <p className="mt-3 muted">
                    We work 1:1 with every builder we take on. No cohort of
                    300. No chatbot support. Just a peer who's figured out
                    enough to shortcut your next 18 months.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "ex-intern @ early-stage",
                      "shipped 14 AI tools",
                      "writes code · not decks"
                    ].map((tag) => (
                      <motion.span
                        key={tag}
                        whileHover={{ y: -2, scale: 1.04 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="chip font-mono"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
