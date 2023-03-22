<template>
  <div class="container w-[90%] lg:w-[1000px] mx-auto">
    <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">
      Working at August Robotics
    </h2>
    <SectionSpacer></SectionSpacer> <SectionSpacer></SectionSpacer>

    <div class="shadow-md bg-white mb-12 rounded-xl p-6">
      <div
        class="flex flex-row flex-wrap gap-x-3 gap-y-3 justify-center lg:justify-between"
      >
        <CareersFeatureWorkingbutton
          :icon-image="
            state === '1'
              ? '/icons/earthicongreen.svg'
              : '/icons/earthicongray.svg'
          "
          title="Collaborative"
          :currentState="state === '1' ? 'active' : 'inactive'"
          @mouseover="changeState('1')"
          @click="changeState('1')"
        ></CareersFeatureWorkingbutton>
        <CareersFeatureWorkingbutton
          :icon-image="
            state === '2' ? '/icons/agilegreen.svg' : '/icons/agilegray.svg'
          "
          title="Agile"
          :currentState="state === '2' ? 'active' : 'inactive'"
          @mouseover="changeState('2')"
          @click="changeState('2')"
        ></CareersFeatureWorkingbutton>
        <CareersFeatureWorkingbutton
          :icon-image="
            state === '3'
              ? '/icons/spartanhelmetgreen.svg'
              : '/icons/spartanhelmetgray.svg'
          "
          title="Bold"
          :currentState="state === '3' ? 'active' : 'inactive'"
          @mouseover="changeState('3')"
          @click="changeState('3')"
        ></CareersFeatureWorkingbutton>
        <CareersFeatureWorkingbutton
          :icon-image="
            state === '4'
              ? '/icons/inclusivegreen.svg'
              : '/icons/inclusivegray.svg'
          "
          title="Inclusive"
          :currentState="state === '4' ? 'active' : 'inactive'"
          @mouseover="changeState('4')"
          @click="changeState('4')"
        ></CareersFeatureWorkingbutton>
      </div>
    </div>

    <div class="shadow-md bg-white rounded-xl relative">
      <CareersFeatureWorkingcontent
        :title="workingContent[state - 1].title"
        :imagePath="workingContent[state - 1].imagePath"
        :workingCopy="workingContent[state - 1].workingCopy"
      />
    </div>
  </div>
</template>

<script setup>
let state = ref("1");

const changeState = (newState) => {
  state.value = newState;
  console.log(state.value);
};

const workingContent = [
  {
    title: "We honor teamwork",
    imagePath: "/working-collaborative.webp",
    workingCopy:
      "At August Robotics, we believe that diversity is the spark for innovation and impact. We have brought together a team of top engineers and business professionals from around the world, each with unique backgrounds and a common passion for robotics.",
  },
  {
    title: "We are always moving",
    imagePath: "/working-agile.webp",
    workingCopy:
      "As a young tech startup, we are quick to make decisions, quick to execute and quick to pivot. From developing new robots to launching in untested markets, every day brings a new set of challenges and opportunities – change is the only constant.",
  },
  {
    title: "We challenge convention",
    imagePath: "/working-bold.webp",
    workingCopy:
      "We pride ourselves on having the courage and optimism to take risks and moon-shots. Whether you are an engineer pursuing a breakthrough or a strategist seeking a new robot idea, everyone is an inventor.",
  },
  {
    title: "Everyone has a say",
    imagePath: "/working-inclusive.webp",
    workingCopy:
      "Our small team size means everyone has outsized influence on the, trajectory of the company. We make big strategic decisions every day – from what robot to build to what market to enter – and everyone, nomatter their role or seniority, has a say.",
  },
];
</script>
