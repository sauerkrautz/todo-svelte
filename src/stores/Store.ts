import { writable } from "svelte/store";

export const tweetStore = writable([]);

export const user = writable({ username: "", email: "" });

export const update = (value: any) => {
  localStorage.setItem("tweets", JSON.stringify(value));
};

export const getNotes = () => {
  return JSON.parse(localStorage.tweets);
};
