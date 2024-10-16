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
        return titleChunk ? `${titleChunk} - Lenteartstory` : 'Lenteartstory - Jasa Fotografi Dan Studio Foto Tasikmalaya'
    },
    meta: [
        { name: 'description', content: 'Lenteartstory menyediakan jasa fotografi untuk engagement, prewedding, wedding, maternity, wisuda, foto grup, dan studio foto. Abadikan momen berharga Anda dengan kualitas terbaik.' },
        { name: "google-site-verification", content: "pQoJz7d6n7PjBzLYFHHzRTkAOFryDqS2OmiYr6PPyhU" }
    ],
    link: [
        { rel: 'icon', href: 'favicon.ico' }
    ],
    htmlAttrs: {
        lang: 'id'
    }
})
</script>