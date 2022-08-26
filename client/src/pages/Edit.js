import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NewStoryForm from "../components/NewStoryForm";
import YourStoriesList from "../components/YourStoriesList";
import storiesService from "../services/stories-service";
import { useNavigate } from "react-router-dom";

function Edit() {
  // call the user-service for logged user

  const [target, setTarget] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const [isNewClicked, setIsNewClicked] = useState(false);
  let navigate = useNavigate();

  //Submit New Story Handler:
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
    try {
      await storiesService.createStory(target, title, content).then(
        (response) => {
          //alert(response.data.message);
          navigate("/edit");
          window.location.reload();
        },
        (error) => {
          alert(error);
          window.location.reload();
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container className="mt-4 py-5">
      <Row className="px-4 my-5">
        <Col>
          <Button
            variant="secondary"
            onClick={() => {
              setIsNewClicked(true);
            }}
          >
            Add New
          </Button>
          <hr />
        </Col>
      </Row>
      <Row>
        <Col>
          {isNewClicked ? (
            <>
              <NewStoryForm
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                target={target}
                title={title}
                content={content}
              />{" "}
              <hr />{" "}
              <Button
                variant="secondary"
                onClick={() => {
                  setIsNewClicked(false);
                }}
              >
                Back to my Stories
              </Button>
            </>
          ) : (
            <YourStoriesList />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Edit;
