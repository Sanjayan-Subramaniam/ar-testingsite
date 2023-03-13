<template>
  <div class="shadow-md bg-white mx-auto w-[90%] lg:w-full">
    <div class="flex flex-col lg:flex-row-reverse">
      <nuxt-img
        class="h-[120px] object-cover obejct-center lg:h-[320px] lg:w-[40%]"
        src="/collaborative.JPG"
      ></nuxt-img>

      <div class="flex flex-col px-6 py-6 lg:w-[80%] gap-y-6">
        <h4 class="text-arprimary text-[20px]">We honor teamwork</h4>
        <p class="w-full text-mobileCopy">
          At August Robotics, we believe that diversity is the spark for
          innovation and impact. We have brought together a team of top
          engineers and business professionals from around the world, each with
          unique backgrounds and a common passion for robotics.
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
