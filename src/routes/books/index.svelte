<script context="module" lang="ts">
    import { book } from '../../services/book/bookservice';
    import type { IBook } from '../../services/book/shared/ibook';
    
	export async function preload() {
        let response: any = await book.all();
        let books: IBook[] = response.data;
        return { books };
	}
</script>

<script lang="ts">
    import { Button } from 'svelte-materialify';

    export let books: IBook[];
</script>


<svelte:head>
	<title>Books</title>
</svelte:head>

<h1>Livros Livros Livros...</h1>

<Button class="primary-color" on:click={()=>console.log("É né...")}>Bora lá</Button>

<ul>
	{#each books as book}
		<li><a rel="prefetch" href="books/{book.id}">{book.title}</a></li>
	{/each}
</ul>
