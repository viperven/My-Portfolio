import React, { useState } from "react";
import "./Testimonials.css";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import Carousels from "../Carousel/Carousels";
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css"; // Import the lightbox CSS

function Testimonials() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const images = [
    "../images/imarticus_certification.jpg",
    "../images/appreciation1.png",
    "../images/appreciation2.png",
    "../images/appreciation3.png",
    "../images/udemy_certificate.jpg",
  ];

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsOpen(true);
  };

  return (
    <>
      <Container className="section-appreciation">
        <h2 className="heading-title">Appreciations & Certifications</h2>
        <hr className="titler-hr " />

        <Row style={{ justifyContent: "space-between" }}>
          {isOpen && (
            <Lightbox
              image={selectedImage}
              onClose={() => setIsOpen(false)}
            />
          )}
          <Col xs={12} lg={5}>
            <Carousel className="my-shadow appreciation-carousel" style={{cursor:"pointer"}}>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/imarticus_certification.jpg"
                  onClick={() => handleImageClick("../images/imarticus_certification.jpg")}
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation1.png"
                  onClick={() => handleImageClick("../images/appreciation1.png")}
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation2.png"
                  onClick={() => handleImageClick("../images/appreciation2.png")}
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation2.png"
                  onClick={() => handleImageClick("../images/appreciation2.png")}
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} lg={5}>
            <Carousel className="my-shadow appreciation-carousel" style={{cursor:"pointer"}}>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation3.png"
                  onClick={() => handleImageClick("../images/appreciation3.png")}
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/udemy_certificate.jpg"
                  onClick={() => handleImageClick("../images/udemy_certificate.jpg")}
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/udemy_certificate.jpg"
                  onClick={() => handleImageClick("../images/udemy_certificate.jpg")}
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


// new comment 