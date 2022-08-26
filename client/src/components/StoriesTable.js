import React, { useState, useEffect } from "react";
import { Table, Accordion } from "react-bootstrap";
import storiesService from "../services/stories-service";

const StoriesTable = ({ userFilter }) => {
  const [stories, setStories] = useState([]);

  console.log("userFilter:", userFilter);

  useEffect(() => {
    storiesService.getAllStories().then(
      (response) => {
        //console.log(response.data.result);
        setStories(response.data.result);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  const filteredStories = stories.filter(
    (item) => item.postedBy === userFilter
  );

  return (
    <div>
      {userFilter !== null ? (
        <h2>Stories by {userFilter}</h2>
      ) : (
        <h2>All stories</h2>
      )}

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Date</th>
            <th>Target</th>
            <th>Title</th>
            <th>Image</th>
          </tr>
        </thead>

        <tbody>
          {userFilter
            ? filteredStories.map((story) => (
                <tr key={story._id}>
                  <td>{story.date.toString().split("T")[0]}</td>
                  <td>{story.target}</td>
                  <td>
                    <Accordion defaultActiveKey="1">
                      <Accordion.Item>
                        <Accordion.Header>{story.title}</Accordion.Header>
                        <Accordion.Body>{story.content}</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </td>
                  <td>{story.image}</td>
                </tr>
              ))
            : stories.map((story) => (
                <tr key={story._id}>
                  <td>{story.date.toString().split("T")[0]}</td>
                  <td>{story.target}</td>
                  <td>
                    <Accordion defaultActiveKey="1">
                      <Accordion.Item>
                        <Accordion.Header>{story.title}</Accordion.Header>
                        <Accordion.Body>{story.content}</Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </td>
                  <td>{story.image}</td>
                </tr>
              ))}
          {}
        </tbody>
      </Table>
      {userFilter && filteredStories.length === 0 ? (
        <p> This user shared no story yet, chose another one!</p>
      ) : (
        <p></p>
      )}
    </div>
  );
};

export default StoriesTable;
