import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <Title title="" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                    <strong>Hi, I'm Randy Riback.</strong>
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    "I’m a full-stack software developer, DJ, and musician based in Beacon, NY. For the last 10 years, I've been exploring the impact of technology within the worlds of art, music, and restaurant culture in New York City. When I’m not coding, you can find me curating ambient sounds, exploring hikes upstate, or enjoying natural wine."}
                    
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Technologies + Languages: Flask, PostgreSQL, React.js, Firebase, Python, JavaScript, HTML5, CSS3, Bootstrap, Git'}
                </p>
                <p className="about-wrapper__info-text">
                <a href="mailto:randolph.riback@gmail.com">Say hello</a> or find me on <a href="https://github.com/randyriback">Github</a>, <a href="https://www.linkedin.com/in/randolph-riback/">LinkedIn</a>, and <a href="https://www.instagram.com/_track87/">Instagram</a>.
                </p>
        
            
              </div>
            </Fade>
          </Col>
        </Row>
          </Container>
          <div id="done">
      <h3>Projects</h3>
        <span>
        <Link to="projects" smooth duration={1000}>
            <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
          </Link>
          </span>
          </div>
    </section>
  );
};

export default About;
