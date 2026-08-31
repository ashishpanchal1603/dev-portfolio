import ScrollProgress from "../components/ScrollProgress";
import CustomCursor from "../components/CustomCursor";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Services from "../components/Services";
import Resume from "../components/Resume";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import DevModeEasterEgg from "../components/DevModeEasterEgg";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#030303] text-white">
      {/* Interactive global elements */}
      <ScrollProgress />
      <CustomCursor />
      <DevModeEasterEgg />

      {/* Floating Header */}
      <Navbar />

      {/* Main Page Layout Sections */}
      <main className="flex flex-col w-full">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Services />
        <Resume />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
