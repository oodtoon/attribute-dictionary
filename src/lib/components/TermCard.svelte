<script lang="ts">
  export let name: string;
  export let acronym: string | null = null;
  export let definition: string;
</script>

<div class="general-definition-container">
  <span class="title">
    {name}
    {#if acronym}
        ({acronym})
    {/if}
  </span>
  <span>-</span>
  <span class="definition">{definition}</span>
</div>

<style>
  .general-definition-container {
    display: flex;
    align-items: flex-start;
    margin: 1em;
    gap:  1em;
  }

  .title {
    font-size: 18px;
    font-weight: 500;
  }

</style>
