import { InjectionToken } from '@angular/core';
import { Todo } from '../models/todos';

// InjectionToken의 역할
export const TODO_DATA_SAVER = new InjectionToken<TodoDataSaver>(
  'TodoDataSaver'
);

export interface TodoDataSaver {
  save(todo: Todo[]): void;
  findAllTodos(): Todo[];
  // 여기서 Todo를 인자로 받는 이유
  update(id: number, todo: Todo): void;
  delete(id: number): void;
}
