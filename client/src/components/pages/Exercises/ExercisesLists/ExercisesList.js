import { Link } from "react-router-dom";
import { Card, Button, Col, Row} from "react-bootstrap";
import '../ExercisesLists/ExercisesList.css';
import useExercisesList from "../../../hooks/useExercisesList";


export default function ExercisesList() {

  const [ exercises ] = useExercisesList(); 
  
  return (
    <Row  md={4}>
     {exercises.length > 0 ? (
      exercises.map((exercises) => {
        return (
          <div>
            <Col md={5} className="mb-3">
              <Card style={{ height: "30rem", width:"25rem"}}>
                <Card.Img style={{ height: "20rem", width:"15rem"}} variant="top" src={exercises.photo} />
                <Card.Body  >
                  <Card.Title>{exercises.name}</Card.Title>
                  <Link to={`/exercises/${exercises._id}`}>
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
