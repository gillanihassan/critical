import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import imageOne from "../../../../assets/images/newsSection/newsOne.png";
import imageTwo from "../../../../assets/images/newsSection/newsTwo.png";
import imageThree from "../../../../assets/images/newsSection/newsThree.png";
import imageFour from "../../../../assets/images/newsSection/newsFour.png";
import imageFive from "../../../../assets/images/newsSection/newsFive.png";
import imageSix from "../../../../assets/images/newsSection/newsSix.png";

function NewsSection() {
  const newsData = [
    {
      date: "February 24, 2025",
      title:
        "Warner Bros goes Inside Therapy as it unveils London TV Screenings unscripted formats line-up",
      image: imageOne,
    },
    {
      date: "February 3, 2025",
      title:
        "‘Ginny & Georgia’ Gets Season 3 Premiere Date On Netflix, First Photos Tease Season 2 Finale Aftermath",
      image: imageTwo,
    },
    {
      date: "January 28, 2025",
      title: "Critical Content, NPACT partner on international formats program",
      image: imageThree,
    },
    {
      date: "January 7, 2025",
      title: "Nelly & Ashanti Series Set At Peacock From Critical Content",
      image: imageFour,
    },
    {
      date: "December 4, 2024",
      title:
        "Critical Content Boss Jenny Daly Talks Going Global, Prepping Formats With ‘Physical: 100’ Team & Rebooting ‘Storage Hunters’ As Firm Strikes Deal With Germany’s Leonine",
      image: imageFive,
    },
    {
      date: "September 17, 2024",
      title: "Is true crime immune to industry downturn?",
      image: imageSix,
    },
  ];

  return (
    <div className={`p-3  ${styles.mainBg}`}>
      <Container fluid className="p-3">
        <h5 className={` mb-4 ${styles.customHeading}`}>News</h5>

        <Row className="mb-5">
          {newsData.map((item, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className={`${styles.customCard}`}>
                <Card.Img variant="top" src={item.image} />
                <Card.Body className="p-0 mt-5 mb-5">
                  <Badge className={` mb-4 ${styles.customBadge}`}>
                    {item.date}
                  </Badge>
                  <Card.Text className={`${styles.customTitle}`}>
                    {item.title}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5 mb-5">
          <Link to="/news" className={`mt-5 mb-5 ${styles.seeMore}`}>
            See More
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default NewsSection;
