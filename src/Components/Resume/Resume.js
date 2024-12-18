import React from "react";
import "./Resume.css";
import { Col, Container, Row } from "react-bootstrap";
import pdf from "../Hero/Rupesh_Resume.pdf";

function Resume() {
  return (
    <>
      <Container id="resume" className="section-resume">
        <h2 className="heading-title">Resume</h2>
        <hr className="titler-hr " />
        <Row style={{ justifyContent: "space-between" }}>
          <Col xs={12} lg={5} className="inner-resume">
            <h4>Experience</h4>
            <div className="experience-div">
              <div className="resume-title-date">
                <h5 id="resume-title">HuntsJob (Full stack Developer)</h5>
                <span>Currently Working..</span>
              </div>
              <p className="resume-para">
                <ul className="my-ul">
                  <li>
                    As a Full Stack Developer at Huntsjob, I have honed my skills in maintaining and enhancing complex web applications.
                    My responsibilities include overseeing the existing portal and implementing new features to meet evolving business needs.
                  </li>
                  <li>
                    I have successfully contributed to three major portals HuntsJob.com, HuntsJob.reruiter.com, HuntsJob.dashboard.com and actively worked
                    on API development to ensure smooth communication between frontend and backend components.
                  </li>
                  <li>
                    My role has allowed me to apply a comprehensive understanding of the software development,
                    particularly in optimizing server-side performance and integrating cutting-edge technologies into the existing architecture.
                  </li>
                </ul>
              </p>
            </div>

            <div className="experience-div" style={{ marginTop: "50px" }}>
              <div className="resume-title-date">
                <h5 id="resume-title">TCS (System Administrator)</h5>
                <span>2022 - 2023</span>
              </div>
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
            </div>
            <a href={pdf} download="rupesh_resume">
              <button id="resume-btn">Resume</button>
            </a>
          </Col>
          <Col xs={12} lg={5} className="inner-resume">
            <h4>Education & Certification</h4>
            <div>
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
            </div>
            <div style={{ marginTop: "90px" }}>
              <h5>Full Stack Developer Certification (By Imarticus Learning)</h5>
              <p className="resume-para">
                <ul className="my-ul">
                  <li>
                    I completed a comprehensive Full Stack Development course focused on the MERN stack, offered by Imarticus Learning company.
                    This course provided in-depth knowledge of building dynamic web applications, covering everything from frontend design to backend integration,
                    including database management and server-side logic. The hands-on projects during the course solidified my understanding of the MERN stack and
                    equipped me with practical skills to apply in real-world scenarios.
                  </li>
                  <li>
                    <h6>Full Stack BootCamp By Udemy </h6>
                    I completed a MERN Stack Bootcamp on Udemy, which provided intensive training in full stack development.
                     The course covered practical aspects of building and deploying modern web applications using the MERN stack,
                     enhancing my proficiency in both frontend and backend technologies.
                  </li>
                </ul>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Resume;
