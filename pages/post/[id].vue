<script setup lang="ts">
import AppHeader from "~/components/AppHeader.vue";

const route = useRoute()

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)
</script>

<template>
  <AppHeader />
  <h1 class="text-2xl font-bold underline">Blog id:</h1>
</template>

<style scoped>

</style>