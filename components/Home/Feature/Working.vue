<template>
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 gap-y-9">
      <div
        class="order-2 ml-auto mr-auto 2xl:mr-0 2xl:ml-[10%] lg:col-start-2 lg:row-span-3"
      >
        <div class="flex flex-row lg:flex-col justify-center">
          <!-- <NuxtImg
            sizes="sm:420px md:420ox lg:420px"
            src="/home-workingar.webp"
            class="w-[70%] md:w-[420px] lg:h-[640px] object-cover object-center rounded-2xl"
          /> -->
          <img
            src="/home-workingar.webp"
            class="items-start w-[70%] md:w-[420px] lg:h-[640px] object-cover object-center rounded-2xl"
          />
        </div>
      </div>

      <!-- <h2
        class="lg:w-[440px] xl:w-[640px] leading-normal font-base order-1 lg:order-first lg:col-start-1 lg:text-left md:text-5xl text-center text-3xl text-ardarkgreen"
      >
        Working at August Robotics
      </h2> -->

      <TypographyHeadingtwo
        class="text-center lg:text-left ml-o mr-0"
        text-color="ardarkgreen"
        >Working at August Robotics</TypographyHeadingtwo
      >

      <p
        class="order-3 lg:mx-0 lg:text-left mx-auto w-[270px] md:w-[440px] lg:w-[440px] xl:w-[640px] text-center text-mobileCopy lg:text-desktopCopy text-arblack"
      >
        Our robots are brought to life by our incredible team of passionate
        people
        <br /><br />Our team is located across Europe, America, Asia and Oceania
        and is growing quickly <br /><br />From robot design to on-site
        engineering to commercial strategy, August Robotics offers a career
        pathway for everyone<br /><br />Our diversity in backgrounds, skills and
        thinking have enabled us to push creative and technological boundaries
        and transform entire industries <br /><br />
        Join us on our journey
      </p>

      <div
        class="flex flex-row gap-x-6 justify-center lg:justify-start order-last"
      >
        <ButtonSecondary button-copy="Careers" link-location="/careers/" />
        <ButtonTertiary button-copy="About us" link-location="/about/" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
