import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Error() {
  return (
    <Container className="my-4 py-5">
      <Row>
        <Col>
          <h2>404</h2>
          <p>Page not found</p>
          <Link to="/">back to home page</Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Error;
