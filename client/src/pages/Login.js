import React, { useState, useContext } from "react";
import "./login.style.css";
import { Row, Col, Card } from "react-bootstrap";
import LoginForm from "../components/LoginForm";
import PasswordResetForm from "../components/PasswordResetForm";
import AuthService from "../services/auth-service";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

function Login() {
  const { user, setUser } = useContext(UserContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [formLoad, setFormLoad] = useState("login");
  let navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        break;
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault(); //not to clear content always

    if (!email || !password) {
      return alert("Fill up all the form!");
    }

    try {
      await AuthService.login(email, password).then(
        (response) => {
          //alert(response.user);
          navigate("/");
        },
        (error) => {
          alert("Not found");
          console.log(error);
          window.location.reload();
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleOnResetSubmit = (e) => {
    e.preventDefault(); //not to clear content always

    if (!email) {
      return alert("Please enter your email!");
    }

    //TODO call api to submit the form - No backend yet
    console.log(email);
  };

  const formSwitcher = (formType) => {
    setFormLoad(formType);
  };

  return (
    <div className="login-style">
      <Row>
        <Col sm={4}></Col>
        <Col sm={8}>
          <Card className="card-style">
            <Card.Body>
              {formLoad === "login" && (
                <LoginForm
                  handleOnChange={handleOnChange}
                  handleOnSubmit={handleOnSubmit}
                  formSwitcher={formSwitcher}
                  email={email}
                  pass={password}
                />
              )}

              {formLoad === "reset" && (
                <PasswordResetForm
                  handleOnChange={handleOnChange}
                  handleOnResetSubmit={handleOnResetSubmit}
                  formSwitcher={formSwitcher}
                  email={email}
                />
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Login;
