<script lang="ts">
  import AttributeList from "$lib/components/AttributeList.svelte";
  import type { letterKey, Dictionary } from "$lib/types.js";
  import { onMount } from "svelte";

  export let gdsnDictionary: Dictionary
  let selectedLetter: string | null;
  let letters: letterKey[] = [];

  onMount(() => {
    createBrowseSections();
  });

  function handleLetterDisplay(e: MouseEvent) {
    const target = e.target as HTMLButtonElement;
    if (!target) {
      return;
    }

    if (selectedLetter === target.value) {
      selectedLetter = null;
    } else if (!selectedLetter || selectedLetter !== target.value) {
      selectedLetter = target.value;
    }
  }

  function createBrowseSections() {
    const usedLetters = Object.keys(gdsnDictionary);
    usedLetters.forEach((letter) => {
      letters.push(letter as letterKey);
    });
    letters = letters;
  }
</script>

{#if letters.length}
  <ul>
    {#each letters as letter, i}
      <li>
        <button
          class="letter-btn"
          value={letter}
          on:click={handleLetterDisplay}
        >
          {#if letter === "ZeroToNine"}
            0-9
          {:else}
            {letter}
          {/if}
        </button>
        <AttributeList
          {letter}
          {gdsnDictionary}
          isOpen={letter === selectedLetter}
          isOdd={(i + 1) % 2 === 0}
        />
      </li>
    {/each}
  </ul>
{/if}

<style>
  button {
    cursor: pointer;
  }

  li::marker {
    font-size: 20px;
  }

  .letter-btn {
    background: none;
    border: none;
    font-size: 20px;
  }

  li:nth-child(even) {
    background-color: #d6e4e3;
  }
</style>
