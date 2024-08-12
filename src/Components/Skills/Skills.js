import React from "react";
import "./Skills.css";
import { Col, Container, Row } from "react-bootstrap";
import Cards from "../Cards/Cards";

function Skills() {
  return (
    <>
      <Container className="section-tech-stack">
        <h2 className="heading-title">Tech Stack</h2>
        <hr className="titler-hr " />
        <Row style={{ rowGap: "20px" }}>
          <Col xs={6} lg={2}>
            <Cards title="React" img="react.png" />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="JavaScript" img="js.png" />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="NodeJs" img="node.png" />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="MongoDB" img="mongodb.png" />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="Redux" img="redux.png" />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="Java" img="java.png" />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="Github" img="github.png" />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="CSS" img="css.png" />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="FireBase" img="firebase.png" />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="Mui" img="mui.png" />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="Html5" img="html.png" />
          </Col>
          <Col xs={6} lg={2}>
            <Cards title="Vscode" img="vscode.png" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Skills;
