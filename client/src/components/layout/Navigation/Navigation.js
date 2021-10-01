import React, { Link } from "react-router-dom";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            Iron Muscles
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/workouts">
                Workouts Plans
              </Nav.Link>
              <Nav.Link as={Link} to="/exercises">
                Exercises Guide
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
              <Nav.Link as={Link} to="/signup">
                Signup
              </Nav.Link>
              <NavDropdown title="My Iron Muscles" id="collasible-nav-dropdown">
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/my workouts">
                  My Workouts
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/exercises">
                  Exercises
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/places">
                  Fitness places
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/logout">
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
