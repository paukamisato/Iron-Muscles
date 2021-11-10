import React, { Link } from "react-router-dom";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";
import AuthService from "../../../service/auth.service";

export default function Navigation(props) {
  const authService = new AuthService();

  const logout = () => {
    authService
      .logout()
      .then((res) => {
        //props.showAlert("Sesión cerrada con éxito.");
        props.storeUser(null);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              alt=""
              src="/logo-iron.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Iron Muscles
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/routines">
                Routines
              </Nav.Link>
              <Nav.Link as={Link} to="/workouts">
                Workouts Plans
              </Nav.Link>
              <Nav.Link as={Link} to="/exercises">
                Exercises Guide
              </Nav.Link>
            </Nav>
            <Nav>
              {props.loggedUser ? (
                <>
                  <span className="nav-link" onClick={logout}>
                    Logout
                  </span>
                </>
              ) : (
                <>
                  <Nav.Link as={Link} to="/login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to="/signup">
                    Signup
                  </Nav.Link>
                </>
              )}

              <NavDropdown title="My Iron Muscles" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/workoutForm">
                  Add new Workout
                </NavDropdown.Item>
                {/* <NavDropdown.Item as={Link} to="/exercises">
                  Exercises
                </NavDropdown.Item> */}
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/exercises/create">
                  Add new exercise
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
