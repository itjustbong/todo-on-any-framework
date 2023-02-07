import { For } from 'solid-js';
import type { Todo } from '../types/todo';
import TodoItem from './TodoItem';
import styles from './TodoList.module.css';

interface TodoListProps {
  todos: Todo[];
  onItemToggle?: (index: number) => void;
  onItemUpPress?: (index: number) => void;
  onItemDownPress?: (index: number) => void;
  onItemDelete?: (index: number) => void;
}

const TodoList = (props: TodoListProps) => {
  return (
    <div class={styles.container}>
      <For each={props.todos}>
        {(todo, index) => (
          <TodoItem
            {...todo}
            onToggle={() => {
              props.onItemToggle?.(index());
            }}
            onUpPress={() => {
              props.onItemUpPress?.(index());
            }}
            onDownPress={() => {
              props.onItemDownPress?.(index());
            }}
            onDelete={() => {
              props.onItemDelete?.(index());
            }}
          />
        )}
      </For>
    </div>
  );
};

export default TodoList;
