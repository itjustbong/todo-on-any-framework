import { Injectable } from '@angular/core';
import { TodoState, TodoType } from '../models/todos';
import { DBSaver } from './data-saver';

@Injectable({
  providedIn: 'root',
})
export class LocalDBSaver extends DBSaver {
  private localDBKey = 'todoData';

  localDBSaver(todosObjData: TodoType[]) {
    try {
      localStorage.setItem(this.localDBKey, JSON.stringify(todosObjData));
    } catch (e) {
      console.log('LocalDBSaver save 에러');
    }
  }

  get allTodos() {
    const localData = JSON.parse(
      localStorage.getItem(this.localDBKey) || '[]'
    ) as TodoType[];
    return localData;
  }

  add(todo: string) {
    const todoObj = this.todoObjBuilder(todo);
    const prevTodos = this.allTodos || [];
    let todoObjData;
    if (prevTodos.length === 0) {
      todoObjData = new Array(todoObj);
    } else {
      todoObjData = prevTodos.concat(todoObj);
    }
    this.localDBSaver(todoObjData);
  }

  updateTodoState(id: number, toState: TodoState) {
    const allTodos = this.allTodos;
    const todoIdx = allTodos.findIndex((todo) => todo.id === id);
    allTodos[todoIdx].state = toState;
    this.localDBSaver(allTodos);
  }

  delete(id: number) {
    const allTodos = this.allTodos;
    const filteredTodos = allTodos.filter((todo) => todo.id !== id);
    this.localDBSaver(filteredTodos);
  }
}
