module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#FFF",
        buttonColor: "#322F2F",
        buttonColor2: "#565454",
        textAreaBg: "#D9D9D9",
        redError: "#FF5353",
        yellowColor: "#FFC600",
        pinkColor: "#FE3F60",
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
      "2xl": "1440px",
      "3xl": "1680px",
      "4xl": "1920px",
    },
  },
  plugins: [],
};
