<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { browser } from '$app/environment';
	import { registerSW } from 'virtual:pwa-register';

	if (browser) {
		registerSW({
			immediate: true
		});
	}

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="manifest" href="/site.webmanifest" />
</svelte:head>
{@render children()}
