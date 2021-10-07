import React, { useState, useEffect } from "react";
import WorkoutService from "../../../service/workouts.service";
import { Link } from "react-router-dom";
import { Col, Container, Row, Card,Button } from "react-bootstrap";

const workoutsService = new WorkoutService();

export default function WorkoutDetails(props) {
  const [workout, setWorkout] = useState();

  const { id } = props.match.params;

  useEffect(() => {
    let mounted = true;
    workoutsService.getOneWorkout(id).then((workout) => {
      if (mounted) {
        setWorkout(workout.data);
      }
    });
    return () => (mounted = false);
  }, []);

  return (
    <Container>
      {workout ? (
        <Row>
          <Col md={6}>
            <h1>Workout: {workout.workout.name}</h1>
            <h3>{workout.workout.day}</h3>
            <hr />
            <p>Duration: {workout.workout.duration} min</p>
            <p>Exercises:</p>
            {workout.workout.exercises.length > 0 ? (
              workout.workout.exercises.map((exercise) => {
                return (
                  <div>
                    <Col md={4} className="mb-3">
                      <Card>
                        <Card.Img variant="top" src={exercise.photo} />
                        <Card.Body>
                          <Card.Title>{exercise.name}</Card.Title>
                          <Link to={`/exercises/${exercise._id}`}>
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
            )}
          </Col>
        </Row>
      ) : (
        <h3>Loading...</h3>
      )}
    </Container>
  );
}
