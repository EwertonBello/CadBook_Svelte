<script context="module" lang="ts">
	// export async function preload({ params }) {
    //     const slug: string = params.slug;
    //     return { slug };
    // }

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
    import Toolbar from '../../components/toolbar/Toolbar.svelte';
    import Footer from '../../components/footer/Footer.svelte';

	export let book: IBook;
</script>

<Toolbar title="Details"/>
<h2>Naquele pique {book.title}</h2>
<Footer/>
