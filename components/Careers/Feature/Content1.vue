<template>
  <div
    class="shadow-md bg-white mx-auto w-[90%] lg:w-full transition-all duration-1000 ease-in-out"
  >
    <div class="flex flex-col lg:flex-row-reverse lg:items-center">
      <img class="lg:w-[60%]" src="/Collaborative.JPG" />

      <div class="flex flex-col px-6 py-6 lg:py-0 lg:w-[60%] gap-y-6">
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
