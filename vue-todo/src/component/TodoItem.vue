<template>
  <li>
    <div
      :class="{ doneTodo: todoItem.completed }"
      @click="toggleTodoItem(todoItem.id)"
    >
      <span class="checkIcon">
        <i class="fa fa-check" aria-hidden="true"></i>
      </span>
      {{ todoItem.todo }}
    </div>
    <span class="removeBtn" type="button" @click="removeTodoItem(todoItem.id)">
      <i class="fa fa-trash-o" aria-hidden="true"></i>
    </span>
  </li>
</template>

<script lang="ts">
import type { PropType } from "vue";

export interface TodoItemType {
  id: number;
  todo: string;
  completed: boolean;
}

export default {
  props: {
    todoItem: { type: Object as PropType<TodoItemType>, required: true },
  },
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
li {
  width: 350px;
  height: 45px;
  line-height: 45px;
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin: 7px 0px;
  padding: 0px 7px;
  border-radius: 2px;
  cursor: pointer;
}
.checkIcon {
  margin: 0px 7px;
  color: #42b883;
}
.removeBtn {
  margin-right: 7px;
  color: rgb(214, 94, 94);
  cursor: pointer;
}
.doneTodo {
  text-decoration: line-through;
  color: rgb(130, 130, 130);
}
</style>
