import ExercisesService from "../../service/exercises.service";
import { useState, useEffect } from "react";

const useExercisesList = (initialState = []) => {

    const exercisesService = new ExercisesService();

    const [exercises, setExercises] = useState(initialState);

    useEffect(() => {
      
        exercisesService
        .getAllExercises()
        .then(( exercises ) => setExercises( exercises.data ));
        
    },[])

    return [exercises];
};

export default useExercisesList;
