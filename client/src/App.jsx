import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutDetails from "./pages/AboutDetails";

import Hire from "./pages/Hire";
import SkillDetails from "./pages/SkillDetails";
import ProjectDetails from "./pages/ProjectDetails";
import Resume from "./pages/Resume";


function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/hire" element={<Hire />} />

      {/* Skill Pages */}
     <Route path="/skill/:skill" element={<SkillDetails />} />
     <Route path="/project/:project" element={<ProjectDetails />} />
     <Route 
  path="/about/:section" 
  element={<AboutDetails />} 
/>
<Route 
 path="/resume" 
 element={<Resume />} 
/>
    </Routes>
  );
}

export default App;