import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Achievements from "@/components/Achievements";
import Certifications from "@/components/cdrtifications";
import Contact from "@/components/Contact";
import TrueGlassNavBar from "@/components/TrueGlassNavBar";


export default function Home() {
  return (
    <main>
      <TrueGlassNavBar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Achievements />
       <Certifications /> {/**/}
      <Contact />

    </main>
  );
}








// Sorry NO image available as of now :( 