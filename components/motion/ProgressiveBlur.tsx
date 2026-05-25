"use client";

interface ProgressiveBlurProps {
  position?: "bottom" | "top";
  className?: string;
  tint?: string;
}

export default function ProgressiveBlur({
  position = "bottom",
  className = "",
  tint = "rgba(251, 247, 236, 0.85)",
}: ProgressiveBlurProps) {
  const baseStyles: React.CSSProperties = {
    position: "absolute",
    insetInline: 0,
    [position]: 0,
    pointerEvents: "none",
  };

  const gradientDirection = position === "bottom" ? "to top" : "to bottom";

  return (
    <div
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{ position: "absolute", inset: 0 }}
    >
      <div
        style={{
          ...baseStyles,
          height: "65%",
          background: `linear-gradient(${gradientDirection}, ${tint} 0%, ${tint} 15%, rgba(251,247,236,0.5) 50%, transparent 100%)`,
        }}
      />
      <div
        style={{
          ...baseStyles,
          height: "20%",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage: `linear-gradient(${gradientDirection}, black 0%, transparent 100%)`,
          WebkitMaskImage: `linear-gradient(${gradientDirection}, black 0%, transparent 100%)`,
        }}
      />
      <div
        style={{
          ...baseStyles,
          height: "38%",
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          maskImage: `linear-gradient(${gradientDirection}, black 0%, transparent 100%)`,
          WebkitMaskImage: `linear-gradient(${gradientDirection}, black 0%, transparent 100%)`,
        }}
      />
      <div
        style={{
          ...baseStyles,
          height: "55%",
          backdropFilter: "blur(2px)",
          WebkitBackdropFilter: "blur(2px)",
          maskImage: `linear-gradient(${gradientDirection}, black 0%, transparent 100%)`,
          WebkitMaskImage: `linear-gradient(${gradientDirection}, black 0%, transparent 100%)`,
        }}
      />
    </div>
  );
}
