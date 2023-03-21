<template>
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 gap-x-3 gap-y-9">
      <div class="order-2 ml-auto mr-auto lg:mr-0 lg:col-start-2 lg:row-span-3">
        <div
          class="relative flex flex-col justify-start lg:mr-auto lg:ml-0 rounded-2xl h-[640px] w-[300px] md:w-[400px] lg:h-[640px] lg:w-[400px] xl:w-[480px] xl:h-[720px] shadow-xl object-cover"
        >
          <img
            class="bg-[url('/diegoUV.webp')] bg-cover bg-center h-1/3 mt-0 object-cover opacity-80 bg-black/20 bg-blend-overlay"
          />
          <img
            v-if="state === 1"
            src="/icons/bluequoteleft.svg"
            class="w-6 absolute mt-[105%] md:mt-[83%] xl:mt-[70%] ml-[5%]"
          />

          <div
            @click="changeState((state += 1))"
            class="absolute hover:shadow-lg hover:bg-arblack hover:ring-4 cursor-pointer flex flex-col rounded-full w-20 h-20 bg-arblue justify-center items-center inset-y-0 translate-x-[30%] md:translate-x-[80%] right-[0] md:right-[0] lg:right-6 top-[25%] xl:right-[-4] xl:top-[27%]"
          >
            <img src="/icons/chevronright.svg" class="w-12" />
          </div>
          <div
            class="p-3 mx-auto flex flex-row w-full justify-center items-center gap-x-6 cursor-pointer h-8 absolute mt-[65%] md:mt-[49%] lg:mt-[50%] xl:mt-[46%]"
          >
            <div
              @click="changeState(1)"
              class="w-6 h-6"
              :class="
                state === 1
                  ? 'bg-arblue rounded-full  shadow-lg'
                  : 'border-2 border-arblue bg-white rounded-full'
              "
            ></div>
            <div
              @click="changeState(2)"
              class="w-6 h-6"
              :class="
                state === 2
                  ? 'bg-arblue rounded-full  shadow-lg'
                  : 'border-2 border-arblue bg-white rounded-full'
              "
            ></div>
            <div
              @click="changeState(3)"
              class="w-6 h-6"
              :class="
                state === 3
                  ? 'bg-arblue rounded-full  shadow-lg'
                  : 'border-2 border-arblue bg-white rounded-full'
              "
            ></div>
          </div>
          <div class="px-12 pt-12 pb-6 xl:px-12 xl:py-6">
            <div
              class="flex flex-row justify-start items-center gap-x-6 xl:gap-x-12"
            >
              <div
                class="flex flex-col border-2 border-arblue justify-center items-center p-2 h-12 w-12 lg:h-14 lg:w-14 rounded-xl"
              >
                <img
                  :src="sliderContent[state - 1].icon"
                  class="w-8 md:w-10 lg:w-12"
                  alt=""
                  srcset=""
                />
              </div>
              <h4
                class="text-arblue text-mobileCopy md:text-desktopCopy xl:text-[32px]"
              >
                {{ sliderContent[state - 1].title }}
              </h4>
            </div>
          </div>
          <div class="flex flex-col p-3 px-12 gap-y-3 lg:gap-y-6">
            <p class="text-mobileCopy xl:text-desktopCopy">
              {{ sliderContent[state - 1].para }} <br /><br />
              {{ sliderContent[state - 1].para2 }}
            </p>
            <p class="text-arblack font-semibold">
              {{ sliderContent[state - 1].quotePerson }}
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
        class="order-3 lg:mx-0 lg:text-left mx-auto w-[270px] md:w-[440px] lg:w-[400px] xl:w-[520px] text-center text-mobileCopy lg:text-desktopCopy text-arblack"
      >
        UV-C is widely affirmed by medical authorities (FDA, CDC and FEMA) to be
        highly effective in destroying microbes including viruses (such as
        SARS-CoV-2), mold and bacteria (even antibiotic resistant species)
        <br /><br />
        The DNA and RNA of microbes is deactivated within seconds of exposure to
        UV-C allowing for full buildings to be disinfected much faster than
        other methods (bleach, ozone etc)<br /><br />It is also extremely
        precise and does not irradiate the environment, present additional
        toxicity risks or require additional protective equipment to use
        safely<br /><br />
        UV-C has established itself as the most effective and safest
        disinfection method on the market
      </p>
    </div>
  </div>
</template>

<script setup>
let state = ref(1);

const changeState = (newState) => {
  if (state.value > 3) {
    state.value = state.value % 3;
  } else {
    state.value = newState;
  }
};

defineProps({
  title: String,
  bgimagePath: String,
  iconPath: String,
  para1: String,
  para2: String,
  para3: String,
  para4: String,
});

const sliderContent = [
  {
    image: "/diego-efficient.webp",
    icon: "/icons/clinicallyproven.svg",
    title: "Clinically proven",
    para: "UVC radiation has been shown to destroy the outer protein coating of the SARS-Coronavirus...The destruction ultimately leads to inactivation of the virus.",
    quotePerson: "- U.S. Food and Drug Administration (FDA)",
  },
  {
    image: "/diego-efficient.webp",
    icon: "/icons/safer.svg",
    title: "Safer",
    para: "With its wavelength of 100-280 nm UV-C has enough energy to deactivate microbes without causing ambient irradiation.",
    para2:
      "There is also no toxicity risk with UV-C so people and animals can safely enter a room as soon as it has been disinfected",
  },
  {
    image: "/diego-efficient.webp",
    icon: "/icons/faster.svg",
    title: "Faster",
    para: "UV-C light can penetrate the interiors of microbes within seconds to disable their DNA and RNA. This fast disinfection time allows whole buildings to be disinfected in one shift by Diego",
  },
];

const chevron = "/icons/chevronright.svg";
const quoteIcon = "/icons/quoteleft.svg";

//console.log(sliderContent[state - 1].image);
</script>

<style scoped></style>
