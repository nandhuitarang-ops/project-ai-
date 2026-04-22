"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Marquee from "./motion/Marquee";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-cream-light/50 pt-12">
      <div className="container-page grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image
                src="/logo.png"
                alt="NEXIA"
                fill
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display text-lg font-bold tracking-[0.15em] text-ink">
                NEXIA
              </span>
              <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-gold-deep">
                the guiding intellect
              </span>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-ink-muted">
            Intellect. Connection. Growth. We help ambitious builders ship
            production-grade AI products.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 text-sm md:col-span-2 md:grid-cols-3">
          <FooterCol
            title="Product"
            links={[
              { href: "#features", label: "Features" },
              { href: "#how", label: "How it works" },
              { href: "#showcase", label: "Showcase" }
            ]}
          />
          <FooterCol
            title="Company"
            links={[
              { href: "#founder", label: "About" },
              { href: "#join", label: "Join" }
            ]}
          />
          <FooterCol
            title="Contact"
            links={[
              {
                href: "mailto:nandhu939880@gmail.com",
                label: "nandhu939880@gmail.com"
              },
              {
                href: "https://wa.me/919666240862",
                label: "WhatsApp · +91 96662 40862",
                external: true
              }
            ]}
          />
        </div>
      </div>

      <div className="container-page mt-10 flex flex-col items-start justify-between gap-3 border-t border-line pt-6 text-xs text-ink-faint sm:flex-row sm:items-center">
        <span>
          © {new Date().getFullYear()} NEXIA. Intellect · Connection · Growth.
        </span>
        <a
          href="mailto:nandhu939880@gmail.com"
          className="font-mono link-underline hover:text-ink"
        >
          nandhu939880@gmail.com
        </a>
      </div>

      <div className="mt-10 overflow-hidden">
        <Marquee fast pauseOnHover={false}>
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="flex items-center gap-8 whitespace-nowrap font-display text-6xl font-extrabold tracking-tight text-stroke sm:text-8xl"
            >
              INTELLECT
              <motion.span
                className="text-gold/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.span>
              CONNECTION
              <motion.span
                className="text-gold/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.span>
              GROWTH
              <motion.span
                className="text-gold/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                ✦
              </motion.span>
            </span>
          ))}
        </Marquee>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links
}: {
  title: string;
  links: { href: string; label: string; external?: boolean }[];
}) {
  return (
    <div>
      <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-deep">
        {title}
      </h4>
      <ul className="mt-4 space-y-2">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target={l.external ? "_blank" : undefined}
              rel={l.external ? "noreferrer" : undefined}
              className="text-ink-muted transition hover:text-ink link-underline"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
