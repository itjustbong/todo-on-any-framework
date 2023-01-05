import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocalDBSaver } from '../data-saver/data-saver.localdb';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  db = new TodosService(new LocalDBSaver());
  newTodo = new FormControl('');

  addTodo(e: any) {
    e.preventDefault();
    if (!this.newTodo.value) return;
    this.db.add(this.newTodo.value);
    this.newTodo.setValue('');
  }
}
