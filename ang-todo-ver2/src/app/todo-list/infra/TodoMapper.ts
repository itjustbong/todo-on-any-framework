import { Todo } from 'src/app/todo-list/models/todos';

export default {
  toModel(json: any): Todo {
    return new Todo({
      id: json._id,
      content: json._content,
      state: json._state,
    });
  },
};
