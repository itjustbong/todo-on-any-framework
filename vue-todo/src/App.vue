<style>
body {
  margin: 0;
}

#app {
  position: relative;
  min-height: 100vh;
  padding-bottom: 50px;
  text-align: center;
  background-color: #242424;
}
</style>

<script lang="ts">
import MainWrapper from "./component/MainWrapper.vue";
import Header from "./component/Header.vue";
import { getData, saveData } from "./utils/storage";
import type { TodoItemType } from "./component/TodoItem.vue";

const TODO_STORAGE_KEY = "todo";

export default {
  components: {
    Header: Header,
    MainWrapper: MainWrapper,
  },

  data() {
    return {
      todoList: [] as TodoItemType[],
    };
  },

  created() {
    const storageData = getData(TODO_STORAGE_KEY);
    this.todoList = storageData;
  },

  methods: {
    addTodoItem(todo: string) {
      if (todo) {
        const newTodoData = {
          id: this.todoList[this.todoList.length - 1]?.id + 1 || 1, // 마지막 요소의 id값 + 1
          completed: false,
          todo,
        };
        this.todoList.push(newTodoData);

        // LocalStorage 업데이트
        saveData(this.todoList, TODO_STORAGE_KEY);
      }
    },
    toggleTodoItem(targetId: number) {
      this.todoList.forEach((todoItem) => {
        if (todoItem.id === targetId) {
          todoItem.completed = !todoItem.completed; // toggle

          // animation
          // if (todoItem.completed) {
          //   jsConfetti.addConfetti({
          //     emojis: ["🌈", "⚡️", "💥", "✨", "💫", "🌸"],
          //   });
          // }
        }
      });

      // LocalStorage 업데이트
      saveData(this.todoList, TODO_STORAGE_KEY);
    },
    removeTodoItem(targetId: number) {
      this.todoList = this.todoList.filter(
        (todoItem) => todoItem.id !== targetId
      );

      // LocalStorage 업데이트
      saveData(this.todoList, TODO_STORAGE_KEY);
    },
    resetTodoList() {
      this.todoList = [];

      // LocalStorage 업데이트
      saveData(this.todoList, TODO_STORAGE_KEY);
    },
  },
};
</script>

<template>
  <Header />
  <MainWrapper
    :todoList="todoList"
    @addTodoItem="addTodoItem"
    @toggleTodoItem="toggleTodoItem"
    @removeTodoItem="removeTodoItem"
    @resetTodoList="resetTodoList"
  />
</template>
