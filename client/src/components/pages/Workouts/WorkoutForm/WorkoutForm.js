import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import WorkoutService from "../../../../service/workouts.service";
import { Container, Form, Button } from "react-bootstrap";
import "../WorkoutForm/WorkoutForm.css";
import { useForm } from "../../../hooks/useForm";
import { useFormSelect } from "../../../hooks/useFormSelect";
import useExercisesList from "../../../hooks/useExercisesList";
import { useHistory } from "react-router";

const workoutService = new WorkoutService();

const WorkoutForm = (loggedUser) => {

  const [ formValue, handleChange ] = useForm({
    name: "",
    date: "",
    duration: 0,
  });
  const [selected, setSelected] = useState ([])
  const [ day , setDay ] = useFormSelect("");
  const [ exercises ] = useExercisesList();
  const{ name, date, duration } = formValue;
  const history = useHistory();
  const handleFormSubmit = (e) => {
    
    e.preventDefault();
    const exercisesSelected = [];
    selected.map( ( exercises ) => exercisesSelected.push( exercises.value ) )

    workoutService
      .createWorkouts({ name, day, date, exercises : exercisesSelected, duration, owner:loggedUser })
      .then((data) => history.push("/workouts"))
      .catch((err) => console.log(err.err));
  };

  return (
      <Container>
        <h4 className="title-workout">New workout</h4>
        <Form onSubmit={handleFormSubmit} className="form-workout">
          <Form.Group className="mb-3-workout" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              value={ name }
              onChange={ handleChange }
              type="name"
              placeholder="name"
            />
          </Form.Group>

          <Form.Group className="mb-3-workout" controlId="formBasicDay">
            <Form.Label>Day</Form.Label>
            <br />
          <select name="days" value ={ day } onChange ={ setDay }>
            <option value="monday">monday</option>
            <option value="tuesday">tuesday</option>
            <option value="wednesday">wednesday</option>
            <option value="thursday">thursday</option>
            <option value="friday">friday</option>
            <option value="saturday">saturday</option>
            <option value="sunday">7 days</option>
          </select>
          <br />
          </Form.Group>

          <Form.Group className="mb-3-workout" controlId="formBasicExercises">
            <Form.Label>Exercises</Form.Label>

            <MultiSelect
              options={exercises.map((elm) => {
                return {
                  value: elm._id,
                  label: elm.name,
                };
              })}
              value={ selected }
              onChange={ setSelected}
              labelledBy="Select exercises"
            />
          </Form.Group>

          <Form.Group className="mb-3-workout" controlId="formBasicDate">
            <Form.Label>Date</Form.Label>
            <Form.Control
              name="date"
              value={date}
              onChange={ handleChange }
              type="date"
              placeholder="date"
            />
          </Form.Group>

          <Form.Group
            className="mb-3-workout"
            controlId="formBasicLastDuration"
          >
            <Form.Label>Duration</Form.Label>
            <Form.Control
              name="duration"
              value={ duration }
              onChange={ handleChange }
              type="number"
              min="1"
              placeholder="duration"
            />
          </Form.Group>

          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
}
export default WorkoutForm;

// export default class WorkoutForm extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       name: "",
//       day: "",
//       date: "",
//       exercises: [],
//       duration: 0,
//       userSelection: [],
//     };
//     this.workoutService = new WorkoutService();
//     this.exerciseService = new ExercisesService();
//   }

//   dayOptions = [
//     { value: "monday", label: "monday" },
//     { value: "tuesday", label: "tuesday" },
//     { value: "wednesday", label: "wednesday" },
//     { value: "thursday", label: "thursday" },
//     { value: "friday", label: "friday" },
//     { value: "saturday", label: "saturday" },
//     { value: "sunday", label: "sunday" },
//   ];

//   componentDidMount = () => {
//     this.exerciseService
//       .getAllExercises()
//       .then((res) => this.setState({ exercises: res.data }))
//       .catch((err) => console.log(err));
//   };

//   handleInput = (e) => {
//       if (e.target) {
//       const { name, value } = e.target;

//       this.setState({
//         [name]: value,
//       });
//     } else {
//       this.setState({
//         userSelection: e,
//       });
//     }
//   };

//   handleSelectInput = (selectedOption) => {
//     this.setState({ day: selectedOption.value }, () =>
//       console.log(this.state.day)
//     );
//   };

//   handleFormSubmit = (e) => {
//     e.preventDefault();
//     const { name, day, date, duration, owner, userSelection } = this.state;
//     const arrayIds = [];

//     for (let i = 0; i < userSelection.length; i++) {
//       arrayIds.push(userSelection[i].value);
//     }

//     this.workoutService
//       .createWorkouts({
//         name,
//         day,
//         date,
//         exercises: arrayIds,
//         duration,
//         owner,
//       })
//       .then((data) => this.props.history.push("/workouts"))
//       .catch((err) => console.log(err.err));
//   };
//   render() {
//       return (
//       <Container>
//         <h4 className="title-workout">New workout</h4>
//         <Form onSubmit={this.handleFormSubmit} className="form-workout">
//           <Form.Group className="mb-3-workout" controlId="formBasicName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               name="name"
//               value={this.state.name}
//               onChange={this.handleInput}
//               type="name"
//               placeholder="name"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3-workout" controlId="formBasicDay">
//             <Form.Label>Day</Form.Label>
//             <Select
//               options={this.dayOptions}
//               value={this.state.day.value}
//               onChange={this.handleSelectInput}
//               placeholder="Day"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3-workout" controlId="formBasicExercises">
//             <Form.Label>Exercises</Form.Label>

//             <MultiSelect
//               options={this.state.exercises.map((elm) => {
//                 return {
//                   value: elm._id,
//                   label: elm.name,
//                 };
//               })}
//               value={this.state.userSelection}
//               onChange={this.handleInput}
//               labelledBy="Select exercises"
//             />
//           </Form.Group>

//           <Form.Group className="mb-3-workout" controlId="formBasicDate">
//             <Form.Label>Date</Form.Label>
//             <Form.Control
//               name="date"
//               value={this.state.date}
//               onChange={this.handleInput}
//               type="date"
//               placeholder="date"
//             />
//           </Form.Group>

//           <Form.Group
//             className="mb-3-workout"
//             controlId="formBasicLastDuration"
//           >
//             <Form.Label>Duration</Form.Label>
//             <Form.Control
//               name="duration"
//               value={this.state.duration}
//               onChange={this.handleInput}
//               type="number"
//               min="1"
//               placeholder="duration"
//             />
//           </Form.Group>

//           <Button variant="dark" type="submit">
//             Submit
//           </Button>
//         </Form>
//       </Container>
//     );
//   }
// }
