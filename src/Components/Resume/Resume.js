import React from "react";
import "./Resume.css";
import { Col, Container, Row } from "react-bootstrap";
import pdf from "../Hero/Rupesh_Resume.pdf";

function Resume() {
  return (
    <>
      <Container className="section-resume">
        <h2 className="heading-title">Resume</h2>
        <hr className="titler-hr " />
        <Row style={{ justifyContent: "space-between" }}>
          <Col xs={12} lg={5} className="inner-resume">
            <h4>Experience</h4>
            <h5 id="resume-title">TCS (System Administrator)</h5>
            <p className="resume-para">
              <ul className="my-ul">
                <li>
                  As a System Administrator, I developed a robust foundation in
                  server management and security, refining my skills in solving
                  server-related vulnerabilities using Linux command line
                  interfaces.
                </li>
                <li>
                  My role involved proactive server patching and maintenance,
                  ensuring smooth operations and minimizing downtime.
                </li>
                <li>
                  Moreover, my proficiency in Linux command line interfaces
                  aligns well with the server-side components of MERN stack
                  development, enabling me to optimize server configurations and
                  ensure seamless integration with frontend technologies".
                </li>
              </ul>
            </p>
            <a href={pdf} download="rupesh_resume">
              <button id="resume-btn">Resume</button>
            </a>
          </Col>
          <Col xs={12} lg={5} className="inner-resume">
            <h4>Education</h4>
            <h5>MCA (Masters)</h5>
            <p className="resume-para">
              <ul className="my-ul">
                <li>
                  <h6>Master of Computer Applications </h6>
                  <p>
                    Graduation Year : <strong>2024</strong>
                  </p>
                  University : <strong>YCMOU</strong>
                  <p></p>
                  <p>
                    CGPA : <strong>7.6</strong>
                  </p>
                  <p>
                    Location : <strong>Mumbai</strong>
                  </p>
                </li>
                <li>
                  <h6>Bachelor of Computer Applications </h6>
                  <p>
                    Graduation Year : <strong>2022</strong>
                  </p>
                  University : <strong>TMV</strong>
                  <p>
                    CGPA : <strong>8.8</strong>
                  </p>
                  <p>
                    Location : <strong>Pune</strong>
                  </p>
                </li>
              </ul>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Resume;
