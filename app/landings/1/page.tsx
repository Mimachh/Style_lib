"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";


import Landing from "./_components/Landing/Landing";
import Description from "./_components/Description/Index";
import Contact from "./_components/Contact/Index";
import Header from "./_components/Header/Index";
import Preloader from "./_components/Preloader";
import Projects from "./_components/Projects";
import SlidingImages from "./_components/SlidingImages";

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
