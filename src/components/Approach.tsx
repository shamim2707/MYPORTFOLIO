"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "./ui/CanvasRevealEffect";
import { AnimatedDiv } from "./ui/3DanimateDiv";
import { ApproachSteps } from "@/data";
import PlayCard from "../components/PlayCard";
import { IconType } from "react-icons";

export default function Approach() {
  return (
    <section className="w-full p-10">
      <AnimatedDiv>
        <h1 className="text-6xl font-semibold">
          My <span className="text-purple animate-shine">approach</span>
        </h1>
      </AnimatedDiv>

      <div className="my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 w-full">
        {ApproachSteps.map((step, i) => (
          <Card
            key={i}
            title={step.title}
            des={step.description}
            value={step.value}
            symbol={step.symbol}
          >
            <CanvasRevealEffect
              animationSpeed={3}
              containerClassName={`${step.bg} w-full rounded-3xl overflow-hidden`}
              colors={step.colors}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}

const Card = ({
  title,
  children,
  des,
  value,
  symbol,
}: {
  title: string;
  children: React.ReactNode;
  des: string;
  value: string;
  symbol: any; 
}) => {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative w-full h-[22rem]"
      style={{ perspective: "1000px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        animate={{ rotateY: hovered ? -180 : 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full rounded-3xl"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face */}
        <div
          className="absolute inset-0 flex items-center justify-center border border-blue-900 rounded-3xl"
          style={{
            backfaceVisibility: "hidden",
            background:
              "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
          }}
        >
          <PlayCard value={value} symbol={symbol} />
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 flex flex-col justify-between items-center rounded-3xl border border-blue-900 shadow-md p-3"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            background: "rgb(4,7,29)",
          }}
        >
          {/* Background Animation Layer */}
          <AnimatePresence mode="wait">
            {hovered && (
              <motion.div
                key={title}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.5 } }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="absolute inset-0 z-0"
              >
                <div className="w-full h-full">{children}</div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h2 className="dark:text-white text-center text-3xl font-bold mt-4">
              {title}
            </h2>
            <p
              className="text-sm text-center mt-4"
              style={{ color: "#E4ECFF" }}
            >
              {des}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
