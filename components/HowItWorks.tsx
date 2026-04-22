"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./motion/Reveal";
import SpotlightCard from "./motion/SpotlightCard";

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
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const progressScale = useTransform(scrollYProgress, [0.1, 0.85], [0, 1]);

  return (
    <section id="how" className="relative border-t border-line py-24 sm:py-32">
      <div className="container-page">
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
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg muted">
              No curriculum. No 40-hour video wall. Just focused building with
              someone who's shipped.
            </p>
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-12">
          <div className="pointer-events-none absolute left-0 right-0 top-10 hidden lg:block">
            <div className="mx-6 h-px bg-line" />
            <motion.div
              aria-hidden
              style={{ scaleX: progressScale }}
              className="mx-6 -mt-px h-px origin-left bg-gradient-to-r from-gold-deep via-gold to-gold-light shadow-[0_0_8px_rgba(201,162,39,0.4)]"
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <SpotlightCard className="relative h-full card-hover">
                  <div className="flex items-baseline justify-between">
                    <motion.span
                      className="font-display text-3xl font-semibold text-gold-deep/80"
                      whileHover={{ scale: 1.1, color: "#8a6a1f" }}
                    >
                      {s.n}
                    </motion.span>
                    <span className="chip font-mono">{s.hint}</span>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted">{s.body}</p>
                  {i < steps.length - 1 && (
                    <motion.div
                      aria-hidden
                      className="absolute -right-3 top-10 hidden text-gold/70 lg:block"
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    >
                      →
                    </motion.div>
                  )}
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
