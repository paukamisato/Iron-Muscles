import React, { useState, useEffect } from "react";
import ExercisesService from "../../../../service/exercises.service";
import { Col, Container, Row, Card, ListGroup } from "react-bootstrap";
import "../ExercisesDetails/ExerciseDetails.css"

const exercisesService = new ExercisesService();

export default function ExercisesDetails(props) {
  
  const [exercise, setExercise] = useState();

  console.log("props: ", props.match.params);
  const { id } = props.match.params;

  useEffect(() => {
    
    exercisesService
    .getOneExercise(id)
    .then( ( exercise ) => { setExercise( exercise.data ) });

  }, []);

  const deleteExercise = () => {
    
    exercisesService
    .deleteOneExercise (id)
    .then( (res) => {props.history.push("/exercises")} )
  }
  
  return (
    <Container>
      {exercise ? (
        <Row md={2} className= "row-exercises">
          <Col >
            <Card  style={{ height: "30rem", width:"18rem"}}>
              <Card.Img variant="top" src={exercise.exercise.photo} style={{ height: "30rem"}}/>
            </Card>
          </Col>
          <Col >
            <Card style={{ height: "30rem", width:"40rem"}}>
              <ListGroup variant="flush">
                <ListGroup.Item><h2>{exercise.exercise.name}</h2></ListGroup.Item>
                <ListGroup.Item>Main muscle involved: {exercise.exercise.mainMuscleInvolved}</ListGroup.Item>
                <ListGroup.Item>{exercise.exercise.instructions}</ListGroup.Item>
                <button onClick= { deleteExercise } variant="dark">Delete</button>
              </ListGroup>
            </Card>
          </Col>          
        </Row>
      ) : (
        <h3>Loading...</h3>
      )}
    </Container>
  );
}
