import React from "react";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

import DimondAnimation from "@/components/DimondLottie";

const Experience = () => {
  return (
    <div className="py-5 w-full px-10 z-10 flex flex-col justify-center items-center">
      <h1 className="text-6xl font-semibold">
        My <span className="text-purple animate-shine">Experience</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            className="flex-1 border-slate-800"
          >
            <div className="flex lg:flex-row flex-col justify-between lg:items-center p-3 md:p-4 lg:p-6 gap-4">
              <div className="w-[50%] flex justify-center items-center">
                <DimondAnimation />
              </div>

              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold text-blue-500">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-medium text-blue-200/80">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
