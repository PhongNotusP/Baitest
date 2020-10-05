import { Container } from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import { LoremPicsum } from "react-lorem-picsum";
import "./RandomImage.css";

const getRandomImageUrl = () => {
  const RandomId = Math.trunc(Math.random() * 1000);
  return `https://i.picsum.photos/id/${RandomId}/300/300.jpg`;
};

function RandomImage() {
  return (
    <Container className="slide">
      <Row md={12}>
        <Col className="slide">
          <LoremPicsum width={250} height={220} random />
        </Col>
        <Col className="slide">
          <LoremPicsum width={250} height={220} random />
        </Col>
        <Col className="slide">
          <LoremPicsum width={250} height={220} random />
        </Col>
        <Col className="slide">
          <LoremPicsum width={250} height={220} random />
        </Col>
      </Row>
    </Container>
  );
}

export default RandomImage;
