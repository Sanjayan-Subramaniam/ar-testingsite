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
  <section
    class="md:h-[70vh] bg-gray/90 bg-lionel-background bg-cover bg-center bg-blend-overlay h-[50vh] relative"
  >
    <!-- Hero content title and button -->

    <div
      class="container h-full grid grid-cols-12 lg:items-start mx-auto pt-[5%] lg:pt-[5%]"
    >
      <div
        class="col-span-10 lg:col-span-11 col-start-2 md:col-start-1 flex flex-col gap-y-6"
      >
        <h1
          class="text-xl text-white md:text-4xl lg:text-5xl lg:leading-normal"
        >
          Get all the latest updates
        </h1>

        <ButtonPrimary button-copy="Speak to us"></ButtonPrimary>
      </div>
    </div>
    <Mainbuttonsarrow></Mainbuttonsarrow>
  </section>
  <div class="grid grid-cols-[5fr_minmax(200px,1fr)] container mx-auto p-10">
    <main v-if="data" class="grid gap-5">
      <NuxtImg
        :src="data.image"
        :alt="data.title"
        sizes="sm:100vw md:100vw lg:700px"
        width="700"
        height="400"
        format="webp"
        class="rounded-xl shadow w-full"
      />
      <h1 class="font-bold text-4xl">{{ data.title }}</h1>
      <span class="text-argray text-2xl">{{
        new Date(data.created).toLocaleDateString(undefined, {
          dateStyle: "medium",
        })
      }}</span>
      <div class="nuxt-content">
        <ContentRenderer :value="data" />
      </div>
    </main>
    <aside />
  </div>
</template>

<style>
.nuxt-content h2 {
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-block-start: 2rem;
  margin-block-end: 0.75rem;
}
</style>
