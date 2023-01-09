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
      // 서비스
      provide: TodoService,
      useClass: TodoService,
    },
    {
      // infra
      // interface에서 만들어둔 InjectionToken
      provide: TODO_DATA_SAVER,
      // 실제 구현 클래스
      // 그리고 컴포넌트에서 사용할 TODO_DATA_SAVER 의 구현체
      useClass: LocalTodoDataSaver,
    },
  ],
})
export class TodoListComponent {
  newTodo = new FormControl('');

  // 여기서 이런게 필요해!라고 말해주는 녀석이 맞는 것 같은데,
  // 기존의 방식이 틀린 것 같음...
  // 물어보자...
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
