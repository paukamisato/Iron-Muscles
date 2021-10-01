import React, { Component } from 'react'
import { Button, Form } from 'react-bootstrap'
import WorkoutsService from '../../../service/workouts.service'

export default class WorkkoutForm extends Component {
    state = {
        name:"",
        day:"",
        exercises:[],
        duration:0,
    }
    WorkoutsService = new WorkoutsService()

    handleInput = (e) => {
        const { value, name } = e.target;
    
        this.setState({
          ...this.state,
          [name]: value
        })
      }
    
    handleFormSubmit = (e) => {
        e.preventDefault();
        const { name, day, exercises, duration} = this.state;
        this.authService
          .signup(name, day, exercises, duration)
          .then((res) => this.props.history.push("/login"))
          .catch((err) => console.log(err));
      };  


    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="title">
              <Form.Label>Name: </Form.Label>
              <Form.Control onChange={this.handleInput} name="title" value={this.state.name} type="text" placeholder="name" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="day">
              <Form.Label>Day: </Form.Label>
              <Form.Control onChange={this.handleInput} name="description" value={this.state.day} type="text" placeholder="" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="inversions">
              <Form.Label>Exercises: </Form.Label>
              <Form.Control onChange={this.handleInput} name="inversions" value={this.state.exercises} type="number" placeholder="Introduce inversiones" />
            </Form.Group>
    
            <Form.Group className="mb-3" controlId="length">
              <Form.Label>Duration: </Form.Label>
              <Form.Control onChange={this.handleInput} name="length" value={this.state.duration} type="number" placeholder="duration" />
            </Form.Group>
            <Button variant="primary" type="submit">
             Create
            </Button>
            </Form>
        )
    }
}
