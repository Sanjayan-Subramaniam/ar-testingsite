<template>
  <div class="container lg:w-[1000px] mx-auto relative">
    <div class="px-6 pt-6 w-[90%] lg:w-full mx-auto lg:px-0">
      <div class="flex flex-col lg:flex-row lg:gap-x-0">
        <div
          class="shadow-md lg:rounded-lg rounded-none flex flex-row lg:flex-col items-center gap-x-6 gap-y-3 lg:basis-1/2 px-6 py-6 lg:p-0"
        >
          <nuxt-picture
            :src="personnelImage"
            format="webp"
            class="rounded-full w-24 lg:w-full lg:rounded-none object-cover object-center"
          ></nuxt-picture>

          <div
            class="flex flex-col gap-y-1 items-start lg:justify-center mt-auto lg:py-12"
          >
            <h4 class="text-arprimary lg:text-desktopCopy">
              Chief Marketing Officer
            </h4>
            <div class="flex flex-row gap-x-3 items-center">
              <nuxt-picture :src="flagImage" class="h-12"></nuxt-picture>
              <h4>Hong Kong</h4>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col lg:basis-1/2 bg-gradient-to-b from-arsecondary/100 to-white/50 lg:p-6"
        >
          <div class="flex flex-col p-6 md:p-12 lg:p-6 justify-center">
            <!-- <h4 class="text-white text-[24px]">
              Championing robotics to the world
            </h4> -->
            <div class="flex flex-col items-start py-12">
              <nuxt-img
                src="/icons/quoteleft.svg"
                class="lg:h-16 ml-0"
                alt=""
                srcset=""
              ></nuxt-img>
            </div>
            <h4
              class="text-arblack text-mobileCopy md:text-desktopCopy basis-2/3"
            >
              I’m pretty lucky to work at August Robotics. I get to improve the
              world through robotics and do so with some of the smartest,
              kindest people I’ve met.
            </h4>
            <div
              class="flex flex-col rounded-full w-20 h-20 bg-arprimary justify-center items-center absolute right-4 md:right-20 lg:right-6 top-[40%] md:top-[50%]"
            >
              <nuxt-img src="/icons/chevronright.svg" class="w-12"></nuxt-img>
            </div>
          </div>
          <div
            class="p-3 mx-auto flex flex-row w-full justify-center items-center gap-x-6 mt-auto"
          >
            <div class="w-6 h-6 ring-4 ring-arprimary rounded-full"></div>
            <div class="w-6 h-6 ring-4 ring-arprimary rounded-full"></div>
            <div class="w-6 h-6 ring-4 ring-arprimary rounded-full"></div>
            <div class="w-6 h-6 ring-4 ring-arprimary rounded-full"></div>
            <div class="w-6 h-6 ring-4 ring-arprimary rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  personnelImage: String,
  flagImage: String,
});
</script>

<style lang="scss" scoped></style>
