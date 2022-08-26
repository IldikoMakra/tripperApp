import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function RegisterForm({
  handleOnChange,
  handleOnSubmit,
  userName,
  email,
  password,
  confirm_password,
}) {
  return (
    <div>
      <h2>Register</h2>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="userName"
            value={userName || ""}
            onChange={handleOnChange}
            placeholder="Username"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            value={email || ""}
            onChange={handleOnChange}
            placeholder="Email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="password"
            name="password"
            value={password || ""}
            onChange={handleOnChange}
            placeholder="Password"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="password"
            name="confirm_password"
            value={confirm_password || ""}
            onChange={handleOnChange}
            placeholder="Confirm Password"
          />
        </Form.Group>

        <Button className="px-3 my-4" variant="dark" type="submit">
          SIGN UP
        </Button>
      </Form>
    </div>
  );
}

export default RegisterForm;
