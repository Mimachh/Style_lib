"use client"
import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
const page = () => {
  return (
    <div className="h-screen w-full">
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <LazyMotion features={domAnimation}>
          <m.button
            className="px-8 py-5 rounded-md relative
            radial-gradient-button-1 md:w-[450px]
                "
            initial={
              {
                "--x": "100%",
              } as any
            }
            animate={
              {
                "--x": "-100%",
              } as any
            }
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              repeat: Infinity,
              repeatType: "loop",
              repeatDelay: 1,
              type: "spring",
              stiffness: 20,
              damping: 15,
              mass: 2,
              scale: {
                type: "spring",
                stiffness: 10,
                damping: 5,
                mass: 0.1,
              },
            }}
          >
            <span
              className="text-neutral-100 tracking-wide font-light
                    h-full w-full block relative linear-mask-button-1
                    "
            >
              Réserver
            </span>
            <span className="block absolute inset-0 rounded-md p-px linear-overlay-button-1" />
          </m.button>
        </LazyMotion>
      </div>
    </div>
  );
};

export default page;
