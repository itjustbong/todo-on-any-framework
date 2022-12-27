export enum TodoState {
  DELETED = 'Deleted',
  DONE = 'Done',
  NORMAL = 'Normal',
}

export interface TodoType {
  id: number;
  todo: string;
  state: string;
}

// export class Todos {
//   private todos: Todo[];

//   addTodo(todo: ){
//     this.todos =
//   }
// }
