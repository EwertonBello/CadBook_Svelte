<script context="module" lang="ts">
	export async function preload({ params }) {
        const slug: string = params.slug;
        return { slug };
    }
</script>

<script lang="ts">
	export let slug: string;
</script>

<h2>Naquele pique {slug}</h2>
