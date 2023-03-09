<script lang="ts">
  import { tweetStore } from "../stores/Store";
  import { onMount } from "svelte";
  import Tweet from "./Tweet.svelte";

  onMount(() => {
    if (localStorage.tweets) {
      tweetStore.update(
        (k) => (k = JSON.parse(localStorage.getItem("tweets")))
      );
    }
  });
</script>

<div class=" flex flex-col gap-8 pt-8 justify-center items-center">
  <div class="grid grid-rows-1 grid-cols-1  gap-8">
    {#each $tweetStore as tweet}
      <Tweet {tweet} />
    {/each}
  </div>
</div>
