import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contacts from "@/components/Contacts";
import LoadPage from "./LoadPage";
import LoadPercent from "./LoadPercent";

export default function Home() {
  return (
    <main className="w-full bg-black">
      <LoadPercent>
        <div className="flex justify-center items-center">
          <Hero />
        </div>
          <About />
          <Projects />
          <Contacts />
      </LoadPercent>
    </main>
  );
}
