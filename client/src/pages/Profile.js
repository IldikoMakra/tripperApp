import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Avatar from "../components/Avatar";
import EditProfileForm from "../components/EditProfileForm";
import usersService from "../services/user-service";

const Profile = () => {
  const apiFolder1 = "https://tripper.azurewebsites.net/uploads/";
  const apiFolder2 = "http://localhost:5000/uploads/";

  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    usersService.getCurrentUser().then(
      (response) => {
        setCurrentUser(response.data.details);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <Container className="py-4 my-4">
      <Row className="py-4 my-4">
        <Avatar src={`${apiFolder1}${currentUser.imageUrl}`} />

        <h2>{currentUser.userName}</h2>
        <hr />
      </Row>
      <Row>
        <Col>
          <EditProfileForm />
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
