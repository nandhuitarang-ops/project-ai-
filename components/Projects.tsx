"use client";

import { motion } from "framer-motion";
import Reveal from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import SpotlightCard from "./motion/SpotlightCard";

const projects = [
  {
    name: "AI Job Tracker",
    hook: "Applied to 200 jobs? This tracks every one automatically.",
    tech: ["Next.js", "Gmail API", "GPT-4", "Postgres"],
    impact: "Parses confirmation emails, classifies stages, sends follow-ups.",
    tag: "automation"
  },
  {
    name: "Inbox Sorter",
    hook: "Turns a 500-email backlog into 5 folders in under a minute.",
    tech: ["Python", "FastAPI", "LLM", "Gmail API"],
    impact: "Learns your rules from 20 examples. Runs on a schedule.",
    tag: "productivity"
  },
  {
    name: "Lecture → Notes",
    hook: "Drop a 90-minute lecture. Get clean, searchable notes.",
    tech: ["Whisper", "Next.js", "Vercel AI SDK"],
    impact: "Summary + timestamps + flashcards, exported to Notion.",
    tag: "academics"
  },
  {
    name: "Meeting Summarizer",
    hook: "Joins your call. Leaves with the notes you'd never write.",
    tech: ["Deepgram", "GPT-4", "Slack Bot"],
    impact:
      "Action items, decisions, owners — in Slack before you're off the call.",
    tag: "teams"
  },
  {
    name: "Campus Events Aggregator",
    hook: "Every event on your campus, in one feed. Auto-updated.",
    tech: ["Python", "Playwright", "Postgres", "LLM"],
    impact: "Scrapes 20 sources, dedupes, ranks by your interest graph.",
    tag: "community"
  },
  {
    name: "Resume Screener",
    hook: "The tool that's screening you — now on your side.",
    tech: ["Python", "Embeddings", "Streamlit"],
    impact: "Scores your resume against a JD. Explains gaps. Suggests edits.",
    tag: "career"
  }
];

export default function Projects() {
  return (
    <section
      id="showcase"
      className="relative border-t border-line py-24 sm:py-32"
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
      <div className="container-page">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <span className="section-eyebrow">
                <span>05 ·</span> Showcase
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="section-title mt-3">
                Projects recruiters
                <br />
                <span className="gradient-text-hot italic">
                  stop scrolling for
                </span>
                .
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1} direction="left">
            <p className="max-w-sm muted">
              Examples of what builders ship with Nexia. Your project will be
              yours — designed around what you actually do.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <StaggerItem key={p.name}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="h-full"
              >
                <SpotlightCard className="flex h-full flex-col card-hover">
                  <div className="flex items-center justify-between">
                    <span className="chip">
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-gold"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <span className="font-mono">{p.tag}</span>
                    </span>
                    <span className="font-mono text-xs text-ink-faint">
                      /project
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {p.name}
                  </h3>
                  <p className="mt-2 muted">{p.hook}</p>
                  <p className="mt-4 text-sm text-ink">
                    <span className="text-ink-muted">Impact · </span>
                    {p.impact}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 border-t border-line pt-4">
                    {p.tech.map((t) => (
                      <motion.span
                        key={t}
                        whileHover={{
                          scale: 1.08,
                          borderColor: "rgba(201,162,39,0.55)",
                          color: "#8a6a1f"
                        }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="cursor-default rounded-md border border-line bg-cream/50 px-2 py-1 font-mono text-[11px] text-ink-muted"
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
