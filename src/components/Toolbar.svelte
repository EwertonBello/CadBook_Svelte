<script lang="ts">
import {
      AppBar,
      Button,
      Icon,
      Overlay,
    } from 'svelte-materialify';

    import NavigationDrawer from './NavigationDrawer.svelte';
    import { active } from './NavDrawerStore';

    export let toggleTheme;
  
    function toggleNavigation() {
      active.update((active)=> active = !active)
    }
</script>
  

<AppBar>
  <div slot="icon">
    <Button icon fab depressed on:click={toggleNavigation}>
      <Icon class="mdi mdi-menu"/>
    </Button>
  </div>
  <span slot="title"> CadBook </span>
  <div style="flex-grow:1" />
  <Button icon depressed on:click="{toggleTheme}">
    <Icon class="mdi mdi-brightness-4"/>
  </Button>
</AppBar>
<NavigationDrawer/>


