<script lang="ts">
  import { onMount } from 'svelte';
  import { AppBar, Button, Icon } from "svelte-materialify";

  import NavigationDrawer from "../navigationdrawer/NavigationDrawer.svelte";
  import { active } from "../navigationdrawer/NavigationDrawerStore";
  import { theme } from "../../theme/themeStore";

  export let title: string;

  function toggleNavigation() {
    active.update((active) => (active = !active));
  }

  function toggleTheme() {
    theme.update(()=>{
      let new_theme: string = "light";
      let old_theme: string = window.localStorage.getItem('theme');
      if (old_theme === "light") {
        new_theme = "dark";
      }
      window.localStorage.setItem('theme', new_theme);
      return new_theme;
    })
  }

  onMount(() => {
    theme.update(()=>{
      let theme: string = window.localStorage.getItem('theme');
      if (theme) {
        return theme;
      }
      let default_theme: string = "light";
      window.localStorage.setItem('theme', default_theme);
      return default_theme;
    })
  });
</script>

<AppBar>
  <div slot="icon">
    <Button icon fab depressed on:click={toggleNavigation}>
      <Icon class="mdi mdi-menu" />
    </Button>
  </div>
  <span slot="title"> {title} </span>
  <div style="flex-grow:1" />
  <Button icon depressed on:click={toggleTheme}>
    <Icon class="mdi mdi-brightness-4" />
  </Button>
</AppBar>
<NavigationDrawer />
