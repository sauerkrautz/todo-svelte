<script lang="ts">
  export let tweet;
  import { tweetStore } from "../stores/Store";
  import Icon from "@iconify/svelte";
  import { blur, fade, crossfade, slide } from "svelte/transition";
  import { update, getNotes } from "../stores/Store";

  const handleDelete = () => {
    let tweets = $tweetStore;
    const filtered = tweets.filter((e) => e.text !== tweet.text);
    tweetStore.update((t) => (t = filtered));
    update(filtered);
  };
</script>

<div class="flex">
  <div
    class="text-white flex justify-between items-center w-[50rem] px-8 py-4 rounded-lg bg-[#252525]  "
    transition:slide
  >
    <div class="flex flex-col gap-4 px-4">
      <p class="font-semibold">username</p>
      <p class="text-xl">{tweet.text}</p>
      <!-- <p>{today}</p> -->
    </div>
    <div class="flex items-end flex-col gap-8">
      <button class="w-fit">
        <Icon icon="mdi:edit" style="font-size:large" />
      </button>
      <button class="w-fit" on:click={handleDelete}>
        <Icon icon="mdi:trash" style="font-size:large" />
      </button>
      <p class="text-sm text-right text-slate-500">{tweet.date}</p>
    </div>
  </div>
</div>
