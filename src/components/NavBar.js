import React,{useState, } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Button from "react-bootstrap/Button";
// import { ThemeContext } from "../context/ThemeContext"; // Import the context
import {
    // AiFillStar,
    AiOutlineHome,
    AiOutlineFundProjectionScreen,
    AiOutlineUser,
  } from "react-icons/ai";
  // import { CgGitFork } from "react-icons/cg";
  import { CgSoftwareDownload } from 'react-icons/cg'; // alternative download icon
// import pdf from "../../assets/Mounika_siripuram_resume.pdf"; // Import the PDF file
// import { ImBlog } from "react-icons/im";
// import logo from '../assets/img/logo.jpg';

export const NavBar = () => {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <>
      <style>
        {`
          .navbar-nav .nav-item a:focus,
          .navbar-nav .nav-item a:active,
          .navbar-nav .nav-link:focus,
          .navbar-nav .nav-link:active {
              outline: none !important;
              box-shadow: none !important;
              border: none !important;
          }
        `}
      </style>

      <Navbar
        expanded={expand}
        fixed="top"
        expand="md"
        className={navColour ? "sticky" : "navbar"}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex">
            <h1 className="name-heading">Mounika</h1>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={() => {
              updateExpanded(expand ? false : "expanded");
            }}
          >
            
          </Navbar.Toggle>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto" defaultActiveKey="#home">
              <Nav.Item>
                <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                  <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(true)}>
                  <AiOutlineUser style={{ marginBottom: "2px" }} /> About
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                  <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> Projects
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  href="/Mounika_siripuram_resume.pdf"
                  download="Mounika_siripuram_resume.pdf"
                  onClick={() => updateExpanded(false)}
                >
                  <CgSoftwareDownload style={{ marginBottom: "2px" }} /> Resume
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
