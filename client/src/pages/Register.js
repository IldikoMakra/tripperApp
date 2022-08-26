import React, { useState } from "react";
import { Row, Col, Card } from "react-bootstrap";
import RegisterForm from "../components/RegisterForm";
import AuthService from "../services/auth-service";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirm_password, setConfirmPassword] = useState();
  let navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "userName":
        setUserName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      case "confirm_password":
        setConfirmPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault(); //not to clear content always

    if (!userName || !email || !password || !confirm_password) {
      return alert("Fill up all the form!");
    } else if (!(password === confirm_password)) {
      return alert("Password confirmation failed");
    }

    // use the auth-service.login
    try {
      await AuthService.signup(userName, email, password).then(
        (response) => {
          alert(response.status);
          navigate("/login");
          //window.location.reload();
        },
        (error) => {
          alert(error);
          console.log(error);
          //window.location.reload();
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-style">
      <Row>
        <Col sm={4}></Col>
        <Col sm={8}>
          <Card className="card-style">
            <Card.Body>
              <RegisterForm
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                userName={userName}
                email={email}
                password={password}
                confirm_password={confirm_password}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
