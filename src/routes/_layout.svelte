<script lang="ts">
	import Toolbar from "../components/toolbar/Toolbar.svelte";
	import { MaterialApp } from "svelte-materialify";

	let theme: any = "light";

	function toggleTheme() {
		if (theme === "light") theme = "dark";
		else theme = "light";
	}
</script>

<style>
	.layout {
		position:relative;
		height:100vh;
	}
</style>

<MaterialApp {theme}>
	<div class="layout">
		<slot/>
	</div>
</MaterialApp>
