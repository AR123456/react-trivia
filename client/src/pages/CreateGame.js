import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const CreateGame = () => (
  <div>
    <Hero backgroundImage="">
      <h1>Create Your Own Quiz </h1>
      <h2>Fill out form below </h2>
    </Hero>
    <Container style={{ marginTop: 30 }}>
      <Row>
        <Col size="md-12">
          <h1>Col</h1>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <p>Col</p>
        </Col>
      </Row>
    </Container>
  </div>
);

export default CreateGame;
