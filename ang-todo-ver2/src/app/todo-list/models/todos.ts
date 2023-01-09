enum TodoState {
  DELETED = 'Deleted',
  DONE = 'Done',
  NORMAL = 'Normal',
}

type TodoProps = {
  id: number;
  content: string;
  state: TodoState;
};

export class Todo {
  private _id: number;
  private _content: string;
  private _state: TodoState;

  constructor(todo: TodoProps) {
    const { id, content, state } = todo;
    this._id = id;
    this._content = content;
    this._state = state;
  }

  get id(): number {
    return this._id;
  }

  get content(): string {
    return this._content;
  }

  get state(): TodoState {
    return this._state;
  }

  static generate(id: number, content: string): Todo {
    return new Todo({
      id,
      content,
      state: TodoState.NORMAL,
    });
  }

  switchState(): Todo {
    if (this._state === TodoState.NORMAL) {
      this._state = TodoState.DONE;
    } else if (this._state === TodoState.DONE) {
      this._state = TodoState.NORMAL;
    }
    return this;
  }

  delete(): Todo {
    this._state = TodoState.DELETED;
    return this;
  }

  isDone(): boolean {
    return this._state === TodoState.DONE;
  }

  isDeleted(): boolean {
    return this._state === TodoState.DELETED;
  }
}
