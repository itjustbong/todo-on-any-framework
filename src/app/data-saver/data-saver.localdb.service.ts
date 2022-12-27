import { Injectable } from '@angular/core';
import { TodoState, TodoType } from '../models/todos';
import { iTodoDataSaver } from './data-saver.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalDBSaver implements iTodoDataSaver {
  private localDBKey = 'todoData';
  constructor() {}

  todoObjBuilder(todo: string) {
    return {
      todo: todo,
      state: TodoState.NORMAL,
      id: Date.now(),
    };
  }

  save(data: TodoType[]) {
    try {
      localStorage.setItem(this.localDBKey, JSON.stringify(data));
    } catch (e) {
      console.log('LocalDBSaver save 에러');
    }
  }

  getAllTodos() {
    return JSON.parse(
      localStorage.getItem(this.localDBKey) || ''
    ) as TodoType[];
  }

  updateTodoState(id: number, toState: TodoState) {
    const allTodos = this.getAllTodos();
    const todoIdx = allTodos.findIndex((todo) => todo.id === id);
    allTodos[todoIdx].state = toState;
  }

  delete(id: number) {
    const allTodos = this.getAllTodos();
    const filteredTodos = allTodos.filter((todo) => todo.id !== id);
    this.save(filteredTodos);
  }
}
