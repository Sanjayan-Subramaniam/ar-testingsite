<template>
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 gap-y-9">
      <div
        class="order-2 md:min-w-[500px] lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0"
      >
        <div
          class="grid grid-rows-2 grid-cols-2 w-[320px] mx-auto lg:mx-0 xl:w-[500px]"
        >
          <img
            src="/development-airport.webp"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover rounded-tl-2xl"
          />
          <img
            src="/development-mine.webp"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover rounded-tr-2xl"
          />
          <img
            src="/development-road.webp"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover rounded-bl-2xl"
          />
          <img
            src="/development-bridge.webp"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover rounded-br-2xl"
          />
          <!-- <NuxtImg
            sizes="sm:160px md:160px lg:160px xl:250px"
            src="/development-airport.webp"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover rounded-tl-2xl"
          />
          <NuxtImg
            sizes="sm:160px md:160px lg:160px xl:250px"
            src="/development-mine.webp"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover rounded-tr-2xl"
          />
          <NuxtImg
            sizes="sm:160px md:160px lg:160px xl:250px"
            src="/development-road.webp"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover rounded-bl-2xl"
          />
          <NuxtImg
            sizes="sm:160px md:160px lg:160px xl:250px"
            src="/development-bridge.webp"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover rounded-br-2xl"
          /> -->
        </div>
      </div>

      <TypographyHeadingtwo
        class="text-center lg:text-left lg:ml-[12%] xl:ml-[9%] 2xl:ml-[8%]"
        text-color="ardarkgreen"
        >In Development</TypographyHeadingtwo
      >

      <p
        class="lg:translate-x-[60px] order-3 mx-auto w-[270px] text-center text-mobileCopy lg:text-desktopCopy text-arblack lg:mx-0 lg:w-[440px] lg:text-left"
      >
        We have an exciting pipeline of new robots currently under development
        <br /><br />Our proprietary and modular technology platform allows us to
        spin off new robots quickly <br /><br />Have an idea? <br /><br />Reach
        out for a chat!
      </p>
      <ButtonPrimary
        class="order-last lg:translate-x-[60px] mx-auto lg:mx-0"
      ></ButtonPrimary>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
