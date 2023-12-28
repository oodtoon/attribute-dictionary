<script lang="ts">
  import Definition from "$lib/components/Definition.svelte";
  import type { attributeDefinition } from "$lib/types.js";
  import { onMount } from "svelte";
  import { generalTerms } from "$lib/definitions/generalTerms.js";

  export let data;
  let selectedAttribute: attributeDefinition;

  onMount(() => {
    getAttribute();
    if (selectedAttribute) {
      setRecentHistory();
    }
  });

  function getAttribute() {
    let attribute = generalTerms.find(
      (term) => term.name.toLocaleLowerCase() === data.slug
    );

    if (!attribute) {
      attribute = data.gdsnDictionary[
        data.letter as keyof typeof data.gdsnDictionary
      ].find(
        (att) => att.name.toLocaleLowerCase() === data.slug
      ) as attributeDefinition;
    }

    selectedAttribute = attribute!;
  }

  function setRecentHistory() {
    const unparsedHistory = window.localStorage.getItem(
      "GDSN-dictionary-recent-history"
    );
    const history = unparsedHistory ? JSON.parse(unparsedHistory) : [];

    const filteredHistory = history.filter(
      (word: any) => word !== selectedAttribute.name
    );

    if (filteredHistory.length >= 10) {
      filteredHistory.pop();
    }
    filteredHistory.unshift(selectedAttribute.name);
    window.localStorage.setItem(
      "GDSN-dictionary-recent-history",
      JSON.stringify(filteredHistory)
    );
  }

</script>

{#if selectedAttribute}
  <Definition
    attributeName={selectedAttribute.name}
    definition={selectedAttribute.definition}
    xmlName={selectedAttribute.xmlName}
    set={selectedAttribute.set}
    acronym={selectedAttribute.acronym}
  />
{/if}

<style>
</style>
