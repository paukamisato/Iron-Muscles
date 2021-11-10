import axios from "axios";

const WorkoutsService = () => {

  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + "/workouts",
    withCredentials: true,
  });

  const getAllWorkouts = () => instance.get("/");
  const getOneWorkout = (workouts_id) => instance.get(`/${workouts_id}`);
  const createWorkouts = (workoutsDetails) => instance.post("/", workoutsDetails);
  const deleteOneWorkout = (workouts_id) => instance.delete(`/${workouts_id}`);
  const updateWorkout = (workouts_id) => instance.put(`/${workouts_id}`);

  return [ getAllWorkouts ,getOneWorkout, createWorkouts, deleteOneWorkout, updateWorkout ]
}

export default WorkoutsService;