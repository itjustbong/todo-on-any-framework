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

  // 기존의 서비스에서는 data-saver가 하기 기능을 포함했었는데,
  // 여기서는 나누어져 있다..!
  addTodo(todo: string) {
    const prevTodos = this.db.findAllTodos();

    // generate를 사용하여 객체를 생성했을때 장점?
    // 생성자로 생성하는 것이랑 무엇이 다를까..!
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
    // 기존 방식의 외부 서비스의 updateState 는
    // state 변경에만 대응할 수 있었을 것.
    // this 의 활용 참고 하기.
    const updatedTodo: Todo | undefined = this.db
      .findAllTodos()
      .find((todo) => todo.id === id)
      ?.switchState();

    if (updatedTodo) this.db.update(id, updatedTodo);
    else console.log('업데이트 실패');
  }
}
