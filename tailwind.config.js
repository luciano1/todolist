/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#f7fafc",
        600: "#202024",
        900: "#1a202c",
      },
      green: {
        700: "#00875F",
      },
      primary: "#4058a7",
    },
    fontFamily: {
      regularRoboto: "Roboto_400Regular",
      mediumRoboto: "Roboto_500Medium",
      boldRoboto: "Roboto_700Bold",
    },
  },
  plugins: [],
};
