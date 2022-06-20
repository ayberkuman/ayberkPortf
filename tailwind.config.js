module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Arial", "sans-serif"],
      mono: ["Lucida Console", "Courier", "monospace"],
      roboto: ["Roboto", "sans-serif"],
      koulen: ["Koulen", "sans-serif"],
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1600px",
      "3xl": "1920px",
    },
    extend: {
      colors: {
        gray: "#424B54",
        yellow: "#FEC601",
        blue: "#00A6ED",
        green: "#87A878",
        black: "#181818",
        white: "#FFF",
        dark: "#181818",
        "example-color": {
          light: "#ffb288",
          DEFAULT: "#d18d67",
        },
      },
    },
  },
  plugins: [],
};
