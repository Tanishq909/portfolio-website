import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../assets/avatar.svg";
import Tilt from "react-parallax-tilt";


const Home2 = () => {
    return (
        <Container className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">

                        <h1 style={{ fontSize: "2.6em" }}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>

                        <p className="home-about-body">
                            I am a beginner in Node.js, Express.js, and the MERN stack,with a strong academic record, reflected by my CGPA of 9.0
                            <br />
                            <br />I am also learning
                            <i>
                                <b className="purple"> React.js and DSA in C++.</b>
                            </i>
                            <br />
                            <br />
                            My field of interest includes building new &nbsp;
                            <i>
                                <b className="purple">projects</b>
                            </i>
                            &nbsp; and exploring areas related to{" "}
                            <b className="purple">AWS and Google Cloud.</b>
                            <br />
                            <br />
                            I enjoy developing products using <b className="purple">Node.js</b> and
                            <i>
                                <b className="purple">
                                    {" "}
                                    modern JavaScript libraries and frameworks
                                </b>
                            </i>
                            &nbsp; like
                            <i>
                                <b className="purple"> React.js.</b>
                            </i>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar" />
                        </Tilt>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}
export default Home2;
