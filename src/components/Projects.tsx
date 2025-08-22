"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const Projects = () => {
  return (
    <div className="flex justify-center items-center flex-col z-20 p-5">
      <h1 className="text-6xl font-semibold">
        My{" "}
        <span className="text-purple animate-shine">Projects</span>
      </h1>
      <div className="grid grid-cols-3 items-center justify-center">
        {projects.map((item) => (
          <div
            className="lg:min-h-[28rem] h-[25rem] flex items-center justify-center sm:w-96 w-[90vw]"
            key={item.id}
          >
            <PinContainer
              title={item.link}
              href= {item.link}
            >
              <div className="relative flex items-center justify-center sm:w-[28vw] w-[90vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10 rounded-3xl bg-blue-700 bg-gradient-to-t from-blue-700/38 to-black">
                <div
                  className="relative w-full overflow-hidden h-full" 
                >
                  <img src="/bg.png" alt="bgimg" />
                  <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute -bottom-16"
                />
                </div>
              </div>

              <h1 className="font-bold lg:text-xl xl:text-2xl md:text-lg text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-md xl:text-xl lg:font-normal font-light text-sm line-clamp-2 text-blue-200/80"
                style={{
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="grid grid-cols-5 items-center gap-x-2">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="bg-blue-900/50 w-8 h-8 flex justify-center items-center"
                      style={{
                        clipPath: `polygon(25% 5%, 75% 5%, 100% 50%, 75% 95%, 25% 95%, 0% 50%`,
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}>
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center gap-2 mr-2">
                  <p className="flex lg:text-md md:text-xs text-sm text-purple">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="text-xl text-blue-500" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
