<template>
  <div class="shadow-md bg-white mx-auto w-[90%] lg:w-full">
    <div class="flex flex-col lg:flex-row-reverse lg:items-center">
      <nuxt-picture class="lg:w-[60%]" src="/bold.JPG"></nuxt-picture>

      <div class="flex flex-col px-6 py-6 lg:py-0 lg:w-[50%] gap-y-6">
        <h4 class="text-arprimary text-[20px]">We challenge convention</h4>
        <p class="w-full text-mobileCopy">
          We pride ourselves on having the courage and optimism to take risks
          and moon-shots. Whether you are an engineer pursuing a breakthrough or
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
