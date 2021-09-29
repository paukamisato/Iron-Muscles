import React from "react";
import { Container, Navbar, NavDropdown, Nav } from "react-bootstrap";

export default function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Iron Muscles</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>              
              <NavDropdown title="Menu" id="collasible-nav-dropdown">
                <NavDropdown.Item href="/workouts">Workouts</NavDropdown.Item>
                <NavDropdown.Item href="/exercises">
                  Exercises
                </NavDropdown.Item>
                <NavDropdown.Item href="/places">
                  Fitness places
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
