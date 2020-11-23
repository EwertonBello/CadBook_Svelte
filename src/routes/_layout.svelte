<script lang="ts">
	import Toolbar from "../components/Toolbar.svelte";
	import { MaterialApp } from "svelte-materialify";

	let theme: any = "light";

	function toggleTheme() {
		if (theme === "light") theme = "dark";
		else theme = "light";
	}
</script>

<MaterialApp {theme}>
	<div style="position:relative;height:250px">
		<Toolbar {toggleTheme}/>
		<slot/>
	</div>
</MaterialApp>
