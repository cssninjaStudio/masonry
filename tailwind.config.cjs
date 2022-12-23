/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
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

        "semi-white": "#f5f6fa",
        "blue-gray": "#747990",
      },
    },
  },
  plugins: [],
};
