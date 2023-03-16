<template>
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 gap-x-3 gap-y-9">
      <div class="order-2 ml-auto mr-auto lg:mr-0 lg:col-start-2 lg:row-span-3">
        <div
          class="relative flex flex-col justify-start lg:mr-auto lg:ml-0 rounded-2xl h-[400px] w-[400px] lg:h-[640px] lg:w-[400px] xl:w-[480px] shadow-xl object-cover"
        >
          <img src="/diego-efficient.webp" class="h-1/2 mt-0 object-cover" />
          <div
            class="p-3 mx-auto flex flex-row w-full justify-center items-center gap-x-6 cursor-pointer h-8 absolute mt-[63%]"
          >
            <div
              @click="changeState(1)"
              class="w-2 h-2 md:w-6 md:h-6"
              :class="
                state === 1
                  ? 'bg-arblue rounded-full  shadow-lg'
                  : 'border-2 border-arblue bg-white rounded-full'
              "
            ></div>
            <div
              @click="changeState(2)"
              class="w-2 h-2 md:w-6 md:h-6"
              :class="
                state === 2
                  ? 'bg-arblue rounded-full  shadow-lg'
                  : 'border-2 border-arblue bg-white rounded-full'
              "
            ></div>
            <div
              @click="changeState(3)"
              class="w-2 h-2 md:w-6 md:h-6"
              :class="
                state === 3
                  ? 'bg-arblue rounded-full  shadow-lg'
                  : 'border-2 border-arblue bg-white rounded-full'
              "
            ></div>
          </div>
          <div class="h-1/6 p-12">
            <div class="flex flex-row justify-start items-center gap-x-12">
              <div
                class="flex flex-col border-2 border-arblue justify-center items-center p-3 h-16 w-16 rounded-xl"
              >
                <img src="/icons/easy.svg" class="w-12" alt="" srcset="" />
              </div>
              <h4 class="text-arblue text-mobileCopy lg:text-[32px]">
                Clinically proven
              </h4>
            </div>
          </div>
          <div class="flex flex-col p-12 w-[90%] gap-y-3">
            <p>
              UVC radiation has been shown to destroy the outer protein coating
              of the SARS-Coronavirus...The destruction ultimately leads to
              inactivation of the virus.”
            </p>
            <p class="text-arblack font-semibold">
              - U.S. Food and Drug Administration (FDA)
            </p>
          </div>
        </div>
      </div>
      <div
        class="lg:w-[440px] xl:w-[640px] leading-normal font-base order-1 lg:order-first lg:col-start-1"
      >
        <div
          class="flex flex-row lg:justify-start justify-center items-center lg:items-start gap-x-6 lg:gap-x-12"
        >
          <h2 class="lg:text-left md:text-3xl text-center text-2xl text-arblue">
            Why use UVC?
          </h2>
        </div>
      </div>
      <p
        class="order-3 lg:mx-0 lg:text-left mx-auto w-[270px] md:w-[440px] lg:w-[440px] xl:w-[520px] text-center text-mobileCopy lg:text-desktopCopy text-arblack"
      >
        UV-C is widely affirmed by medical authorities (FDA, CDC and FEMA) to be
        highly effective in destroying microbes including viruses (such as
        SARS-CoV-2), mold and bacteria (even antibiotic resistant species)The
        DNA and RNA of microbes is deactivated within seconds of exposure to
        UV-C allowing for full buildings to be disinfected much faster than
        other methods (bleach, ozone etc)It is also extremely precise and does
        not irradiate the environment, present additional toxicity risks or
        require additional protective equipment to use safely UV-C has
        established itself as the most effective and safest disinfection method
        on the market
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  bgimagePath: String,
  iconPath: String,
  para1: String,
  para2: String,
  para3: String,
  para4: String,
});
</script>

<style scoped></style>
