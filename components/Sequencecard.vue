<template>
  <div
    class="bg-white shadow-lg w-[240px] xl:w-[360px] h-[520px] lg:h-[560px] xl:h-[640px] rounded-lg relative"
  >
    <div
      class="w-20 h-20 rounded-full absolute top-0 translate-x-[-50%] translate-y-[-50%] flex flex-col justify-center items-center"
      :class="bgColor"
    >
      <h3 class="text-white text-[40px] font-semibold">{{ number }}</h3>
    </div>
    <div
      class="w-[240px] xl:w-[360px] h-[200px] xl:h-[240px] bg-cover bg-center"
      :class="imagePath"
    ></div>

    <div class="flex flex-row mt-6 ml-3 xl:ml-6 gap-x-3 xl:gap-x-6">
      <div
        class="flex flex-col justify-center items-center w-10 h-10 xl:w-14 xl:h-14 p-1 border-2 rounded-lg"
        :class="borderColor"
      >
        <img :src="iconPath" alt="" srcset="" class="w-8" />
      </div>

      <div class="flex flex-col w-[70%]">
        <h4 class="text-[18px] font-medium xl:text-[24px]" :class="titleColor">
          {{ title }}
        </h4>

        <p class="text-mobileCopy xl:text-desktopCopy">
          {{ copy }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  titleColor: String,
  bgColor: String,
  borderColor: String,
  imagePath: String,
  iconPath: String,
  image: String,
  title: String,
  copy: String,
  number: String,
});
</script>

<style lang="scss" scoped></style>
