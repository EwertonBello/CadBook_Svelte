<script lang="ts">
    import { teste } from './index';
    import { Button } from 'svelte-materialify';

    export let books = [
        {'title': 'title1', 'slug':'slug1'},
        {'title': 'title2', 'slug':'slug2'},
        {'title': 'title3', 'slug':'slug3'},
        {'title': 'title4', 'slug':'slug4'},
    ]
</script>


<svelte:head>
	<title>Books</title>
</svelte:head>

<h1>Livros Livros Livros...</h1>

<Button class="primary-color" on:click={teste}>Bora lá</Button>

<ul>
	{#each books as book}
		<li><a rel="prefetch" href="books/{book.slug}">{book.title}</a></li>
	{/each}
</ul>
