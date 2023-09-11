module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#FFF",
        buttonColor: "#322F2F",
        buttonColor2: "#565454",
        textAreaBg: "#D9D9D9",
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
