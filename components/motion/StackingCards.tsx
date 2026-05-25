"use client";

import { useEffect, useRef, useState, Children, type ReactNode } from "react";

const STICKY_TOP = 80;
const STICKY_STEP = 16;
const SCALE_STEP = 0.04;
const OFFSET_STEP = 8;

interface StackingCardsProps {
  children: ReactNode;
  className?: string;
}

export default function StackingCards({
  children,
  className = "",
}: StackingCardsProps) {
  const items = Children.toArray(children);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [depth, setDepth] = useState<number[]>(() => items.map(() => 0));

  useEffect(() => {
    function onScroll() {
      const nextDepth = items.map((_, i) => {
        let count = 0;
        for (let j = i + 1; j < items.length; j++) {
          const el = cardRefs.current[j];
          if (!el) continue;
          const rect = el.getBoundingClientRect();
          const stickyTopJ = STICKY_TOP + j * STICKY_STEP;
          if (rect.top <= stickyTopJ + 2) count++;
        }
        return count;
      });
      setDepth(nextDepth);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [items.length]);

  return (
    <div
      className={`flex flex-col ${className}`}
      style={{ perspective: "1400px", perspectiveOrigin: "50% 0%" }}
    >
      {items.map((child, i) => {
        const d = depth[i] ?? 0;
        const scale = 1 - d * SCALE_STEP;
        const translateY = d * OFFSET_STEP;

        return (
          <div
            key={i}
            ref={(el) => {
              cardRefs.current[i] = el;
            }}
            className="sticky mb-5"
            style={{
              top: `${STICKY_TOP + i * STICKY_STEP}px`,
              zIndex: 10 + i,
            }}
          >
            <div
              style={{
                transform: `scale(${scale}) translateY(${translateY}px)`,
                transformOrigin: "top center",
                transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
                willChange: "transform",
              }}
            >
              {child}
            </div>
          </div>
        );
      })}
    </div>
  );
}
