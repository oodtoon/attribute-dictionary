<script lang="ts">
  import { generalTerms } from "$lib/definitions/generalTerms.js";
  import TermCard from "$lib/components/TermCard.svelte";
  import logo from "$lib/images/1wsColor.png";

  let innerWidth: number;
</script>

<svelte:window bind:innerWidth />

<div class="general-container">
  <div class="title-container">
    {#if innerWidth > 420}
      <img src={logo} alt="1WorldSync Logo" />
    {/if}
    <h1 class="general-title">General Data Pool Terms</h1>
  </div>

  <ul class="ul-container">
    {#each generalTerms as term}
      <li>
        <TermCard
          name={term.name}
          acronym={term.acronym}
          definition={term.definition}
        />
      </li>
    {/each}
  </ul>
</div>

<style>
  .general-container {
    display: flex;
    flex-direction: column;
    margin: 1em;
  }

  .title-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2em;
  }
  .general-title {
    text-decoration: underline;
  }

  li {
    padding: 0.1rem;
  }
  li:nth-child(even) {
    background-color: var(--secondary-color);
  }

  @media (max-width: 420px) {
    .ul-container {
      padding-left: 0.2em;
    }
  }
</style>
