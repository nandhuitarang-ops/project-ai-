"use client";

import { useReducedMotion } from "framer-motion";

interface GlitchBackgroundProps {
  intensity?: "subtle" | "strong";
  className?: string;
}

export default function GlitchBackground({
  intensity = "subtle",
  className = "",
}: GlitchBackgroundProps) {
  const reduce = useReducedMotion();
  const opacity = intensity === "strong" ? 0.5 : 0.22;

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      <div
        className="absolute inset-0"
        style={{
          opacity,
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(22,22,27,0.06) 0px, rgba(22,22,27,0.06) 1px, transparent 1px, transparent 3px)",
          mixBlendMode: "multiply",
        }}
      />

      {!reduce && (
        <>
          <div className="glitch-layer-red absolute inset-0" />
          <div className="glitch-layer-blue absolute inset-0" />
          <div className="glitch-scan absolute inset-x-0 h-32" />
        </>
      )}
    </div>
  );
}
