<template>
  <div>
    <a
      class="text-base text-ardarkgray basis-2/3 hover:text-arprimary cursor-pointer min-w-[200px] max-w-[320px] h-full bg-white flex flew-row items-center rounded-lg py-3 gap-x-3 my-auto border-ardarkgray border-2 justify-center hover:border-arprimary"
      :href="href"
    >
      Download Job Description

      <img src="/icons/download.svg" class="w-8" />
    </a>
  </div>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    default: null,
  },
});
</script>

<style lang="scss" scoped></style>
