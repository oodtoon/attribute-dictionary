<script lang="ts">
  import { onMount } from "svelte";
  import AdditionalServices from "$lib/components/AdditionalServices.svelte";
  import logo from "$lib/images/1wsColor.png";
  import vertLogo from "$lib/images/1wsVert.png";
  export let attributeName: string;
  export let definition: string;

  export let xmlName: string | null = null;
  export let set: string[] = [];
  export let acronym: string | null = null;

  let innerWidth: number;

  let xmlNames: string[] = [];

  onMount(() => {
    parseXMLName();
  });

  function parseXMLName() {
    if (xmlName) {
      xmlNames = xmlName.split("/");
    }
  }
</script>

<svelte:window bind:innerWidth />

<section class="definition-section-container">
  <h1 class="title-container">
    {#if innerWidth > 420}
      <img src={logo} alt="1WorldSync Logo" />
    {/if}

    {attributeName} Definition
  </h1>

  <div class="content-container">
    <div class="definition-container">
      <div class="name-container">
        <h2 class="definition-title">
          {attributeName}
          {#if acronym}
            {acronym}
          {/if}
        </h2>

        <img class="vert-logo" src={vertLogo} alt="1WorldSync Logo" />
      </div>
      <h4>Definition:</h4>
      <p>{definition}</p>

      {#if xmlName && set.length}
        <h4>
          XML {#if xmlNames.length === 1}
            Name
          {:else}
            Names
          {/if}:
        </h4>
        <ul>
          {#each xmlNames as xml}
            <li>{xml}</li>
          {/each}
        </ul>

        <h4>
          GDSN Attribute Set{#if set?.length > 1}
            s
          {/if}:
        </h4>

        <ul>
          {#each set as s}
            <li>{s}</li>
          {/each}
        </ul>
      {/if}
    </div>
    <div class="services">
      <AdditionalServices slug={attributeName} isImgDisplayed />
    </div>
  </div>
</section>

<style>
  h4 {
    margin: 0;
  }

  .definition-section-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .content-container {
    display: flex;
    gap: 2em;
  }

  .definition-container {
    border-radius: 8px;
    width: 40vw;
    margin: auto;
    padding: 1em;
    box-shadow: var(--primary-shadow);
  }

  .definition-title {
    text-decoration-line: underline;
  }

  .title-container {
    display: flex;
    align-items: center;
    gap: 1em;
    text-decoration: underline;
  }

  .name-container {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  .vert-logo {
    max-width: 100px;
    max-height: 100px;
    width: auto;
    height: auto;
  }

  .services {
    max-width: 300px;
  }

  @media (max-width: 700px) {
    .definition-container {
      width: 70vw;
    }

    .content-container {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .title-container {
      justify-content: center;
    }
  }
</style>
