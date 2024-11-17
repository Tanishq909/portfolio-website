import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tanishq Kumar </span>
            from <span className="purple">Faridabad, India.</span>
            <br />
            I am currently a 2nd year BTech student in Electronics Engineering
            at J.C. Bose University of Science and Technology YMCA Faridabad.
            <br />
            I have qualified JEE Main.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Notes
            </li>
            <li className="about-activity">
              <ImPointRight /> College Studies
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning and growing every day!"{" "}
          </p>
          <footer className="blockquote-footer">Tanishq</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;