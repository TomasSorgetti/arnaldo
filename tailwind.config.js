module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#FFF",
      },
      fontFamily: {
        heebo: ["Heebo"],
      },
    },
    screens: {
      semism: "360px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1800px",
    },
  },
  plugins: [],
};
