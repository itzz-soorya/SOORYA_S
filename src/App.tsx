import { useState } from "react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import CinematicHeader from "./components/CinematicHeader";
import ResumeExperience from "./components/ResumeExperience";
import Stack from "./sections/Stack";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <main className="min-h-screen bg-ink text-pearl">
      <CinematicHeader />
      <ResumeExperience open={resumeOpen} onClose={() => setResumeOpen(false)} />
      <Hero />
      <About />
      <Stack />
      <Projects onResumeClick={() => setResumeOpen(true)} />
      <Contact />
    </main>
  );
}
