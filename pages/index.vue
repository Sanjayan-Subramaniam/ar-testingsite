<template>
  <div>
    <HomeFeatureHero />
    <SectionSpacer />

    <section>
      <div class="container mx-auto">
        <div
          class="flex flex-col items-center gap-y-6 lg:gap-y-9 lg:w-[800px] mx-auto"
        >
          <!-- <h2 class="text-center text-3xl text-ardarkgreen md:text-[48px]">
            Industries we Serve
          </h2> -->
          <TypographyHeadingtwo text-color="ardarkgreen">
            Industries we Serve
          </TypographyHeadingtwo>

          <p
            class="w-[270px] md:w-full text-center text-mobileCopy lg:text-desktopCopy text-arblack"
          >
            We are the world leader in autonomous commercial robots, serving the
            exhibition, construction and facilities management industries
          </p>
        </div>
      </div>
      <IndustrySelector />
    </section>

    <SectionSeperator />
    <section>
      <div class="container mx-auto">
        <div
          class="flex flex-col items-center gap-y-6 lg:gap-y-9 lg:w-[800px] mx-auto"
        >
          <!-- <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">
            Our Robots
          </h2> -->

          <TypographyHeadingtwo text-color="ardarkgreen">
            Our Robots
          </TypographyHeadingtwo>
          <p
            class="text-center text-mobileCopy lg:text-desktopCopy text-arblack w-[270px] md:w-full"
          >
            All our robots have been developed using our industry-leading
            technology.
            <br />View our current robot portfolio below
          </p>
        </div>
      </div>
      <SectionSpacer />
      <HomeFeatureLionel />
      <SectionSeperator />
      <HomeFeatureDiego />
      <SectionSeperator />
    </section>
    <section>
      <HomeFeatureIndevelopment></HomeFeatureIndevelopment>
    </section>
    <SectionSeperator />
    <section>
      <HomeFeatureWorking></HomeFeatureWorking>
    </section>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped></style>
