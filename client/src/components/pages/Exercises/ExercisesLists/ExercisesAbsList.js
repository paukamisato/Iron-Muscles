import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";
import "../ExercisesLists/ExercisesList.css"; 
import useExercisesList from "../../../hooks/useExercisesList";


export default function ExercisesAbsList() {
  
  const [ exercises ] = useExercisesList();

  const absExercise = exercises.filter(
    (item) => item.mainMuscleInvolved === "abs"
  );
  console.log("abs", absExercise);
  return absExercise.length > 0 ? (
    absExercise.map((item) => {
      return (
        <div>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src={item.photo} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Link to={`/exercises/${item._id}`}>
                  <Button variant="primary">Ver detalles</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        </div>
      );
    })
  ) : (
    <p>Sin resultados</p>
  );
}
