import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function NewStoryForm({
  handleOnChange,
  handleOnSubmit,
  target,
  title,
  content,
}) {
  return (
    <Container className="mb-4 py-4">
      <Row>
        <Col>
          <h2>Writing New Story</h2>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTarget">
              <Form.Control
                type="text"
                value={target || ""}
                name="target"
                placeholder="Target ..."
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Control
                type="text"
                value={title || ""}
                name="title"
                placeholder="Title..."
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Control
                type="text"
                value={content || ""}
                name="content"
                placeholder="Content..."
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button variant="secondary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default NewStoryForm;
