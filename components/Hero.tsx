"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import MagneticButton from "./motion/MagneticButton";
import Typewriter from "./motion/Typewriter";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />

      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[72rem] -translate-x-1/2 rounded-full bg-gold/18 blur-3xl"
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }
        }
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-page relative pt-14 pb-20 sm:pt-20 sm:pb-28">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            className="mx-auto h-36 w-56 sm:h-44 sm:w-72"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              animate={reduce ? undefined : { y: [0, -6, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative h-full w-full"
            >
              <Image
                src="/logo.png"
                alt="NEXIA"
                fill
                sizes="(max-width: 640px) 224px, 288px"
                priority
                className="object-contain"
              />
            </motion.div>
          </motion.div>

          <motion.span
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/80 px-3 py-1 text-xs font-mono uppercase tracking-[0.22em] text-gold-deep shadow-soft"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.span
              className="h-1.5 w-1.5 rounded-full bg-gold"
              animate={{ scale: [1, 1.6, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            <span>intellect · connection · growth</span>
          </motion.span>

          <motion.h1
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            AI projects that{" "}
            <span className="gradient-text-hot">get you hired</span>.
            <br />
            Because every hiring team is{" "}
            <br className="sm:hidden" />hunting for one thing.
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-ink-muted sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            Every recruiter in 2026 wants students who can build with AI. We
            design the project, build it with you, explain every line, and
            stay till it's deployed — so you walk away owning something
            hiring teams stop scrolling for.
          </motion.p>

          <motion.div
            className="mt-7 flex flex-wrap items-center justify-center gap-2.5 text-xs font-mono"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            {[
              "built with you, not for you",
              "every line explained",
              "stays shipped"
            ].map((p) => (
              <span
                key={p}
                className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-3 py-1 text-gold-deep backdrop-blur-sm"
              >
                <span className="h-1 w-1 rounded-full bg-gold" />
                {p}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <MagneticButton href="#join" className="btn-gold">
              <span>Get started</span>
              <motion.span
                aria-hidden
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                →
              </motion.span>
            </MagneticButton>
            <MagneticButton href="#showcase" className="btn-ghost">
              <span>See the work</span>
            </MagneticButton>
          </motion.div>
        </div>

        <motion.div
          className="mx-auto mt-16 max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="terminal overflow-hidden gold-border">
            <div className="flex items-center gap-2 border-b border-line bg-cream/60 px-4 py-3">
              <span className="terminal-dot bg-red-400/70" />
              <span className="terminal-dot bg-yellow-400/80" />
              <span className="terminal-dot bg-green-500/80" />
              <span className="ml-3 text-xs text-ink-faint">
                ~/nexia/your-project — zsh
              </span>
              <motion.span
                className="ml-auto flex items-center gap-1.5 text-[10px] font-mono text-gold-deep"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.8, repeat: Infinity }}
              >
                <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                live
              </motion.span>
            </div>
            <div className="px-5 py-4 text-ink min-h-[11rem]">
              <div>
                <span className="text-gold-deep">$</span>{" "}
                <Typewriter
                  lines={[
                    "nexia init --track ai-automation",
                    "nexia init --track product-ai",
                    "nexia init --track growth-tools"
                  ]}
                  speed={36}
                  linePause={1600}
                  className="text-ink"
                />
              </div>
              <motion.div
                className="mt-2 text-ink-muted"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                → scoping your project around a problem you live with…
              </motion.div>
              <motion.div
                className="text-ink-muted"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.5 }}
              >
                → stack: next.js · openai · postgres · gmail api
              </motion.div>
              <motion.div
                className="text-ink-muted"
                initial={{ opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.8 }}
              >
                → pairing with a mentor who has shipped this before
              </motion.div>
              <motion.div
                className="mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.2 }}
              >
                <span className="text-green-600">✓</span> deployed at{" "}
                <span className="text-gold-deep underline">
                  you.nexia.app
                </span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
              >
                <span className="text-green-600">✓</span> pushed to{" "}
                <span className="text-gold-deep">
                  github.com/you/ai-email-sorter
                </span>
              </motion.div>
              <motion.div
                className="mt-2 text-ink-muted"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.9 }}
              >
                ready to ship on your resume.
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-ink-faint"
        animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-mono uppercase tracking-[0.3em]">
            scroll
          </span>
          <span className="h-8 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
