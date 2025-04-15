import React from "react";
import { Container, Row, Col, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Header() {
  return (
    <div className={`${styles.mainContainer}`}>
      {/* Navbar */}
      <Navbar expand="lg" variant="dark" className="px-3">
        <Navbar.Brand href="#home" className="text-white fw-bold">
          CRITIC<span style={{ color: "red" }}>A</span>L
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Nav.Link as={Link} to="/team" className="text-white">
              TEAM
            </Nav.Link>
            <Nav.Link as={Link} to="/work" className="text-white">
              WORK
            </Nav.Link>
            <Nav.Link as={Link} to="/collabs" className="text-white">
              COLLABS
            </Nav.Link>
            <Nav.Link as={Link} to="/trend" className="text-white">
              TRENDING
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Content Area */}
      <Container fluid>
        <Row className=" ">
          {/* First Row - Heading */}
          <Col md={12} className="ps-5 mt-5">
            <h1 className={`mt-5 ${styles.customHeading}`}>
              Critical <br /> Content Studio.
            </h1>
          </Col>

          {/* Second Row - Paragraph */}
          <Col md={12} className="d-flex justify-content-end mt-5 mb-5">
            <p className={`${styles.customPara}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
