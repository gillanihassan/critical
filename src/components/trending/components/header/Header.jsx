import React from "react";
import { Container, Row, Col, Nav, Navbar, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import Logo from "../../../../assets/images/newsSection/criticalLogo.png";

function Header() {
  return (
    <div className={`p-3 ${styles.mainContainer}`}>
      {/* Navbar */}
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
            <Nav.Link
              as={Link}
              to="/work"
              className={`mx-3 ${styles.customLink}`}
            >
              WORK
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/collabs"
              className={`mx-3 ${styles.customLink}`}
            >
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

      {/* Content Area */}
    </div>
  );
}

export default Header;
