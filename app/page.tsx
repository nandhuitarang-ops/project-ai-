import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import TechMarquee from "@/components/TechMarquee";
import Problem from "@/components/Problem";
import WhatWeDo from "@/components/WhatWeDo";
import HowItWorks from "@/components/HowItWorks";
import WhyDifferent from "@/components/WhyDifferent";
import Projects from "@/components/Projects";
import Founder from "@/components/Founder";
import JoinCTA from "@/components/JoinCTA";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/motion/AnimatedBackground";
import ScrollProgress from "@/components/motion/ScrollProgress";
import CursorGlow from "@/components/motion/CursorGlow";
import EdgeRunner from "@/components/motion/EdgeRunner";

export default function Page() {
  return (
    <>
      <AnimatedBackground />
      <CursorGlow />
      <ScrollProgress />
      <EdgeRunner />
      <main className="min-h-screen">
        <Nav />
        <Hero />
        <TechMarquee />
        <Problem />
        <WhatWeDo />
        <HowItWorks />
        <WhyDifferent />
        <Projects />
        <Founder />
        <JoinCTA />
        <Footer />
      </main>
    </>
  );
}
