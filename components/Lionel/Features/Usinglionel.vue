<template>
  <div>
    <div class="container mx-auto">
      <div class="flex flex-col">
        <div
          class="flex flex-col items-center gap-y-6 lg:gap-y-9 lg:w-[800px] mx-auto"
        >
          <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">
            How to use Lionel
          </h2>
          <p
            class="text-center text-mobileCopy lg:text-desktopCopy text-arblack w-[270px] md:w-full"
          >
            Using Lionel is very simple and does not require technical knowledge
            <br />
            <br />
            Unlock the benefits of robotic marking in three easy steps
          </p>
        </div>
        <SectionSpacer />
        <div
          class="flex flex-col lg:flex-row justify-between gap-y-16 items-center"
        >
          <Sequencecard
            iconPath="/icons/uselionel-upload.svg"
            imagePath="bg-[url('/uselionel-upload.webp')]"
            title="Upload floor plan"
            copy="Send your floorplan CAD file to Lionel or via our User Portal"
            number="1"
            borderColor="border-arprimary"
            bgColor="bg-arprimary"
            titleColor="text-arprimary"
            height="h-[420px] lg:h-[420px] xl:h-[480px]"
          ></Sequencecard>
          <Sequencecard
            iconPath="/icons/uselionel-setup.svg"
            imagePath="bg-[url('/uselionel-setup.webp')]"
            title="Set up on site"
            copy="Set up the Lionel system on site and calibrate Lionel so it is ready to run"
            number="2"
            borderColor="border-arprimary"
            bgColor="bg-arprimary"
            titleColor="text-arprimary"
            height="h-[420px] lg:h-[420px] xl:h-[480px]"
          ></Sequencecard>
          <Sequencecard
            iconPath="/icons/uselionel-run.svg"
            imagePath="bg-[url('/uselionel-run.webp')]"
            title="Run the job"
            copy="Watch Lionel navigate around the hall, avoiding obstacles and placing each mark with millimetre precision"
            number="3"
            borderColor="border-arprimary"
            bgColor="bg-arprimary"
            titleColor="text-arprimary"
            height="h-[420px] lg:h-[420px] xl:h-[480px]"
          ></Sequencecard>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
