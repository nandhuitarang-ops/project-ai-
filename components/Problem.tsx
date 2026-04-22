"use client";

import Reveal from "./motion/Reveal";
import { Stagger, StaggerItem } from "./motion/Stagger";
import SpotlightCard from "./motion/SpotlightCard";

const pains = [
  {
    title: "The hiring bar moved to AI",
    body: "Every team is hunting for builders who can ship automation. Few resumes show it. That gap is your opening — if you know what to build."
  },
  {
    title: "AI wrappers aren't AI projects",
    body: "Slapping an OpenAI call on a form doesn't show you can build real systems. Hiring teams learned to spot it in one question."
  },
  {
    title: "No real problem, no real story",
    body: "A project needs a reason to exist. Without it, there's nothing interesting to say in interviews."
  },
  {
    title: "Lost in the crowd",
    body: "Everyone's applying with the same resume. You need one line that makes them stop."
  }
];

export default function Problem() {
  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <div className="container-page">
        <div className="max-w-3xl">
          <Reveal>
            <span className="section-eyebrow">
              <span>01 ·</span> The problem
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-3">
              Every hiring team wants AI skills.
              <br />
              <span className="text-stroke">Nobody's showing real AI projects.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg muted">
              Automation, LLMs, agents — that's what recruiters are hunting
              for. But resumes still ship todo apps and tutorial clones. The
              gap between what the market wants and what students build has
              never been wider. That's where we come in.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2">
          {pains.map((p) => (
            <StaggerItem key={p.title}>
              <SpotlightCard className="h-full card-hover">
                <div className="flex items-start gap-4">
                  <div className="mt-1 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gold-soft ring-1 ring-gold/40">
                    <span className="font-mono text-sm text-gold-deep">✕</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-1 muted">{p.body}</p>
                  </div>
                </div>
              </SpotlightCard>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
