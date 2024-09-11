import React from "react";
import "./About.css";
import { Col, Container, Image, Row } from "react-bootstrap";

function About() {
  return (
    <>
<<<<<<< HEAD
      <Container id="about" className="about-us">
=======
      <Container className="about-us">
>>>>>>> f68e191e9b003b94d0aa09e068e9d1498bb7e798
        <h2 className="heading-title">About Us</h2>
        <hr className="titler-hr " />
        <Row style={{ justifyContent: "space-between" }}>
          <Col lg={5}>
            <p className="about-para">
<<<<<<< HEAD
              Hi, I'm Rupesh Jha, a a Full Stack Developer passionate about crafting digital experiences. At Huntsjob, I maintain and enhance web applications,
               contributing to major portals and developing APIs. Previously, at TCS, I specialized in server management and security. I’ve built projects like Rx-Ecommerce,
                an Instagram Clone, and a Node chat app.
               I also hold a Full Stack Developer certification from Imarticus and enjoy mentoring junior developers to refine their skills.
=======
              "Hi, my name is Rupesh Jha. I am passionate about crafting digital
              experiences. As a Full Stack Developer, I previously worked at TCS
              as a System Administrator. In this role, I specialized in
              server-related vulnerabilities specific to Kernel Unix and
              Windows, as well as production server management. Alongside, I
              have developed projects like Rx-Ecommerce, Instagram Clone, and a
              Node chat app. I hold a 6-month Full Stack Developer certification
              from Imarticus , and I am eager to continue exploring and
              enhancing my skills in the field"
>>>>>>> f68e191e9b003b94d0aa09e068e9d1498bb7e798
            </p>
          </Col>
          <Col lg={5} className="my-test">
            <Image className="about-img framed" src="../images/avatar.png" />
            {/* <Image
              id="fot"
              className="about-img framed"
              src="../images/fot.jpg"
            /> */}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
