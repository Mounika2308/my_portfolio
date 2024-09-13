import React from "react";
import {Card} from "react-bootstrap";
import { ImPointRight } from "react-icons/im";

function AboutCard(){
    return(
        <Card className="quote-card-view">
            <Card.Body>
                <blackquote className="blockquote mb-0">
                    <p style={{textAlign:"justify"}}>
                        Hi Everyone, I am <span className="purple">Mounika Siripuram</span>
                        from <span className="purple">Telangana, India.</span>
                        <br/>
                        I am currently looking for a Software Fullstack Web Developer.
                        <br/>
                        I have completed Biotechnology Engineering at SR University.
                        <br />
                        <br />
                        Apart from coding , some other activities that I love to do!
                    </p>
                    <ul>
                        <li className="about-activity">
                        <ImPointRight /> Playing Games
                        </li>
                        <li className="about-activity">
                        <ImPointRight /> Drawing and Painting
                        </li>
                        <li className="about-activity">
                        <ImPointRight /> Travelling
                        </li>
                    </ul>
                    <p style={{color: "rgba (25 156 172)"}}>
                        "Style to build things that make a different!"{""}
                    </p>
                    <footer className="blockquote-footer">Mounika.s</footer>
                </blackquote>
            </Card.Body>
        </Card>
    )
}

export default AboutCard;