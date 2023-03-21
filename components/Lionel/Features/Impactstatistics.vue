<template>
  <div class="flex flex-row lg:gap-x-16 ml-12 md:ml-0">
    <div class="flex flex-row gap-x-6">
      <div
        class="h-16 w-16 flex flex-row justify-center items-center shadow-2xl rounded-lg border-2 border-arprimary"
      >
        <img :src="icon" alt="" class="w-8" />
      </div>
      <h5
        class="w-[120px] text-argray text-left text-mobileCopy lg:text-[24px]"
      >
        {{ subTitle1 }}<br />
        {{ subTitle2 }}
      </h5>
    </div>
    <div class="flex flex-col items-start justify-start">
      <p
        class="text-arprimary text-mobileCopy font-bold lg:text-[24px] text-left"
      >
        {{ statistic1 }}<br />
        {{ statistic2 }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  subTitle1: String,
  subTitle2: String,
  statistic1: String,
  statistic2: String,
  icon: String,
});
</script>

<style lang="scss" scoped></style>
