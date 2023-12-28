<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="container">
  <section class="error-section">
    "{$page.error?.message}" is not a valid GDSN attribute. Check your spelling
    or use the <em>browse page</em> to see a list of attributes alphabetically.
  </section>

  <section class="attribute">
    <div>Attribute of the day</div>
  </section>
</div>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
</style>
