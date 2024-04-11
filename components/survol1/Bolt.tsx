"use client"
import React, { useEffect, useState, type RefObject } from "react";

interface Props {
  cursor2: { x: number; y: number };
  cardRef2: RefObject<HTMLElement>;
  mouseOnCard2: boolean;
}
// What i add is defs
const Bolt = ({cursor2, cardRef2, mouseOnCard2}: Props) => {
    const [gradientCenter2, setGradientCenter2] = useState({
        cx: "50%",
        cy: "50%",
      });
    

      useEffect(() => {
        if (cardRef2.current && cursor2.x !== null && cursor2.y !== null) {
            const cardRect = cardRef2.current.getBoundingClientRect();
            const cxPercentage2 = (cursor2.x / cardRect.width) * 100 - 24;
            const cyPercentage2 = (cursor2.y / cardRect.height) * 100;
            setGradientCenter2({
              cx: `${cxPercentage2}%`,
              cy: `${cyPercentage2}%`,
            
            })

        }
      }, [cursor2, cardRef2]);
    
      useEffect(() => {
        // Mettre à jour gradientCenter ici
      }, [gradientCenter2]);
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-96 h-96 duration-200 transition-all"
    >
        <defs>
        <radialGradient
          id="emeraldGradient2"
          gradientUnits="userSpaceOnUse"
          r="30%"
          cx={gradientCenter2.cx}
          cy={gradientCenter2.cy}
        >
          {mouseOnCard2 && <stop stopColor="#f9a825" />}
          <stop offset={1} stopColor="#404040" />
        </radialGradient>
      </defs>
      <path
        stroke="url(#emeraldGradient2)"
        className="fill-neutral-950/70"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
};

export default Bolt;
