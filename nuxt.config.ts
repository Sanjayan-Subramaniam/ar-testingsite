// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/content", "@nuxtjs/tailwindcss"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
});
