import React, { useState, useEffect } from "react";
import usersService from "../services/user-service";

const SelectUser = (props) => {
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
      <select
        className="custom-select"
        value={props.value}
        onChange={props.onChange}
      >
        <option disaled selected hidden>
          -- select a user --
        </option>
        {users.map((user) => (
          <option value={user.userName}>{user.userName}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectUser;
