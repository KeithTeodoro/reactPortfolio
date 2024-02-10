/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        ibmSerif: ["'IBM Plex Serif'", "serif"],
        ibmSans: ["'IBM Plex Sans'", "sans-serif"],
      },
      colors: {
        dark: "#141313",
      },
    },
  },
  plugins: [],
};
