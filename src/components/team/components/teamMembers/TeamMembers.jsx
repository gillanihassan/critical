import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import styles from "./styles.module.css";
import imageOne from "../../../../assets/images/teamSection/memberOne.png";
import imageTwo from "../../../../assets/images/teamSection/memberTwo.png";
import imageThree from "../../../../assets/images/teamSection/memberThree.png";
import imageFour from "../../../../assets/images/teamSection/memberFour.png";
import imageFive from "../../../../assets/images/teamSection/memberFive.png";
import imageSix from "../../../../assets/images/teamSection/memberSix.png";

function TeamMember() {
  const teamMembers = [
    {
      name: "Jenny Daly",
      designation: "President and Head of Critical Content",
      img: imageOne,
    },
    {
      name: "Tony Yates",
      designation: "EVP, Head of Production",
      img: imageTwo,
    },
    {
      name: "Scott Schwarts",
      designation: "SVP, Head of Post Production & IT",
      img: imageThree,
    },
    {
      name: "Rob Lobl",
      designation: "EVP, Development",
      img: imageFour,
    },
    {
      name: "Katie Hash",
      designation: "SVP, Development",
      img: imageFive,
    },
    {
      name: "Sean Bangert",
      designation: "Head, Business & Legal Affairs",
      img: imageSix,
    },
  ];

  return (
    <div>
      <Container fluid className={`p-3 ${styles.mainContainer}`}>
        <h5 className={`mb-5 mt-5 ${styles.customHeading}`}>The Team</h5>

        <Row>
          {teamMembers.map((member, index) => (
            <Col md={4} className="mb-5" key={index}>
              <Card className={`${styles.customCard}`}>
                <Card.Img variant="top" src={member.img} className="p-3" />
                <Card.Body className="text-start">
                  <Card.Text className={`${styles.customDesignation}`}>
                    {member.designation}
                  </Card.Text>
                  <Card.Title className={`${styles.customName}`}>
                    {member.name}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default TeamMember;
