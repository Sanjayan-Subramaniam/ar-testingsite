// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss", "@nuxt/image-edge"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  target: "static",
});
