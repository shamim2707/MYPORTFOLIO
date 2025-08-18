"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";

const defaultAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } }, // <-- control char speed
};

type AnimatedTextProps = {
  text: string[];                // Multiple words/sentences to cycle through
  el?: React.ElementType;        // Safe wrapper type
  className?: string;
  repeatDelay?: number;          // Time to hold before switching
  animation?: Variants;          // Custom animation if needed
};

export default function AnimatedText({
  text,
  el: Wrapper = "p",            // Default wrapper tag
  className,
  repeatDelay = 3000,            // <-- control how long each text stays before switching
  animation = defaultAnimation,
}: AnimatedTextProps) {
  const controls = useAnimation();
  const [index, setIndex] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const animateText = () => {
      controls.start("visible");
      timeout = setTimeout(async () => {
        await controls.start("hidden");                   // animate out
        setIndex((prev) => (prev + 1) % text.length);      // switch to next text
        controls.start("visible");                        // animate in
      }, repeatDelay);
    };

    animateText();                                        // start immediately
    return () => clearTimeout(timeout);                   // cleanup on unmount
  }, [controls, repeatDelay, index, text.length]);

  const currentText = text[index];

  return (
    <Wrapper className={className}>
      <span className="sr-only">{currentText}</span>
      <motion.span
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={{
          visible: { transition: { staggerChildren: 0.05 } }, // <-- control letter delay
          hidden: {},
        }}
        aria-hidden
      >
        {currentText.split(" ").map((word, wi) => (
          <span className="inline-block" key={`${word}-${wi}`}>
            {word.split("").map((char, ci) => (
              <motion.span
                key={`${char}-${ci}`}
                className="inline-block"
                variants={animation}
              >
                {char}
              </motion.span>
            ))}
            <span className="inline-block">&nbsp;</span>
          </span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
