import React, { useRef, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import homeLogo from '../assets/home-main.svg';
import Home2 from './Home2';
import Typed from 'typed.js';


const Home = () => {
  const typeofRef = useRef(null)  
  useEffect(() => {

    const options = {
      strings: ['Web Developer', 'React Developer', 'MERN Stack Developer', 'Full Stack Developer'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    }
    const typed = new Typed(typeofRef.current, options)

    return () => {
      typed.destroy()
    }
  },[])

  return (
    <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content" data-aos="fade-up-right" data-aos-duration="1000">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Tanishq Kumar</strong>
              </h1>

              <div ref={typeofRef} style={{ padding: 50, textAlign: "left" }} className='typed-text'>
                {/* <Typed /> */}
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }} data-aos="fade-up-left" data-aos-duration="1000">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "420px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;