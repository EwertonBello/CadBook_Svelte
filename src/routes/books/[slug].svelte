<script context="module" lang="ts">
    import { bookservice } from '../../services/book/bookservice';
    import type { IBook } from '../../services/book/shared/ibook';

	export async function preload({ params }) {
        const book_id: number = params.slug;
        let { data }: any = await bookservice.byID(book_id);
        let book: IBook = data;
        return { book };
    }

</script>

<script lang="ts">
    import {
        Card,
        CardTitle,
        CardSubtitle,
        CardActions,
        Button,
        Icon,
        Divider,
    } from 'svelte-materialify';
    
    import { slide } from 'svelte/transition';
    import ImageLoader from 'svelte-lazy-image-loader';
    
    import Toolbar from '../../components/toolbar/Toolbar.svelte';
    import Footer from '../../components/footer/Footer.svelte';
    
    export let book: IBook;    
    
    let active = false;
    function toggleDataAuthor() {
        active = !active;
    }

</script>

<Toolbar title="Details"/>
<div class="d-flex justify-center mt-4 mb-4">
    <Card style="max-width:80%;" shaped raised>
        <ImageLoader
            url="//picsum.photos/350"
            alt="random image"
            imageWidth="100%"
            placeholderWidth="100%"
        />
        <CardTitle>{ book.title }</CardTitle>
        <CardSubtitle>
            Autor: { book.user.name }<br/>
            Páginas: { book.pages }<br/>
            Preço: R$ { book.price }
        </CardSubtitle>
        <CardActions>
            <Button text on:click={toggleDataAuthor}>Dados do Autor</Button>
            <Button text fab size="small" class="ml-auto" on:click={toggleDataAuthor}>
                <Icon class="mdi mdi-chevron-down" rotate={active ? 180 : 0} />
            </Button>
        </CardActions>
        {#if active}
        <Divider />
        <div transition:slide class="pl-4 pr-4 pt-2 pb-2">
            ID: { book.user.id }<br/>
            Nome: { book.user.name }<br/>
            E-mail: { book.user.email }
        </div>
        {/if}
    </Card>
</div>
<Footer/>
