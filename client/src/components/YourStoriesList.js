import React, { useState, useEffect } from "react";
import { Table, Accordion, Button } from "react-bootstrap";
import EditStoryForm from "./EditStoryForm";
import AuthService from "../services/auth-service";
import storiesService from "../services/stories-service";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";

const YourStoriesList = () => {
  const logged = AuthService.getCurrentUser();
  const [stories, setStories] = useState([]);

  useEffect(() => {
    storiesService.getAllStories().then(
      (response) => {
        setStories(response.data.result);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const filteredStories = stories.filter(
    (item) => item.postedBy === logged.user
  );

  const [editForm, setEditForm] = useState(false);
  const [toEdit, setToEdit] = useState(null);
  const [toDelete, setToDelete] = useState(null);

  return (
    <>
      {editForm === true ? (
        <EditStoryForm storyToEdit={toEdit} />
      ) : (
        <div>
          <h2>Stories by {logged.user} </h2>

          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Date</th>
                <th>Target</th>
                <th>Title</th>
                <th>Image</th>
                <th></th>
              </tr>
            </thead>

            <tbody>
              {filteredStories.map((story) => (
                <tr>
                  <td>{story.date.toString().split("T")[0]}</td>
                  <td>{story.target}</td>
                  <td>{story.title}</td>
                  <td>{story.image}</td>
                  <td>
                    <span
                      className="mx-2"
                      onClick={() => {
                        setEditForm(true);
                        setToEdit(story);
                      }}
                    >
                      <Button variant="dark-outline">
                        <FontAwesomeIcon icon={faPen} className="mx-2" />
                      </Button>
                    </span>
                    <span
                      className="mx-2"
                      onClick={() => {
                        storiesService
                          .deleteStory(story._id)
                          .then(window.location.reload());
                      }}
                    >
                      <Button variant="dark-outline">
                        <FontAwesomeIcon icon={faTrash} className="mx-2" />
                      </Button>
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
};

export default YourStoriesList;
