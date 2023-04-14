<template>
  <div class="flex flex-row items-start gap-x-8 lg:gap-x-16">
    <div
      class="h-16 w-16 flex flex-row justify-center items-center p-3 shadow-2xl rounded-lg border-2 border-arprimary"
    >
      <img :src="icon" alt="" srcset="" />
    </div>
    <div class="flex flex-col items-start justify-start gap-y-3">
      <h5
        class="text-argray uppercase text-[12px] translate-y-[-5px] font-medium lg:translate-y-[-10px] tracking-[0.4em] text-left leading-4"
      >
        {{ subTitle }}
      </h5>
      <p
        class="translate-y-[-5px] lg:translate-y-[-10px] text-arprimary text-[22px] font-bold lg:text-[32px] text-left tracking-wide"
      >
        {{ statistic }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  subTitle: String,
  statistic: String,
  icon: String,
});
</script>

<style lang="scss" scoped></style>
