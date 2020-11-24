<script lang="ts">
  import { AppBar, Button, Icon } from "svelte-materialify";

  import NavigationDrawer from "../navigationdrawer/NavigationDrawer.svelte";
  import { active } from "../navigationdrawer/NavigationDrawerStore";
  import { theme } from "../../theme/themeStore";

  // export let toggleTheme;
  export let title: string;

  function toggleNavigation() {
    active.update((active) => (active = !active));
  }

  function toggleTheme() {
    theme.update((theme)=>{      
      if (theme === "light") {
        return "dark";
      }
      return "light";
    })
  }
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
