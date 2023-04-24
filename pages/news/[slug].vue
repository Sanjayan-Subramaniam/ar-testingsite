<script setup lang="ts">
import { ChevronRightIcon } from "@heroicons/vue/24/outline";
const MAX_TOP_STORIES = 2;
const MAX_EXHIBITION = 2;

const route = useRoute();
const [{ data: article }, { data: topStories }, { data: exhibition }] =
  await Promise.all([
    useAsyncData(route.path, () => queryContent(route.path).findOne()),
    useAsyncData("top-stories", () =>
      queryContent("/news")
        .find()
        .then((articles) => articles.sort((a, b) => b.created - a.created))
    ),
    useAsyncData("exhibition", () =>
      queryContent("/news")
        .find()
        .then((articles) =>
          articles
            .filter((article) =>
              article.tags.some((tag) => tag.toLowerCase() === "exhibitions")
            )
            .sort((a, b) => b.created - a.created)
        )
    ),
  ]);

useSeoMeta({
  title: () => article.value?.seo.title,
  description: () => article.value?.seo.description,
  // @ts-ignore: it works
  keywords: () => article.value?.seo.keywords.join(","),
});
</script>

<template>
  <!-- <section
    class="md:h-[70vh] bg-gray/90 bg-lionel-background bg-cover bg-center bg-blend-overlay h-[50vh] relative"
  >


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
  </section> -->
  <div
    class="grid grid-cols-[5fr_minmax(300px,1fr)] container mx-auto p-10 gap-5"
  >
    <main v-if="article" class="grid gap-5 self-start">
      <img
        :src="article.image"
        :alt="article.title"
        sizes="sm:100vw md:100vw lg:700px"
        width="700"
        height="400"
        format="webp"
        class="rounded-xl shadow w-full"
      />
      <h1 class="font-bold text-4xl">{{ article.title }}</h1>
      <span class="text-argray text-2xl">{{
        new Date(article.created).toLocaleDateString(undefined, {
          dateStyle: "medium",
        })
      }}</span>
      <div class="nuxt-content">
        <ContentRenderer :value="article" />
      </div>
    </main>
    <aside class="flex flex-col gap-5">
      <div
        class="bg-white p-5 rounded-xl shadow-lg gap-5 flex flex-col"
        v-if="topStories && topStories.length > 0"
      >
        <h3 class="text-xl font-medium text-arprimary">Top Stories</h3>
        <div class="flex flex-col gap-5">
          <article
            v-for="article in topStories.slice(0, MAX_TOP_STORIES)"
            class="flex flex-col gap-3"
          >
            <img
              :src="article.image"
              :alt="article.title"
              class="rounded-2xl w-[300px] shadow lg:w-full"
            />
            <span class="text-argray">{{
              new Date(article.created).toLocaleDateString(undefined, {
                dateStyle: "medium",
              })
            }}</span>
            <p>
              {{ clampString(article.title, 100) }}
            </p>
            <NuxtLink
              :href="article._path + '/'"
              class="text-arprimary flex gap-1 items-center"
            >
              <span> Read Story </span>
              <ChevronRightIcon class="h-4 w-4"></ChevronRightIcon>
            </NuxtLink>
          </article>
          <NuxtLink
            to="/news/"
            class="self-start px-4 py-2 rounded-full bg-gradient-to-b from-[#7FB655] to-[#679941] text-white"
          >
            View All
          </NuxtLink>
        </div>
      </div>
      <div
        class="bg-white p-5 rounded-xl shadow-lg gap-5 flex flex-col"
        v-if="exhibition && exhibition.length > 0"
      >
        <h3 class="text-xl font-medium text-arprimary">Exhibition</h3>
        <div class="flex flex-col gap-5">
          <article
            v-for="article in exhibition.slice(0, MAX_EXHIBITION)"
            class="flex flex-col gap-3"
          >
            <img
              :src="article.image"
              :alt="article.title"
              sizes="sm:100vw md:100vw lg:700px"
              width="700"
              height="400"
              format="webp"
              class="rounded-2xl shadow w-full"
            />
            <span class="text-argray">{{
              new Date(article.created).toLocaleDateString(undefined, {
                dateStyle: "medium",
              })
            }}</span>
            <p>
              {{ clampString(article.description, 100) }}
            </p>
            <NuxtLink
              :href="article._path + '/'"
              class="text-arprimary flex gap-1 items-center"
            >
              <span> Read Story </span>
              <ChevronRightIcon class="h-4 w-4"></ChevronRightIcon>
            </NuxtLink>
          </article>
          <NuxtLink
            to="/news/"
            class="self-start px-4 py-2 rounded-full bg-gradient-to-b from-[#7FB655] to-[#679941] text-white"
          >
            View All
          </NuxtLink>
        </div>
      </div>
    </aside>
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
