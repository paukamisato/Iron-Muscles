import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import AuthService from "../../../service/auth.service";
import "../Login/Login.css"

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.authService = new AuthService();
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;

    this.authService
      .login(email, password)
      .then((res) => {
        this.props.storeUser(res.data);
        this.props.history.push("/profile");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleFormSubmit} className='form-login'>
          <Form.Group className="mb-6" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control className= "box"
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
              type="text"
              placeholder="Enter Email"
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control className= "box"
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
              type="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="dark
          " type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
