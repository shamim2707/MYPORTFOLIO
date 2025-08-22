import Hero1 from "@/components/Hero/HeroV1";
import Hero2 from "@/components/Hero/HeroV2";
import Grid from "@/components/Grid";
import Projects from "@/components/Projects"
import CustomCursor from "@/components/CustomCursor";
export default function Home() {
  return (
    <main className="relative bg-black text-white flex justify-center items-center flex-col overflow-hidden mx-auto select-none">
       <CustomCursor />
       {/* Dots background */}
       <div
        className="absolute inset-0
        [background-size:20px_20px]
        [background-image:radial-gradient(#2d2d2d_1px,transparent_1px)]
        dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
      />

      <Hero2 />
      <Grid />
      <Projects />
    </main>
  );
}
