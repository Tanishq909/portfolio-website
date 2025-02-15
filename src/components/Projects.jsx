import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import hotelfinder from "../assets/Projects/hotelfinder.png";
import mernChatApp from "../assets/Projects/mern-chat-app.png";
import roleBasedProject from "../assets/Projects/role-based-project.png";

const Projects = () => {
  return (
    <Container className="project-section" id="projects">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotelfinder}
              title="HotelFinder"
              description="A web application for hotel booking, featuring real-time availability, user authentication, and responsive design. Users can search for hotels, view details, and make bookings seamlessly."
              ghLink="https://github.com/Tanishq909/HotelFinder"
              demoLink="https://hotelfinder-mb1d.onrender.com"
              data-aos="zoom-in" data-aos-duration="1000"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mernChatApp}
              title="MERN Chat App"
              description="A full-stack chat application built with the MERN stack, featuring real-time messaging, user authentication, media upload/download, and responsive design. This project showcases the integration of MongoDB, Express, React, and Node.js to create a seamless chat experience."
              ghLink="https://github.com/Tanishq909/mern-chat-app"
              demoLink="https://mern-chat-app-by-tanishq.vercel.app"
              data-aos="zoom-in" data-aos-duration="1000"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={roleBasedProject}
              title="Role-Based Project (Currently working)"
              description="A role-based application with both frontend and backend components, demonstrating user authentication, role-based access control, and more. Built using React, Node.js, Express, and MongoDB."
              ghLink="https://github.com/Tanishq909/Role-based"
              demoLink="https://role-based-ebd13.web.app/"
              data-aos="zoom-in" data-aos-duration="1000"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;