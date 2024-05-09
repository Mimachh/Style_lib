"use client";
import styles from "./styles.module.css";
import { useState } from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";
import useMousePosition from "@/hooks/useMousePosition";

const Cursor1 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 400 : 40;

//   https://www.youtube.com/watch?v=momF_D4odCM
  return (
    <div className="font-garde">
      <div className={styles.main}>
        <LazyMotion features={domAnimation}>
        <m.div
            id="cursor1"
            className={styles.mask}
            animate={{
                WebkitMaskPosition: `${(x ? x : 0) - size / 2}px ${y ? y - size / 2 : 0}px`,
                WebkitMaskSize: `${size}px`,
            }}
            transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
        >
            <p
              onMouseEnter={() => {
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
              }}
            >
              A visual designer - with skills that haven&rsquo;t been replaced by A.I
              (yet) - making good shit only if the paycheck is equally good.
            </p>
          </m.div>
        </LazyMotion>
        <div className={styles.body}>
          <p>
            I&rsquo;m a <span>selectively skilled</span> product designer with strong
            focus on producing high quality & impactful digital experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cursor1;
