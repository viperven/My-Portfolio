import React from "react";
import "./About.css";
import { Col, Container, Image, Row } from "react-bootstrap";

function About() {
  return (
    <>
      <Container id="about" className="about-us">
        <h2 className="heading-title">About Us</h2>
        <hr className="titler-hr " />
        <Row style={{ justifyContent: "space-between" }}>
          <Col lg={5}>
            <p className="about-para">
              Hi, I'm Rupesh Jha, a a Full Stack Developer passionate about crafting digital experiences. At Huntsjob, I maintain and enhance web applications,
               contributing to major portals and developing APIs. Previously, at TCS, I specialized in server management and security. I’ve built projects like Rx-Ecommerce,
                an Instagram Clone, and a Node chat app.
               I also hold a Full Stack Developer certification from Imarticus and enjoy mentoring junior developers to refine their skills.
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
