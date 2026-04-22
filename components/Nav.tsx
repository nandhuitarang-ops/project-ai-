"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Nav() {
  const links = [
    { href: "#features", label: "Features" },
    { href: "#how", label: "How it works" },
    { href: "#showcase", label: "Showcase" },
    { href: "#founder", label: "About" },
    { href: "#join", label: "Contact" }
  ];

  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 200], [0.55, 0.92]);
  const borderOpacity = useTransform(scrollY, [0, 200], [0.04, 0.1]);

  return (
    <motion.header
      style={{
        backgroundColor: useTransform(
          bgOpacity,
          (o) => `rgba(255, 253, 246, ${o})`
        ) as any,
        borderBottomColor: useTransform(
          borderOpacity,
          (o) => `rgba(22, 22, 27, ${o})`
        ) as any
      }}
      className="sticky top-0 z-40 border-b backdrop-blur-md"
    >
      <motion.div
        className="container-page flex items-center justify-between"
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: useTransform(scrollY, [0, 200], [88, 72]) as any
        }}
      >
        <a href="#top" className="group flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 260 }}
            className="relative h-14 w-14 sm:h-16 sm:w-16"
          >
            <Image
              src="/logo.png"
              alt="NEXIA"
              fill
              sizes="64px"
              priority
              className="object-contain"
            />
          </motion.div>
          <div className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-[0.15em] text-ink sm:text-2xl">
              NEXIA
            </span>
            <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.22em] text-gold-deep">
              the guiding intellect
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-ink-muted transition hover:text-ink link-underline"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
            >
              {l.label}
            </motion.a>
          ))}
        </nav>
      </motion.div>
    </motion.header>
  );
}
