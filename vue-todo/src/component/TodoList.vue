<template>
  <ul>
    <!-- 디렉티브를 사용한 반복문 활용 -->
    <!-- v-for안의 인자를 props 로 한번 더 내려줘... -->
    <!-- v-bind:key  -->
    <TodoItem
      v-for="todoItem in todoList"
      :todoItem="todoItem"
      :key="todoItem.id"
      @toggleTodoItem="toggleTodoItem"
      @removeTodoItem="removeTodoItem"
    />
  </ul>
</template>

<script lang="ts">
import TodoItem from "./TodoItem.vue";

export default {
  components: {
    TodoItem: TodoItem,
  },
  props: ["todoList"],
  methods: {
    toggleTodoItem(targetId: number) {
      this.$emit("toggleTodoItem", targetId);
    },
    removeTodoItem(targetId: number) {
      this.$emit("removeTodoItem", targetId);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0;
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}
</style>
