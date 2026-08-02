import resume from "./data/resume";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Nav name={resume.name} />
      <main>
        <Hero data={resume} />
        <About about={resume.about} skills={resume.skills} />
        <Experience experience={resume.experience} />
        <Education education={resume.education} />
        <Certifications id="achievements" title="Achievements" items={resume.achievements} />
        <Projects projects={resume.projects} />
        <Certifications id="certifications" title="Certifications" items={resume.certifications} />
        <Contact data={resume} />
      </main>
    </>
  );
}

export default App;
