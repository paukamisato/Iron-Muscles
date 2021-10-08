import React, { Component } from "react";
import ExercisesService from "../../../service/exercises.service";
import CloudService from "../../../service/cloud.service";
import Select from "react-select";
import { Container, Form, Button } from "react-bootstrap";
import "../Exercises/ExcercisesCreate.css"

export default class ExercisesCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      photo: [""],
      mainMuscleInvolved: "",
      equipment: "",
      instructions: "",
    };
    this.exercisesService = new ExercisesService();
    this.cloudService = new CloudService();
  }

  mainMuscleInvolvedOptions = [
    { value: "abs", label: "abs" },
    { value: "back", label: "back" },
    { value: "chest", label: "chest" },
    { value: "shoulders", label: "shoulders" },
    { value: "biceps", label: "biceps" },
    { value: "triceps", label: "triceps" },
    { value: "forearm", label: "forearm" },
    { value: "glutes", label: "glutes" },
    { value: "upper legs", label: "upper legs" },
    { value: "lower legs", label: "lower legs" },
    { value: "cardio", label: "cardio" },
  ];

  handleSelectInput = (selectedOption) => {
    this.setState({ mainMuscleInvolved: selectedOption.value }, () =>
      console.log(this.state.mainMuscleInvolved)
    );
  };

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
    const { name, photo, mainMuscleInvolved, equipment, instructions } =
      this.state;

    this.exercisesService
      .createExercise({
        name,
        photo,
        mainMuscleInvolved,
        equipment,
        instructions,
      })
      .then((res) => this.props.history.push("/exercises"))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Container>
        <h4 className="title" >New exercise</h4>
        <Form onSubmit={this.handleFormSubmit} className="form-exercise">

          <Form.Group className="mb-3-exercises" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
              type="text"
              placeholder="Enter name"
            />
          </Form.Group>

          <Form.Group className="mb-3-exercises" controlId="formFile">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              onChange={(e) => this.handleFileUpload(e)}
              type="file"
              placeholder="Photo"
            />
          </Form.Group>

          <Form.Group className="mb-3-exercises" controlId="formBasicMainMuscleInvolved">
            <Form.Label>Main Muscle Involved</Form.Label>
            <Select
              options={this.mainMuscleInvolvedOptions}
              value={this.state.mainMuscleInvolved.value}
              onChange={this.handleSelectInput}
              placeholder="MainMuscleInvolved"
            />
          </Form.Group>

          <Form.Group className="mb-3-exercises" controlId="formBasicEquipment">
            <Form.Label>Equipment</Form.Label>
            <Form.Control
              name="equipment"
              value={this.state.equipment}
              onChange={this.handleInput}
              type="text"
              placeholder="equipment"
            />
          </Form.Group>

          <Form.Group className="mb-3-exercises" controlId="formBasicInstructions">
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              name="instructions"
              value={this.state.instructions}
              onChange={this.handleInput}
              type="text"
              placeholder="instructions"
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
