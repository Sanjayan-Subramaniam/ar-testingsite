<template>
  <div>
    <div class="container mx-auto">
      <div class="flex flex-col gap-y-12">
        <div
          class="flex flex-col items-center gap-y-6 lg:gap-y-9 lg:w-[800px] mx-auto"
        >
          <h2 class="text-center text-3xl text-arblue md:text-5xl">
            How to use Diego
          </h2>
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
        <SectionSpacer />
        <div
          class="flex flex-col lg:flex-row justify-between gap-y-16 items-center"
        >
          <Sequencecard
            iconPath="/icons/easy.svg"
            imagePath="bg-[url('/innovation1.webp')]"
            title-color="text-arblue"
            title="Upload floor plan"
            copy="Let August Robotics map your space or send us your digital floor plan"
            number="1"
            borderColor="border-arblue"
            bgColor="bg-arblue"
          ></Sequencecard>
          <Sequencecard
            iconPath="/icons/easy.svg"
            imagePath="bg-[url('/innovation2.webp')]"
            title="Set up disinfection"
            copy="Use Diego’s touchscreen to command instant disinfection or set up an automatic disinfection schedule "
            number="2"
            color="arblue"
            borderColor="border-arblue"
            bgColor="bg-arblue"
          ></Sequencecard>
          <Sequencecard
            iconPath="/icons/easy.svg"
            imagePath="bg-[url('/innovation3.webp')]"
            title="Run the job"
            copy="Let Diego navigate around the unoccupied space, powerfully and efficiently disinfecting air and surfaces"
            number="3"
            color="arblue"
            borderColor="border-arblue"
            bgColor="bg-arblue"
          ></Sequencecard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
