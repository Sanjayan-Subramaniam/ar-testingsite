// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@pinia/nuxt",
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
  ],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  extends: ["nuxt-seo-kit"],
  ssr: true,
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || "https://example.com",
      siteName:
        "August Robotics - the world's leading autonomous commercial robotics company",
      siteDescription:
        "We automate dirty, dangerous and dull tasks all over the world. ",
      language: "en", // prefer more explicit language codes like `en-AU` over `en`
    },
  },
  linkChecker: {
    failOn404: true,
  },
});
