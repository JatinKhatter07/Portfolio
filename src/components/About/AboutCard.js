import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jatin Khatter </span>
            from <span className="purple"> Haryana, India.</span>
            <br />An ardent web developer, lifelong learner, and expert in front-end web development, ReactJS, NodeJS, MongoDB, and web networking knowledge are required. high adaptability to learning new
technologies quickly and paying attention to details. It aims to leverage knowledge and build
world-class Web applications while facilitating the organisation in achieving functional goals.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "We don’t just build websites, we build websites that SELLS"{" "}
          </p>
          <footer className="blockquote-footer">Jatin Khatter</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
