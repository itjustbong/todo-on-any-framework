import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../models/todos';

@Component({
  selector: 'todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css'],
})
export class TodoListItemComponent {
  @Input() todo!: Todo;
  @Output() updateStateEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<number>();

  updateState(id: number) {
    this.updateStateEvent.emit(id);
  }

  deleteTodo(id: number) {
    this.deleteEvent.emit(id);
  }
}
