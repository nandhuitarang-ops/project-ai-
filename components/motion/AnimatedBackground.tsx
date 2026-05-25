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
            "radial-gradient(closest-side, rgba(17,17,17,0.06), transparent 70%)",
          filter: "blur(40px)"
        }}
        animate={
          reduce
            ? undefined
            : { opacity: [0.4, 0.7, 0.4], scale: [1, 1.04, 1] }
        }
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          opacity: 0.35,
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(22,22,27,0.04) 0px, rgba(22,22,27,0.04) 1px, transparent 1px, transparent 4px)",
          mixBlendMode: "multiply",
        }}
      />

      {!reduce && (
        <div
          aria-hidden
          className="absolute inset-x-0"
          style={{
            top: "-15%",
            height: "30vh",
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(17,17,17,0.04) 50%, transparent 100%)",
            mixBlendMode: "multiply",
            filter: "blur(8px)",
            animation: "glitch-scan 14s cubic-bezier(0.4,0,0.2,1) infinite",
          }}
        />
      )}

      <div className="noise" />
    </div>
  );
}
