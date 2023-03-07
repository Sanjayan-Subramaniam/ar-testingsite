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
        desktopCopy: ["1.5rem", { lineHeight: "2.375rem" }],
        mobileCopy: ["1rem", { lineHeight: "1.25rem" }],
      },

      fontFamily: {
        sans: ["'Saira'", ...defaultTheme.fontFamily.mono],
      },

      backgroundImage: {
        "lionel-background": "url('assets/img/Lionel on site.JPG')",
        "construction-background":
          "url('assets/img/Construction Background.png')",
        "construction-background-full":
          "url('assets/img/Construction Background Full.png')",
        "exhibition-background": "url('assets/img/Exhibition Background.png')",
        "exhibition-background-full":
          "url('assets/img/Exhibition Background Full.png')",
        "disinfection-background":
          "url('assets/img/Disinfection Background.png')",
        "disinfection-background-full":
          "url('assets/img/Disinfection Background Full.png')",
        "lionel-contactsection":
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('assets/img/Construction Background.png')",
      },
    },
  },
  plugins: [],
};
