/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.svelte", "./src/components/*.svelte", "./index.html"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar")],
};
