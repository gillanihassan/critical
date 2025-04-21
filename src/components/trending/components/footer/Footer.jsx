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
    <Container fluid className={`${styles.footerBg}`}>
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={Logo} alt="Logo" className={`${styles.footerLogo}`} />
          <div className={`${styles.textBlack}`}>
            2901 W Alameda Ave, 7th Floor Burbank, CA 91505
          </div>
          <div className="text-black">info@criticalcontent.com</div>
          <div className="text-black">(818) 480-4900</div>
        </Col>
        <Col md={6} className="text-end">
          <div className="mb-3">
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
          <div className="text-black small">
            ©2024 Critical All Rights Reserved.
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
