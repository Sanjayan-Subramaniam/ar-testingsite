<template>
  <div class="flex flex-col lg:flex-row-reverse">
    <img
      class="lg:w-[40%] h-[240px] object-cover lg:inset-y-0 lg:right-0"
      :src="imagePath"
    />

    <div class="flex-flex-col px-6 py-6 lg:w-[80%]">
      <h4 class="text-arprimary text-[20px]">{{ title }}</h4>
      <p class="w-full text-mobileCopy">
        {{ workingCopy }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imagePath: String,
  title: String,
  workingCopy: String,
});
</script>

<style lang="scss" scoped></style>
