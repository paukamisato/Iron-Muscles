import { Link } from "react-router-dom";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import { useWorkoutList } from "../../../hooks/useWorkoutList";
import "../WorkoutsList/WorkoutsList.css";

export default function WorkoutsList() {

  const [workout] = useWorkoutList();

  

  return (
    <Container>
      {workout.length > 0 ? (
        <Row md={4}>
          {workout.map((workout) => {
            return (
              <div>
                <Col md={3} className="mb-3">
                  <Card style={{ height: "20rem", width:"15rem"}}>
                    <Card.Img variant="top" src={workout.photo} />
                    <Card.Body>
                      <Card.Title>{workout.name}</Card.Title>

                      <Link to={`/workouts/${workout._id}`}>
                        <Button variant="dark">Ver detalles</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              </div>
            );
          })}
        </Row>
      ) : (
        <p>Sin resultados</p>
      )}
    </Container>
  );
}
