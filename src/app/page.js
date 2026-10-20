import Cursor from "@/components/Cursor";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import MotionShowcase from "@/components/MotionShowcase";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Value from "@/components/Value";
import Internships from "@/components/Internships";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ExperienceShell from "@/components/ExperienceShell";

export default function Home() {
  return (
    <ExperienceShell>
      <Background />
      <Cursor />
      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <MotionShowcase />
        <Projects />
        <Journey />
        <Value />
        <Internships />
        <Contact />
      </main>

      <Footer />
    </ExperienceShell>
  );
}
