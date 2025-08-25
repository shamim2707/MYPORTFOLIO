"use client";

import React from "react";

import { companies, testimonials } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";
import { InfiniteFlowCard } from "./ui/FlowCards";
import { AnimatedDiv } from "./ui/3DanimateDiv";

const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="py-10 z-10 flex flex-col gap-10 justify-center items-center">
      <AnimatedDiv rotateDepth={10} translateDepth={10}>
        <h1 className="text-6xl font-semibold">
          What <span className="text-purple animate-shine">People Say</span>
        </h1>
      </AnimatedDiv>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-16">
        <InfiniteFlowCard items={companies} direction="left" speed="slow" />
      </div>
    </section>
  );
};

export default Testimonials;
