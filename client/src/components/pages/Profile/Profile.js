import React, { Component } from "react";
import { Container, Form, Button } from "react-bootstrap";
import AuthService from "../../../service/auth.service";
import { Link } from "react-router-dom";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.loggedUser };
    this.authService = new AuthService();
  }

  componentDidMount = () => {
    this.setState(
      {
        ...this.props.loggedUser,
      },
      () => console.log(this.state)
    );
  };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (e) => {
    e.preventDefault();

    const { _id, photo, name, lastname, age, gender, height, weight } =
      this.state;

    this.authService
      .updateAuth(_id, photo, name, lastname, age, gender, height, weight)
      .then((res) => {
        this.props.storeUser(res.data.user);
        console.log("objectobjectobjectobject");
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        {this.state.email ? (
          <Container>
            <Form onSubmit={this.handleFormSubmit}>
              <Form.Group className="mb-3" controlId="formFile">
                <Form.Label>Photo</Form.Label>
                <Form.Control
                  name="photo"
                  value={this.state.photo}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Photo"
                />
              </Form.Group>
              <h1>Personal Information</h1>
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Lastname"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  type="number"
                  placeholder="Age"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  name="gender"
                  value={this.state.gender}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Gender"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicHeight">
                <Form.Label>Height</Form.Label>
                <Form.Control
                  name="height"
                  value={this.state.height}
                  onChange={this.handleChange}
                  type="number"
                  placeholder="Height"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  name="weight"
                  value={this.state.weight}
                  onChange={this.handleChange}
                  type="number"
                  placeholder="Weight"
                />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        ) : (
          <p>Loading....</p>
        )}
        <div>
        <Link to={"/workoutForm"}>
                    <Button variant="primary">New Workout</Button>
                  </Link>
        </div>
        
      </>
    );
  }
}
