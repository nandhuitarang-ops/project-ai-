"use client";

import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";
import SpotlightCard from "./motion/SpotlightCard";
import WordReveal from "./motion/WordReveal";
import StackingCards from "./motion/StackingCards";

const steps = [
  {
    n: "01",
    title: "Tell us your domain",
    body: "Productivity, academics, finance, creator tools — whatever problem space you live in.",
    hint: "5 min form"
  },
  {
    n: "02",
    title: "We design the project",
    body: "We pick a real problem in that domain, scope it, and design the architecture with you.",
    hint: "1 call"
  },
  {
    n: "03",
    title: "Build it, together",
    body: "End to end — backend, LLM integration, UI, deployment. You write the code. We pair.",
    hint: "2–3 weeks"
  },
  {
    n: "04",
    title: "You own it",
    body: "Your repo. Your deployed URL. Your resume line. A project you can explain line by line.",
    hint: "Forever"
  }
];

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="relative overflow-hidden border-t border-line py-24 sm:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-0 h-full w-1/2"
        style={{
          backgroundImage: "url('/images/arc.png')",
          backgroundSize: "cover",
          backgroundPosition: "left center",
          opacity: 0.1,
          maskImage:
            "linear-gradient(to left, black 0%, transparent 80%)",
          WebkitMaskImage:
            "linear-gradient(to left, black 0%, transparent 80%)",
        }}
      />
      <div className="container-page relative z-10">
        <div className="max-w-3xl">
          <Reveal>
            <span className="section-eyebrow">
              <span>03 ·</span> How it works
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-3">
              Four steps.{" "}
              <span className="gradient-text italic">One real project.</span>
            </h2>
          </Reveal>
          <WordReveal
            as="p"
            className="mt-5 text-lg muted"
            stagger={36}
            duration={640}
          >
            No curriculum. No 40-hour video wall. Just focused building with someone who's shipped.
          </WordReveal>
        </div>

        <div className="relative mt-12">
          <StackingCards>
            {steps.map((s, i) => (
              <SpotlightCard
                key={s.n}
                className="relative card-hover min-h-[240px] sm:min-h-[260px] bg-bg-card"
              >
                <div className="flex items-baseline justify-between">
                  <motion.span
                    className="font-display text-4xl font-semibold text-gold-deep/80 sm:text-5xl"
                    whileHover={{ scale: 1.1, color: "#111111" }}
                  >
                    {s.n}
                  </motion.span>
                  <span className="chip font-mono">{s.hint}</span>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-ink sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-xl text-base text-ink-muted">
                  {s.body}
                </p>
                {i < steps.length - 1 && (
                  <motion.div
                    aria-hidden
                    className="absolute bottom-6 right-6 text-gold/70"
                    animate={{ y: [0, 4, 0] }}
                    transition={{
                      duration: 1.6,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  >
                    ↓
                  </motion.div>
                )}
              </SpotlightCard>
            ))}
          </StackingCards>
        </div>
      </div>
    </section>
  );
}
