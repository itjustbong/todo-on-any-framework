
<script lang="ts">
  import {todoData} from "../store";

  export let todo;
  let {id, text, completed} = todo;

  const handleDeleteTodo = (id: number) => {
    $todoData = $todoData.filter(todo => todo.id !== id);
  }
  const handleCompleteTodo = (id: number) => {
    $todoData = $todoData.map(todo => todo.id === id ? {...todo, completed: !completed} : todo);
  }
</script>

<div class:completed>
  <label>
    <input type="checkbox" bind:checked={completed} on:click={(e) => handleCompleteTodo(id)}/>
    {text}
  </label>
  <button on:click={() => handleDeleteTodo(id)}>X</button>
</div>

<style>
	div {
		padding: 0.2rem 0;
		align-items: center;
		display: flex;
	}
	div:hover {
		font-weight: bold;
	}
	.completed {
		color: rgb(114, 156, 255);
		text-decoration: line-through;
	}
	label {
		display: flex;
		width: 100%;
		cursor: pointer;
	}
	input {
		width: 16px;
		height: 16px;
		cursor: pointer;
		margin-right: 0.3rem;
		accent-color: rgb(174, 113, 236);
	}

	button {
		width: 2em;
		height: 1.3rem;
		background: no-repeat 50% 50%
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='rgb(135, 141, 255)' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
		background-size: 1.6rem 1.6rem;
		border: none;
		text-indent: -9999px;
		cursor: pointer;
	}
	button:hover {
		background: no-repeat 50% 50%
			url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='rgb(90, 9, 255)' d='M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M17,7H14.5L13.5,6H10.5L9.5,7H7V9H17V7M9,18H15A1,1 0 0,0 16,17V10H8V17A1,1 0 0,0 9,18Z'%3E%3C/path%3E%3C/svg%3E");
		background-size: 1.6rem 1.6rem;
	}
</style>
