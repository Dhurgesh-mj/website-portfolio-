
"use client";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Suspense, useEffect } from "react";
import Lenis from "lenis";
import { BackgroundOrbs } from "@/components/BackgroundOrbs";
import { MatrixRain } from "@/components/MatrixRain";
import { EasterEggs } from "@/components/EasterEggs";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      wheelMultiplier: 0.9,
      smoothWheel: true,
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => {
      lenis.destroy?.();
    };
  }, []);

  return (
    <div className="font-sans vapor-grid">
      <BackgroundOrbs />
      <MatrixRain />
      <EasterEggs />
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Suspense>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
