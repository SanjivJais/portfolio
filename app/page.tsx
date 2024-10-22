import { About } from "@/components/About";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { Portfolio } from "@/components/Portfolio";


export default function Home() {
  return (
    <main className="relative bg-dark flex justify-center items-start flex-col overflow-hidden sm:px-10 px-5">
      <div className="w-full flex flex-col items-center">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
      </div>
    </main>
  );
}
