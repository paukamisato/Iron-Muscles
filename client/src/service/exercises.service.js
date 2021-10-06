import axios from "axios";

class ExercisesService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5000/api/exercises",
      withCredentials: true,
    });
  }

  getAllExercises = () => this.app.get("/");
  getOneExercise = (exercise_id) => this.app.get(`/${exercise_id}`);
  createExercise = (exerciseDetails) => {
    console.log(exerciseDetails);
    return this.app.post("/", exerciseDetails);
  };
  deleteOneExercise = (exercise_id) => this.app.delete(`/${exercise_id}`);
  updateExercise = (exercise_id) => this.app.put(`/${exercise_id}`);
}

export default ExercisesService;
