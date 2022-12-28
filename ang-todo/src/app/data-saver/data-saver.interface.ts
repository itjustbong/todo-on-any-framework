import { TodoState, TodoType } from '../models/todos';

export interface iTodoDataSaver {
  save(data: any): void;
  getAllTodos(): TodoType[];
  updateTodoState(id: number, toState: TodoState): void;
  delete(id: number): void;
}
