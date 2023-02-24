/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,

      screens: {
        lg: "960px",
        xl: "1152px",
      },
    },
    fontFamily: {
      TitilliumWeb: ["Titillium Web", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#2e31ff",
        dark: "#283252",
        link: "#485fc7",
        info: "#039be5",
        success: "#06d6a0",
        warning: "#faae42",
        danger: "#e62965",
        yellow: "#ffd770",
        purple: "#8168b1",
        orange: "#ffa880",

        "semi-white": {
          1: "#f5f6fa",
          2: "#f7f7f8",
          3: "#fcfcfc",
        },
        "blue-gray": "#747990",
        "ice-blue": "#a2a5b9",
        "dark-blue": "#0c0c18",
        "dark-purple": {
          1: "#0f0f1f",
          2: "#18182f",
          3: "#1f1f3c",
          4: "#1e1e3b",
          5: "#151829",
        },
        gray: {
          1: "#e3e3e3",
          2: "#717171",
        },
      },
    },
  },
  plugins: [],
};
