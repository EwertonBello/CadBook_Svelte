<script lang="ts">
    import {
        NavigationDrawer,
        List,
        ListItem,
        Icon,
    } from 'svelte-materialify';
    import { goto } from '@sapper/app';

    export let active;
</script>

<NavigationDrawer absolute {active}>
    <List>
        <ListItem on:click={()=>goto('/')}>
            <span slot="prepend">
                <Icon class="mdi mdi-home" />
            </span>
            Home
        </ListItem>
        <ListItem on:click={()=>goto('books')}>
            <span slot="prepend">
                <Icon class="mdi mdi-book" />
            </span>
            Books
        </ListItem>
    </List>
</NavigationDrawer>
