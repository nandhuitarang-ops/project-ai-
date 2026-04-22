"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import Reveal from "./motion/Reveal";
import MagneticButton from "./motion/MagneticButton";

export default function JoinCTA() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const reduce = useReducedMotion();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError(null);
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const name = (data.get("name") ?? "").toString().trim();
      const email = (data.get("email") ?? "").toString().trim();
      const phone = (data.get("phone") ?? "").toString().trim();
      const message = (data.get("message") ?? "").toString().trim();

      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
      if (!accessKey) throw new Error("Missing access key");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: accessKey,
          from_name: "NEXIA website",
          subject: `New NEXIA lead — ${name}`,
          name,
          email,
          phone,
          message: message || "(no message)",
          reply_to: email,
          botcheck: ""
        })
      });
      const json = (await res.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;
      if (!res.ok || !json?.success) {
        throw new Error(json?.message ?? "Delivery failed");
      }
      setSubmitted(true);
    } catch {
      setError("Couldn't send — please email us directly.");
    } finally {
      setSending(false);
    }
  }

  return (
    <section
      id="join"
      className="relative overflow-hidden border-t border-line py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-72 w-[50rem] -translate-x-1/2 rounded-full bg-gold/25 blur-3xl"
        animate={
          reduce
            ? undefined
            : {
                scale: [1, 1.15, 1],
                opacity: [0.4, 0.75, 0.4]
              }
        }
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="section-eyebrow">
              <span>07 ·</span> Let's build
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="section-title mt-3">
              Ready to build{" "}
              <span className="gradient-text-hot italic">something real</span>?
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-lg muted">
              Drop your details. In 48 hours we'll send you a scoped AI
              project idea for your domain — the kind hiring teams stop
              scrolling for. No pitch deck, no sales call.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.92, y: 12 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ type: "spring", stiffness: 220, damping: 22 }}
                className="card text-center gold-border"
              >
                <motion.div
                  className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-gold-soft ring-1 ring-gold/50"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 16,
                    delay: 0.15
                  }}
                >
                  <span className="text-lg text-gold-deep">✓</span>
                </motion.div>
                <h3 className="mt-4 font-display text-xl font-semibold text-ink">
                  You're in.
                </h3>
                <p className="mt-2 muted">
                  We'll be in your inbox within 48 hours. Watch for a message
                  from{" "}
                  <a
                    href="mailto:nandhu939880@gmail.com"
                    className="font-mono text-gold-deep link-underline"
                  >
                    nandhu939880@gmail.com
                  </a>
                  .
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={onSubmit}
                className="card space-y-4 gold-border"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <FloatingField
                  id="name"
                  label="Full name"
                  placeholder="Your name"
                />
                <FloatingField
                  id="email"
                  label="Email"
                  placeholder="you@example.com"
                  type="email"
                />
                <FloatingField
                  id="phone"
                  label="Phone number"
                  placeholder="+91 98765 43210"
                  type="tel"
                />
                <div>
                  <label
                    htmlFor="message"
                    className="font-mono text-xs uppercase tracking-wider text-ink-muted"
                  >
                    What do you want to build? (optional)
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="A line or two about your idea…"
                    whileFocus={{ scale: 1.005 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="mt-1 w-full resize-none rounded-lg border border-line bg-cream-light/70 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
                  />
                </div>
                {error && (
                  <p className="text-center text-xs text-red-600">{error}</p>
                )}
                <MagneticButton
                  type="submit"
                  className="btn-gold w-full justify-center disabled:opacity-70"
                >
                  <span>{sending ? "Sending…" : "Send details"}</span>
                  <motion.span
                    aria-hidden
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.4, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </MagneticButton>
                <p className="text-center text-xs text-ink-faint">
                  Prefer to reach out directly? Email{" "}
                  <a
                    href="mailto:nandhu939880@gmail.com"
                    className="text-gold-deep link-underline"
                  >
                    nandhu939880@gmail.com
                  </a>{" "}
                  or WhatsApp{" "}
                  <a
                    href="https://wa.me/919666240862"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gold-deep link-underline"
                  >
                    +91 96662 40862
                  </a>
                  .
                </p>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function FloatingField({
  id,
  label,
  placeholder,
  type = "text"
}: {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-mono text-xs uppercase tracking-wider text-ink-muted"
      >
        {label}
      </label>
      <motion.input
        id={id}
        name={id}
        type={type}
        required
        placeholder={placeholder}
        whileFocus={{ scale: 1.01 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="mt-1 w-full rounded-lg border border-line bg-cream-light/70 px-4 py-3 text-ink placeholder:text-ink-faint focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/30"
      />
    </div>
  );
}
