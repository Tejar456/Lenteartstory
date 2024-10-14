// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxtjs/supabase", "@nuxtjs/seo"],
  supabase: { redirect: false },

  seo: {
    baseTitle: "Lenteartstory - Jasa Fotografi dan Studio Foto",
    templateTitle: "%name% - %title%",
    description: "Lenteartstory menyediakan jasa fotografi untuk prewedding, wedding, engagement, maternity, wisuda, dan foto grup. Abadikan momen spesial Anda dengan sentuhan profesional.",
    keywords: ["fotografi", "prewedding", "wedding", "engagement", "maternity", "wisuda", "foto grup", "studio foto", "Lenteartstory"],
    canonical: "https://lenteartstory.vercel.app",
    isForcedTrailingSlash: false,
    ogImage: "/assets/logo.png",
  },
});
