<script context="module" lang="ts">
    import { bookservice } from '../../services/book/bookservice';
    import type { IBook } from '../../services/book/shared/ibook';

    
	export async function preload() {
        let { data }: any = await bookservice.all();
        let books: IBook[] = data;
        return { books };
	}
</script>

<script lang="ts">
    import { 
        Button,
        Card,
        Row,
        Col,
        CardTitle,
        CardSubtitle,
        CardActions,
        Icon
    } from 'svelte-materialify';
    import Toolbar from '../../components/toolbar/Toolbar.svelte';
    import Footer from '../../components/footer/Footer.svelte';

    export let books: IBook[];
</script>



<Toolbar title="Books"/>

<div class="container pl-2 pr-2">
    {#each books as book}
        <div class="d-flex justify-center mt-4 mb-4">
            <Card style="max-width:350px">
            <img src="//picsum.photos/350?random={book.id}" width="100%" alt="background" />
            <CardTitle>{ book.title }</CardTitle>
            <CardSubtitle>
                Autor: { book.user.name }<br/>
                Preço: R$ { book.price }
            </CardSubtitle>
            <CardActions style="display:block">
                <a class="text-decoration-none d-flex" rel="prefetch" href="books/{book.id}">
                    <Button text class="ml-auto" >
                        Detalhes
                        <Icon class="mdi mdi-chevron-right"/>
                    </Button>
                </a>
            </CardActions>
            </Card>
        </div>
    {/each}
</div>
<Footer/>
