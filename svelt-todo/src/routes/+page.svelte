<script>
	import TodoInput from "../component/TodoInput.svelte";
	import TodoList from "../component/TodoList.svelte";
	import Total from "../component/Total.svelte";

</script>

<section>
  <header>TODO</header>
  <TodoInput />
  <TodoList />
  <Total />
</section>

<style>
	section {
		background: linear-gradient(180deg, rgba(234, 194, 255, 0.5) 0%, rgba(192, 198, 255, 0.8) 100%);
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
		max-width: 18rem;
		padding: 1rem 2rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
	}
	header {
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
		margin: 1rem 0 1.4rem;
	}
</style>