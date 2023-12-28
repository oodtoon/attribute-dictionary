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
  <span class="dash"></span>
  <span class="definition">{definition}</span>
</div>

<style>
  .general-definition-container {
    margin: 1em 0;
  }

  .title {
    font-size: 18px;
    font-weight: 500;
  }
  .dash {
    display: inline-block;
    width: 1em; 
    margin: 0 .25em .25em .25em;
    border-bottom: 2px solid black;

  }
</style>
