<template>
  <div class="container mx-auto lg:w-[1000px]">
    <div class="grid lg:grid-cols-2 space-y-9">
      <div
        class="order-2 mx-auto md:min-w-[320px] lg:col-start-2 lg:row-span-4 lg:row-start-1"
      >
        <img
          src="~/assets/img/Diegocropped.png"
          class="mr-auto ml-auto w-[100px] lg:mr-0 lg:w-[200px]"
        />
      </div>

      <h4
        class="font-base order-1 text-center text-4xl leading-6 text-arblue lg:order-first lg:col-start-1 lg:text-left"
      >
        Diego
      </h4>

      <p
        class="lg:col-start-1 order-3 mx-auto w-[270px] text-center text-mobileCopy lg:text-desktopCopy text-arblack lg:mx-0 lg:w-[440px] lg:text-left"
      >
        Keep your team and patrons safe
        <br /><br />
        Diego uses UV-C light to disinfect air and surfaces <br />
        <br />
        Hospital grade disinfection to protect people in your facilities
        <br /><br />
        Moves from room to room autonomously without needing any supervision
      </p>
      <IndustryApplicationsDiego
        class="order-last ml-auto mr-auto lg:ml-0"
      ></IndustryApplicationsDiego>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
