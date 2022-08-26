import React, { useContext } from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import { UserContext } from "../context/userContext";

function Home() {
  const { user, setUser } = useContext(UserContext);
  return (
    <Container className="pt-4">
      <Row className="px-4 my-5">
        <Col sm={12}>
          <h1>The Biker Community</h1>
        </Col>
      </Row>
      <Row className="px-4 my-5">
        <Col sm={5}>
          <Image src="images/biker1.jpg" fluid roundedCircle />
        </Col>
        <Col sm={7}>
          <p>
            Welcome to our biker´s trip story sharing site! Share stories about
            your trips or follow other stories. Reading only does not require
            any subscription. Just go to the Stories page, choose anyone you
            want to follow, sit back and enjoy their adventures!
          </p>
        </Col>
      </Row>
      <Row className="px-4 my-5">
        <Col sm={12}>
          <p>
            Not a member yet? Join to our comunity for free and log in to be
            able to publish new stories or update existing ones.
          </p>
          {user ? (
            <h6>You are logged in as {user.user}</h6>
          ) : (
            <Button variant="dark" href="/register">
              Create an account
            </Button>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
