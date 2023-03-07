<template>
  <div class="container mx-auto">
    <div
      class="flex flex-col items-center gap-y-6 lg:gap-y-16 lg:w-[800px] mx-auto"
    >
      <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">
        {{ titleCopy }}
      </h2>
      <p
        class="text-center text-mobileCopy lg:text-desktopCopy text-arblack leading-10"
      >
        {{ paraCopy }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  titleCopy: String,
  paraCopy: String,
});
</script>

<style scoped></style>
