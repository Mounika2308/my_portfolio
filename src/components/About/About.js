import React from "react";
import { Container,Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import laptopImg from  "../../assets/img/about.png";
import Toolstack from "./Toolstack";

function About(){
    return(
        <Container fluid className="about-section">
            <Particle/>
            <Row style={{justifyContent:"Center", padding:"10px"}}>
                <Col md={7} style={{justifyContent:"center", paddingTop:"30px", paddingBottom:"50px",}}>
                <h1 style={{fontSize:"1em", paddingBottom:"30px",}}>
                    Know Who <strong className="purple">I'M</strong>
                </h1>
                </Col>
                <Col md={5} style={{paddingTop:"120px", paddingBottom:"50px"}}>
                <img src={laptopImg} alt="about" className="img-fluid" />
                </Col>
            </Row>
            <h1 className="project-heading">
                Professional <strong className="purple">Skillset</strong>
            </h1>
            <Techstack />
            <h1 className="project-heading">
                <strong className="purple">Tools</strong> I Use 
            </h1>
            <Toolstack />
            <Github />
        </Container>
    )
}

export default About;