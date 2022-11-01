import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import airgarage from "../../Assets/Projects/airgarage.png"

import fitnessblender from "../../Assets/Projects/fitnessblender.png";
import geeks from "../../Assets/Projects/geeks.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
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
              imgPath={geeks}
              isBlog={false}
              title="GeekBuying"
              description="Geekbuying leading online shop selling a wide range of consumer electronic gadgets. Buy e-bikes, e-scooter, 3d printers, vacuum cleaners, tv-boxes , etc.
              Features : Social Sign-in | Sign-up | Single Page Application | Product Page | Cart Features. 
              Tech Stack : HTML | CSS | JavaScript | JSON-Server."
              ghLink="https://github.com/JatinKhatter07/ablaze-quiver-869"
              demoLink="https://geekbuyings.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnessblender}
              isBlog={false}
              title="Fitness Blender"
              description="Fitness Blender is an American digital fitness content publisher
              founded by personal trainers Kelli and Daniel Segars.
              
              Collaborative Project : Accomplished with of 4 developers.
              Features : Social Sign-in | Sign-up | Cart | Import -Export. Teck Stack."
              ghLink="https://github.com/sanjayrathva091/screeching-idea-7572"
              demoLink="https://fitnessblender.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={airgarage}
              isBlog={false}
              title="AirGarage"
              description="AirGarage is a full-service parking operator. It handles all of the
              day-to-day logistics that go into making your parking lot or garage
              the most successful version of itself.
              
              Features : Social Sign-in | Sign-up | Single Page Application. Tech Stack : ReactJS | JSON-Server | Chakra-UI." 
              ghLink="https://github.com/JatinKhatter07/plucky-scent-2586"
              demoLink="https://airgarage.vercel.app/"              
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
