import React from "react";
import "./About.css";
import { Col, Container, Image, Row } from "react-bootstrap";

function About() {
  return (
    <>
      <Container className="about-us">
        <h2 className="heading-title">About Us</h2>
        <hr className="titler-hr " />
        <Row style={{ justifyContent: "space-between" }}>
          <Col lg={5}>
            <p className="about-para">
              "Hi, my name is Rupesh Jha. I am passionate about crafting digital
              experiences. As a Full Stack Developer, I previously worked at TCS
              as a System Administrator. In this role, I specialized in
              server-related vulnerabilities specific to Kernel Unix and
              Windows, as well as production server management. Alongside, I
              have developed projects like Rx-Ecommerce, Instagram Clone, and a
              Node chat app. I hold a 6-month Full Stack Developer certification
              from Imarticus , and I am eager to continue exploring and
              enhancing my skills in the field"
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
