import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
  } from "react-icons/ai";
  import { FaLinkedinIn } from "react-icons/fa";

  function Footer(){
    let date = new Date();
    let year = date.getFullYear();
    return(
        <Container fluid className="footer">
            <Row>
                <Col md="3" className="footer-copywright">
                    <h3>Designed and Developed by Mounika Siripuram</h3>
            </Col>
                <Col md="3" className="footer-copywright">
                    <h3>Copyright © {year} SM</h3>
            </Col>
                <Col md="3" className="footer-body">
                <ul className="footer-icons">
                <li className="social-icons">
                    <a
                    href=" https://github.com/Mounika2308 "
                    target="_blank"
                    rel="noreferrer"
                    style={{ color: "white" }}
                    className="icon-colour  home-social-icons">
                <AiFillGithub />
                    </a>
                    </li>
                <li className="social-icons">
                        <a
                            href="https://twitter.com/Mounika2308"
                            target="_blank"
                            rel="noreferrer"
                            style={{ color: "white" }}
                            className="icon-colour  home-social-icons">
                    <AiOutlineTwitter />
                        </a>
                        </li>
                            <li className="social-icons">
                            <a
                                href="https://www.linkedin.com/in/mounika-siripuram-b07895256/"
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: "white" }}
                                className="icon-colour  home-social-icons">
                            <FaLinkedinIn />
                                </a>
                            </li>
                                <li className="social-icons">
                                    <a
                                        href="https://www.instagram.com/mounika2308"
                                        style={{ color: "white" }}
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="icon-colour  home-social-icons">
                                <AiFillInstagram />
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )

  }

  export default Footer