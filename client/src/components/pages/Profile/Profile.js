import React, { Component } from "react";
import { Container, Form, Button, Card, Col } from "react-bootstrap";
import AuthService from "../../../service/auth.service";
import CloudService from "../../../service/cloud.service";
import { Link } from "react-router-dom";
import "../../pages/Profile/Profile.css"

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = { ...this.props.loggedUser };
    this.authService = new AuthService();
    this.cloudService = new CloudService();
  }

  componentDidMount = () => {
    console.log("object");
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

    const { _id, photo, name, lastname, age, gender, height, weight } =
      this.state;

    this.authService
      .updateAuth(_id, photo, name, lastname, age, gender, height, weight)
      .then((res) => {
        this.props.storeUser(res.data.user);
        this.props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        {this.state.email ? (
          <Container>
              <h4 className="profile" >Personal Information</h4>
            <Col className="photo" >
            <Card  style={{ width: "20rem"}}>
              <Card.Img variant="top" src={this.state.photo} />
            </Card>
            </Col>
            <Form onSubmit={this.handleFormSubmit}className="form-profile">
            <Form.Group className="mb-3-profile" controlId="formFile">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              onChange={(e) => this.handleFileUpload(e)}
              type="file"
              placeholder="Photo"
            />
          </Form.Group>
              <Form.Group className="mb-3-profile" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  name="name"
                  value={this.state.name}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Name"
                />
              </Form.Group>
              <Form.Group className="mb-3-profile" controlId="formBasicLastname">
                <Form.Label>Lastname</Form.Label>
                <Form.Control
                  name="lastname"
                  value={this.state.lastname}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Lastname"
                />
              </Form.Group>
              <Form.Group className="mb-3-profile" controlId="formBasicAge">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  name="age"
                  value={this.state.age}
                  onChange={this.handleChange}
                  type="number"
                  placeholder="Age"
                />
              </Form.Group>
              <Form.Group className="mb-3-profile" controlId="formBasicGender">
                <Form.Label>Gender</Form.Label>
                <Form.Control
                  name="gender"
                  value={this.state.gender}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Gender"
                />
              </Form.Group>
              <Form.Group className="mb-3-profile" controlId="formBasicHeight">
                <Form.Label>Height</Form.Label>
                <Form.Control
                  name="height"
                  value={this.state.height}
                  onChange={this.handleChange}
                  type="number"
                  placeholder="Height"
                />
              </Form.Group>
              <Form.Group className="mb-3-profile" controlId="formBasicWeight">
                <Form.Label>Weight</Form.Label>
                <Form.Control
                  name="weight"
                  value={this.state.weight}
                  onChange={this.handleChange}
                  type="number"
                  placeholder="Weight"
                />
              </Form.Group>

              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        ) : (
          <p>Loading....</p>
        )}
        {/* <div>
          <Link  to={"/workoutForm"}>
            <Button variant="dark">New Workout</Button>
          </Link>
        </div> */}
      </>
    );
  }
}
