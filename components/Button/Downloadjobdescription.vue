<template>
  <div>
    <nuxt-link
      class="text-base text-ardarkgray basis-2/3 hover:text-arprimary cursor-pointer min-w-[200px] max-w-[320px] h-full bg-white flex flew-row items-center rounded-lg py-3 gap-x-3 my-auto border-ardarkgray border-2 justify-center hover:border-arprimary"
      :to="to"
      :href="href"
    >
      Download Job Description

      <img src="/icons/download.svg" class="w-8" />
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  to: {
    type: String,
    default: null,
  },
  href: {
    type: String,
    default: null,
  },
});
</script>

<style lang="scss" scoped></style>
