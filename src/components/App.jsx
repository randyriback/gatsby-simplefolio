import React, { useState, useEffect } from 'react';
import About from './About/About';
import Projects from './Projects/Projects';
import Projects1 from './Projects/Projects1';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

import { PortfolioProvider } from '../context/context';

import { aboutData, projectsData, contactData, footerData } from '../mock/data';

function App() {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ about, projects, projects, contact, footer }}>
      <About />
      <Projects />
      <Projects1 />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
