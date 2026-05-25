"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue
} from "framer-motion";

export default function EdgeRunner() {
  const [enabled, setEnabled] = useState(false);
  const { scrollYProgress } = useScroll();

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.5
  });

  // Travels a U-shape on the viewport edges:
  // 0.00 → 0.45 : down the LEFT edge (top to bottom)
  // 0.45 → 0.55 : across the BOTTOM (left to right)
  // 0.55 → 1.00 : up the RIGHT edge (bottom to top)
  const topPct = useTransform(smooth, (v) => {
    if (v < 0.45) return `${(v / 0.45) * 92 + 4}%`;
    if (v < 0.55) return `96%`;
    return `${96 - ((v - 0.55) / 0.45) * 92}%`;
  });

  const leftPct = useTransform(smooth, (v) => {
    if (v < 0.45) return `24px`;
    if (v < 0.55) return `${24 + ((v - 0.45) / 0.1) * 90}%`;
    return `calc(100% - 24px)`;
  });

  // Rotation keeps the "needle" pointing along the direction of travel
  const rotate = useTransform(smooth, (v) => {
    if (v < 0.45) return 180; // pointing down
    if (v < 0.55) return 270; // pointing right
    return 0; // pointing up
  });

  // Subtle breathing pulse independent of scroll
  const pulse = useMotionValue(1);

  // Trailing line fades in while on vertical edges, out while crossing the bottom
  const trailOpacity = useTransform(smooth, (v) =>
    v < 0.45 || v > 0.55 ? 0.6 : 0
  );

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const narrow = window.matchMedia("(max-width: 900px)").matches;
    if (reduce || narrow) return;
    setEnabled(true);
  }, []);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-[45] hidden md:block"
      style={{
        top: topPct,
        left: leftPct,
        translateX: "-50%",
        translateY: "-50%"
      }}
    >
      {/* outer glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          width: 56,
          height: 56,
          translateX: "-50%",
          translateY: "-50%",
          background:
            "radial-gradient(circle, rgba(17,17,17,0.18) 0%, rgba(17,17,17,0.04) 45%, transparent 75%)",
          filter: "blur(4px)"
        }}
        animate={{ opacity: [0.55, 0.95, 0.55], scale: [0.92, 1.08, 0.92] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* rotating ring */}
      <motion.div
        className="relative grid h-7 w-7 place-items-center rounded-full border border-gold/50 bg-cream-light/80 shadow-[0_0_14px_rgba(17,17,17,0.2)] backdrop-blur-sm"
        style={{ rotate, scale: pulse }}
        animate={{ opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* compass needle */}
        <svg
          viewBox="0 0 24 24"
          width={16}
          height={16}
          className="drop-shadow-[0_0_4px_rgba(17,17,17,0.4)]"
        >
          <defs>
            <linearGradient id="er-needle" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#444444" />
              <stop offset="55%" stopColor="#222222" />
              <stop offset="100%" stopColor="#111111" />
            </linearGradient>
          </defs>
          <path d="M12 2 L15 13 L12 11 L9 13 Z" fill="url(#er-needle)" />
          <circle cx="12" cy="12" r="1.6" fill="#111111" />
        </svg>

        {/* orbiting micro-dot */}
        <motion.span
          className="absolute h-1 w-1 rounded-full bg-gold shadow-[0_0_6px_rgba(17,17,17,0.5)]"
          style={{ top: "50%", left: "50%" }}
          animate={{
            x: [12, 0, -12, 0, 12],
            y: [0, 12, 0, -12, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>

      {/* trailing vertical line hint, fades in near the edges */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-12 w-[2px] -translate-x-1/2 -translate-y-full rounded-full"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(17,17,17,0.18))",
          opacity: trailOpacity
        }}
      />
    </motion.div>
  );
}
