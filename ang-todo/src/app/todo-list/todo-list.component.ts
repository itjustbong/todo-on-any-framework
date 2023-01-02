import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalDBSaver } from '../data-saver/data-saver.localdb.service';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  db = new TodosService(new LocalDBSaver());
  newTodo = new FormControl('');

  addTodo() {
    if (!this.newTodo.value) return;
    this.db.add(this.newTodo.value);
    this.newTodo.setValue('');
  }

  delTodo(id: number) {
    this.db.delete(id);
  }
}
