import ExercisesService from "../../../../service/exercises.service";
import { Container, Form, Button } from "react-bootstrap";
import "../ExercisesCreate/ExcercisesCreate.css"
import { useForm } from "../../../hooks/useForm";
import { useFormSelect } from "../../../hooks/useFormSelect";
import { useFiledUpload } from "../../../hooks/useFiledUpload";

const exercisesService = new ExercisesService();

const ExercisesCreate = (props) => {
  const [formValues, handleChange] = useForm({
    name: "",
    equipment: "",
    instructions: "",
  });
  const [mainMuscleInvolved, handleSelectInput] = useFormSelect("");
  const { name, equipment, instructions } = formValues;
  const [photo, handleFileUpload] = useFiledUpload("");
  
  const handleFormSubmit = (e) => {
    
    e.preventDefault();
    exercisesService
      .createExercise({ name,  photo,  mainMuscleInvolved,  equipment,  instructions })
      .then((res) => props.history.push("/exercises"))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      <h4 className="title">New exercise</h4>
      <Form onSubmit={ handleFormSubmit } className="form-exercise">
        <Form.Group className="mb-3-exercises" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            name="name"
            value={ name }
            onChange={ handleChange } 
            type="text"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3-exercises" controlId="formFile">
          <Form.Label>Photo</Form.Label>
          <Form.Control
            onChange={ handleFileUpload }
            type="file"
            placeholder="Photo"
          />
        </Form.Group>

        <Form.Group className="mb-3-exercises" controlId="formBasicMainMuscleInvolved">
          <Form.Label>Main Muscle Involved</Form.Label>
          <br />
          <select name="mainMuscleInvolved" value={ mainMuscleInvolved } onChange={ handleSelectInput }>
            <option value="abs">abs</option>
            <option value="back">back</option>
            <option value="chest">chest</option>
            <option value="shoulders">shoulders</option>
            <option value="biceps">biceps</option>
            <option value="triceps">triceps</option>
            <option value="forearm">forearm</option>
            <option value="glutes">glutes</option>
            <option value="upper legs">upper</option>
            <option value="lower legs">lower legs</option>
            <option value="cardio">cardio</option>
          </select>
          <br />
        </Form.Group>

        <Form.Group className="mb-3-exercises" controlId="formBasicEquipment">
          <Form.Label>Equipment</Form.Label>
          <Form.Control
            name="equipment"
            value={ equipment }
            onChange={ handleChange }
            type="text"
            placeholder="equipment"
          />
        </Form.Group>

        <Form.Group className="mb-3-exercises" controlId="formBasicInstructions">
          <Form.Label>Instructions</Form.Label>
          <Form.Control
            name="instructions"
            value={ instructions }
            onChange={ handleChange }
            type="text"
            placeholder="instructions"
          />
        </Form.Group>

        <Button variant="dark" type="submit">submit</Button>

      </Form>
    </Container>
  );
};

export default ExercisesCreate;
