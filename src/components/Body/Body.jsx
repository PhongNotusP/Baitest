import React from "react";
import "./Body.css";
import BodyRight from "./BodyRight";
import BodyLeft from "./BodyLeft";
import { Col, Container, Row } from "react-bootstrap";

function Body() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <BodyLeft />
        </Col>
        <Col xs={6} md={8}>
          <BodyRight />
        </Col>
      </Row>
    </Container>
  );
}

export default Body;
