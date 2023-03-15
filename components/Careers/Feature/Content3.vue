<template>
  <div class="shadow-md bg-white mx-auto w-[90%] lg:w-full">
    <div class="flex flex-col lg:flex-row-reverse lg:items-start">
      <img
        class="lg:w-[40%] w-full h-[200px] lg:max-h-[280px] lg:min-h-[280px] object-cover"
        src="/working-bold.webp"
      />

      <div class="flex flex-col px-6 pt-6 pb-6 lg:py-6 lg:w-[50%] gap-y-6">
        <h4 class="text-arprimary text-[20px]">We challenge convention</h4>
        <p class="w-full text-mobileCopy">
          We pride ourselves on having the courage and optimism to take risks
          and moonshots. Whether you are an engineer pursuing a breakthrough or
          a strategist seeking a new robot idea, everyone is an inventor.
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
