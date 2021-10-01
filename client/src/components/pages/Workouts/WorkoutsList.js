import React, { Component } from 'react'
import WorkoutsService from '../../../service/workouts.service'


export default class WorkoutsList extends Component {
  constructor() {
    super()
    this.state = {
      workout : undefined,  
    }
    this.WorkoutService = new WorkoutsService ()
  }  
 
  
  render() {
    return (
      <div>
         
      </div>
    )
  }
}
