import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { TodoListComponent } from './todo-list.component';
import { TodoListItemComponent } from './components/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [TodoListComponent, TodoListItemComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [TodoListComponent],
})
export class TodoListModule {}
