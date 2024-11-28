<script setup lang="ts">

</script>

<template>
  <AppHeader />
  <div class="banner relative">
    <img src="/assets/img/banner-shopify.webp" alt="Banner Image" class="w-full lg:h-[40vw] md:h-[60vw] sm:h-[80vw] min-h-96 object-cover">
    <div class="banner-text absolute top-0 left-0 h-full w-full flex flex-col justify-center">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 class="text-white text-4xl">Welkom bij onze winkel</h1>
        <div class="banner-description flex flex-col gap-5 mt-4">
          <p class="text-white">Ontdek onze nieuwste producten en aanbiedingen.</p>
          <NuxtLink to="/products" class="btn-primary text-white bg-blue-500 py-2 px-4 rounded self-start">
            Bekijk Producten
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>




  <CategorieHome />

</template>

<style scoped>

</style>