<template>
  <div class="inputBox">
    <!-- 양방향 바인딩 newTodoItem v-model -->
    <input
      type="text"
      v-model="newTodoItem"
      @keyup.enter="addTodo"
      placeholder="add what you have to do"
    />
    <span class="addBtnBox" @click="addTodo">
      <i class="addBtn fa fa-plus" aria-hidden="true"></i>
    </span>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      newTodoItem: "",
    };
  },
  methods: {
    // todo를 새로 추가하는 함수
    addTodo() {
      if (this.newTodoItem) {
        this.$emit("addTodoItem", this.newTodoItem); // 부모 컴포넌트(App) 의 addTodo 함수 호출
        this.clearInput();
      }
    },
    // Input값을 초기화하는 함수
    clearInput() {
      this.newTodoItem = "";
    },
  },
};
</script>

<style>
input {
  width: 300px;
  height: 35px;
  border: none;
  border-bottom: 1.5px solid #fff;
  background: transparent;
  color: #fff;
  font-size: 1em;
  padding-left: 10px;
  margin-right: 10px;
}
input:focus {
  outline: none;
}
.addBtn {
  color: #fff;
}
</style>
