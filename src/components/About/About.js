import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
// import Github from "./Github";
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack";
import laptopImg from  "../../assets/img/avatar.png-removebg.png";
import Toolstack from "./Toolstack";

function About(){
    return(
        <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
      md={5}
      style={{ paddingTop: "20px", paddingBottom: "50px" }}
      className="about-img"
    >
      <img
        src={laptopImg}
        alt="about"
        style={{
          height: "280px", // Directly set height
          width: "auto", // Let width adjust automatically
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
    </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
    )
}

export default About;