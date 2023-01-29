<script lang="ts">
	export let ratio: number;
	$: isCompleteAll = ratio === 1;
	$: barcodeText = isCompleteAll ? 'good job' : 'cheer up';
</script>

<link
	href="https://fonts.googleapis.com/css2?family=Libre+Barcode+39+Text&display=swap"
	rel="stylesheet"
/>
<div class:isCompleteAll style="--ratio: {ratio * 100}%">
	{barcodeText}
</div>

<style>
	div {
		font-family: 'Libre Barcode 39 Text', cursive;
		font-size: 2.8rem;
		display: flex;
		justify-content: center;
		margin: 0.6rem 0 1rem;
		background: linear-gradient(
			90deg,
			rgb(116, 114, 255) var(--ratio),
			rgb(55, 55, 55) var(--ratio)
		);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		--css-ratio: 0;
	}
	div:before {
		content: '';
		position: absolute;
		width: 11rem;
		height: 0.3rem;
		transform: translateX(-3px) translateY(-6px);
		background: rgba(255, 0, 0, 0);
		transition: 800ms;
	}

	.isCompleteAll {
		animation: blink 500ms 200ms;
	}
	.isCompleteAll:before {
		animation: line 500ms backwards;
	}

	@keyframes line {
		from {
			background: rgba(255, 0, 0, 0.8);
		}
		to {
			background: rgba(255, 0, 0, 0.8);
			transform: translateX(-3px) translateY(38px);
		}
	}
	@keyframes blink {
		from {
			color: #eee;
		}
		to {
			color: black;
		}
	}
</style>