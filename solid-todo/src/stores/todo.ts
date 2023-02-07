import { createEffect } from 'solid-js';
import { createStore, produce } from 'solid-js/store';
import type { Todo } from '../types/todo';

const STORAGE_KEY = 'todos';

const prevTodos = localStorage.getItem(STORAGE_KEY);
export const [todos, setTodos] = createStore<Todo[]>(
  prevTodos !== null ? JSON.parse(prevTodos) : []
);

createEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
});

const swapTodos = (firstIndex: number, secondIndex: number) => {
  setTodos(
    produce((prev) => {
      const tmp = prev[firstIndex];
      prev[firstIndex] = prev[secondIndex];
      prev[secondIndex] = tmp;
    })
  );
};

export const moveTodoUp = (index: number) => {
  if (todos.length >= 2 && index > 0) {
    swapTodos(index - 1, index);
  }
};

export const moveTodoDown = (index: number) => {
  if (todos.length >= 2 && index < todos.length - 1) {
    swapTodos(index, index + 1);
  }
};

export const toggleTodo = (index: number) => {
  setTodos([index], 'isDone', (prev) => !prev);
};

export const deleteTodo = (index: number) => {
  setTodos((prev) => prev.filter((todo, todoIndex) => todoIndex !== index));
};

export const addTodo = (text: string) => {
  const newTodo: Todo = {
    text,
    isDone: false,
  };
  setTodos((prev) => [...prev, newTodo]);
};
