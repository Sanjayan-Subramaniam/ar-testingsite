<template>
  <div class="container mx-auto">
    <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">
      Lionel's Impact to date
    </h2>
    <SectionSpacer />
    <div class="grid lg:grid-cols-2 gap-y-9 md:gap-x-16">
      <div class="order-2 lg:col-start-2 lg:row-start-1 lg:mt-0">
        <div
          class="grid grid-rows-2 grid-cols-2 mx-auto lg:mx-0 w-[300px] xl:w-[500px] h-[300px] xl:h-[500px]"
        >
          <div
            class="bg-arprimary/70 ml-auto mr-auto lg:ml-0 w-full object-cover rounded-tl-2xl"
          ></div>
          <img
            src="/ourteam2.webp"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover h-full rounded-tr-2xl"
          /><img
            src="/ourteam1.webp"
            class="ml-auto mr-auto lg:ml-0 w-full object-cover h-full rounded-bl-2xl"
          />
          <div
            class="bg-argray/70 ml-auto mr-auto lg:ml-0 w-full object-cover rounded-br-2xl"
          ></div>
        </div>
      </div>

      <div
        class="lg:translate-x-[60px] order-3 mx-auto w-[420px] text-center text-mobileCopy lg:text-desktopCopy text-arblack lg:mx-0 lg:w-[440px] lg:text-left my-auto"
      >
        <div class="flex flex-col gap-y-6 lg:gap-y-12 items-start lg:my-auto">
          <LionelFeaturesImpactstatistics
            sub-title1="Marks"
            sub-title2="made"
            statistic1="160,000+ "
            statistic2="marks"
            icon="/icons/location.svg"
          />
          <LionelFeaturesImpactstatistics
            sub-title1="Hours"
            sub-title2="saved"
            statistic1="11,000+ "
            statistic2="hours"
            icon="/icons/nationalities.svg"
          />
          <LionelFeaturesImpactstatistics
            sub-title1="Floorspace"
            sub-title2="marked"
            statistic1="2.9M"
            statistic2="square metres"
            icon="/icons/birthdaycake.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
