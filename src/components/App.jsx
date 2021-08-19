import React, { useState, useEffect } from 'react';
import About from './About/About';
import Projects from './Projects/Projects';
import Music from './Music/Music';
import Contact from './Contact/Contact';
import { PortfolioProvider } from '../context/context';

import { aboutData, projectsData, musicData, contactData } from '../mock/data';

function App() {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [music, setMusic] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setMusic([...musicData]);
    setContact({ ...contactData });
  }, []);

  return (
    <PortfolioProvider value={{ about, projects, music, contact }}>
      <About />
      <Projects />
      <Music />
      <Contact />
    </PortfolioProvider>
  );
}

export default App;
