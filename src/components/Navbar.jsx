import React from 'react';
import { Container, Nav, Navbar as BootstrapNavbar } from 'react-bootstrap';

const Navbar = () => {
  return (
    <BootstrapNavbar expand="lg" className="nav_bar" data-aos="fade-down" data-aos-duration="1000">
      <Container>
        <BootstrapNavbar.Brand className="nav_items">Portfolio</BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className="nav_items">Home</Nav.Link>
            <Nav.Link href="#about" className="nav_items">About</Nav.Link>
            <Nav.Link href="#projects" className="nav_items">Projects</Nav.Link>
            <Nav.Link href="#resume" className="nav_items">Resume</Nav.Link>
            <Nav.Link href="#contact" className="nav_items">Contact</Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;