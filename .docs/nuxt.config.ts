export default defineNuxtConfig({
  app: {
    baseUrl: process.env.NODE_ENV === "production" ? "/proto-doc/" : "",
  },

  extends: "@nuxt-themes/docus",
});
