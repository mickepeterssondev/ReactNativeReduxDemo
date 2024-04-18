import { INewTask, ITask } from "../entities/ITask";
import api from "./taskApi";

export const fetchAllTasks = async () => {
  try {
    return await api.get('/tasks/all');
  } catch (error) {
    throw new Error(`Couldn't get all tasks, error: ${error}`)
  }
};

export const createTask = async (newTask: INewTask) => {
  try {
    return await api.post('/tasks/new', newTask);
  } catch (error) {
    throw new Error(`Unable to create new task, error: ${error}`)
  }
};

export const updateTask = async (updatedTask: ITask) => {
  try {
    return await api.put('/tasks/update', updatedTask)
  } catch (error) {
    throw new Error(`Couldn't update task, error: ${error}`)
  }
}

export const deleteTask = async (taskToDelete: ITask) => {
  try {
    return await api.put('/tasks/delete', taskToDelete)
  } catch (error) {
    throw new Error(`Couldn't delete task, error: ${error}`)
  }
};