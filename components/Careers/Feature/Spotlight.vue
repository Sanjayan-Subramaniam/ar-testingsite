<template>
  <div class="container lg:w-[1000px] mx-auto">
    <div class="px-6 pt-6 w-[90%] lg:w-full mx-auto lg:px-0">
      <div class="flex flex-col lg:flex-row lg:gap-x-0">
        <div
          class="shadow-md lg:rounded-lg rounded-none flex flex-row lg:flex-col items-center gap-x-6 gap-y-3 lg:basis-1/2 px-6 py-6 lg:p-0"
        >
          <nuxt-picture
            src="/Airport.png"
            format="webp"
            class="rounded-full w-20 lg:w-full lg:h-[80%] lg:rounded-none"
          ></nuxt-picture>

          <div class="flex flex-col gap-y-1 items-start lg:items-center">
            <h4 class="text-arprimary lg:text-desktopCopy">
              Chief Marketing Officer
            </h4>
            <div class="flex flex-row gap-x-3 items-center">
              <nuxt-img src="/flags/hongkong.svg" class="h-12"></nuxt-img>
              <h4>Hong Kong</h4>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col lg:basis-1/2 bg-gradient-to-b from-arsecondary/80 to-white/50"
        >
          <div class="flex flex-col p-6 justify-center">
            <h4 class="text-white text-[24px]">
              Championing robotics to the world
            </h4>
            <h4 class="text-arprimary text-[160px]">"</h4>
            <h4 class="text-argray">
              I’m pretty lucky to work at August Robotics. I get to improve the
              world through robotics and do so with some of the smartest,
              kindest people I’ve met.
            </h4>
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

<script setup></script>

<style lang="scss" scoped></style>
