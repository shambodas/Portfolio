import About from "./components/About";
import AmbientBackground from "./components/AmbientBackground";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Leadership from "./components/Leadership";
import Mindset from "./components/Mindset";
import Nav from "./components/Nav";
import Projects from "./components/Projects";
import ScrollProgress from "./components/ScrollProgress";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="relative">
      <AmbientBackground />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <About />
        <div className="border-b border-line" style={{ backgroundColor: "var(--color-bg2)" }}>
          <Projects />
        </div>
        <Contact />
        <Skills />
        <Mindset />
        <div className="border-y border-line" style={{ backgroundColor: "var(--color-bg2)" }}>
          <Education />
        </div>
        <Experience />
        <Leadership />
      </main>
      <Footer />
    </div>
  );
}