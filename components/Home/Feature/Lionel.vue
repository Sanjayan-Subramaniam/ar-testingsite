<template>
  <div class="container mx-auto lg:w-[1000px]">
    <div class="grid lg:grid-cols-2 gap-y-9">
      <div
        class="order-2 mx-auto md:min-w-[320px] lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:mt-0"
      >
        <img
          src="~/assets/img/Lionel.png"
          class="mr-auto ml-auto w-96 lg:ml-0 lg:w-full"
        />
      </div>

      <h4
        class="lg:translate-x-[60px] font-base order-1 text-center text-3xl leading-6 text-arprimary lg:order-first lg:col-start-2 lg:text-left"
      >
        Lionel
      </h4>

      <p
        class="lg:translate-x-[60px] order-3 mx-auto w-[270px] text-center text-mobileCopy lg:text-desktopCopy text-arblack lg:mx-0 lg:w-[440px] lg:text-left"
      >
        Lionel moves around your floor and marks your digital plan on the ground
        <br /><br />
        Fully autonomous, no supervision needed <br />
        <br />
        Much faster and more accurate than manual floor marking
      </p>
      <IndustryApplicationsLionel
        class="order-last ml-auto mr-auto lg:ml-0"
      ></IndustryApplicationsLionel>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
