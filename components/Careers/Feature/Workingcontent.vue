<template>
  <div class="shadow-md bg-white mx-auto w-[90%] lg:w-full">
    <div class="flex flex-col lg:flex-row-reverse">
      <nuxt-img
        class="h-[120px] object-cover obejct-center lg:h-[320px] lg:w-[50%]"
        :src="imagePath"
      ></nuxt-img>

      <div v-if="state === '1'" class="flex-flex-col px-6 py-6 lg:w-[80%]">
        <h4 class="text-arprimary text-[20px]">Diverse</h4>
        <p class="w-full text-mobileCopy">
          {{ workingCopy }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  imagePath: String,
  workingCopy: String,
});
</script>

<style lang="scss" scoped></style>
