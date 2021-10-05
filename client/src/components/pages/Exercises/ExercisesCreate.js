import React, { Component } from "react";
import ExercisesService from "../../../service/exercises.service";
import Select from "react-select";
import { Container, Form, Button } from "react-bootstrap";

export default class ExercisesCreate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      photo: "",
      mainMuscleInvolved: "",
      equipment: "",
      instructions: "",
    };
    this.exercisesService = new ExercisesService();
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
    { value: "cardio", label: "cardio" }
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

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, photo, mainMuscleInvolved, equipment, instructions } = this.state;

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
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
              type="text"
              placeholder="Enter name"
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

          <Form.Group className="mb-3" controlId="formBasicMainMuscleInvolved">
            <Form.Label>Main Muscle Involved</Form.Label>
            <Select
              options = {this.mainMuscleInvolvedOptions}
              value={this.state.mainMuscleInvolved.value}
              onChange={this.handleSelectInput}
              placeholder="MainMuscleInvolved"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEquipment">
            <Form.Label>Equipment</Form.Label>
            <Form.Control
              name="equipment"
              value={this.state.equipment}
              onChange={this.handleInput}
              type="text"
              placeholder="equipment"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicInstructions">
            <Form.Label>Instructions</Form.Label>
            <Form.Control
              name="instructions"
              value={this.state.instructions}
              onChange={this.handleInput}
              type="text"
              placeholder="instructions"
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
