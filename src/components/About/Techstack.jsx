import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiMysql,
} from "react-icons/di";
import {
  SiNpm,
  SiTailwindcss,
  SiVisualstudiocode,
  SiReplit,
  SiVercel,
  SiNetlify,
  SiGooglecloud,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <SiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <SiTailwindcss />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <SiReplit />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <DiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons" data-aos="flip-left" data-aos-duration="1000">
        <SiGooglecloud />
      </Col>
    </Row>
  );
}

export default Techstack;