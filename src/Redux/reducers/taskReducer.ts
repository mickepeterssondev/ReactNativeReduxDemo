import { ITask } from "../../entities/ITask";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TaskState } from "../types";
import { Task } from "react-native";
import { updateTask } from "../../data/TaskRepository";


const initialState: TaskState = {
  tasks: []
};

//Createslice simplifies creation of action creators for updating frontend states
const taskSlice = createSlice({
  name: 'task',
  initialState,

  reducers: {
    fetchAllTasksAction(state, action: PayloadAction<ITask[]>) {
      //replaces the current tasks in the state with the new array provided by the actions payload
      state.tasks = action.payload;
    },
    createTaskAction(state, action: PayloadAction<ITask>) {
      state.tasks.push(action.payload);
    },
    //update a specific task by finding it with and then replacing with updated object
    updateTaskAction(state, action: PayloadAction<ITask>) {
      //will return -1 if id not found.
      const index = state.tasks.findIndex(obj => obj.id === action.payload.id);
      //if found a corresponding id
      if (index !== -1) {
        state.tasks[index] = action.payload;
      }
    },
  
    deleteTaskAction(state, action: PayloadAction<ITask>) {
      state.tasks = state.tasks.filter(obj => obj.id !== action.payload.id);
    },
  },
});

export const {
  fetchAllTasksAction,
  createTaskAction,
  updateTaskAction,
  deleteTaskAction,
} = taskSlice.actions;

export default taskSlice.reducer;