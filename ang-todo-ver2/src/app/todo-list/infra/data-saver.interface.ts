import { InjectionToken } from '@angular/core';
import { Todo } from '../models/todos';

export const TODO_DATA_SAVER = new InjectionToken<TodoDataSaver>(
  'TodoDataSaver'
);

export interface TodoDataSaver {
  save(todo: Todo[]): void;
  findAllTodos(): Todo[];
  update(id: number, todo: Todo): void;
  delete(id: number): void;
}
