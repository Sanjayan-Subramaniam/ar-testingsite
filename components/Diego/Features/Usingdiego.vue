<template>
  <div>
    <div class="container mx-auto">
      <div class="flex flex-col">
        <div
          class="flex flex-col items-center gap-y-6 lg:gap-y-9 lg:w-[800px] mx-auto"
        >
          <h2 class="text-center text-3xl text-arblue md:text-5xl">
            How to use Diego
          </h2>
          <p
            class="text-center text-mobileCopy lg:text-desktopCopy text-arblack w-[270px] md:w-full"
          >
            Diego is very easy to use <br class="hidden xl:block" />
            <br class="hidden xl:block" />Unlock the benefits of robotic
            disinfection in three easy steps
          </p>
        </div>
        <SectionSpacer />
        <div
          class="flex flex-col lg:flex-row justify-between gap-y-16 items-center"
        >
          <Sequencecard
            iconPath="/icons/usediego-upload.svg"
            imagePath="bg-[url('/usediego-upload.webp')]"
            title-color="text-arblue"
            title="Upload floor plan"
            copy="Let August Robotics map your space or send us your digital floor plan"
            number="1"
            borderColor="border-arblue"
            bgColor="bg-arblue"
            height="h-[440px] lg:h-[440px] xl:h-[560px]"
          ></Sequencecard>
          <Sequencecard
            iconPath="/icons/usediego-setup.svg"
            imagePath="bg-[url('/usediego-setup.webp')]"
            title-color="text-arblue"
            title="Set up disinfection"
            copy="Use Diego’s touchscreen to command instant disinfection or set up an automatic disinfection schedule "
            number="2"
            color="arblue"
            borderColor="border-arblue"
            bgColor="bg-arblue"
            height="h-[440px] lg:h-[440px] xl:h-[560px]"
          ></Sequencecard>
          <Sequencecard
            iconPath="/icons/usediego-run.svg"
            imagePath="bg-[url('/usediego-run.webp')]"
            title-color="text-arblue"
            title="Run the job"
            copy="Let Diego navigate around the unoccupied space, powerfully and efficiently disinfecting air and surfaces"
            number="3"
            color="arblue"
            borderColor="border-arblue"
            bgColor="bg-arblue"
            height="h-[440px] lg:h-[440px] xl:h-[560px]"
          ></Sequencecard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
