import React from "react";
import {Col, Row} from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiMysql, DiBootstrap,
  DiHtml5, DiCss3, 
} from "react-icons/di";


function TechStack(){
    return(
        <Row style={{justifyContent:"center", paddingBottom:"50px"}}>
        <Col xs={5} md={4} className="tech-icons">
            <DiJavascript1 />
        </Col>
        <Col xs={5} md={4} className="tech-icons">
            <DiNodejs />
        </Col>
        <Col xs={5} md={4} className="tech-icons">
            <DiReact />
        </Col>
        <Col xs={5} md={4} className="tech-icons">
            <DiMongodb />
        </Col>
        <Col xs={5} md={4} className="tech-icons">
            <DiGit />
        </Col>
        <Col xs={5} md={4} className="tech-icons">
            <DiMysql />
        </Col>
        <Col xs={5} md={4} className="tech-icons">
            <DiHtml5 />
        </Col>
        <Col xs={5} md={4} className="tech-icons">
            <DiCss3 />
        </Col>
        <Col xs={5} md={4} className="tech-icons">
            <DiBootstrap />
        </Col>
        
        <Col xs={5} md={4} className="tech-icons">
            <DiPython />
        </Col>
        </Row>
    )
}

export default TechStack;