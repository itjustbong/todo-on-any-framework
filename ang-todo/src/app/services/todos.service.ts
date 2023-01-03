import { Injectable } from '@angular/core';
import { LocalDBSaver } from '../data-saver/data-saver.localdb';
import { TodoState } from '../models/todos';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private dataSaver: LocalDBSaver) {}

  get allTodos() {
    return this.dataSaver.allTodos;
  }

  add(todo: string) {
    this.dataSaver.add(todo);
  }

  delete(id: number) {
    this.dataSaver.delete(id);
  }
  updateState(id: number, state: TodoState) {
    this.dataSaver.updateTodoState(id, state);
  }
}
