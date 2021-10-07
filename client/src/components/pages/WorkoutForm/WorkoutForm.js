import React, { Component } from "react";
import { MultiSelect } from "react-multi-select-component";
import Select from "react-select";
import WorkoutService from "../../../service/workouts.service";
import ExercisesService from "../../../service/exercises.service";
import { Container, Form, Button } from "react-bootstrap";

export default class WorkoutForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      day: "",
      date: "",
      exercises: [],
      duration: 0,
      userSelection: [],
    };
    this.workoutService = new WorkoutService();
    this.exerciseService = new ExercisesService();
  }

  dayOptions = [
    { value: "monday", label: "monday" },
    { value: "tuesday", label: "tuesday" },
    { value: "wednesday", label: "wednesday" },
    { value: "thursday", label: "thursday" },
    { value: "friday", label: "friday" },
    { value: "saturday", label: "saturday" },
    { value: "sunday", label: "sunday" },
  ];

  componentDidMount = () => {
    this.exerciseService
      .getAllExercises()
      .then((res) => this.setState({ exercises: res.data }))
      .catch((err) => console.log(err));
  };

  handleInput = (e) => {
    console.log("Valor e: ", e);
    if (e.target) {
      const { name, value } = e.target;

      this.setState({
        [name]: value,
      });
    } else {
      this.setState({
        userSelection: e,
      });
    }
  };

  handleSelectInput = (selectedOption) => {
    this.setState({ day: selectedOption.value }, () =>
      console.log(this.state.day)
    );
  };

  handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, day, date, duration, owner, userSelection } = this.state;
    const arrayIds = [];

    for (let i = 0; i < userSelection.length; i++) {
      arrayIds.push(userSelection[i].value);
    }

    this.workoutService
      .createWorkouts({
        name,
        day,
        date,
        exercises: arrayIds,
        duration,
        owner,
      })
      .then((data) => this.props.history.push("/workouts"))
      .catch((err) => console.log(err.err));
  };
  render() {
    console.log(this.state.exercises);
    return (
      <Container>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={this.state.name}
              onChange={this.handleInput}
              type="name"
              placeholder="name"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDay">
            <Form.Label>Day</Form.Label>
            <Select
              options={this.dayOptions}
              value={this.state.day.value}
              onChange={this.handleSelectInput}
              placeholder="Day"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicExercises">
            <Form.Label>Exercises</Form.Label>

            <MultiSelect
              options={this.state.exercises.map((elm) => {
                return {
                  value: elm._id,
                  label: elm.name,
                };
              })}
              value={this.state.userSelection}
              onChange={this.handleInput}
              labelledBy="Select exercises"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              name="date"
              value={this.state.date}
              onChange={this.handleInput}
              type="date"
              placeholder="date"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastDuration">
            <Form.Label>LastDuration</Form.Label>
            <Form.Control
              name="duration"
              value={this.state.duration}
              onChange={this.handleInput}
              type="number"
              min="1"
              placeholder="duration"
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
