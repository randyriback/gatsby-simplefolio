import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img } = about;

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
                  Hi, I&apos;m Randy Riback. I&apos;m a full-stack software developer,{' '}
                  <a href="https://soundcloud.com/jungdeejay">artist</a>, and natural wine
                  enthusiast based in Beacon, NY. I run an independent cassette series called{' '}
                  <a href="https://kaphaselections.bandcamp.com">Kapha Selections</a> and am
                  currently a fellow at the <a href="https://www.recurse.com/">Recurse Center</a>.
                </p>
                <p className="about-wrapper__info-text">
                  I&apos;m proficient with Flask, React.js, Node.js, Express, GraphQL, PostgreSQL,
                  Python, JavaScript, HTML5, CSS3, Firebase, Gatsby, Heroku, & Git.
                </p>
                <p className="about-wrapper__info-text">
                  Find me on <a href="https://github.com/randyriback">GitHub</a>,{' '}
                  <a href="https://www.linkedin.com/in/randolph-riback/">LinkedIn</a>, or check out
                  my{' '}
                  <a href="https://docs.google.com/document/d/e/2PACX-1vQbCgjq1kjTrPPQfjq3oeJplp-8d3AZAi3xictJH6vQnWUB0pI6VStMSKQwq8DCSwQslGAPs1iZiYUR/pub">
                    resume
                  </a>{' '}
                  :)
                </p>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
      <div id="done">
        <h3>Coding Projects</h3>
        <span>
          <Link to="projects" smooth duration={1000}>
            <i
              className="fa fa-angle-down fa-2x"
              aria-hidden="true"
              style={{ cursor: 'pointer' }}
            />
          </Link>
        </span>
      </div>
    </section>
  );
};

export default About;
