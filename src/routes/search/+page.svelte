<script lang="ts">
  import BrowseAttributes from "$lib/components/BrowseAttributes.svelte";

  export let data
</script>

<BrowseAttributes gdsnDictionary={data.gdsnDictionary}/>

<style></style>