<template>
  <div
    class="bg-white shadow-lg w-[240px] xl:w-[360px] h-[520px] lg:h-[560px] xl:h-[640px] rounded-lg"
  >
    <div
      class="w-[240px] xl:w-[360px] h-[200px] xl:h-[240px] bg-cover bg-center"
      :class="imagePath"
    ></div>
    <!-- <img
      :src="imagePath"
      alt=""
      class="w-[300px] xl:w-[400px] h-[200px] xl:h-[240px] object-cover"
    /> -->
    <div class="flex flex-col p-10 gap-y-6">
      <h4
        class="text-arprimary text-mobileCopy xl:text-desktopCopy w-[160px] xl:w-[280px]"
      >
        {{ title }}
      </h4>
      <p class="text-mobileCopy xl:text-desktopCopy w-[300px]=">
        {{ copy }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imagePath: String,
  image: String,
  title: String,
  copy: String,
  number: String,
});
</script>

<style lang="scss" scoped></style>
