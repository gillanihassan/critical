import React from "react";
import { Container, Row, Col, Nav, Navbar, Image } from "react-bootstrap";
import styles from "./styles.module.css";
import { Link, Links } from "react-router-dom";
import Logo from "../../assets/images/heroSection/criticalLogo.png";

function HeroSection() {
  return (
    <div className={`p-3 ${styles.mainBg}`}>
      <Navbar expand="lg" variant="dark" className="px-3">
        <Navbar.Brand as={Link} to="/">
          <Image src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className={`${styles.customNav}`}>
            <Nav.Link
              as={Link}
              to="/team"
              className={`mx-3 ${styles.customLink}`}
            >
              TEAM
            </Nav.Link>
            <Nav.Link as={Link} to="#" className={`mx-3 ${styles.customLink}`}>
              WORK
            </Nav.Link>
            <Nav.Link as={Link} to="#" className={`mx-3 ${styles.customLink}`}>
              COLLABS
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/trend"
              className={`mx-3 ${styles.customLink}`}
            >
              TRENDING
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Container
        fluid
        className="d-flex flex-column justify-content-end mt-5"
        style={{ height: "85%" }}
      >
        <Row>
          <Col className="text-center">
            <h1 className={` ${styles.customHeading}`}>
              A leading global <br /> independent content studio.
            </h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HeroSection;
