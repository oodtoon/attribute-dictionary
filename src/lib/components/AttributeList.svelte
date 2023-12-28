<script lang="ts">
  import type { letterKey, Dictionary } from "$lib/types.js";
  import { slide } from "svelte/transition";
  export let letter: letterKey;
  export let isOpen: boolean = false;
  export let isOdd: boolean;
  export let gdsnDictionary: Dictionary

  $: attributes = gdsnDictionary[letter as keyof typeof gdsnDictionary];
</script>

{#if attributes}
  {#if isOpen}
    <ul class="ul-container" transition:slide>
      <div class="first">
        {#each attributes as attribute, i}
          {#if i < attributes.length / 3}
            <li>
              <a
                class="name-link"
                class:isOdd
                href={`definition/${attribute.name.toLocaleLowerCase()}`}
                >{attribute.name}</a
              >
            </li>
          {/if}
        {/each}
      </div>
      <div class="second">
        {#each attributes as attribute, i}
          {#if i >= attributes.length / 3 && i < attributes.length / 1.5}
            <li>
              <a
                class:isOdd
                class="name-link"
                href={`definition/${attribute.name.toLocaleLowerCase()}`}
                >{attribute.name}</a
              >
            </li>
          {/if}
        {/each}
      </div>
      <div class="third">
        {#each attributes as attribute, i}
          {#if i >= attributes.length / 1.5}
            <li>
              <a
                class:isOdd
                class="name-link"
                href={`definition/${attribute.name.toLocaleLowerCase()}`}
                >{attribute.name}</a
              >
            </li>
          {/if}
        {/each}
      </div>
    </ul>
  {/if}
{/if}

<style>
  .ul-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: auto;
    grid-template-areas: "first second third";
    padding: 0 0 1em 3em;
  }

  .first {
    grid-area: first;
  }

  .second {
    grid-area: second;
  }

  .third {
    grid-area: third;
  }

  .name-link {
    background: none;
    border: none;
    color: var(--primary-color);
  }

  .name-link:visited {
    color: var(--tertiary-color);
  }

  .isOdd {
    color: var(--tertiary-color);
  }

  .isOdd:visited {
    color: var(--primary-color);
  }
</style>
