<script lang="ts">
  import { generalTerms } from "$lib/definitions/generalTerms.js";
  import TermCard from "$lib/components/TermCard.svelte";
</script>

<ul>
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

<style></style>
