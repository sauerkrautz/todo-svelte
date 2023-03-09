<script lang="ts">
  import TweetForm from "./components/TweetForm.svelte";
  import Tweets from "./components/Tweets.svelte";
  import { tweetStore } from "./stores/Store";
  import { onMount } from "svelte";
  import "./app.css";

  interface tweet {
    text: string;
    date: Date | string;
  }

  let tweet = {
    text: "",
    date: "",
  };

  // $: console.log(tweets);
  // tweetStore.update(tweets);
</script>

<main
  class="overflow-x-hidden w-[100vw] h-[100vh] bg-[#151515] lg:p-32 scrollbar-thin scrollbar-track-[#252525] scrollbar-thumb-[#353535] "
>
  <TweetForm {tweet} />
  <Tweets />
</main>

<style>
  ::-webkit-scrollbar {
    margin-right: 0.5rem;
  }

  ::-webkit-scrollbar-thumb {
    transition: all 1s;
    border-radius: 1.5rem;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: #454545;
  }
</style>
