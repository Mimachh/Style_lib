"use client";
import * as React from "react";
import { useState, useRef } from "react";
import { AnimatePresence, motion, useDomEvent } from "framer-motion";
import { cn } from "@/utils/cn";

const transition = {
  type: "spring",
  damping: 25,
  stiffness: 120,
};

export const ImagePreview = () => {
  const [isOpen, setOpen] = useState(false);
  
  React.useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // N'oubliez pas de nettoyer après vous en supprimant l'écouteur d'événement lorsque le composant est démonté
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);
  return (
    <div
      className={`relative w-full h-0 cursor-zoom-in my-[50px] pt-[66%] ${
        isOpen ? "cursor-zoom-out" : ""
      }`}
    >
      <motion.div
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={transition}
        className={cn(
          "fixed inset-0 pointer-events-none opacity-0 bg-[rgba(0,0,0,0.9)]",
          isOpen && "pointer-events-auto opacity-100"
        )}
        onClick={() => setOpen(false)}
      />

      <motion.img
        src="/slider1/img1.jpg"
        alt="Bimhuis in Amsterdam"
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        exit={{ opacity: 0 }}
        transition={transition}
        className={cn(
          "z-0 absolute inset-0 w-1/3 h-1/3",
          isOpen && "opacity-0"
        )}
        onClick={() => setOpen(!isOpen)}
      />
      <AnimatePresence>
        {isOpen && (
          <motion.img
            src="/slider1/img1.jpg"
            alt="Bimhuis in Amsterdam"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={transition}
            className={cn("z-2 fixed w-1/2 h-1/2 inset-0 max-w-[100%] m-auto")}
            onClick={() => setOpen(!isOpen)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
