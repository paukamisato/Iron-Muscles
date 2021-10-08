import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WorkoutsService from "../../../service/workouts.service";
import { Card, Button, Col, Row, Container } from "react-bootstrap";
import "../Workouts/WorkoutsList.css";

const workoutService = new WorkoutsService();

export default function WorkoutsList() {
  const [workout, setWorkout] = useState([]);
  useEffect(() => {
    let mounted = true;
    workoutService.getAllWorkouts().then((workout) => {
      if (mounted) {
        setWorkout(workout.data);
      }
    });
    return () => (mounted = false);
  }, []);

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
