import axios from "axios";

const RoutinesService = () => {
   
  const instance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL + "/routines",
    withCredentials: true,
  });
  const getAllRoutines = () => instance.get("/");
  const getOneRoutine = (routine_id) => instance.get(`/${routine_id}`);
  const createRoutine = (routineDetails) => instance.post("/", routineDetails);
  const deleteOneRoutine = (routine_id) => instance.delete(`/${routine_id}`);
  const updateRoutine = (routine_id) => instance.put(`/${routine_id}`);

    return [ getAllRoutines, getOneRoutine, createRoutine, deleteOneRoutine, updateRoutine ];
  };

  export default RoutinesService;
