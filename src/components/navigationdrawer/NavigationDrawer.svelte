<script lang="ts">
    import {
        NavigationDrawer,
        List,
        ListItem,
        Icon,
        Overlay
    } from 'svelte-materialify';

    import { active } from './NavigationDrawerStore';
    import { isLoading } from "../toolbar/LoadingStore";

    import { stores } from '@sapper/app';
    const { page } = stores();

    function toggleNavigation() {
        active.update((active) => active = !active);
    }

    function setLoading(value = true) {
        isLoading.update((isLoading) => (isLoading = value));
    }

    function goBooks() {
        toggleNavigation();
        if ($page.path !== "/books")
            setLoading(true);
    }

</script>

<style>
    a {
        text-decoration: none;
    }
</style>

<NavigationDrawer absolute active={$active}>
    <List>
        <a href="/" on:click={toggleNavigation}>
            <ListItem>
                <span slot="prepend">
                    <Icon class="mdi mdi-home" />
                </span>
                Home
            </ListItem>
        </a>
        <a rel="prefetch" href="books" on:click={goBooks}>
            <ListItem>
                <span slot="prepend">
                    <Icon class="mdi mdi-book" />
                </span>
                Books
            </ListItem>
        </a>
    </List>
</NavigationDrawer>
<Overlay index={1} active={$active} on:click={toggleNavigation} absolute />
