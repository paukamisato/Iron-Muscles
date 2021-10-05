import React, { useState, useEffect } from "react";
import ExercisesService from "../../../service/exercises.service";
import { Col, Container, Row } from "react-bootstrap";

const exercisesService = new ExercisesService();

export default function ExercisesDetails(props) {
  const [exercise, setExercise] = useState();

  console.log("props: ", props.match.params);
  const { id } = props.match.params;

  useEffect(() => {
    let mounted = true;
    exercisesService.getOneExercise(id).then((exercise) => {
      if (mounted) {
        setExercise(exercise.data);
      }
      console.log("ENTROdetails: ", mounted);
      console.log("exercise data: ", exercise.data);
    });
    return () => (mounted = false);
  }, []);


  return (
    <Container>
      {exercise ? (
        <Row>
          <Col md={6}>
            <h1>Exercise: {exercise.exercise.name}</h1>
            <h3>Description: {exercise.exercise.instructions}</h3>

            <hr />

            <p>Main muscl involved: {exercise.exercise.mainMuscleInvolved}</p>
            <p>Equipment: {exercise.exercise.equipment}</p>
          </Col>
          <Col md={4}>
            <img
              src={exercise.exercise.photo}
              alt={exercise.exercise.namename}
            />
          </Col>
        </Row>
      ) : (
        <h3>Loading...</h3>
      )}
    </Container>
  );
}
