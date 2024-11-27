<script setup lang="ts">

</script>

<template>
  <AppHeader />
  <div class="banner relative">
    <img src="/assets/img/banner-shopify.webp" alt="Banner Image" class="w-full h-100 object-cover">
    <div class="banner-text absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start p-10 space-y-2.5">
      <h1 class="text-white text-4xl">Welkom bij onze winkel</h1>
      <div class="banner-description flex flex-col gap-5">
      <p class="text-white">Ontdek onze nieuwste producten en aanbiedingen.</p>
      <NuxtLink to="/products" class="btn-primary self-start text-white bg-blue-500 py-2 px-4 rounded">
        Bekijk Producten
      </NuxtLink>
    </div>
    </div>
  </div>

<CategorieHome />

</template>

<style scoped>

</style>