"use client";
import { useEffect, useRef, useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
];

const Parallax2 = () => {
  const gallery = useRef<any>(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles.spacer}>
        <div className="flex justify-center items-center w-full h-full"><h2 className="font-bold text-yellow-300 text-2xl"> SCROLL !</h2></div>
      </div>
      <div ref={gallery} className={styles.gallery}>
        <Column images={[images[0], images[1], images[2]]} y={y} />
        <Column images={[images[3], images[4], images[5]]} y={y2} />
        <Column images={[images[6], images[7], images[8]]} y={y3} />
        <Column images={[images[9], images[10], images[11]]} y={y4} />
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
};

export default Parallax2;

const Column = ({ images, y }: {images: string[], y: MotionValue<number>}) => {
  return (
    <motion.div className={styles.column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={styles.imageContainer}>
            <Image src={`/slider1/${src}`} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
