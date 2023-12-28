<script lang="ts">
  import type { attributeDefinition } from "$lib/types.js";
  import { onMount } from "svelte";
  import { generalTerms } from "$lib/definitions/generalTerms.js";
  import logo from "$lib/images/1wsColor.png";
  import AdditionalServices from "$lib/components/AdditionalServices.svelte";
  import AltServices from "$lib/components/AltServices.svelte";

  export let data;

  let isMatches = false;
  let innerWidth: number;

  let foundAttributes: attributeDefinition[] = [];
  let foundTerms: any[] = [];

  onMount(() => {
    displayMatches();
  });

  function displayMatches() {
    const matches = getAttributeMatches();
    const generalMatches = getTermMatches();
    updateSearchResults(matches, generalMatches);
  }

  function getAttributeMatches() {
    return data.gdsnDictionary[
      data.letter as keyof typeof data.gdsnDictionary
    ].filter((att) => {
      return att.name.toLocaleLowerCase().includes(data.slug);
    }) as attributeDefinition[];
  }

  function getTermMatches() {
    return generalTerms.filter((term) => {
      return term.name.toLocaleLowerCase().includes(data.slug);
    });
  }

  function updateSearchResults(
    attributes: attributeDefinition[],
    terms: any[]
  ) {
    if (!attributes.length && !terms.length) {
      isMatches = false;
    } else {
      isMatches = true;

      if (attributes.length) {
        foundAttributes = [...attributes];
      } else {
        foundAttributes = [];
      }

      if (terms.length) {
        foundTerms = [...terms];
      } else {
        foundTerms = [];
      }
    }
  }

  $: if (data.slug) {
    displayMatches();
  }
</script>

<svelte:window bind:innerWidth />

<h2 class="search-title">
  <img class="logo" src={logo} alt="1WorldSync Logo" />
  Attribute Search Results:
</h2>
<div class="search-container">
  {#if isMatches}
    {#if innerWidth < 550}
      <div class="search-results alt-services">
        <AltServices slug={data.slug} isImgDisplayed />
      </div>
    {/if}

    <div class="search-results">
      <h3>Attributes:</h3>
      {#if foundAttributes.length}
        <ul>
          {#each foundAttributes as attribute}
            <li class="list-item">
              <a href={`/definition/${attribute.name.toLocaleLowerCase()}`}
                >{attribute.name}</a
              >
            </li>
          {/each}
        </ul>
      {:else}
        No Attributes Found
      {/if}
    </div>

    <div class="search-results">
      {#if innerWidth >= 550}
        <div class="search-results">
          <AltServices slug={data.slug} isImgDisplayed />
        </div>
      {/if}

      <h3>General Terms:</h3>
      {#if foundTerms.length}
        <ul>
          {#each foundTerms as term}
            <li>
              <a href={`/definition/${term.name.toLocaleLowerCase()}`}
                >{term.name}</a
              >
            </li>
          {/each}
        </ul>
      {:else}
        <div>No General Terms Found</div>
      {/if}
    </div>
  {:else}
    <div class="search-results none">
      <div class="no-results-container">
        <div class="no-results">
          No search results for: <b class="bold">"{data.slug}"</b>
        </div>
        <div class="no-results">
          Check spelling or attribute name and search again.
        </div>
      </div>
      <div class="services">
        <AdditionalServices slug={data.slug} isImgDisplayed />
      </div>
    </div>
  {/if}
</div>

<style>
  .search-container {
    display: flex;
    justify-content: center;
    gap: 5em;
    margin: 1em;
  }

  .search-results {
    display: flex;
    flex-direction: column;
  }

  .none {
    gap: 2em;
    margin: 1em;
  }

  .search-title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    margin-top: 2em;
  }

  .no-results-container {
    align-self: center;
  }

  .no-results {
    margin: 0.25em;
  }

  .services {
    margin-top: 1em;
  }

  .alt-services {
    margin: 1em;
  }

  .logo {
    max-width: 150px;
    max-height: 150px;
    width: auto;
    height: auto;
  }

  li {
    padding: 0.25em;
  }

  li:nth-child(odd) {
    background-color: var(--secondary-color);
  }

  .bold {
    background-color: var(--secondary-color);
    padding: 0.25em;
    border-radius: 4px;
  }

  @media (max-width: 900px) {
    .search-container {
      gap: 1em;
    }
  }

  /* @media (max-width: 769px) {
    .none {
      max-width: 200px;
    }
  } */

  @media (max-width: 550px) {
    .search-container {
      flex-direction: column;
    }
  }

  @media (max-width: 370px) {
    .search-title {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
