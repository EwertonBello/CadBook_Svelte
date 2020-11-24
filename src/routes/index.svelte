<script>
	import successkid from 'images/successkid.jpg';
	import Toolbar from '../components/toolbar/Toolbar.svelte';

</script>

<svelte:head>
	<title>CadBook - Svelte</title>
</svelte:head>

<style>
	img {
		width: 200px;
	}
</style>

<Toolbar title="Home"/>
<div class="container">
	<h1>Great success!</h1>
	
	<figure>
		<img alt="Success Kid" src="{successkid}">
		<figcaption>Have fun with Sapper!</figcaption>
	</figure>
	
	<p><strong>It is okay.</strong></p>
</div>
