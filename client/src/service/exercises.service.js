import axios from "axios";

const ExercisesService = () => {
  
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + "/exercises",
    withCredentials: true,
  });
 
  const getAllExercises = () => instance.get("/");
  const getOneExercise = (exercise_id) => instance.get(`/${exercise_id}`);
  const createExercise = (exerciseDetails) =>  (instance.post("/", exerciseDetails));
  const deleteOneExercise = (exercise_id) => instance.delete(`/${exercise_id}`);
  const updateExercise = (exercise_id) => instance.put(`/${exercise_id}`);

  return[ getAllExercises, getOneExercise, createExercise, deleteOneExercise, updateExercise ]
}

export default ExercisesService;
