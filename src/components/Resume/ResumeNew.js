import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Jatin_Khatter_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;



function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
<h1>Hi. I’m Jatin Khatter, nice to meet you. Please take a look around!</h1>
<p style={{height:"200px",width:"100%",fontSize:"20px"}}>An ardent web developer, lifelong learner, and expert in front-end web development, ReactJS, NodeJS, MongoDB, and web networking knowledge are required. high adaptability to learning new
technologies quickly and paying attention to details. It aims to leverage knowledge and build
world-class Web applications while facilitating the organisation in achieving functional goals.</p>
<br/>


          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "400px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
          <div style={{height:"240px"}}></div>
        </Row>

       

        <Row style={{ justifyContent: "center", position: "relative" }}>
          
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
