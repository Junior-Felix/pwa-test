<script lang="ts">
	import { isStandalone } from '$lib/pwa';

	let count = $state(0);
	let installed = $state(false);

	function increment() {
		count += 1;
	}

	$effect(() => {
		installed = isStandalone();
	});
</script>

<svelte:head>
	<title>My PWA</title>
	<meta name="description" content="My SvelteKit Progressive Web App" />
</svelte:head>
<main>
	<h1>My Sveltekit App</h1>
	<p>Count: {count}</p>
	<button onclick={increment}>Add</button>
	{#if installed}
		<p>You've installed the app.</p>
	{:else}
		<p>You are using the website.</p>
	{/if}
	<div class="grid grid-cols-2 gap-4">
		<img src={`img/test-img-1.jpg`} alt="test one" />
		<img src={`img/test-img-2.jpg`} alt="test two" />
		<img src={`img/test-img-3.jpg`} alt="test three" />
		<img src="img/test-img-4.jpg" alt="test four" />
		<img src="img/test-img-5.jpg" alt="test five" />
		<img src="img/test-img-6.jpg" alt="test six" />
	</div>
</main>
