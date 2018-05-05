import React from "react";
import CreateForm from "../components/CreateForm";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

const CreateGame = () => (
  <Container style={{ marginTop: 30 }}>
    <CreateForm>
      <h1>Create Your Own Quiz </h1>
      <h2>Fill out form below </h2>
    </CreateForm>

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
);

export default CreateGame;
