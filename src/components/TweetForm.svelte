<script lang="ts">
  import { tweetStore } from "../stores/Store";

  export let tweet;

  import image from "../img/user.jpg";

  $: hasTweet = tweet.text.length > 1;
  $: tweetTooLong = tweet.text.length > 40;
  $: isValid = hasTweet && !tweetTooLong;

  const getTime = (): string => {
    const date = new Date();
    console.log(date.toLocaleString());
    return date.toLocaleString();
  };

  const handleSubmit = () => {
    tweet = { text: tweet.text, date: getTime() };
    tweetStore.update((tweetStore) => (tweetStore = [...tweetStore, tweet]));
    tweet = { text: "", date: "" };
    localStorage.setItem("tweets", JSON.stringify($tweetStore));
  };
</script>

<div class="w-full h-fit flex justify-center items-center ">
  <form
    class="lg:w-1/2 w-full  bg-[#252525] flex flex-col group  items-end p-4 rounded-lg "
    on:submit|preventDefault={handleSubmit}
  >
    <div class="flex">
      <img
        src={image}
        class=" aspect-square h-32 w-32 mr-12 mt-6 rounded-full"
        alt=""
      />

      <input
        accesskey="W"
        bind:value={tweet.text}
        class="w-full px-4 py-2 rounded-lg bg-[#252525] outline-none text-white text-xl "
        placeholder="What's happening?"
      />
      <svg class=" group-focus-within:scale-150 transition-all duration-200">
        <circle
          r={10}
          cx={95}
          cy={75}
          stroke-dasharray={100}
          class={isValid ? "fill-green-500" : "fill-red-500"}
        />
      </svg>
    </div>
    <button
      aria-disabled={!isValid}
      disabled={!isValid}
      type="submit"
      class="bg-blue-500 rounded-lg text-white px-4 py-2 z-20 disabled:bg-slate-400 transition-colors duration-200 "
    >
      Tweet
    </button>
  </form>
</div>
