<template>
  <main>
    <TodoInput @addTodoItem="addTodoItem" />
    <TodoList
      :todoList="todoList"
      @removeTodoItem="removeTodoItem"
      @toggleTodoItem="toggleTodoItem"
    />
    <TodoReset @resetTodoList="resetTodoList" />
  </main>
</template>

<script lang="ts">
import TodoInput from "./TodoInput.vue";
import TodoList from "./TodoList.vue";
import TodoReset from "./TodoReset.vue";

export default {
  components: {
    TodoInput: TodoInput,
    TodoList: TodoList,
    TodoReset: TodoReset,
  },
  // todoList 라고 하는 props를 받아온다.
  props: ["todoList"],
  methods: {
    addTodoItem(todo: string) {
      this.$emit("addTodoItem", todo);
    },
    toggleTodoItem(targetId: number) {
      this.$emit("toggleTodoItem", targetId);
    },
    removeTodoItem(targetId: number) {
      this.$emit("removeTodoItem", targetId);
    },
    resetTodoList() {
      this.$emit("resetTodoList");
    },
  },
};
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
}
</style>
