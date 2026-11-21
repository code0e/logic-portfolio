import { useRef } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  function scrollToSection(sectionRef) {
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div className="app">
      <Navbar
        onNavigate={{
          about: () => scrollToSection(aboutRef),
          skills: () => scrollToSection(skillsRef),
          projects: () => scrollToSection(projectsRef),
          contact: () => scrollToSection(contactRef),
        }}
      />

      <Hero
        onViewProjects={() => scrollToSection(projectsRef)}
        onContact={() => scrollToSection(contactRef)}
      />

      <About sectionRef={aboutRef} />
      <Skills sectionRef={skillsRef} />
      <Projects sectionRef={projectsRef} />
      <Contact sectionRef={contactRef} />

      <Footer />
    </div>
  );
}

export default App;
