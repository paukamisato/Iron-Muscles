import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExercisesService from "../../../service/exercises.service";
import { Card, Button, Col } from "react-bootstrap";

const exercisesService = new ExercisesService();

export default function ExercisesList() {
  
  const [exercises, setExercises] = useState([]);
  useEffect(() => {
    let mounted = true;
    exercisesService.getAllExercises().then((exercise) => {
      if (mounted) {
        setExercises(exercise.data);
      }
      console.log("ENTROexlist: ", mounted);
    });
    return () => (mounted = false);
  }, []);

  return (

     exercises.length > 0 ? (
      exercises.map((exercise) => {
        return (
          <div>
            <Col md={4} className="mb-3">
              <Card>
                <Card.Img variant="top" src={exercise.photo} />
                <Card.Body>
                  <Card.Title>{exercise.name}</Card.Title>

                  <Link to={`/exercises/${exercise._id}`}>
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
