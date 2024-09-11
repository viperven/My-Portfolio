<<<<<<< HEAD
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

=======
import React from "react";
import "./Testimonials.css";
import { Carousel, Col, Container, Image, Row } from "react-bootstrap";
import Carousels from "../Carousel/Carousels";

function Testimonials() {
>>>>>>> f68e191e9b003b94d0aa09e068e9d1498bb7e798
  return (
    <>
      <Container className="section-appreciation">
        <h2 className="heading-title">Appreciations & Certifications</h2>
        <hr className="titler-hr " />

        <Row style={{ justifyContent: "space-between" }}>
<<<<<<< HEAD
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
=======
          <Col xs={12} lg={5}>
            <Carousel className="my-shadow appreciation-carousel">
>>>>>>> f68e191e9b003b94d0aa09e068e9d1498bb7e798
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation1.png"
<<<<<<< HEAD
                  onClick={() => handleImageClick("../images/appreciation1.png")}
=======
>>>>>>> f68e191e9b003b94d0aa09e068e9d1498bb7e798
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation2.png"
<<<<<<< HEAD
                  onClick={() => handleImageClick("../images/appreciation2.png")}
=======
>>>>>>> f68e191e9b003b94d0aa09e068e9d1498bb7e798
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation2.png"
<<<<<<< HEAD
                  onClick={() => handleImageClick("../images/appreciation2.png")}
=======
>>>>>>> f68e191e9b003b94d0aa09e068e9d1498bb7e798
                />
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs={12} lg={5}>
<<<<<<< HEAD
            <Carousel className="my-shadow appreciation-carousel" style={{cursor:"pointer"}}>
=======
            <Carousel className="my-shadow appreciation-carousel">
>>>>>>> f68e191e9b003b94d0aa09e068e9d1498bb7e798
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/appreciation3.png"
<<<<<<< HEAD
                  onClick={() => handleImageClick("../images/appreciation3.png")}
=======
>>>>>>> f68e191e9b003b94d0aa09e068e9d1498bb7e798
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/udemy_certificate.jpg"
<<<<<<< HEAD
                  onClick={() => handleImageClick("../images/udemy_certificate.jpg")}
=======
>>>>>>> f68e191e9b003b94d0aa09e068e9d1498bb7e798
                />
              </Carousel.Item>
              <Carousel.Item style={{ textAlign: "center" }}>
                <Image
                  className="appreciation-image"
                  src="../images/udemy_certificate.jpg"
<<<<<<< HEAD
                  onClick={() => handleImageClick("../images/udemy_certificate.jpg")}
=======
>>>>>>> f68e191e9b003b94d0aa09e068e9d1498bb7e798
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
<<<<<<< HEAD


// new comment 
=======
>>>>>>> f68e191e9b003b94d0aa09e068e9d1498bb7e798
