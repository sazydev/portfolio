import Background from "@/components/Background";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Value from "@/components/Value";
import Internships from "@/components/Internships";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";

export default function Home() {
  return (
    <>
      <Background />
      <Cursor />
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Journey />
        <Value />
        <Internships />
        <Contact />
      </main>

      <Footer />
    </>
  );
}