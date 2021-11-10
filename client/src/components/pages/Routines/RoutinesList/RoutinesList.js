import { useState, useEffect } from "react";
import RoutinesService from "../../../../service/routines.service";
import { Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";


const routinesService = new RoutinesService();


export default function RoutinesList() {
    
    const [ routine, setRoutine ] = useState([]);
    console.log('123',routine, setRoutine)

    useEffect(() => {
        let mounted = true;
        routinesService
        .getAllRoutines()
        .then((routine) =>  {(mounted) ? setRoutine(routine.data):(mounted = false)})
    },[])        
    

    return (
        <Row  md={4}>
        {routine.length > 0 ? (
         routine.map((routine) => {
           return (
             <div>
               <Col md={5} className="mb-3">
                 <Card style={{ height: "30rem", width:"25rem"}}>
                   <Card.Img style={{ height: "20rem", width:"15rem"}} variant="top" src='../../../image/crossfit-gef47333dc_640.png' />
                   <Card.Body  >
                     <Card.Title>{routine.name}</Card.Title>
                     <Link to={`/routines/${routine._id}`}>
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
    )
}
