import { Spotlight } from "@/components/ui/spotlight-new";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
export default function Home() {
  return (
    <div className="w-full h-full overflow-hidden relative">
      <Spotlight />
      <Navbar />
      <HeroSection />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
