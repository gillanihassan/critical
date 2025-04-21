import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
import styles from "./styles.module.css";
import Logo from "../../assets/images/FooterSection/criticalLogo.png";
import iconOne from "../../assets/images/FooterSection/iconOne.png";
import iconTwo from "../../assets/images/FooterSection/iconTwo.png";
import iconThree from "../../assets/images/FooterSection/iconThree.png";

function Footer() {
  return (
    <Container fluid className={`p-4 ${styles.footerBg}`}>
      <Row className="align-items-start">
        <Col md={6}>
          <Image
            src={Logo}
            alt="Logo"
            className={`mb-5 ${styles.footerLogo}`}
          />
          <div className={`mt-5 ${styles.textBlack}`}>
            <p>
              2901 W Alameda Ave, 7th Floor Burbank, CA 91505 <br />{" "}
              info@criticalcontent.com <br /> (818) 480-4900{" "}
            </p>
          </div>
        </Col>
        <Col md={6} className="text-end">
          <div className="mb-5 mt-4">
            <a href="#">
              <Image src={iconOne} className={`${styles.socialIcon}`} />
            </a>
            <a href="#">
              <Image src={iconTwo} className={`${styles.socialIcon}`} />
            </a>
            <a href="#">
              <Image src={iconThree} className={`${styles.socialIcon}`} />
            </a>
          </div>
          <div
            className="d-flex flex-column justify-content-end"
            style={{ height: "15vh" }}
          >
            <p className="mt-5">©2024 Critical All Rights Reserved.</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
