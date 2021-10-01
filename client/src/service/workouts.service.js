import axios from "axios";

class WorkoutsService {
  constructor() {
    this.app = axios.create({
      baseURL: "http://localhost:5000/api/workouts",
      withCredentials: true,
    });
  }

  getAllWorkouts = () => this.app.get("/workouts");
  getOneWorkout = (workouts_id) => this.app.get(`/${workouts_id}`);
  createWorkouts = (workoutsDetails) => this.app.post("/", workoutsDetails);
  deleteOneWorkout = (workouts_id) => this.app.delete(`/${workouts_id}`);
  updateWorkout = (workouts_id) => this.app.put(`/${workouts_id}`);
}

export default WorkoutsService;
