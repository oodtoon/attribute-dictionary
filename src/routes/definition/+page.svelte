<script lang="ts">
  import AdditionalServices from "$lib/components/AdditionalServices.svelte";
</script>

<div class="no-definition-container">
  <div class="content-container">
    <div class="content">
      <h2>1WorldSync Attribute Definition</h2>
      <b> No definition has been selected. </b>
    </div>
    <div class="content">
      Use the search bar to search for the attribute you need defined, or <a href="/browse">browse</a> all attributes.
    </div>
  </div>
  <div class="services">
    <AdditionalServices slug={"definition"} isImgDisplayed />
  </div>
</div>

<style>
  .no-definition-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2em;
    margin: 1em;
  }

  .content-container {
    align-self: center;
  }

  .content {
    margin: 0.25em;
  }

  .services {
    margin-top: 1em;
  }
</style>
