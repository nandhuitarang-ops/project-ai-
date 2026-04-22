"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AnimatedBackground() {
  const reduce = useReducedMotion();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(22,22,27,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(22,22,27,0.035) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 90%)"
        }}
      />

      <motion.div
        className="absolute -top-40 left-1/2 h-[34rem] w-[60rem] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(201,162,39,0.22), transparent 70%)",
          filter: "blur(40px)"
        }}
        animate={
          reduce
            ? undefined
            : { opacity: [0.5, 0.85, 0.5], scale: [1, 1.04, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="noise" />
    </div>
  );
}
