import { Skills } from "@/components/Skills";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import Navbar from "@/components/navbar";


export default function Home() {
  return (
    <main className="relative bg-dark flex justify-center items-start flex-col overflow-hidden sm:px-10 px-5">
      <div className="w-full flex flex-col items-center">
        <Navbar />
        <Hero />
        {/* <Skills /> */}
        <Portfolio />
      </div>
    </main>
  );
}
