<script lang="ts">
    import {
        NavigationDrawer,
        List,
        ListItem,
        Icon,
        Overlay
    } from 'svelte-materialify';

    import { active } from './NavDrawerStore';

    function toggleNavigation() {
      active.update((active)=> active = !active)
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
        <a rel="prefetch" href="books" on:click={toggleNavigation}>
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
