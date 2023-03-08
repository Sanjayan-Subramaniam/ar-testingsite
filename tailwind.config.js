/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    `/components/**/*.{vue,js,ts}`,
    `/layouts/**/*.vue`,
    `$pages/**/*.vue`,
    `/composables/**/*.{js,ts}`,
    `/plugins/**/*.{js,ts}`,
    `/App.{js,ts,vue}`,
    `/app.{js,ts,vue}`,
    `/Error.{js,ts,vue}`,
    `/error.{js,ts,vue}`,
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "0rem",
        md: "4rem",
      },
    },
    extend: {
      colors: {
        ardarkgreen: "#4a6b2c",
        arprimary: "#679941",
        arsecondary: "#7fb655",
        argray: "#b0bac9",
        ardarkgray: "#9c9a9a)",
        arlightgray: "#d7dce4",
        arblack: "#3a3636",
        arblue: "#4192ec",
        twitterblue: "#1DA1F2",
        facebookblue: "#3b5998",
        linkedinblue: "#0072b1",
      },
      fontSize: {
        desktopCopy: ["1.5rem", { lineHeight: "2rem" }],
        mobileCopy: ["1rem", { lineHeight: "1.5rem" }],
      },

      fontFamily: {
        sans: ["'Saira'", ...defaultTheme.fontFamily.mono],
      },

      backgroundImage: {
        "lionel-background": "url('assets/img/Lionelonsite.JPG')",
        "construction-background":
          "url('assets/img/ConstructionBackground.png')",
        "construction-background-full":
          "url('assets/img/ConstructionBackgroundFull.png')",
        "exhibition-background": "url('assets/img/ExhibitionBackground.png')",
        "exhibition-background-full":
          "url('assets/img/ExhibitionBackgroundFull.png')",
        "disinfection-background":
          "url('assets/img/DisinfectionBackground.png')",
        "disinfection-background-full":
          "url('assets/img/DisinfectionBackgroundFull.png')",
        "lionel-contactsection":
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('assets/img/ConstructionBackground.png')",
      },
    },
  },
  plugins: [],
};
