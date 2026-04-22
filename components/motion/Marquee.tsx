"use client";

import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  fast?: boolean;
  className?: string;
  pauseOnHover?: boolean;
}

export default function Marquee({
  children,
  reverse = false,
  fast = false,
  className = "",
  pauseOnHover = true
}: MarqueeProps) {
  const anim = reverse
    ? "animate-marquee-reverse"
    : fast
    ? "animate-marquee-fast"
    : "animate-marquee";

  return (
    <div
      className={`group relative flex overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)] ${className}`}
    >
      <div
        className={`flex min-w-full shrink-0 items-center gap-10 pr-10 ${anim} ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {children}
      </div>
      <div
        aria-hidden
        className={`flex min-w-full shrink-0 items-center gap-10 pr-10 ${anim} ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}
