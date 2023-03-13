<template>
  <div class="shadow-md bg-white mx-auto w-[90%] lg:w-full">
    <div class="flex flex-col lg:flex-row-reverse">
      <nuxt-img
        class="h-[120px] object-cover obejct-center lg:h-[320px] lg:w-[40%]"
        src="/agile.JPG"
      ></nuxt-img>

      <div class="flex flex-col px-6 py-6 lg:w-[80%] gap-y-6">
        <h4 class="text-arprimary text-[20px]">We are always moving</h4>
        <p class="w-full text-mobileCopy">
          As a young tech startup, we are quick to make decisions, quick to
          execute and quick to pivot. From developing new robots to launching in
          untested markets, every day brings a new set of challenges and
          opportunities – change is the only constant.
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
