<script lang="ts">
  import Banner from "$lib/components/Banner.svelte";
  import SearchBar from "$lib/components/SearchBar.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import "../app.css";
  import "@fontsource/archivo/400.css";
  import "@fontsource/archivo/500.css";
  import "@fontsource/archivo/600.css";
  import "@fontsource/archivo/700.css";
</script>

<div>
  <main>
    <Banner />
    <SearchBar />
    <slot />
    <Footer />
  </main>
</div>

<style>
  main {
    font-family: "Archivo";
  }
</style>
