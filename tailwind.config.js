/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montser: "Montserrat",
        neosansRegular: "neosans-regular",
        neosansMedium: "neosans-medium",
        neosansBold: "neosans-bold",
      },
    },
  },

  plugins: [require("tailwindcss-rtl"), require("@tailwindcss/line-clamp")],
};
