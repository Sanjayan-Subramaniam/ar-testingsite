<script setup lang="ts">
const route = useRoute();
const { data } = await useAsyncData(route.path, () =>
  queryContent(route.path).findOne()
);

useSeoMeta({
  title: () => data.value?.seo.title,
  description: () => data.value?.seo.description,
});
</script>

<template>
  <main class="max-w-6xl mx-auto" v-if="data">
    <ContentRenderer :value="data" />
  </main>
</template>
