/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      tablet: "700px",
      desktop: "1100px",
    },
    fontFamily: {
      sans: ["Space Grotesk", "sans-serif"],
    },
    colors: {
      black: "#000",
      white: "#FFF",
      "dark-purple": "#5C2DD5",
      purple: "#7945FF",
      red: "#FD6687",
      yellow: "#FFCE67",
    },
    fontSize: {
      hl: ["3.5rem", { fontWeight: 700, lineHeight: "4.43rem" }],
      hm: ["1.5rem", { fontWeight: 700, lineHeight: "1.93rem" }],
      hs: ["1.25rem", { fontWeight: 700, lineHeight: "1.625rem" }],
      hxs: ["1rem", { fontWeight: 700, lineHeight: "1.31rem" }],
      body: ["1rem", { fontWeight: 500, lineHeight: "1.31rem" }],
    },
    extend: {
      boxShadow: {
        card: "0px 10px 0px #000000",
        "card-purple": "0px 10px 0px #5C2DD5",
      },
    },
  },
  plugins: [],
};
