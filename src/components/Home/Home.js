import React from "react";
import {Container, Row, Col} from "react-bootstrap";
// import Text from './Text'
import Particle from '../Particle';  // Ensure correct import path
import homeLogo from '../../assets/img/home_girl.webp'
import Home2  from './Home2'
import Type from './Type'

 function Home(){
    return(
        <section>
            <Container fluid className= "home-section" id="home">
            <Particle />
                <Container className="home-content">
                    <Row>
                        <Col md={7} className="home-header">
    
                        <h1 style={{scrollPaddingBottom:15}} className="heading">
                            Hi There!{" "}
                        <span className="wave" role="img" aria-labelledby="wave">
                        👋🏻
                        <Col xs={12} md={6} xl={7}>
                    <span className="tagline">
                        Welcome to my Portfolio 
                    </span>
                    </Col>
                        </span>
                        </h1>
                        <h1 className="heading-name">
                            I'M {" "}
                        <strong className="main-name">
                             Mounika Siripuram
                        </strong>
                        </h1>
                        <div style={{padding:50, textAlign:"left"}}>
                            <Type/>
                        </div>
                        </Col>
                        <Col md={5} stylr={{paddingBottom:20}}>
                        <img src={homeLogo} 
                        alt="home-pic"
                        className="img-fluid"
                        style={{maxHeight:"450px"}} />
                        </Col>
                    </Row>
                </Container>
                <Home2 />
            </Container>
        </section>
    )
 }

 export default Home;