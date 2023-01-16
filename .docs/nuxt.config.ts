export default defineNuxtConfig({
  app: {
    baseURL: process.env.NODE_ENV === "production" ? "/proto-doc/" : "",
  },

  extends: "@nuxt-themes/docus",
});
