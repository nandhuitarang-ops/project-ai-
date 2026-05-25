"use client";

import { useEffect, useState } from "react";
import IntroAnimation, { INTRO_DURATION_MS } from "./IntroAnimation";

export default function IntroGate() {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setMounted(true);
    const t = setTimeout(() => setShow(false), INTRO_DURATION_MS + 1600);
    return () => clearTimeout(t);
  }, []);

  if (!mounted || !show) return null;
  return <IntroAnimation />;
}
