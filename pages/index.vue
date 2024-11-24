<script setup lang="ts">
  const content = ref('My amazing site')
  const title = ref('Home')

  useHead({
    title: title,
    meta : [
      {name: 'description', content: content}
    ],
  })

  import AppHeader from "~/components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <h1 class="text-2xl font-bold underline">Welcome to the homepage</h1>
</template>

<style scoped>

</style>