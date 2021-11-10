import React, { useState, useEffect } from "react";
import WorkoutService from "../../../../service/workouts.service";
import { Link } from "react-router-dom";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const workoutsService = new WorkoutService();

export default function WorkoutDetails( props ) {
 
  const [ workout, setWorkout ] = useState();
  const { id } = props.match.params;

  useEffect(() => {
   
    workoutsService
    .getOneWorkout( id )
    .then( ( workout ) => { setWorkout( workout.data ) } );
    
  }, []);

  const deleteWorkout = () => {
    workoutsService
    .deleteOneWorkout (id)
    .then( (res) => {props.history.push("/workouts")} )
  }

  return (
    <Container>
      {workout ? (
        <Row>
          <Col md={12}>
            <h1>Workout: {workout.workout.name}</h1>
            <h3>{workout.workout.day}</h3>
            <hr />
            <p>Duration: {workout.workout.duration} min</p>
            <p>Exercises:</p>
            <Row md={4}>
            {workout.workout.exercises.length > 0 ? (
              workout.workout.exercises.map((exercise) => {
                return (
                  <div>
                    <Col md={4} className="mb-4">
                      <Card style={{ height: "30rem", width:"20rem"}}>
                        <Card.Img variant="top" src={exercise.photo} style={{ height: "20rem", width:"15rem"}} />
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
            </Row>
          </Col>
          <button onClick = { deleteWorkout }>delete</button>
        </Row>
      ) : (
        <h3>Loading...</h3>
      )}
    </Container>
  );
}
