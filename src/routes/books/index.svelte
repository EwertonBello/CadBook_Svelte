<script context="module" lang="ts">
    import { bookservice } from '../../services/book/bookservice';
    import type { IBook } from '../../services/book/shared/ibook';
    import { isLoading } from "../../components/toolbar/LoadingStore";

    function setLoading(value = true) {
        isLoading.update((isLoading) => (isLoading = value));
    }

	export async function preload() {
        let { data }: any = await bookservice.all();
        let books: IBook[] = data;
        setLoading(false);
        return { books };
	}
</script>

<script lang="ts">
    import { 
        Button,
        Card,
        CardTitle,
        CardSubtitle,
        CardActions,
        Icon
    } from 'svelte-materialify';
    import ImageLoader from 'svelte-lazy-image-loader';

    import Toolbar from '../../components/toolbar/Toolbar.svelte';
    import Footer from '../../components/footer/Footer.svelte';

    export let books: IBook[];
</script>

<Toolbar title="Books"/>

<div class="container pl-2 pr-2 pt-1">
    {#each books as book}
        <div class="d-flex justify-center mt-4 mb-4">
            <Card style="max-width:80%">
            <ImageLoader
                url="//picsum.photos/350?random={book.id}"
                alt="random image"
                imageWidth="100%"
                placeholderWidth="100%"
            />
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
