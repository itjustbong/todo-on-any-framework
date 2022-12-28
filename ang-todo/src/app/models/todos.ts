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
