"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Preloader from "./_components/Preloader";
import Landing from "./_components/Landing";
import Description from "./_components/Description";
import Contact from "./_components/Contact";
import Projects from "./_components/Projects";
import SlidingImages from "./_components/SlidingImages";
import Header from "./_components/Header";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();

      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);

  return (
    <>
      <Header />
      <main className="overflow-x-hidden">
        <AnimatePresence mode="wait">
          {isLoading && <Preloader />}
        </AnimatePresence>
        <Landing />
        <Description />
        <Projects />
        <SlidingImages />
        <Contact />
      </main>
    </>
  );
}
