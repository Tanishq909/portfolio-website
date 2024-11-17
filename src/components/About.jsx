import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import laptopImg from '../assets/about.png';
import AboutCard from './About/AboutCard';
import Techstack from './About/Techstack';

const About = () => {
  return (
    <Container className="about-section" id="home">
      {/* <Particle /> */}
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <AboutCard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          <strong className="purple"> Technologies & Tools </strong>I Use:
        </h1>

        <Techstack />

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack /> */}

        {/* <Github /> */}
        {/* //Snake animation */}
        <h1 className="project-heading">
          <strong className="purple"> Days I code</strong>
        </h1>

        <div align="center" style={{ marginTop: '50px' }}>
          <img
            src="https://raw.githubusercontent.com/Tanishq909/Tanishq909/output/snake.svg"
            alt="Snake Animation"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </Container>
    </Container >
  );
}

export default About;
