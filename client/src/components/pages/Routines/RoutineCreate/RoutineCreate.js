import { Form, Container, Button } from "react-bootstrap";
import { MultiSelect } from "react-multi-select-component";
import RoutinesService from "../../../../service/routines.service";
import { useForm } from "../../../hooks/useForm";
import { useFormSelect } from "../../../hooks/useFormSelect";
import { useWorkoutList } from "../../../hooks/useWorkoutList";
import { useState } from "react";

const routinesService = new RoutinesService();

const RoutineCreate = ( props ) => {
  
  const [ formValue, handleChange ] = useForm( { name: "" });
  const [selected, setSelected] = useState([]);
  const [ daysPerWeek, handleSelectInput ] = useFormSelect( "" );
  const [ difficultyLevel, handleSelect ] = useFormSelect( "" );
  const [workout] = useWorkoutList();
  const { name } = formValue;
  
  
  const handleFormSubmit = (e) => {

    e.preventDefault();
    const workoutsSelected = []; 
    selected.map( ( workouts ) => workoutsSelected.push( workouts.value ) )
   
    routinesService
      .createRoutine( { name, workouts: workoutsSelected, daysPerWeek, difficultyLevel } )
      .then( ( data ) => props.history.push( "/routine" ) )
      .catch( ( err ) => console.error( err ) );
  };

  return (

    <Container>
      <h4 className = "title-Routine">New routine</h4>
      <Form onSubmit = { handleFormSubmit } className = "form-workout">
        <Form.Group className ="mb-3-profile" controlId = "formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={ name }
            onChange={ handleChange }
            type="text"
            placeholder="name"
          />
        </Form.Group>

        <Form.Group className="mb-3-profile" controlId="formBasicWorkouts">
            <Form.Label>Workouts</Form.Label>
          <MultiSelect
            options = { workout.map((elm) => {
              return {
                value: elm._id,
                label: elm.name,
              };
            })}
            value={ selected }
            onChange={ setSelected }
            labelledBy="Select workouts"
          />
          </Form.Group>

        <Form.Group className ="mb-3-profile" controlId ="formBasicName">
          <Form.Label>Days</Form.Label>
          <br />
          <select name="days" value ={ daysPerWeek } onChange ={ handleSelectInput }>
            <option value="1 day">1 day</option>
            <option value="2 days">2 days</option>
            <option value="3 days">3 days</option>
            <option value="4 days">4 days</option>
            <option value="5 days">5 days</option>
            <option value="6 days">6 days</option>
            <option value="7 days">7 days</option>
          </select>
        </Form.Group>

        <Form.Group className="mb-3-profile" controlId="formBasicName">
          <Form.Label>Days</Form.Label>
          <br />
          <select name="difficultyLevel" value ={ difficultyLevel } onChange ={ handleSelect }>
            <option value ="Beginner">Beginner</option>
            <option value ="Intermediate">Intermediate</option>
            <option value ="Advanced">Advanced</option>
          </select>
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default RoutineCreate;
