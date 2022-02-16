import React, { useState, useEffect } from 'react';
import About from './About/About';
import Projects from './Projects/Projects';
import Music from './Music/Music';
import Contact from './Contact/Contact';
import { PortfolioProvider } from '../context/context';
import { aboutData, projectsData, musicData, contactData } from '../mock/data';
import musicfile from '../images/wav-file.png';

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
      <a href="https://ifonlyuk.com/premiere-jung-dj-bitcoin/" target="_blank" rel="noreferrer">
        {' '}
        <img src={musicfile} id="file3" alt="tunes" />{' '}
      </a>
      <About />
      <Projects />
      <Music />
      <Contact />
    </PortfolioProvider>
  );
}

export default App;
