
<script lang="ts">
	import { todoData } from "../store";
	
  let todoText=""

  const handleAddTodo = () => {
    if(!todoText) return;

    const newTodo = {
      id: Date.now(),
      text: todoText,
      completed: false
    }
    $todoData = [newTodo, ...$todoData];

		todoText=""
  }


</script>

<div>
  <input type="text" placeholder="hello" bind:value={todoText} on:keypress={(e) => e.key==="Enter" && handleAddTodo()}/>
  <button on:click={() => handleAddTodo()}>+</button>
</div>

<style>
	div {
		display: flex;
		padding: 1rem 0;
		border-top: 2px dashed;
	}
	input {
		border: none;
		border-radius: 0.4rem;
		padding: 0.4rem;
		width: 100%;
	}
	button {
		border: none;
		background-color: rgb(231, 255, 253);
		border-radius: 6px;
		width: 2rem;
		height: 2rem;
		margin-left: 0.4rem;
		cursor: pointer;
		color: rgb(123, 182, 254);
		font-weight: bold;
		font-size: 1.3rem;
	}
	button:hover {
		background-color: rgb(196, 217, 255);
	}
</style>