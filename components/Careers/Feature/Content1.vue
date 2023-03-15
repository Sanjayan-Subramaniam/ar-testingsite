<template>
  <div class="shadow-md bg-white mx-auto w-[90%] lg:w-full">
    <div class="flex flex-col lg:flex-row-reverse lg:items-start">
      <img
        class="lg:w-[40%] w-full h-[200px] lg:max-h-[280px] lg:min-h-[280px] object-cover"
        src="/working-collaborative.webp"
      />

      <div class="flex flex-col px-6 pt-6 pb-6 lg:py-6 lg:w-[50%] gap-y-6">
        <h4 class="text-arprimary text-[20px]">We honor teamwork</h4>
        <p class="w-full text-mobileCopy">
          Our small team size means everyone has outsized influence on the
          trajectory of the company. We make big strategic decisions every day –
          from what robot to build to what market to enter – and everyone, no
          matter their role or seniority, has a say.
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
