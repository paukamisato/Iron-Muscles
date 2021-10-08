import React, { Component } from "react";
import AuthService from "../../../service/auth.service";
import CloudService from "../../../service/cloud.service";
import { Container, Form, Button } from "react-bootstrap";
import "../Signup/Signup.css"

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
    this.cloudService = new CloudService();
  }

  handleInput = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleFileUpload = (e) => {
    console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();
    uploadData.append("photo", e.target.files[0]);

    this.cloudService
      .handleUpload(uploadData)
      .then((response) => {
        console.log("response is: ", response);

        this.setState({ photo: response.data.secure_url });
      })
      .catch((err) => {
        console.log("Error while uploading the file: ", err);
      });
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
      <h4 className="title-signup">Signup</h4>
        <Form onSubmit={this.handleFormSubmit} className='form-signup'>
          <Form.Group className="mb-3-signup" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              value={this.state.email}
              onChange={this.handleInput}
              type="email"
              placeholder="Enter Email"
            />
          </Form.Group>

          <Form.Group className="mb-3-signup" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              value={this.state.password}
              onChange={this.handleInput}
              type="password"
              placeholder="Password"
            />
          </Form.Group>

          <Form.Group className="mb-3-signup" controlId="formFile">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              onChange={(e) => this.handleFileUpload(e)}
              type="file"
              placeholder="Photo"
            />
          </Form.Group>
         
          <Form.Group className="mb-3-signup" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
              type="text"
              placeholder="Name"
            />
          </Form.Group>

          <Form.Group className="mb-3-signup" controlId="formBasicLastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control
              name="lastname"
              value={this.state.lastname}
              onChange={this.handleInput}
              type="text"
              placeholder="Lastname"
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form> 
      </Container>
    );
  }
}
