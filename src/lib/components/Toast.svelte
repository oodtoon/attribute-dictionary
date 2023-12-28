<script lang="ts">
  import { fade } from "svelte/transition";
  import { createEventDispatcher } from "svelte";
  import CloseToastIcon from "$lib/components/icons/CloseToastIcon.svelte";
  import WarningIcon from "$lib/components/icons/WarningIcon.svelte";

  const dispatch = createEventDispatcher()
</script>

<div
  class="toast-dialog"
  role="alert"
  transition:fade
>
    <WarningIcon />

  <div class="text">
    Input Empty. Search Again.
  </div>

  <button class="close" on:click={() => dispatch("dismiss")}>
    <CloseToastIcon width="0.8em" />
  </button>
</div>

<style>
  .toast-dialog {
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 0.2rem;
    display: flex;
    align-items: center;
    margin: 0 auto 0.5rem auto;
    background: orange;
  }

  .text {
    margin: 0 2em;
  }
  button {
    color: white;
    background: transparent;
    border: 0 none;
    padding: 0;
    margin: 0 0 0 auto;
    line-height: 1;
    font-size: 1rem;
    cursor: pointer;
  }
</style>