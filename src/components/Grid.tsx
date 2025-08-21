import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { gridItems } from "@/data";

function Grid() {
  return (
    <section id="about" className="bg-gradient-to-b from-blue-700/38 via-transparent to-black px-5 sm:px-10">
      {/* Dots background */}
      <div
        className="absolute inset-0
        [background-size:20px_20px]
        [background-image:radial-gradient(#2d2d2d_1px,transparent_1px)]
        dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
      />

      <BentoGrid className="w-full py-20">
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            // remove icon prop
            // remove original classname condition
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            titleStyle={item.titleStyle}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default Grid;
