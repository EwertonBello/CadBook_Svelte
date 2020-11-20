<script lang="ts">

	import { Button } from 'svelte-materialify';
	
	function btn_click() {
		let numero: number = 12;
		console.log("Tranquilidade...", numero);
	}
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<h1>About this site</h1>

<Button>One Button</Button>
<Button class="primary-color" on:click={btn_click}>Clique-me</Button>

<p>This is the 'about' page. There's not much here.</p>