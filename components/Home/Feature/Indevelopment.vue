<template>
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 gap-y-10">
      <div
        class="order-2 md:min-w-[500px] lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:mt-0"
      >
        <div
          class="grid grid-rows-2 grid-cols-2 w-[320px] mx-auto lg:mx-0 xl:w-[640px]"
        >
          <img
            src="~/assets/img/Airport.png"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover rounded-tl-3xl"
          />
          <img
            src="~/assets/img/Airport.png"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover rounded-tr-3xl"
          /><img
            src="~/assets/img/Airport.png"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover rounded-bl-3xl"
          /><img
            src="~/assets/img/Airport.png"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover rounded-br-3xl"
          />
        </div>
      </div>

      <h2
        class="lg:translate-x-[60px] font-base order-1 leading-6 lg:order-first lg:col-start-2 lg:text-left md:text-5xl lg:mb-10 text-center text-3xl text-ardarkgreen"
      >
        In Development
      </h2>

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
