module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textColor: "#FFF",
        buttonColor: "#322F2F",
        buttonColor2: "#565454",
        hoverButton: "#322F2F",
        focusButton: "#000000",
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
      500: "500px",
      sm: "640px",
      730: "730px",
      md: "768px",
      900: "900px",
      lg: "1024px",
      1160: "1160px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1680px",
      "4xl": "1920px",
      
      1560: "1560px",
      1820: "1820px",
    },
  },
  plugins: [],
};
