import { Skills } from "@/components/Skills";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";
import { Navbar } from "@/components/navbar";
import About from "@/components/About";
import { WhyMeRevealCanvas } from "@/components/whyMe";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Education } from "@/components/education";


export default function Home() {
  return (
    <main className="relative bg-dark flex justify-center items-start flex-col overflow-hidden sm:px-10 px-5">
      <div className="w-full flex flex-col items-center">
        <Navbar />
        <Hero />
        <div className="flex flex-col lg:mx-[260px] mx-14 ">
          <About />
          <Skills />
          <Experience />
          <Education />
          <Portfolio />
          <WhyMeRevealCanvas />
          <Contact />
        </div>
      </div>
    </main>
  );
}
