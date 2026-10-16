import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme === null ? false : savedTheme === "true";
  });

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-colors duration-300 ${
        darkMode ? "bg-[#151212] text-white" : "bg-white text-gray-900"
      }`}
    >
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />

      <Hero darkMode={darkMode} />

      <About darkMode={darkMode} />

      <Projects darkMode={darkMode} />

      <Contact darkMode={darkMode} />

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
