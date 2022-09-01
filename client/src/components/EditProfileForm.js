import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import usersService from "../services/user-service";
import { useNavigate } from "react-router-dom";

const EditProfileForm = () => {
  const [formValue, setFormValue] = React.useState({
    city: null,
    age: null,
    imageUrl: null,
  });

  const [imageUpload, setImageUpload] = React.useState(null);

  let navigate = useNavigate();

  const handleOnChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
    setImageUpload(e.target.files[0]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("imageUrl", imageUpload);
    formData.append("city", formValue.city);
    formData.append("age", formValue.age);

    try {
      await usersService.updateUser(formData).then(
        (response) => {
          alert(response.data.msg);
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
    <Container className="my-4 py-4">
      <Row className="my-4">
        <form onSubmit={handleOnSubmit}>
          <div className="custom-file ">
            <h4>Change your profile picture </h4>
            <p>Allowed formats: png or jpeg, max 5MB</p>
            <input
              type="file"
              className="custom-file-input"
              value={formValue.imageUrl}
              name="imageUrl"
              id="profilePicture"
              onChange={handleOnChange}
            />
          </div>
          <input
            type="submit"
            value="SUBMIT"
            className="btn btn-dark btn-block mt-4"
          />
        </form>
      </Row>
    </Container>
  );
};

export default EditProfileForm;
