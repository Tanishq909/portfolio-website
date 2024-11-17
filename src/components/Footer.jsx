import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaHeart } from "react-icons/fa"; // Import the heart icon

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="6" className="footer-copywright">
          <h3>Developed by Tanishq Kumar</h3>
        </Col>
        <Col md="6" className="footer-copywright" style={{ textAlign: "right" }}>
          <h3>
            With Love <FaHeart style={{ color: "red" }} />
          </h3>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;