import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Profile = () => {
  return (
    <Container className="pt-4">
      <Row className="px-4 my-5">
        <Col>
          <h2>Profile Page</h2>
          <p>
            Here coming soon a form to edit the logged user´s data as city, age
            and image upload.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
