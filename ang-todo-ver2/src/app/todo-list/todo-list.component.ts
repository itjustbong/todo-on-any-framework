import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Todo } from './models/todos';
import { TodoService } from './services/todos.service';
import { TODO_DATA_SAVER } from './infra/data-saver.interface';
import { LocalTodoDataSaver } from './infra/data-saver.localdb';

@Component({
  selector: 'app-todo-list',
  templateUrl: './view/todo-list.component.html',
  styleUrls: ['./view/todo-list.component.css'],
  providers: [
    {
      provide: TodoService,
      useClass: TodoService,
    },
    {
      provide: TODO_DATA_SAVER,
      useClass: LocalTodoDataSaver,
    },
  ],
})
export class TodoListComponent {
  newTodo = new FormControl('');

  constructor(private todoService: TodoService) {}

  getTodoList(): Todo[] {
    return this.todoService.getAllTodos();
  }

  addTodo(e: any): void {
    e.preventDefault();
    if (!this.newTodo.value) return;
    this.todoService.addTodo(this.newTodo.value);
    this.newTodo.setValue('');
  }

  delTodo(id: number) {
    this.todoService.deleteTodo(id);
  }

  switchState(id: number) {
    this.todoService.updateState(id);
  }
}
