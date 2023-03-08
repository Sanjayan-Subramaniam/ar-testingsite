<template>
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 gap-y-10">
      <div class="order-2 ml-auto mr-auto lg:mr-0 lg:col-start-2 lg:row-span-4">
        <div class="flex flex-row lg:flex-col">
          <img
            src="~/assets/img/Airport.png"
            class="ml-auto w-1/2 xl:w-[480px] xl:h-[320px] xl:translate-x-[-5%] 2xl:xl:translate-x-[-40%] object-cover"
          />
          <img
            src="~/assets/img/Airport.png"
            class="ml-auto w-1/2 xl:w-[480px] xl:h-[320px] xl:translate-x-[-5%] 2xl:xl:translate-x-[-40%] object-cover"
          />
        </div>
      </div>

      <h2
        class="lg:w-[640px] leading-normal font-base order-1 lg:order-first lg:col-start-1 lg:text-left md:text-5xl text-center text-3xl text-ardarkgreen"
      >
        Working at August Robotics
      </h2>

      <p
        class="order-3 mx-auto w-[270px] text-center text-mobileCopy lg:text-desktopCopy text-arblack lg:mx-0 lg:w-[440px] lg:text-left"
      >
        We have an exciting pipeline of new robots currently under development
        <br /><br />Our proprietary and modular technology platform allows us to
        spin off new robots quickly <br /><br />Have an idea? <br /><br />Reach
        out for a chat!
      </p>
      <div
        class="flex flex-row gap-x-6 justify-center lg:justify-start order-last"
      >
        <ButtonSecondary button-text="Careers" />
        <ButtonTertiary button-text="About Us" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
