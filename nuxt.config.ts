import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // 👇 Global CSS files
   css: [
    '~/assets/css/main.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],

  // 👇 Vite plugins
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
});
