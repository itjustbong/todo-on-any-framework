<template>
  <button class="reset-btn" @click="resetTodoList">Reset</button>
</template>

<script lang="ts">
export default {
  methods: {
    resetTodoList() {
      this.$emit("resetTodoList"); // 부모 컴포넌트의 resetTodoList 함수를 호출
    },
  },
};
</script>

<style>
.reset-btn {
  color: rgb(214, 94, 94);
  font-weight: 500;
  font-size: 1em;
  cursor: pointer;
  border: none;
  background-color: transparent;
}
</style>
