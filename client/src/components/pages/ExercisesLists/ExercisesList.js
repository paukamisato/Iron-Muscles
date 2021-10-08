import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ExercisesService from "../../../service/exercises.service";
import { Card, Button, Col, Row} from "react-bootstrap";
import '../ExercisesLists/ExercisesList.css';

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
    <Row  md={4}>
     {exercises.length > 0 ? (
      exercises.map((exercise) => {
        return (
          <div>
            <Col md={5} className="mb-3">
              <Card style={{ height: "30rem", width:"25rem"}}>
                <Card.Img style={{ height: "20rem", width:"15rem"}} variant="top" src={exercise.photo} />
                <Card.Body  >
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
    ) : (<p>Sin resultados</p>)}
    </Row>
  );
}
