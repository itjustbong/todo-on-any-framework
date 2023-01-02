import { Injectable } from '@angular/core';
import { LocalDBSaver } from '../data-saver/data-saver.localdb.service';
import { TodoState } from '../models/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private dataSaver: LocalDBSaver) {}

  getAlltodos() {
    return this.dataSaver.getAllTodos();
  }

  add(todo: string) {
    const todoObj = this.dataSaver.todoObjBuilder(todo);
    const prevTodos = this.dataSaver.getAllTodos() || [];

    if (prevTodos.length === 0) {
      this.dataSaver.save(new Array(todoObj));
      console.log(this.getAlltodos());
    } else {
      this.dataSaver.save(prevTodos.concat(todoObj));
      console.log(this.getAlltodos());
    }
  }

  delete(id: number) {
    this.dataSaver.delete(id);
  }
  updateState(id: number, state: TodoState) {
    this.dataSaver.updateTodoState(id, state);
  }
}
