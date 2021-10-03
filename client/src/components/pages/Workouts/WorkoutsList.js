import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import WorkoutsService from "../../../service/workouts.service";
import { Card, Button, Col } from "react-bootstrap";

const workoutService = new WorkoutsService();

export default function WorkoutsList() {
  const [workout, setWorkout] = useState([]);
  useEffect(() => {
    let mounted = true;
    workoutService.getAllWorkouts().then((workout) => {
      if (mounted) {
        setWorkout(workout.data);
      }
      console.log("ENTROworkutlist: ", mounted);
    });
    return () => (mounted = false);
  }, []);

  return (
    workout.length > 0 ? (
      workout.map((workout) => {
        return (
          <div>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={workout.photo} />
                <Card.Body>
                  <Card.Title>{workout.name}</Card.Title>

                  <Link to={`/workouts/${workout._id}`}>
                    <Button variant="primary">Ver detalles</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          </div>
        );
      })
    ) : (<p>Sin resultados</p>)
  );
}
