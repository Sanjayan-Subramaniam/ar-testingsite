<template>
  <div class="container mx-auto w-5/6 max-w-[1000px] justify-start">
    <div class="flex h-[100px] lg:h-[200px] flex-row">
      <button
        @mouseover="changeState('construction')"
        @click="changeState('construction')"
        class="mt-auto flex h-3/6 basis-1/3 content-center justify-center bg-argray/80 bg-construction-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-5/6 hover:bg-argray/100 hover:bg-construction-background-full"
      >
        <h2 class="my-auto text-center text-sm text-white lg:text-2xl">
          Construction
        </h2>
      </button>
      <button
        @mouseover="changeState('exhibitions')"
        @click="changeState('exhibitions')"
        class="mt-auto flex h-3/6 basis-1/3 content-center justify-center bg-arblack/80 bg-exhibition-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-5/6 hover:bg-arblack/100 hover:bg-exhibition-background-full"
      >
        <h2 class="my-auto text-center text-sm text-white lg:text-2xl">
          Exhibitions
        </h2>
      </button>
      <button
        @mouseover="changeState('disinfection')"
        @click="changeState('disinfection')"
        class="mt-auto flex h-3/6 basis-1/3 content-center justify-center bg-arblue/60 bg-disinfection-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-5/6 hover:bg-arblue/80 hover:bg-disinfection-background"
      >
        <h2 class="my-auto text-center text-sm text-white lg:text-2xl">
          Commercial <br />
          Disinfection
        </h2>
      </button>
    </div>
    <div
      class="h-[420px] rounded-lg p-12 shadow-md md:h-[360px] flex flex-col items-center justify-center"
    >
      <div
        v-if="state === 'construction'"
        class="flex flex-col-reverse justify-center gap-x-6 md:flex-row gap-y-6"
      >
        <div
          class="md:basis-3/5 flex flex-col items-center md:items-start gap-y-6"
        >
          <h4
            class="text-center text-mobileCopy lg:text-desktopCopy font-medium md:text-left md:text-xl"
          >
            Construction
          </h4>
          <p
            class="mt-6 text-center text-mobileCopy lg:text-desktopCopy md:text-left"
          >
            Our Lionel robot is helping contractors mark layouts for
            construction projects faster and smarter
          </p>
          <ButtonVisit
            buttonLink="https://www.construction.augustrobotics.com"
          ></ButtonVisit>
        </div>
        <div class="ml-auto mr-auto md:basis-2/5 md:align-top">
          <img
            src="/selector-construction.webp"
            alt=""
            srcset=""
            class="h-[120px] w-[240px] rounded-lg object-cover md:h-[200px] md:w-[1600px]"
          />
        </div>
      </div>
      <div
        v-else-if="state === 'exhibitions'"
        class="flex flex-col-reverse justify-center gap-x-6 md:flex-row gap-y-6"
      >
        <div
          class="md:basis-3/5 flex flex-col items-center md:items-start gap-y-6"
        >
          <h4
            class="text-center text-mobileCopy lg:text-desktopCopy font-medium md:text-left md:text-xl"
          >
            Exhibitions
          </h4>
          <p
            class="mt-6 text-center text-mobileCopy lg:text-desktopCopy md:text-left"
          >
            Our Lionel robot is helping exhibition venues around the world
            streamline the floor marking and show set-up process
          </p>
          <ButtonVisit
            href="https://www.exhibitions.augustrobotics.com"
          ></ButtonVisit>
        </div>
        <div class="ml-auto mr-auto md:basis-2/5 md:align-top">
          <img
            src="/selector-exhibitions.webp"
            alt=""
            srcset=""
            class="h-[120px] w-[240px] rounded-lg object-cover md:h-[200px] md:w-[1600px]"
          />
        </div>
      </div>
      <div
        v-else-if="state === 'disinfection'"
        class="flex flex-col-reverse justify-center gap-x-6 md:flex-row gap-y-6"
      >
        <div
          class="md:basis-3/5 flex flex-col items-center md:items-start gap-y-6"
        >
          <h4
            class="text-center text-mobileCopy lg:text-desktopCopy font-medium md:text-left md:text-xl"
          >
            Property Management
          </h4>
          <p
            class="mt-6 text-center text-mobileCopy lg:text-desktopCopy md:text-left"
          >
            Our Diego robot is providing hospital-grade disinfection for
            offices, hotels and aged-care homes to keep people safe
          </p>
          <ButtonVisit buttonLink="/diego"></ButtonVisit>
        </div>
        <div class="ml-auto mr-auto md:basis-2/5 md:align-top">
          <img
            src="/selector-disinfection.webp"
            alt=""
            srcset=""
            class="h-[120px] w-[240px] rounded-lg object-cover md:h-[200px] md:w-[1600px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let state = ref("disinfection");

const changeState = (newState) => {
  state.value = newState;
  console.log(state);
};
</script>

<style lang="scss" scoped></style>
