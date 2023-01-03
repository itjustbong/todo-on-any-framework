import { TodoState, TodoType } from '../models/todos';

export interface iTodoDataSaver {
  add(data: string): void;
  allTodos: TodoType[];
  updateTodoState(id: number, toState: TodoState): void;
  delete(id: number): void;
}
