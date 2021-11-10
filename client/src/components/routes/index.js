import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Exercises from "../pages/Exercises/ExercisesLists/ExercisesList";
import ExercisesCreate from "../pages/Exercises/ExercisesCreate/ExercisesCreate"
import ExerciseDetails from "../pages/Exercises/ExercisesDetails/ExerciseDetails";
import ExercisesBackList from "../pages/Exercises/ExercisesLists/ExercisesBackList";
import ExercisesAbsList from "../pages/Exercises/ExercisesLists/ExercisesAbsList"
import Login from "../pages/User/Login/Login";
import HomePage from "../pages/HomePage/HomePage";
import Profile from "../pages/User/Profile/Profile";
import RoutineCreate from "../pages/Routines/RoutineCreate/RoutineCreate";
import RoutinesDetails from "../pages/Routines/RoutinesDetails/RoutinesDetails"
import RoutinesList from "../pages/Routines/RoutinesList/RoutinesList";
import Signup from "../pages/User/Signup/Signup";
import Workouts from "../pages/Workouts/WorkoutsList/WorkoutsList";
import WorkoutDetails from "../pages/Workouts/WorkoutsDetails/workoutDetails";
import WorkoutForm from "../pages/Workouts/WorkoutForm/WorkoutForm";



const Routes = ({ storeUser, loggedUser }) => {
  return (
    <Switch>

      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/login"render={(props) => <Login storeUser={storeUser} {...props} />}/>
      <Route exact path="/signup" render={(props) => <Signup {...props} />} />
      <Route exact path="/profile"render={(props) =>loggedUser ? (<Profile {...props} loggedUser={loggedUser} storeUser={storeUser}/>) : (<Redirect to="/login" />)}/>
      <Route exact path="/workouts" render={() => <Workouts />} />
      <Route exact path="/routines" render = {()=> <RoutinesList />}/>
      <Route exact path="/routines/:id" render= {(props) => <RoutinesDetails {...props}/>}/> 
      <Route exact path="/routines/create" render = {(props) => <RoutineCreate {...props}/>}/>
      <Route exact path="/exercises" render={() => <Exercises />} />
      <Route exact path="/exercises/create" render={(props) => <ExercisesCreate {...props}/>}/>
      <Route exact path="/exercises/back" render={() => <ExercisesBackList />} />
      <Route exact path="/exercises/abs" render={() => <ExercisesAbsList />} />
      <Route path="/exercises/:id" render={(props) => <ExerciseDetails {...props} />} />
      <Route exact path="/workouts/:id" render={(props) => <WorkoutDetails {...props} />} />
      <Route path="/workoutForm" render={() => loggedUser ? (<WorkoutForm  loggedUser={loggedUser} storeUser={storeUser}/>) : (<Redirect to="/login" />)}/>
    </Switch>
  );
};

export default Routes;
