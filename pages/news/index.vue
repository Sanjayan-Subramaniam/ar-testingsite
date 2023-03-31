<script setup lang="ts">
const articles = [
  {
    date: "18 Nov 2022",
    title: "ExCeL London introduces Lionel the floor marking robots",
    description:
      "UK venue ExCeL London is claiming a robotic first for the UK as it introduces another option for more sustainable events....",
    tags: ["All", "Lionel", "Construction"],
    image: "/Highresimg/lionelonsite.jpg",
  },
];

const selectedTag = ref<string>("All");
const store = useStore();
</script>

<template>
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
            ]"
          >
            {{ tag.label }}
          </button>
        </li>
      </ul>
      <div class="grid grid-cols-[3fr_minmax(200px,1fr)]">
        <article
          v-for="article in articles"
          class="bg-white shadow-lg px-5 py-10 grid grid-cols-[1fr_4fr] grid-rows-[repeat(4,auto)] gap-5 rounded-xl"
        >
          <NuxtImg
            :src="article.image"
            class="col-span-1 row-start-1 row-end-4 rounded-xl shadow"
          />
          <ul class="flex gap-3 row-start-4 row-end-5 col-span-1 self-center">
            <li
              v-for="tag in article.tags"
              class="font-medium text-sm border flex-1 px-5 rounded-full text-ardarkgreen border-ardarkgreen"
            >
              {{ tag }}
            </li>
          </ul>
          <span class="text-ardarkgreen text-2xl col-start-2 col-span-1">{{
            new Date(article.date).toLocaleDateString(undefined, {
              dateStyle: "medium",
            })
          }}</span>
          <h4 class="font-bold text-gray-400 text-3xl col-start-2 col-span-1">
            {{ article.title }}
          </h4>
          <p class="col-start-2 col-span-1">
            {{ article.description }}
          </p>
          <a
            href="#"
            class="bg-black text-white rounded-lg px-8 py-2 justify-self-start shadow"
            >Read Story</a
          >
        </article>
      </div>
    </section>
  </main>
  <aside></aside>
</template>
