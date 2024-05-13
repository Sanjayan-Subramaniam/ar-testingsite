// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // routeRules: {
  //   "/": { redirect: "/home" },
  // },

  modules: [
    "@pinia/nuxt",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@nuxtjs/google-fonts",
    "@nuxtjs/partytown",
  ],
  partytown: {
    forward: ["dataLayer.push"],
  },
  googleFonts: {
    families: {
      Saira: {
        wght: [300, 400, 500, 600, 700, 800, 900],
        ital: [300, 400, 500, 600, 700, 800, 900],
      },
    },
  },
  components: {
    global: true,
    dirs: ["~/components"],
  },
  extends: ["nuxt-seo-kit"],
  ssr: true,
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://augustrobotics.com",
      siteName:
        "August Robotics - the world's leading autonomous commercial robotics company",
      siteDescription:
        "We automate dirty, dangerous and dull tasks all over the world. ",
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
      trailingSlash: true,
    },
  },
  linkChecker: {
    failOn404: true,
  },
});
