<template>
  <div>
    <div class="container mx-auto">
      <div class="flex flex-col gap-y-12">
        <div
          class="flex flex-col items-center gap-y-6 lg:gap-y-9 lg:w-[800px] mx-auto"
        >
          <!-- <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">
            Our Innovation
          </h2> -->
          <TypographyHeadingtwo class="text-center" text-color="ardarkgreen"
            >Our Innovation</TypographyHeadingtwo
          >
          <p
            class="text-center text-mobileCopy lg:text-desktopCopy text-arblack w-[270px] md:w-full"
          >
            We don’t just replicate, assemble or incrementally improve
            <br class="hidden xl:block" />
            upon existing solutions in the market <br /><br />
            We use our optimism and resourcefulness to push
            <br class="hidden xl:block" />
            technological, engineering and creative boundaries to make
            <br class="hidden xl:block" />
            breakthrough innovations <br /><br />
            What makes us different from other robotics companies?
          </p>
        </div>
        <div
          class="flex flex-col lg:flex-row justify-between gap-y-12 items-center"
        >
          <Picturecard
            imagePath="bg-[url('/innovation1.webp')]"
            title="Innovative and dependable robots"
            copy="Our existing robots have world-class performance, autonomy and reliability"
          ></Picturecard>
          <Picturecard
            imagePath="bg-[url('/innovation2.webp')]"
            title="...that are simple and affordable"
            copy="Our robots are simple to use and affordable, making the benefits of robotics accessible to all businesses"
          ></Picturecard>
          <Picturecard
            imagePath="bg-[url('/innovation3.webp')]"
            title="...based off a common tech platform"
            copy="We can leverage our modularised technology platform to spin off new robots quickly, affordably and reliably, unlocking infinite opportunities"
          ></Picturecard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
