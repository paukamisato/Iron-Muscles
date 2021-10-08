import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExercisesService from "../../../service/exercises.service";
import { Card, Button, Col } from "react-bootstrap";
import '../ExercisesLists/ExercisesList.css'; 

const exercisesService = new ExercisesService();

export default function ExercisesAbsList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    let mounted = true;
    exercisesService.getAllExercises().then((exercise) => {
      if (mounted) {
        setExercises(exercise.data);
      }
    });
    return () => (mounted = false);
  }, []);

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
