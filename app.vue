<template>
  <div lang="id">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "default",
});
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Lenteartstory` : "Lenteartstory - Jasa Fotografi dan Studio Foto di Tasikmalaya untuk Prewedding, Wedding, Engagement";
  },
  meta: [
    {
      name: "description",
      content: "Lenteartstory menyediakan jasa fotografi di Tasikmalaya untuk prewedding, wedding, engagement, maternity, wisuda, foto grup, dan studio foto. Abadikan momen berharga Anda dengan kualitas terbaik dan harga terjangkau.",
    },
    { name: "google-site-verification", content: "pQoJz7d6n7PjBzLYFHHzRTkAOFryDqS2OmiYr6PPyhU" },
    { name: "keywords", content: "fotografi Tasikmalaya, jasa prewedding, wedding photographer, studio foto engagement, fotografer Tasikmalaya, jasa foto Tasik, foto grup Tasikmalaya, maternity photoshoot Tasikmalaya" },
    { property: "og:site_name", content: "Lenteartstory" },
    { property: "og:title", content: "Lenteartstory - Jasa Fotografi dan Studio Foto di Tasikmalaya untuk Prewedding, Wedding, Engagement" },
    { property: "og:description", content: "Lenteartstory adalah penyedia jasa fotografi profesional di Tasikmalaya, khusus untuk prewedding, wedding, engagement, dan studio foto lainnya." },
    { property: "og:type", content: "website" },
    { property: "og:url", content: "https://lenteartstory.vercel.app" },
    { property: "og:image", content: "/assets/logo.webp" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "Lenteartstory - Jasa Fotografi dan Studio Foto di Tasikmalaya" },
    { name: "twitter:description", content: "Lenteartstory menawarkan jasa fotografi untuk prewedding, wedding, dan engagement di Tasikmalaya dengan kualitas tinggi dan harga bersaing." },
    { name: "twitter:image", content: "/assets/logo.webp" },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "id",
  },
});
</script>
