<template>
  <div class="flex flex-col-reverse justify-center gap-x-6 md:flex-row gap-y-6">
    <div class="md:basis-3/5 flex flex-col items-center md:items-start gap-y-6">
      <h4
        class="text-argray text-center text-2xl lg:text-desktopCopy font-medium md:text-left md:text-xl"
      >
        {{ title }}
      </h4>
      <p class="text-center text-mobileCopy lg:text-desktopCopy md:text-left">
        {{ copy }}
      </p>
      <ButtonVisit button-link="{{ buttonlink }}"></ButtonVisit>
    </div>
    <div class="ml-auto mr-auto md:basis-2/5 md:align-top">
      <img
        src="{{ imagePath }}"
        alt=""
        srcset=""
        class="h-[120px] w-[240px] rounded-lg object-cover md:h-[200px] md:w-[1600px]"
      />
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  copy: String,
  buttonLink: String,
  imagePath: String,
});
</script>

<style lang="scss" scoped></style>
