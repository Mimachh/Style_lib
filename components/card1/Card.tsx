"use client";

import { DailyDevLogo, DailyDevTextLogo } from "@/components/svg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
const Card = () => {
    //https://www.youtube.com/watch?v=X_ROAuBvikk
  const cardRef = React.useRef<HTMLDivElement>(null);
  const glareRef = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(175);
  const y = useMotionValue(250);

  // const x = useMotionValue(175);
  // const y = useMotionValue(250);
  const glareX = useMotionValue(0);
  const glareY = useMotionValue(0);

  const rotateY = useTransform(x, [0, 356], [15, -15]);
  const rotateX = useTransform(y, [0, 501], [-15, 15]);

  const rotateYSpring = useSpring(rotateY);
  const rotateXSpring = useSpring(rotateX);

  return (
    <motion.div
      className="w-full max-w-[356px] bg-transparent 
  aspect-card1 text-black
  rounded-32 relative  overflow-hidden
  "
      onMouseMove={(e) => {
        if (!cardRef.current || !glareRef.current) return;
        const cardRect = cardRef.current.getBoundingClientRect();
        const glareRect = glareRef.current.getBoundingClientRect();
        x.set(e.clientX - cardRect.left);
        y.set(e.clientY - cardRect.top);
        glareX.set(e.clientX - glareRect.left - glareRect.width / 2);
        glareY.set(e.clientY - glareRect.top - glareRect.height / 2);
      }}
      onMouseLeave={() => {
        if (!cardRef.current) return;
        const cardRect = cardRef.current.getBoundingClientRect();
        x.set(cardRect.width / 2);
        y.set(cardRect.height / 2);
        glareX.set(-1000);
        glareY.set(-1000);
      }}
      ref={cardRef}
      style={{
        rotateY: rotateYSpring,
        rotateX: rotateXSpring,
      }}
    >
      <motion.div
        className="bg-gradient-radial to-white/0 opacity-35 from-white from-20% to-70%
    absolute size-[600px]
    "
        style={{
          x: glareX,
          y: glareY,
        }}
        ref={glareRef}
      ></motion.div>

      <div
        className="absolute inset-4 rounded-32 bg-white
      flex flex-col
      "
      >
        <div
          className="flex-1 border-8 border-gray-300 rounded-32
          bg-pattern
          bg-cover bg-center relative z-2
          "
        >
          <Image
            src="https://avatars.githubusercontent.com/u/106066885?s=400&u=cbbaecbb47719c306c3479176cd3a362eb008250&v=4"
            width={348}
            height={348}
            alt="Profile Picture"
            className="border-8 border-white -rotate-3 rounded-[48px] absolute left-[3%] top-[3%] w-[53%]"
          />
          <div
            className="bg-black shadow-[rgba(0,0,0,0.8)_1px_1px_15px] p-4 absolute z-2 bottom-0 inset-x-0 text-gray-500 text-xs rounded-2xl
                  translate-y-1/2 flex items-center justify-around
                  "
          >
            <span className="space-x-1 flex items-center">
              <b className="text-white text-lg">10</b>
              <span className="line-clamp-1">Reputation</span>
            </span>
            <span className="space-x-1 flex items-center">
              <b className="text-white text-lg">103</b>
              <span className="line-clamp-1">Posts read</span>
            </span>
          </div>
        </div>
        <div className="flex-1 px-2 pb-2 rounded-32">
          <div className="shadow-[rgba(0,0,0,0.3)_1px_1px_1px]  rounded-32 h-full px-4 relative overflow-hidden">
            <div className="pt-8 ">
              <h1 className="font-bold text-2xl">Mimachh</h1>
              <div className="text-xs space-x-2">
                <span>@mimach</span>
                <span className="text-gray-400">Nov 04, 2023</span>
              </div>
            </div>
            <hr className="my-4" />
            <div className="text-xs flex gap-2 flex-wrap">
              {[
                "#css",
                "#html",
                "#javascript",
                "#react",
                "#nextjs",
                "#laravel",
              ].map((tag, index) => (
                <span
                  key={tag}
                  className="border border-black py-1 px-2 rounded-lg"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              className="absolute bottom-0 right-0 text-white bg-black rounded-tl-32 px-2 py-3
          flex space-x-1
          "
            >
              <DailyDevLogo className="h-[18px]" />
              <DailyDevTextLogo className="h-[18px]" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-pattern {
          background-image: url(https://res.cloudinary.com/daily-now/image/upload/s--VMbOMIjj--/f_auto/v1710057765/public/DevCard-cover);
        }
        .shadow-bottom {
          box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.8);
        }
      `}</style>
    </motion.div>
  );
};

export default Card;
