import React, { Component } from "react";
import AuthService from "../../../service/auth.service";
import { Container, Form, Button } from "react-bootstrap";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      role: "",
      photo: "",
      name: "",
      lastname: "",
    };
    this.authService = new AuthService();
  }
  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password, photo, name, lastname } = this.state;
    this.authService
      .signup(email, password, photo, name, lastname)
      .then((res) => this.props.history.push("/login"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
              type="email"
              placeholder="Enter Email"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formFile">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              name="photo"
              value={this.state.photo}
              onChange={this.handleInput}
              type="file"
              placeholder="Photo"
            />
          </Form.Group>
         
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
              type="text"
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleInput}
              type="text"
              placeholder="Lastname"
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form> 
      </Container>
    );
  }
}
