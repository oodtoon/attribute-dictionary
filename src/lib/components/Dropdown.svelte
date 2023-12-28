<script lang="ts">
  import { onMount } from "svelte";

  export let isDropdown: boolean;

  onMount(() => {
    console.log("dropdown");
  });

  function handleDropdown() {
    isDropdown = !isDropdown;
  }

  function handleDocClick(event: MouseEvent) {
    if (isDropdown) {
      const target = event.target as HTMLElement;
      const dropdown = document.querySelector(".dropdown");
      if (
        !dropdown?.contains(target) &&
        !target.classList.contains("dropdown-container")
      )
        isDropdown = false;
    }
  }
</script>

<svelte:document on:click={handleDocClick} />

<div class="dropdown-container">
  <a href="/browse" on:click={handleDropdown}>Browse All Attributes</a>
  <a href="/general" on:click={handleDropdown}>General Industry Terms</a>
</div>

<style>
  .dropdown-container {
    position: absolute;
    display: flex;
    flex-direction: column;
    background-color: var(--tertiary-color);
    justify-content: space-evenly;
    top: 3em;
    right: 0;
    box-shadow: var(--primary-shadow);
  }

  a {
    text-wrap: nowrap;
    color: white;
    text-decoration: none;
    padding: 0.5em;
  }

  a:hover {
    cursor: pointer;
    background-color: var(--fourth-color);
    color: black;
  }

  a:nth-child(odd) {
    border-bottom: 2px solid white;
  }
</style>
