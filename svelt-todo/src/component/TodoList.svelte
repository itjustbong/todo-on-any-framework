<script>
	import { todoData } from "../store";
	import TodoItem from "./TodoItem.svelte";
</script>

<div>
  {#each $todoData as todo (todo.id)}
    <TodoItem {todo} />
  {/each}
</div>

<style>
	div {
		min-height: 10rem;
		padding-bottom: 1rem;
	}
</style>
