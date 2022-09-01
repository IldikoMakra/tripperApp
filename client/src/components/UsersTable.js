import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Avatar from "./Avatar";
import usersService from "../services/user-service";

const UsersTable = () => {
  const apiFolder1 = "https://tripper.azurewebsites.net/uploads/";
  const apiFolder2 = "http://localhost:5000/uploads/";

  const [users, setUsers] = useState([]);

  useEffect(() => {
    usersService.getAllUsers().then(
      (response) => {
        setUsers(response.data.users);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>City</th>
            <th>Age</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.userName}</td>
              <td>{user.city}</td>
              <td>{user.age}</td>
              <td>
                <Avatar src={apiFolder1 + user.imageUrl} alt="" />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersTable;
