import React, { useState, useEffect } from 'react';
import About from './About/About';
import Projects from './Projects/Projects';
import Projects1 from './Projects/Projects1';
import Contact from './Contact/Contact';
import { PortfolioProvider } from '../context/context';

import { aboutData, projectsData, contactData, footerData } from '../mock/data';

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
    <PortfolioProvider value={{ about, projects, projects, contact}}>
      <About />
      <Projects />
      <Projects1 />
      <Contact />
    </PortfolioProvider>
  );
}

export default App;
