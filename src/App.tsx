import { useState } from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Footer from "./Footer";
import Contact from "./Contact";
function App() {
  const [activeSection, setActiveSection] = useState("home");
  return (
    <>
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
