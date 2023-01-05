import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalDBSaver } from '../data-saver/data-saver.localdb';
import { TodoState } from '../models/todos';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  db = new TodosService(new LocalDBSaver());
  newTodo = new FormControl('');

  delTodo(id: number) {
    this.db.delete(id);
  }

  updateState(id: number, nowState: string) {
    if (nowState === TodoState.NORMAL) this.db.updateState(id, TodoState.DONE);
    else this.db.updateState(id, TodoState.NORMAL);
  }
}
