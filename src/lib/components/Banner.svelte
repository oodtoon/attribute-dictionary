<script lang="ts">
  import logo from "$lib/images/1ws.png";
  import oneLogo from "$lib/images/1.png";

  let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div class="header">
  <a href="/">
    <h1>GDSN Attribute Dictionary</h1>
  </a>
  {#if innerWidth > 420}
    <a href="https://1worldsync.com/" target="_blank"
      ><img src={logo} alt="1WorldSync Logo" /></a
    >
  {:else}
    <a class="one" href="https://1worldsync.com/" target="_blank"
      ><img src={oneLogo} alt="1WorldSync Vertical Logo" /></a
    >
  {/if}
</div>

<style>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #004853;
    color: white;
    font-family: Archivo;
    padding: 2em;
    gap: 1em;
  }

  a {
    text-decoration: none;
    color: white;
  }
</style>
