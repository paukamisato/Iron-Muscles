import axios from "axios";

class WorkoutsService {
  constructor() {
    this.instance = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL + "/workouts",
      withCredentials: true,
      
    });
    console.log("servicio3 --->",this.instance.baseURL)
  }

  getAllWorkouts = () => this.instance.get("/");
  getOneWorkout = (workouts_id) => this.instance.get(`/${workouts_id}`);
  createWorkouts = (workoutsDetails) => this.instance.post("/", workoutsDetails);
  deleteOneWorkout = (workouts_id) => this.instance.delete(`/${workouts_id}`);
  updateWorkout = (workouts_id) => this.instance.put(`/${workouts_id}`);
}

export default WorkoutsService;
