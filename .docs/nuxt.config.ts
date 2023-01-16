export default defineNuxtConfig({
  app: {
    baseUrl: process.env.NODE_ENV === "production" ? "/ArmoniK.Api/" : "",
  },

  extends: "@nuxt-themes/docus",
});
