<script lang="ts">
  import {todoData} from "../store"
	import Barcode from "./Barcode.svelte";
  $: completedTodo = $todoData.filter(todo => todo.completed).length;
  $: ratio = $todoData.length > 0 ? Number(completedTodo/$todoData.length*100).toFixed(2) : 0;
</script>

<div>
  Total:
  <span>
    <b> {ratio} % </b>
    <Barcode ratio={Number(ratio) / 100} />
  </span>
</div>

<style>
	div {
		min-height: 10rem;
		padding-bottom: 1rem;
	}
</style>