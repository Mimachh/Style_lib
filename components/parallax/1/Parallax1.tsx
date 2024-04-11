"use client";


import Image from "next/image";
import React, { useRef } from "react";

import styles from './styles.module.css';
import Image1 from "../../../public/slider1/img1.jpg";
import Image2 from "../../../public/slider1/img2.jpg";
import Image3 from "../../../public/slider1/img3.jpg";
import Image4 from "../../../public/slider1/img4.jpg";
import { motion, useScroll, useTransform } from "framer-motion";
const Parallax1 = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
//   https://www.youtube.com/watch?v=pEt0eiArTSg
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const pictures = [
    {
      src: Image1,
      scale: scale4,
    },
    {
        src: Image2,
        scale: scale5,
      },
      {
        src: Image3,
        scale: scale6,
      },
      {
        src: Image1,
        scale: scale5,
      },
      {
        src: Image4,
        scale: scale6,
      },
      {
        src: Image2,
        scale: scale8,
      },
      {
        src: Image3,
        scale: scale9,
      },
  ];
  return (
    <div 
    className={styles.container}
    ref={container}
    >
      <div
      className={styles.sticky}
      >
        {pictures.map(({ src, scale }, index) => {
          return (
            <motion.div key={index} style={{ scale }} className={styles.el}>
              <div className={styles.imageContainer}>
                <Image src={src} fill alt="image" placeholder="blur" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Parallax1;
