import React, { useState, useEffect } from "react";
import RoutinesService from "../../../../service/routines.service"
import { Link } from "react-router-dom";
import { Col, Container, Row, Card, Button } from "react-bootstrap";

const routinesService = new RoutinesService();

export default function RoutinesDetails( props ) {
 
  const [ routine, setRoutine ] = useState();
  const { id } = props.match.params;

  useEffect(() => {
   
    routinesService
    .getOneRoutine( id )
    .then( ( routine ) => { setRoutine( routine.data ) } );
    
  }, []);

  const deleteRoutine = () => {
    routinesService
    .deleteOneRoutine (id)
    .then( (res) => {props.history.push("/routines")} )
  }

  return (
    <Container>
      {routine ? (
        <Row>
          <Col md={12}>
            <h1>Routine: {routine.routine.name}</h1>
            <h3>{routine.routine.day}</h3>
            <hr />
            <p>Duration: {routine.routine.duration} min</p>
            <p>Exercises:</p>
            <Row md={4}>
            {routine.routine.workouts.length > 0 ? (
              routine.routine.workouts.map((workouts) => {
                return (
                  <div>
                    <Col md={4} className="mb-4">
                      <Card style={{ height: "30rem", width:"20rem"}}>
                        <Card.Img variant="top" src={ workouts.photo } style={{ height: "20rem", width:"15rem"}} />
                        <Card.Body>
                          <Card.Title>{ workouts.name }</Card.Title>
                          <Link to={`/workouts/${ workouts._id }`}>
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
          <button onClick = { deleteRoutine }>delete</button>
        </Row>
      ) : (
        <h3>Loading...</h3>
      )}
    </Container>
  );
}
