<template>
  <component
    class="min-w-[200px] max-w-[320px] h-[48px] bg-white flex flew-row items-center rounded-lg py-1 my-auto border-ardarkgray border-2 justify-center hover:border-arprimary"
    :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
    :to="to"
    :href="href"
  >
    <p class="text-base text-ardarkgray basis-2/3 hover:text-arprimary">
      Download Job Description
    </p>
    <nuxt-picture src="/icons/download.svg" class="w-8"></nuxt-picture>
  </component>
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
