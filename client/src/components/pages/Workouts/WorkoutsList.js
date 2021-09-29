import React, {useState, useEffect} from 'react'
import WorkoutsService from '../../../service/workouts.service'

export default function WorkoutsList() {

    const [workoutsList, setWorkoutsList] = useState([])

    useEffect(() => {
        WorkoutsService.getAllWorkouts()
        .then(data => setWorkoutsList(data.data))
        .catch(err => console.log(err))
    }, [])

    return (
        <div>
            
        </div>
    )
}
