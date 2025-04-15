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
    </div>
  );
}

export default Header;
