<script lang="ts">
  import Toast from "./Toast.svelte";
  import Dropdown from "$lib/components/Dropdown.svelte";
  import { goto } from "$app/navigation";

  let searchedAttribute: string;
  let isToast: boolean = false;
  let timeoutInt: NodeJS.Timeout;
  let innerWidth: number;
  let isDropdown: boolean = false;

  function handleSearch() {
    if (!searchedAttribute) {
      isToast = true;
      timeoutInt = setTimeout(() => {
        isToast = false;
      }, 4000);
      return;
    }

    goto(`/search/${searchedAttribute.toLocaleLowerCase()}`);
  }

  function handleKeyPress(e: any) {
    if (e.key === "Enter") {
      handleSearch();
    }
  }

  function closeToast() {
    clearTimeout(timeoutInt);
    isToast = false;
  }

  function handleDropdown() {
    isDropdown = !isDropdown;
  }
</script>

<svelte:window bind:innerWidth />

<section class="search-container">
  <input bind:value={searchedAttribute} on:keydown={handleKeyPress} />
  {#if isToast}
    <div class="toast-container">
      <Toast on:dismiss={closeToast} />
    </div>
  {/if}
  <button class="search-btn" type="submit" on:click={handleSearch}
    >Search</button
  >

  {#if innerWidth > 769}
    <a href="/browse">Browse All Attributes</a>
    <a href="/general">General Industry Terms</a>
  {:else}
    <div class="dropdown">
      <button class="dropdown-btn" on:click={handleDropdown}
        >{#if isDropdown}
          Less
        {:else}
          More
        {/if}</button
      >

      {#if isDropdown}
        <Dropdown bind:isDropdown/>
      {/if}
    </div>
  {/if}
</section>

<style>
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .search-btn,
  .dropdown-btn,
  a {
    background-color: #6c6cc7;
    color: white;
    font-weight: 500;
    font-size: 20px;
    padding: 0.5em 1em;
    border: none;
    border-radius: 4px;
  }

  .search-btn:hover,
  a:hover {
    background-color: #b1b1e5;
    color: black;
  }

  input {
    font-size: 20px;
  }

  .search-container {
    display: flex;
    justify-content: center;
    gap: 1em;
    margin: 1em;
    position: relative;
  }

  .toast-container {
    position: absolute;
    top: 4rem;
    left: 0;
    right: 25rem;
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 1000;
  }

  .dropdown {
    position: relative;
    flex-grow: 1; /* Allow the "More" button to stretch */
    display: flex;
  }

  @media (max-width: 450px) {
    .search-container {
      flex-direction: column;
    }

    .dropdown-btn {
      width: 100%;
    }
  }
</style>
