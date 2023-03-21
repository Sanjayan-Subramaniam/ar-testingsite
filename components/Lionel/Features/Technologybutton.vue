<template>
  <div
    class="flex flex-col lg:gap-x-3 gap-y-3 w-[120px] lg:w-[160px] h-[160px] lg:h-[160px] cursor-pointer"
  >
    <div class="flex flex-col basis-1/2 justify-end">
      <h4
        class="text-mobileCopy lg:text-[20px] text-center transition-all duration-1000 ease-in-out"
        :class="titleColor"
      >
        {{ title }}
      </h4>
    </div>

    <div
      class="flex flex-col shadow-lg rounded-md p-2 h-20 w-20 lg:h-20 lg:w-20 mx-auto justify-center items-center transition-all duration-1000 ease-in-out basis-1/2"
      :class="buttonStyles"
    >
      <img :src="iconPath" alt="" srcset="" :class="iconWidths" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  titleColor: String,
  iconWidths: String,
  iconPath: String,
  buttonStyles: String,
});
</script>

<style lang="scss" scoped></style>
