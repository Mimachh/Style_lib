"use client";
import React, { useEffect } from "react";
import {
  m,
  LazyMotion,
  domAnimation,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import {Canvas} from '@react-three/fiber'
import {Stars} from '@react-three/drei'

const Aurora1 = () => {
    // https://www.youtube.com/watch?v=oOC5px9ie5I
  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})`;

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0 4px 24px ${color}`;
  useEffect(() => {
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  return (
    <LazyMotion features={domAnimation}>
      <m.section
        style={{
          backgroundImage,
        }}
        className="relative grid min-h-screen place-content-center bg-gray-950 px-4 py-24 text-gray-200"
      >
        <div className="relative z-10 flex flex-col items-center">
          <p>This radial color animation can be passed to any components</p>

          <m.button
          whileHover={{
            scale: 1.015
          }}
          whileTap={{
            scale: 0.985
          }}
          style={{
            boxShadow,
            border,
            backgroundColor: "transparent"
          }}
          className="border px-6 py-2 mt-6 rounded-full border-gray-500 border-0.5">This is a button
          </m.button>
        </div>
        <div className="absolute inset-0 z-0">
            <Canvas>
                <Stars
                radius={50} count={2500} factor={4} fade speed={2}
                saturation={0}
                />
            </Canvas>
        </div>
      </m.section>
    </LazyMotion>
  );
};

export default Aurora1;
