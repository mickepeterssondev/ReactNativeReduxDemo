import { Task } from "react-native";
import { ITask } from "../entities/ITask";

export interface RootState {
  tasks: TaskState
}

export interface TaskState {
  tasks: ITask[];
}