import Hero1 from "@/components/Hero/HeroV1";
import Hero2 from "@/components/Hero/HeroV2";
import Grid from "@/components/Grid"

export default function Home() {
  return (
    <main className="relative bg-black text-white flex justify-center items-center flex-col overflow-hidden mx-auto select-none">
      <Hero2 />
      <Grid/>
    </main>
  );
}
