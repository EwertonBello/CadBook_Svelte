<script>
	import successkid from 'images/successkid.jpg';
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<style>
	img {
		width: 200px;
	}
</style>

<div class="container">
	<h1>Great success!</h1>
	
	<figure>
		<img alt="Success Kid" src="{successkid}">
		<figcaption>Have fun with Sapper!</figcaption>
	</figure>
	
	<p><strong>It is okay.</strong></p>
</div>
