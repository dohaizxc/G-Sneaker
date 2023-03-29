/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", "sans-serif"],
      },
      rotate: {
        24: "24deg",
        28: "28deg",
      },
      animation: {
        scale: "scale 0.5s ease-in-out",
        scaleout: "scaleout 0.5s ease-out",
      },
      keyframes: {
        scale: {
          "0%": { scale: "0" },
          "100%": { scale: "1" },
        },
        scaleout: {
          "0%": { scale: "1" },
          "100%": { scale: "0" },
        },
      },
    },
  },
  plugins: [],
};
