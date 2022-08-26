import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

function LoginForm({
  handleOnChange,
  handleOnSubmit,
  formSwitcher,
  email,
  pass,
}) {
  return (
    <div className="px-3 my-4">
      <h1>Log In</h1>
      <hr />
      <Form onSubmit={handleOnSubmit}>
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

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={pass || ""}
            onChange={handleOnChange}
            placeholder="Enter your password"
          />
        </Form.Group>

        <Button variant="dark" type="submit">
          Login
        </Button>
        <hr />
        <a href="#!" onClick={() => formSwitcher("reset")}>
          Forget password?
        </a>
      </Form>
    </div>
  );
}

LoginForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  formSwitcher: PropTypes.func.isRequired,
  email: PropTypes.string,
  pass: PropTypes.string,
};

export default LoginForm;
