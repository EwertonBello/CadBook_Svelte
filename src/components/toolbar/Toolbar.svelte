<script lang="ts">
import {
      AppBar,
      Button,
      Icon,
    } from 'svelte-materialify';

    import NavigationDrawer from '../navigationdrawer/NavigationDrawer.svelte';
    import { active } from '../navigationdrawer/NavigationDrawerStore';

    // export let toggleTheme;
    export let title: string;
  
    function toggleNavigation() {
      active.update((active)=> active = !active)
    }
  
    function toggleTheme() {
      console.log("Mudou o tema");
    }
</script>
  

<AppBar>
  <div slot="icon">
    <Button icon fab depressed on:click={toggleNavigation}>
      <Icon class="mdi mdi-menu"/>
    </Button>
  </div>
  <span slot="title"> {title} </span>
  <div style="flex-grow:1" />
  <Button icon depressed on:click="{toggleTheme}">
    <Icon class="mdi mdi-brightness-4"/>
  </Button>
</AppBar>
<NavigationDrawer/>


