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
                    <strong>Hi, I'm Randy Riback. I'm a full-stack software developer, <a href="https://soundcloud.com/jung_deejay">artist</a>, and natural wine enthusiast based in Beacon, NY. I run an independent cassette series called <a href="https://kaphaselections.bandcamp.com">Kapha Selections</a> and am currently a fellow at the <a href="">Recurse Center</a>.</strong>
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    ""}
                    
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Skills include Flask, React.js, PostgreSQL, Python, JavaScript, HTML5, CSS3, Firebase, Gatsby, Heroku, Git, Ableton Live, Protools'}
                </p>
                <p className="about-wrapper__info-text">
                <a href="mailto:randolph.riback@gmail.com">Say hello</a> or find me on <a href="https://github.com/randyriback">GitHub</a> and <a href="https://www.linkedin.com/in/randolph-riback/">LinkedIn</a>.
                </p>
                <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      View Resume
                    </a>
                  </span>
        
            
              </div>
            </Fade>
          </Col>
        </Row>
          </Container>
          <div id="done">
      <h3>Coding Projects</h3>
        <span>
        <Link to="projects" smooth duration={1000}>
            <i className="fa fa-angle-down fa-2x" aria-hidden="true" style={{ cursor: "pointer" }}/>
          </Link>
          </span>
          </div>
    </section>
  );
};

export default About;
