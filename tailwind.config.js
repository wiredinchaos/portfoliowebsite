/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A0A0A",
        primary: "#FF007F",
        text: "#FFFFFF",
      },
    },
  },
  darkMode: "class",
};
