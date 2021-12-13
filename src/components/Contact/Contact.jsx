import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { btn } = contact;

  return (
    <section id="contact">
      <Container>
        <Title title="" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <a
              target="_blank"
              rel="noopener noreferrer"
              // className="cta-btn cta-btn--resume"
              href="mailto:randolph.riback@gmail.com"
            >
              {btn || 'Say hello :)'}
            </a>
          </div>
        </Fade>
        <span className="back-to-top">
          <Link to="about" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" style={{ cursor: 'pointer' }} />
          </Link>
        </span>
      </Container>
    </section>
  );
};

export default Contact;
