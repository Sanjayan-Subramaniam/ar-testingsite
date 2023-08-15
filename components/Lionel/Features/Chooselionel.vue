<template>
  <div class="flex flex-col gap-y-6">
    <!-- <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">
      Choose your Lionel
    </h2> -->
    <TypographyHeadingtwo class="text-center" text-color="ardarkgreen"
      >Choose your Lionel</TypographyHeadingtwo
    >

    <p
      class="text-center text-mobileCopy lg:text-desktopCopy text-arblack w-[270px] md:w-full mx-auto mb-6"
    >
      What are you interested in?
    </p>
  </div>

  <div
    class="container mx-auto md:w-[720px] lg:w-[1000px] justify-start cursor-pointer"
  >
    <div class="flex h-[320px] lg:h-[320px] flex-row">
      <div
        class="mt-auto p-4 flex flex-col gap-y-3 h-5/6 basis-1/3 content-center justify-center bg-construction-background bg-argray/80 bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-full hover:bg-argray/100 hover:bg-construction-background-full hover:border-arprimary hover:border-[6px]"
        @mouseover="initial = ''"
      >
        <h2
          class="text-center text-white text-xl md:text-2xl lg:text-3xl font-medium basis-1/6"
        >
          Construction
        </h2>
        <p
          class="text-center text-white text-mobileCopy w-[70%] mx-auto leading-tight basis-4/6"
        >
          Fast and accurate <br />layout using Lionel
        </p>
        <ButtonVisit
          button-link="https://www.construction.augustrobotics.com"
          class="mx-auto basis-1/6"
        />
      </div>
      <div
        :class="[
          initial,
          'mt-auto p-4 flex flex-col gap-y-3 h-5/6 basis-1/3 content-center justify-center bg-arblack/80 bg-cover bg-center bg-exhibition-background bg-blend-overlay transition-all ease-in-out hover:h-full hover:bg-arblack/100 hover:bg-exhibition-background-full hover:border-arprimary hover:border-[6px]',
        ]"
        @mouseover="initial = ''"
      >
        <h2
          class="text-center text-white text-xl md:text-2xl lg:text-3xl font-medium basis-1/6"
        >
          Exhibitions
        </h2>
        <p
          class="text-center text-white text-mobileCopy w-[70%] mx-auto basis-4/6"
        >
          Marking exhibition floors using Lionel
        </p>
        <ButtonVisit
          button-link="https://www.exhibitions.augustrobotics.com"
          class="mx-auto basis-1/6"
        />
      </div>
      <div
        class="mt-auto p-4 flex flex-col gap-y-3 h-5/6 basis-1/3 content-center justify-center bg-arprimary/60 bg-lionel-other bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-full hover:bg-arprimary/100 hover:border-arprimary hover:border-[6px]"
        @mouseover="initial = ''"
      >
        <h2
          class="text-center text-white text-xl md:text-2xl lg:text-3xl font-medium basis-1/6"
        >
          Other
        </h2>
        <p
          class="text-center text-white text-mobileCopy w-[70%] mx-auto basis-4/6"
        >
          Lionel's technology<br />
          and history
        </p>
        <ButtonVisit
          buttonCopy1="Scroll"
          buttonCopy2="down"
          button-link="/lionel/#usinglionel"
          class="mx-auto basis-1/6"
          arrow-direction="rotate(90)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const initial = ref("h-full border-arprimary border-[6px]");
</script>

<style lang="scss" scoped></style>
