<script lang="ts">
	import { MaterialApp } from "svelte-materialify";
	import { theme } from '../theme/themeStore';

</script>

<style>
	.layout {
		position:relative;
		margin-top: 56px;
		height:100%;
	}

</style>

<MaterialApp theme={$theme}>
	<div class="layout">
		<slot/>
	</div>
</MaterialApp>
