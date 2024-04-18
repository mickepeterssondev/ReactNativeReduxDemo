import { ITask, INewTask } from "../../entities/ITask";
import * as taskAction from '../reducers/taskReducer';
import { Action } from "@reduxjs/toolkit";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../types";
import * as api from '../../data/TaskRepository';

//Using thunk structure on these functions, which lets you return a function instead of an action object. It Performs all asynchronous operations and dispatches actions based on those operations

//GET ALL
export const fetchTasks = () => async (dispatch: ThunkDispatch<RootState, void, Action>) => {
  try {
    const response = await api.fetchAllTasks();
    dispatch(taskAction.fetchAllTasksAction(response.data));
  } catch (error) {
    throw new Error(`Error fetching all tasks: ${error}`);
  }
}

//CREATE
export const createTask = (object: INewTask) => async (dispatch: ThunkDispatch<RootState, void, Action>) => {
  try {
    const response = await api.createTask(object);
    dispatch(taskAction.createTaskAction(response.data));
  } catch (error) {
    throw new Error(`Error creating Task via thunk: ${error}`)
  };
};

//UPDATE
export const updateTask = (object: ITask) => async (dispatch: ThunkDispatch<RootState, void, Action>) => {
  try {
    const updatedTask: ITask = object;
    const response = await api.updateTask(updatedTask);
    dispatch(taskAction.updateTaskAction(response.data));
  } catch (error) {
    throw new Error(`Error updating Task via Thunk: ${error}`);
  }
};

//DELETE
export const deleteTask = (object: ITask) => async (dispatch: ThunkDispatch<RootState, void, Action>) => {
  try {
    await api.deleteTask(object);
    dispatch(taskAction.deleteTaskAction(object))
  } catch (error) {
    throw new Error(`Error deleting task at Thunk: ${error}`);
  }
};

