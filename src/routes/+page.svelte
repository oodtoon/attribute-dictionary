<script lang="ts">
  import Definition from "$lib/components/Definition.svelte";
  import { onMount } from "svelte";

  export let data;

  onMount(() => {
    getInfoFromLocalStorage();
  });

  let history: string[] = [];

  function getInfoFromLocalStorage() {
    const unparsedHistory = window.localStorage.getItem(
      "GDSN-dictionary-recent-history"
    );
    history = unparsedHistory ? JSON.parse(unparsedHistory) : [];
  }

    
</script>

{#if !history.length}
  <Definition
    attributeName={data.attributeOfDay.name}
    definition={data.attributeOfDay.definition}
    xmlName={data.attributeOfDay.xmlName}
    set={data.attributeOfDay.set}
  />
{:else}
  <section class="history-container">
    <div class="history-content">
      <h2>Recent Attribute History</h2>
      <ul>
        {#each history as pageName}
          <li><a href={`/definition/${pageName.toLocaleLowerCase()}`}>{pageName}</a></li>
        {/each}
      </ul>
    </div>
  </section>
{/if}


<style>
  .history-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  li {
    padding: .25em;
  }

  li:nth-child(odd) {
    background-color: var(--secondary-color);
  }
</style>
