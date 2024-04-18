export interface ITask {
  id: number,
  deadline: string,
  content: string,
  important: boolean,
  finished: boolean,
}

export interface INewTask {
  deadline: string,
  content: string,
  important: boolean,
  finished: boolean,
}