import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import UsersTable from "../components/UsersTable";

function Users() {
  return (
    <div>
      <Container className="pt-4">
        <Row className="px-4 my-5">
          <Col>
            <h1>Users</h1>

            <UsersTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Users;
