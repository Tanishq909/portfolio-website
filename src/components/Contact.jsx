import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

const Contact = () => {
  return (
    <Container id="contact">
      <Row>
        <Col md={12} className="home-about-social">
          <h1>FIND ME ON</h1>
          <p>
            Feel free to <span className="purple">connect </span>with me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons" data-aos="zoom-in" data-aos-duration="1000">
              <a
                href="https://github.com/tanishq9090"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons" data-aos="zoom-in" data-aos-duration="1000">
              <a
                href="https://twitter.com/your-twitter-username"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons" data-aos="zoom-in" data-aos-duration="1000">
              <a
                href="https://www.linkedin.com/in/tanishq-kumar/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons" data-aos="zoom-in" data-aos-duration="1000">
              <a
                href="https://www.instagram.com/tanishqkumar2334"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
