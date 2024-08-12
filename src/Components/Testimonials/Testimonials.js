import React from "react";
import "./Testimonials.css";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import Carousels from "../Carousel/Carousels";

function Testimonials() {
  return (
    <>
      <Container className="section-appreciation">
        <h2 className="heading-title">Appreciations & Certifications</h2>
        <hr className="titler-hr " />

        <Row style={{ justifyContent: "space-between" }}>
          <Col xs={12} lg={5}>
            <Carousel className="my-shadow appreciation-carousel">
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation1.png"
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation2.png"
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation2.png"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} lg={5}>
            <Carousel className="my-shadow appreciation-carousel">
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation3.png"
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/udemy_certificate.jpg"
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/udemy_certificate.jpg"
                />
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Testimonials;
