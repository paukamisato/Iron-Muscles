import { Link } from "react-router-dom";
import { Card, Button, Col } from "react-bootstrap";
import useExercisesList from "../../../hooks/useExercisesList";

export default function ExercisesBackList() {
 
  const [ exercises ] = useExercisesList(); 

  const backExercise = exercises.filter(
    (item) => item.mainMuscleInvolved === "back"
  );
  console.log("back", backExercise);
  return backExercise.length > 0 ? (
    backExercise.map((item) => {
      return (
        <div>
          <Col md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src={item.photo} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Link to={`/exercises/${item._id}`}>
                  <Button variant="dark">Ver detalles</Button>
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
