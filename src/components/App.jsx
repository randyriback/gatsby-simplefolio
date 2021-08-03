import React, { useState, useEffect } from 'react';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { PortfolioProvider } from '../context/context';

import { aboutData, projectsData, projectsData1, contactData } from '../mock/data';

function App() {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});

  useEffect(() => {
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
  }, []);

  return (
    <PortfolioProvider value={{ about, projects, contact }}>
      <About />
      <Projects />
      <Contact />
    </PortfolioProvider>
  );
}

export default App;
