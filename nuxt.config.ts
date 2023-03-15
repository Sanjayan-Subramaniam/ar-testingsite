// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@nuxtjs/sitemap",
  ],
  components: {
    global: true,
    dirs: ["~/components"],
  },

  //code for the Google Maps library component

  build: { transpile: ["@fawmi/vue-google-maps"] },
  runtimeConfig: {
    public: { GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY },
  },
});
