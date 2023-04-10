<template>
  <div class="container mx-auto">
    <div class="flex flex-col gap-y-12">
      <div
        class="flex flex-col items-center gap-y-6 lg:gap-y-9 lg:w-[800px] mx-auto"
      >
        <h2 class="text-center text-3xl text-arprimary md:text-5xl">
          How to use Lionel
        </h2>
        <p
          class="text-center text-mobileCopy lg:text-desktopCopy text-arblack w-[270px] md:w-full"
        >
          Interested in Lionel’s technology?
          <br /><br />
          Here are the main features that provide it with unparalleled autonomy,
          flexibility and simplicity
          <br /><br />
        </p>
      </div>
    </div>
    <div
      class="w-[320px] lg:w-[800px] h-[1200px] lg:h-[800px] mx-auto flex flex-col bg-white shadow-lg rounded-lg"
    >
      <LionelFeaturesTechnologycontent
        :title="lionelTechContent[state - 1].title"
        :icon-path="lionelTechContent[state - 1].iconPath"
        :copy="lionelTechContent[state - 1].copy"
        :image-path="lionelTechContent[state - 1].imagePath"
        :video-path="lionelTechContent[state - 1].videoPath"
      />
      <div
        class="flex flex-row flex-wrap gap-x-2 lg:gap-x-12 gap-y-12 lg:p-6 mx-auto my-auto justify-center items-center"
      >
        <LionelFeaturesTechnologybutton
          @click="changeState(1)"
          title="Map Processing"
          :title-color="state === 1 ? 'text-arprimary' : 'text-argray'"
          icon-widths="w-12 lg:w-16"
          :icon-path="
            state === 1
              ? '/icons/lioneltech-maps-active.svg'
              : '/icons/lioneltech-maps-inactive.svg'
          "
          :button-styles="
            state === 1 ? 'bg-arprimary' : 'bg-white border-argray/50 border-8'
          "
        />
        <LionelFeaturesTechnologybutton
          @click="changeState(2)"
          title="Accurate Localisation"
          :title-color="state === 2 ? 'text-arprimary' : 'text-argray'"
          icon-widths="w-12 lg:w-16"
          :icon-path="
            state === 2
              ? '/icons/lioneltech-localisation-active.svg'
              : '/icons/lioneltech-localisation-inactive.svg'
          "
          :button-styles="
            state === 2 ? 'bg-arprimary' : 'bg-white border-argray/50 border-8'
          "
        />
        <LionelFeaturesTechnologybutton
          @click="changeState(3)"
          title="Advanced Obstacle Avoidance"
          :title-color="state === 3 ? 'text-arprimary' : 'text-argray'"
          icon-widths="w-12 lg:w-16"
          :icon-path="
            state === 3
              ? '/icons/lioneltech-obstacle-active.svg'
              : '/icons/lioneltech-obstacle-inactive.svg'
          "
          :button-styles="
            state === 3 ? 'bg-arprimary' : 'bg-white border-argray/50 border-8'
          "
        />
        <LionelFeaturesTechnologybutton
          @click="changeState(4)"
          title="Flexible Marking"
          :title-color="state === 4 ? 'text-arprimary' : 'text-argray'"
          icon-widths="w-12 lg:w-16"
          :icon-path="
            state === 4
              ? '/icons/lioneltech-flexible-active.svg'
              : '/icons/lioneltech-flexible-inactive.svg'
          "
          :button-styles="
            state === 4 ? 'bg-arprimary' : 'bg-white border-argray/50 border-8'
          "
        />
        <LionelFeaturesTechnologybutton
          @click="changeState(5)"
          title="Full Mobility"
          :title-color="state === 5 ? 'text-arprimary' : 'text-argray'"
          icon-widths="w-12 lg:w-16"
          :icon-path="
            state === 5
              ? '/icons/lioneltech-mobility-active.svg'
              : '/icons/lioneltech-mobility-inactive.svg'
          "
          :button-styles="
            state === 5 ? 'bg-arprimary' : 'bg-white border-argray/50 border-8'
          "
        />
        <LionelFeaturesTechnologybutton
          @click="changeState(6)"
          title="Fleet Management"
          :title-color="state === 6 ? 'text-arprimary' : 'text-argray'"
          icon-widths="w-12 lg:w-16"
          :icon-path="
            state === 6
              ? '/icons/lioneltech-fleet-active.svg'
              : '/icons/lioneltech-fleet-inactive.svg'
          "
          :button-styles="
            state === 6 ? 'bg-arprimary' : 'bg-white border-argray/50 border-8'
          "
        />
      </div>
    </div>
  </div>
  <SectionSpacer />
</template>

<script setup>
let state = ref(1);

const changeState = (newState) => {
  if (state.value > 7) {
    state.value = state.value % 7;
  } else {
    state.value = newState;
  }

  console.log(state.value);
};

const lionelTechContent = [
  {
    iconPath: "/icons/lioneltech-maps-green.svg",
    videoPath: "/lt-map-processing.webm",
    imagePath: "/lt-map-processing.webp",
    title: "Map Processing",
    copy: "Automatically translates your standard CAD plans to robot language, allowing you to use Lionel without extra work",
  },
  {
    iconPath: "/icons/lioneltech-localisation-green.svg",
    videoPath: "/lt-accurate-localisation.webm",
    title: "Accurate Localisation",
    copy: "Uses August Robotics’ world-leading localisation technology, ensuring your marks are millimetre perfect",
  },
  {
    iconPath: "/icons/lioneltech-obstacle-green.svg",
    videoPath: "/lt-obstacle-avoidance.webm",
    imagePath: "/lt-obstacle-avoidance.webp",
    title: "Advanced Obstacle Avoidance",
    copy: "Has multiple sensors to detect static and dynamic obstacles, allowing Lionel to operate seamlessly and safely in busy environments",
  },
  {
    iconPath: "/icons/lioneltech-flexible-green.svg",
    videoPath: "/lt-flexible-marking.webm",
    imagePath: "/lt-flexible-marking.webp",
    title: "Flexible Marking",
    copy: "Has an innovative spray mechanism, allowing you to mark any symbol on any surface",
  },
  {
    iconPath: "/icons/lioneltech-mobility-green.svg",
    videoPath: "/lt-full-mobility.webm",
    imagePath: "/lt-full-mobility.webp",
    title: "Full Mobility",
    copy: "Has a light footprint and 360 wheels, allowing quick manoeuvring and easy transport",
  },
  {
    iconPath: "/icons/lioneltech-fleet-green.svg",
    videoPath: "/lt-fleet-management.webm",
    imagePath: "/lt-fleet-management.webp",
    title: "Fleet Management",
    copy: "Can work alone or as part of a fleet, allowing you to add extra robots for unlimited efficiency",
  },
];
</script>

<style lang="scss" scoped></style>
