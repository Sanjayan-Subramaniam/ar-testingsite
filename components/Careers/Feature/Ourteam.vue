<template>
  <div class="container mx-auto">
    <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">Our Team</h2>
    <SectionSpacer />
    <div class="grid lg:grid-cols-2 gap-y-9">
      <div
        class="order-2 md:min-w-[500px] lg:col-start-2 lg:row-start-1 lg:mt-0"
      >
        <div
          class="grid grid-rows-2 grid-cols-2 w-[320px] mx-auto lg:mx-0 xl:w-[500px]"
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
        class="lg:translate-x-[60px] order-3 mx-auto w-[270px] text-center text-mobileCopy lg:text-desktopCopy text-arblack lg:mx-0 lg:w-[440px] lg:text-left my-auto"
      >
        <div class="flex flex-col gap-y-6 lg:gap-y-12 lg:my-auto">
          <CareersFeatureTeamstatistics
            sub-title="locations"
            statistic="5 Offices"
            icon="/icons/location.svg"
          />
          <CareersFeatureTeamstatistics
            sub-title="diversity"
            statistic="15 Nationalities"
            icon="/icons/nationalities.svg"
          />
          <CareersFeatureTeamstatistics
            sub-title="average age"
            statistic="32 Years"
            icon="/icons/birthdaycake.svg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
