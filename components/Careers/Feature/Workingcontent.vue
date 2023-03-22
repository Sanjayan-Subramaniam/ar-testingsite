<template>
  <div class="flex flex-col lg:flex-row-reverse">
    <img
      class="h-[320px] lg:h-[480px] lg:w-[420px] object-cover lg:inset-y-0 lg:right-0"
      :src="imagePath"
    />

    <div class="flex-flex-col p-6 lg:w-[80%]">
      <h4
        class="text-arprimary text-[20px] lg:text-[32px] mb-3 text-center lg:text-left"
      >
        {{ title }}
      </h4>
      <p
        class="w-full text-mobileCopy lg:text-desktopCopy lg:w-[85%] text-center lg:text-left"
      >
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
