import { Inject, Injectable } from '@angular/core';
import { TodoDataSaver, TODO_DATA_SAVER } from '../infra/data-saver.interface';
import { Todo } from '../models/todos';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(@Inject(TODO_DATA_SAVER) private db: TodoDataSaver) {}

  getAllTodos(): Todo[] {
    return this.db.findAllTodos().filter((todo) => !todo.isDeleted());
  }

  addTodo(todo: string) {
    const prevTodos = this.db.findAllTodos();

    const newTodoObj: Todo = Todo.generate(prevTodos.length + 1, todo);
    const updatedTodos = prevTodos.concat(newTodoObj);

    this.db.save(updatedTodos);
  }

  deleteTodo(id: number) {
    const updatedTodo: Todo | undefined = this.db
      .findAllTodos()
      .find((todo) => todo.id === id)
      ?.delete();

    if (updatedTodo) this.db.update(id, updatedTodo);
    else console.log('업데이트 실패');
  }

  updateState(id: number) {
    const updatedTodo: Todo | undefined = this.db
      .findAllTodos()
      .find((todo) => todo.id === id)
      ?.switchState();

    if (updatedTodo) this.db.update(id, updatedTodo);
    else console.log('업데이트 실패');
  }
}
