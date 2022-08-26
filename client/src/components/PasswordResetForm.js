import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

const PasswordResetForm = ({
  handleOnChange,
  handleOnResetSubmit,
  formSwitcher,
  email,
}) => {
  return (
    <div className="px-3 my-4">
      <h1>Reset Password</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email || ""}
            onChange={handleOnChange}
            placeholder="Type your email ..."
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
        <hr />
        <a href="#!" onClick={() => formSwitcher("login")}>
          Logging Now
        </a>
      </Form>
    </div>
  );
};

PasswordResetForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnResetSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string,
};

export default PasswordResetForm;
