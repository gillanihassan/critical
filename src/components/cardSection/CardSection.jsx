import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Badge,
  Image,
} from "react-bootstrap";
import styles from "./styles.module.css";
import cardOne from "../../assets/images/cardSection/cardOne.png";
import cardTwo from "../../assets/images/cardSection/cardTwo.png";
import cardThree from "../../assets/images/cardSection/cardThree.png";
import cardFour from "../../assets/images/cardSection/cardFour.png";
import cardFive from "../../assets/images/cardSection/cardFive.png";
import cardSix from "../../assets/images/cardSection/cardSix.png";
import vectorOne from "../../assets/images/cardSection/vectorOne.png";
import { Link } from "react-router-dom";

function CardSection() {
  const featuredWork = [
    { id: 1, title: "Sly", img: cardOne, label: "Netflix" },
    { id: 2, title: "Catfish", img: cardTwo, label: "MTV" },
    {
      id: 3,
      title: "Celebrity Game Face",
      img: cardThree,
      label: "NBC",
    },
    {
      id: 4,
      title: "The Great Food Truck Race",
      img: cardFour,
      label: "Food Network",
    },
    {
      id: 5,
      title: "Survive The Raft",
      img: cardFive,
      label: "Discovery",
    },
    { id: 6, title: "The One", img: cardSix, label: "TV One" },
  ];

  return (
    <Container fluid className={`p-3 ${styles.mainContainer}`}>
      <h5 className="text-white mb-5 mt-5">Featured Work</h5>
      <Row>
        {featuredWork.map((item) => (
          <Col key={item.id} md={6} lg={6} xl={6} xxl={6} className="mb-4">
            <Card className={`${styles.customCard}`}>
              <Card.Img variant="top" src={item.img} />
              <Card.Body className="p-0 pt-3">
                <Badge className={`mb-3 ${styles.customBadge}`}>
                  {item.label}
                </Badge>
                <Card.Title
                  className={`${styles.customTitle} d-flex justify-content-between align-items-center`}
                >
                  {item.title}
                  <Image src={vectorOne} />
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <div className="text-center mt-5 mb-5">
        <h3 className="mb-3 mt-5">
          <Link to="/" className={`${styles.seeMoreBtn}`}>
            See More
          </Link>
        </h3>
      </div>
    </Container>
  );
}

export default CardSection;
