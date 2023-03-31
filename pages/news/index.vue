<script setup lang="ts">
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/24/outline";
const route = useRoute();
const pageNo = computed(() => +(route.params.pageNo ?? 1));
const itemsPerPage = 5;
const selectedTag = ref<string>("All");
const store = useStore();

const { data } = await useAsyncData(
  "news-" + pageNo,
  async () => {
    const content = await queryContent("/news").find();
    return {
      articles: content
        .filter(
          (article) =>
            selectedTag.value.toLowerCase() === "All".toLowerCase() ||
            article.tags.some(
              (tag: string) =>
                tag.toLowerCase() === selectedTag.value.toLowerCase()
            )
        )
        .slice((pageNo.value - 1) * itemsPerPage, pageNo.value * itemsPerPage),
      pages: Math.ceil(content.length / itemsPerPage),
    };
  },
  {
    watch: [selectedTag, pageNo],
  }
);

const articles = computed(() => data.value?.articles ?? []);
</script>

<template>
  <div v-if="data">
    <main>
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
      <section class="py-10 max-w-6xl mx-auto">
        <h3
          class="mx-auto mb-24 text-center text-3xl text-ardarkgreen md:text-5xl px-10"
        >
          News Archive
        </h3>
        <ul class="flex gap-3 row-start-5 row-end-6 p-10">
          <li v-for="tag in store.newsTags" class="contents">
            <button
              :class="[
                'font-medium text-sm border flex-1 px-5 rounded-full',
                tag.classes,
                { [tag.activeClasses]: tag.label === selectedTag },
              ]"
              @click="selectedTag = tag.label"
            >
              {{ tag.label }}
            </button>
          </li>
        </ul>
        <div class="flex flex-col gap-5">
          <article
            v-for="article in articles"
            class="bg-white shadow-lg px-5 py-10 md:grid grid-cols-[1fr_4fr] grid-rows-[repeat(4,auto)] gap-5 rounded-xl flex flex-col"
          >
            <NuxtImg
              :src="article.image"
              class="col-span-1 row-start-1 row-end-4 rounded-xl shadow"
            />
            <ul class="flex gap-3 row-start-4 row-end-5 col-span-1 self-center">
              <li
                v-for="tag in article.tags"
                class="font-medium text-sm border px-5 rounded-full text-ardarkgreen border-ardarkgreen"
              >
                {{ tag }}
              </li>
            </ul>
            <span class="text-ardarkgreen text-2xl col-start-2 col-span-1">{{
              new Date(article.created).toLocaleDateString(undefined, {
                dateStyle: "medium",
              })
            }}</span>
            <h4 class="font-bold text-gray-400 text-3xl col-start-2 col-span-1">
              {{ article.title }}
            </h4>
            <p class="col-start-2 col-span-1">
              {{ article.description }}
            </p>
            <NuxtLink
              :href="article._path + '/'"
              class="bg-black text-white rounded-lg px-8 py-2 justify-self-start self-start shadow"
              >Read Story</NuxtLink
            >
          </article>
        </div>
      </section>
    </main>
    <nav class="bg-gray-200 shadow mx-auto max-w-max flex gap-px">
      <NuxtLink
        :href="pageNo === 1 ? undefined : `/news/page/${pageNo - 1}/`"
        :class="[
          'bg-white grid place-content-center p-3',
          { 'text-argray pointer-events-none': pageNo === 1 },
        ]"
        aria-label="previous"
      >
        <ChevronLeftIcon class="h-5 w-5" />
      </NuxtLink>
      <NuxtLink
        v-for="page in data.pages"
        :href="`/news/page/${page}/`"
        :class="[
          'grid place-content-center p-3',
          {
            'text-arprimary bg-arsecondary pointer-events-none':
              pageNo === page,
          },
          { 'bg-white': pageNo !== page },
        ]"
        aria-label="previous"
      >
        <span class="h-5 w-5 grid place-content-center">
          {{ page }}
        </span>
      </NuxtLink>
      <NuxtLink
        :href="pageNo === data.pages ? undefined : `/news/page/${pageNo + 1}/`"
        :class="[
          'bg-white grid place-content-center p-3',
          { 'text-argray pointer-events-none': pageNo === data.pages },
        ]"
        aria-label="previous"
      >
        <ChevronRightIcon class="h-5 w-5" />
      </NuxtLink>
    </nav>
  </div>
</template>
