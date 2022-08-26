import React, { useState } from "react";
import { Container, Row, Col, Table } from "react-bootstrap";
import SelectUser, { selectedMemberState } from "../components/SelectUser";
import StoriesTable from "../components/StoriesTable";

function Stories() {
  const [selectedMemberState, setSelectedMemeberState] = useState("");
  return (
    <div>
      <Container className="pt-4">
        <Row className="px-4 my-5">
          <Col sm={5}>
            <SelectUser
              value={selectedMemberState}
              onChange={(e) => {
                const selectedMember = e.target.value;
                setSelectedMemeberState(selectedMember);
              }}
            />
          </Col>
        </Row>
        <Row className="px-4 my-5">
          <Col sm={12}>
            <StoriesTable userFilter={selectedMemberState} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Stories;
