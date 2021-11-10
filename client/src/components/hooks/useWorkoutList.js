import { useState, useEffect } from "react";
import WorkoutsService from "../../service/workouts.service";

const workoutsService = new WorkoutsService();

export const useWorkoutList = ( initialState = undefined ) => {

  const [workout, setWorkout] = useState([]);
 
  useEffect(() => {
    
    let mounted = true;
    workoutsService.getAllWorkouts().then((workout) => {
      if (mounted) {
        setWorkout(workout.data);
      }
    });
    return () => (mounted = false);

  }, []);

  
  return [workout]

}
 




