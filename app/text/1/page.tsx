"use client"
import React from "react";
import { motion, Variants } from "framer-motion";

function spligStringUsingRegex(string: string): string[] {
  const characters: string[] = [];
  const regex = /[\s\S]/gu;

  let match;

  while ((match = regex.exec(string)) !== null) {
    characters.push(match[0]);
  }

  return characters;
}

const charVariants = {
  hidden: { opacity: 0 },
  reveal: { opacity: 1 },
};
const Page = () => {
  const heading = "Elegant Text Reveal";
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const headingChars = spligStringUsingRegex(heading);
  const textChars = spligStringUsingRegex(text);
  return (
    <div className="max-w-4xl px-6 text-center mx-auto h-screen flex flex-col justify-center space-y-6">
      <motion.h1 
      initial="hidden"
      whileInView="reveal"
      transition={{staggerChildren: 0.02}}
      className="text-3xl font-semibold">
        {headingChars.map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            transition={{
                duration: 0.5
            }}
          >
            {char}
          </motion.span>
        ))}
      </motion.h1>
      <motion.p 
      initial="hidden"
      whileInView="reveal"
      transition={{staggerChildren: 0.015}}
      className="tracking-wider">
        {textChars.map((char, index) => (
            <motion.span
                key={index}
                variants={charVariants}
                transition={{
                    duration: 0.35
                }}
            >
                {char}
            </motion.span>
        ))}
    </motion.p>
    </div>
  );
};

export default Page;
