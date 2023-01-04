import { TodoState, TodoType } from '../models/todos';
import { iTodoDataSaver } from './data-saver.interface';

export abstract class DBSaver implements iTodoDataSaver {
  todoObjBuilder(todo: string) {
    return {
      todo: todo,
      state: TodoState.NORMAL,
      id: Date.now(),
    };
  }

  abstract add(data: string): void;
  abstract allTodos: TodoType[];
  abstract updateTodoState(id: number, toState: TodoState): void;
  abstract delete(id: number): void;
}
