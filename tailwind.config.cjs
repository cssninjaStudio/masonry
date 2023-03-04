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
          6: "#26264b",
          7: "#283252",
          8: "#333366",
        },
        gray: {
          1: "#e3e3e3",
          2: "#717171",
          3: "#ceced2",
        },
      },
      animation: {
        gelatine: "gelatine 600ms both",
        scaleAnimation: "scaleAnimation 1s ease-out 0s 1 both",
        drawCircleFadeOut:
          "drawCircle 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both ,fadeOut 0.3s linear 0.9s 1 both ",
        drawCheckFadeOut:
          "drawCheck 1s cubic-bezier(0.77, 0, 0.175, 1) 0s 1 both ,fadeOut   0.3s linear 0.9s 1 both",
        fadeIn: "fadeIn 0.3s linear 0.9s both",
      },
      keyframes: {
        fadeOut: {
          "0%": {
            opacity: "1",
          },

          "100%": {
            opacity: "0",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },

          "100%": {
            opacity: "1",
          },
        },
        scaleAnimation: {
          "0%": {
            opacity: "0",
            transform: "scale(1.5)",
          },

          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },

        drawCircle: {
          "0%": {
            "stroke-dashoffset": "151px",
          },

          "100%": {
            "stroke-dashoffset": "0",
          },
        },

        drawCheck: {
          "0%": {
            "stroke-dashoffset": "36px",
          },

          "100%": {
            "stroke-dashoffset": "0",
          },
        },
        spinAround: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        gelatine: {
          "from,to": {
            transform: "scale(1, 1)",
          },
          "25%": {
            transform: "scale(0.9, 1.1)",
          },
          "50%": {
            transform: "scale(1.1, 0.9)",
          },
          "75%": {
            transform: "scale(0.95, 1.05)",
          },
        },
      },
    },
  },
  plugins: [],
};
