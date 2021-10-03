import { useForm } from "react-hook-form";
import React, { Fragment } from "react";

const WorkoutForm = () => {
  const { register, errors, handleSubmit } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <Fragment>
      <h2>Hooks Forms</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="Ingrese nombre de usuario"
          className="form-control mb-2"
          name="name"
          ref={register({
            required: {
              value: true,
              message: "Nombre es requerido",
            },
            maxLength: {
              value: 5,
              message: "No más de 5 carácteres!",
            },
            minLength: {
              value: 2,
              message: "Mínimo 2 carácteres",
            },
          })}
        />
        <span className="text-danger text-small d-block mb-2">
          {errors?.name?.message}
        </span>
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
    </Fragment>
  );
};

export default WorkoutForm;

// import React, { Component } from 'react'
// import { useState, useEffect } from 'react';
// import { Button, Form } from 'react-bootstrap'
// import WorkoutsService from '../../../service/workouts.service'

//  const WorkkoutForm = () => {

//   const [workout, setworkout] = useState({
//     name:"",
//     day:"",
//     date:null,

//   })

//       };

//     render() {
//         return (
//             <Form onSubmit={this.handleSubmit}>
//             <Form.Group className="mb-3" controlId="title">
//               <Form.Label>Name: </Form.Label>
//               <Form.Control onChange={this.handleInput} name="title" value={this.state.name} type="text" placeholder="name" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="day">
//               <Form.Label>Day: </Form.Label>
//               <Form.Control onChange={this.handleInput} name="description" value={this.state.day} type="text" placeholder="" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="inversions">
//               <Form.Label>Exercises: </Form.Label>
//               <Form.Control onChange={this.handleInput} name="inversions" value={this.state.exercises} type="number" placeholder="Introduce inversiones" />
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="length">
//               <Form.Label>Duration: </Form.Label>
//               <Form.Control onChange={this.handleInput} name="length" value={this.state.duration} type="number" placeholder="duration" />
//             </Form.Group>
//             <Button variant="primary" type="submit">
//              Create
//             </Button>
//             </Form>
//         )
//     }
// }

// esport default WorkkoutForm
