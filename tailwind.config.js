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
        ardarkgray: "#9c9a9a",
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
        "lionel-background": "url('/Lionelheroimage.webp')",
        "aboutus-hero": "url('/hero-aboutus.webp')",
        "careers-hero": "url('/careers-hero.webp')",
        "lionel-homehero": "url('assets/img/Lionelonsite.webp')",
        "construction-background": "url('/industry-construction.webp')",
        "construction-background-full":
          "url('/industry-constructionfull.webp')",
        "exhibition-background": "url('/industry-exhibition.webp')",
        "exhibition-background-full": "url('/industry-exhibitionfull.webp')",
        "disinfection-background": "url('/industry-disinfection.webp')",
        "disinfection-background-full":
          "url('/industry-disinfectionfull.webp')",
        "lionel-contactsection":
          "linear-gradient(to right bottom, rgba('#7ed56f',0.8), rgba('#28b485',0.8)), url('/Contactus.jpg')",
      },
    },
  },
  plugins: [],
};
