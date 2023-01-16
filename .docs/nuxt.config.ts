console.log("NODE_ENV", process.env.NODE_ENV);

export default defineNuxtConfig({
  app: {
    baseUrl: process.env.NODE_ENV === "production" ? "/proto-doc/" : "",
  },

  extends: "@nuxt-themes/docus",
});
