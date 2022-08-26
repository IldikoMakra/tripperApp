import React, { useContext } from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { UserContext } from "../context/userContext";
import AuthService from "../services/auth-service";
import { Navigate, useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();
  //const { user, setUser } = useContext(UserContext);
  const logged = AuthService.getCurrentUser();
  return (
    <div>
      <header bg="dark">
        <Navbar
          fixed="top"
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand>TripStories</Navbar.Brand>

            <Nav>
              <LinkContainer to="/">
                <Nav.Link href="/">Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/users">
                <Nav.Link href="/users">Users</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/stories">
                <Nav.Link href="/stories">Stories</Nav.Link>
              </LinkContainer>

              {logged ? (
                <NavDropdown title={logged.user} id="basic-nav-dropdown">
                  <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                  <NavDropdown.Item href="/edit">My Stories</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    onClick={() => {
                      localStorage.removeItem("user");
                      navigate("/");
                    }}
                  >
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link href="/login">Log In</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Container>
        </Navbar>
      </header>
    </div>
  );
}

export default Header;
