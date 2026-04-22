"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
  lines: string[];
  speed?: number;
  linePause?: number;
  loop?: boolean;
  className?: string;
}

export default function Typewriter({
  lines,
  speed = 28,
  linePause = 700,
  loop = true,
  className = ""
}: TypewriterProps) {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = lines[lineIdx] ?? "";
    let timer: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timer = setTimeout(() => setCharIdx(charIdx + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timer = setTimeout(() => setDeleting(true), linePause);
    } else if (deleting && charIdx > 0) {
      timer = setTimeout(() => setCharIdx(charIdx - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setLineIdx((prev) => {
        const next = prev + 1;
        if (next >= lines.length) return loop ? 0 : prev;
        return next;
      });
    }

    return () => clearTimeout(timer);
  }, [charIdx, deleting, lineIdx, lines, speed, linePause, loop]);

  const text = (lines[lineIdx] ?? "").slice(0, charIdx);

  return (
    <span className={`caret ${className}`} aria-live="polite">
      {text}
    </span>
  );
}
