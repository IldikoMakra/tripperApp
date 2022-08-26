import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import storiesService from "../services/stories-service";
import { useNavigate } from "react-router-dom";

function EditStoryForm({ storyToEdit }) {
  const [target, setTarget] = useState(storyToEdit.target);
  const [title, setTitle] = useState(storyToEdit.title);
  const [content, setContent] = useState(storyToEdit.content);

  let navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "target":
        setTarget(value);
        break;
      case "title":
        setTitle(value);
        break;
      case "content":
        setContent(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(storyToEdit._id, target, title, content);
    try {
      await storiesService
        .updateStory(storyToEdit._id, target, title, content)
        .then(
          (response) => {
            alert(response.data.status);
            navigate("/edit");
            window.location.reload();
          },
          (error) => {
            alert(error);
          }
        );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="mb-4 py-4">
      <Row>
        <Col>
          <h2>Editing Story </h2>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTarget">
              <Form.Label>Target</Form.Label>
              <Form.Control
                type="text"
                name="target"
                value={target}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={title}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicTitle">
              <Form.Label>Content</Form.Label>
              <Form.Control
                type="text"
                name="content"
                value={content}
                onChange={handleOnChange}
              />
            </Form.Group>

            <Button variant="secondary" type="submit">
              Submit
            </Button>
            <a href="/edit" className="mx-5">
              Back to my stories
            </a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default EditStoryForm;
