/** @type {import('tailwindcss').Config} */
// const colors = require("./src/constants/colors");
import { xcolors } from "./src/constants/colors";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: xcolors,
    },
  },
  plugins: [],
};
