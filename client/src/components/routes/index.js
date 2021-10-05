import React from "react";
import HomePage from "../pages/HomePage/HomePage";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import Profile from "../pages/Profile/Profile";
import Exercises from "../pages/ExercisesLists/ExercisesList";
import ExercisesCreate from "../pages/Exercises/ExercisesCreate"
import ExerciseDetails from "../pages/Exercises/ExerciseDetails";
import ExercisesBackList from "../pages/ExercisesLists/ExercisesBackList";
import ExercisesAbsList from "../pages/ExercisesLists/ExercisesAbsList";
import Workouts from "../pages/Workouts/WorkoutsList";
import WorkoutDetails from "../pages/Workouts/workoutDetails";
import WorkoutForm from "../pages/WorkoutForm/WorkoutForm";
import { Switch, Route, Redirect } from "react-router-dom";

const Routes = ({ storeUser, loggedUser }) => {
  return (
    <Switch>
      <Route exact path="/" render={() => <HomePage />} />
      <Route exact path="/login"render={(props) => <Login storeUser={storeUser} {...props} />}/>
      <Route exact path="/signup" render={(props) => <Signup {...props} />} />
      <Route exact path="/profile"render={(props) =>loggedUser ? (<Profile {...props} loggedUser={loggedUser} storeUser={storeUser}/>) : (<Redirect to="/login" />)}/>
      <Route exact path="/workouts" render={() => <Workouts />} />
      <Route exact path="/exercises" render={() => <Exercises />} />
      <Route exact path="/exercises/create" render={(props) => <ExercisesCreate {...props}/>}/>
      <Route exact path="/exercises/back" render={() => <ExercisesBackList />} />
      <Route exact path="/exercises/abs" render={() => <ExercisesAbsList />} />
      <Route path="/exercises/:id" render={(props) => <ExerciseDetails {...props} />} />
      <Route exact path="/workouts/:id" render={(props) => <WorkoutDetails {...props} />} />
      <Route path="/workoutForm" render={(props) => <WorkoutForm {...props} />} />

    </Switch>
  );
};

export default Routes;
