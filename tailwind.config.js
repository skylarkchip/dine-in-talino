module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    letterSpacing: {
      customWidest: "0.4em",
    },
    extend: {
      colors: {
        black: "hsla(0, 0%, 7%, 1)",
        lightGold: "hsla(40, 84%, 55%, 0.3)",
        mediumLightGold: "hsla(40, 84%, 55%, 0.8)",
        regularGold: "hsla(40, 84%, 55%, 1)",
        white: "hsla(0, 0%, 100%, 1)",
        bglightBlack: "hsla(0, 0%, 15%, 1)",
        bgMediumBlack: "hsla(0, 0%, 13%, 1)",
        bgBlack: "hsla(0, 0%, 7%, 1)",
        bgBlackSideDrawer: "hsla(0, 0%, 7%, 0.4)",
      },
      fontFamily: {
        cinzel: ["CINZEL", "sans-serif"],
        raleway: ["RALEWAY", "serif"],
      },
      backgroundImage: {
        "bg-mobile":
          "linear-gradient(180deg, rgba(33, 33, 33, 0.38) 0%, rgba(33, 33, 33, 0.02) 34.49%, #212121 100%), url('../img/hero-mobile.jpg')",
        "bg-desktop":
          "linear-gradient(180deg,rgba(33, 33, 33, 0.44) 0%,rgba(33, 33, 33, 0) 51.04%,rgba(33, 33, 33, 0.62) 100%), url('../img/hero.jpg')",
      },
      keyframes: {
        slideIn: {
          "0%, 50%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(12rem)" },
        },
      },
      animation: {
        slideIn: "slideIn 1 ease-in",
      },
    },
  },
  plugins: [],
};
