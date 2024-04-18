import { combineReducers } from "@reduxjs/toolkit"; 
import taskReducer from "./taskReducer";

//just do demonstrate functionality of combineReducers

const rootReducer = combineReducers({
  tasks: taskReducer
});

export default rootReducer;