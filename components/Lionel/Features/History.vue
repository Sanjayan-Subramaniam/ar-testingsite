<template>
  <div class="container mx-auto">
    <div class="flex flex-col">
      <div
        class="flex flex-col items-center lg:w-[800px] mx-auto gap-y-6 lg:gap-y-9"
      >
        <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">
          Lionel History
        </h2>
        <p class="text-mobileCopy lg:text-desktopCopy">
          Since 2018, Lionel has made great technological and commercial leaps.
          <br /><br />
          See how Lionel has evolved to become the leading marking robot in the
          world.
        </p>
        <SectionSpacer />
      </div>
      <AboutFeatureTimelinemoment
        @mouseover="changeState('')"
        @click="changeState('state')"
        v-for="timeline in timelines"
        :state="timeline.state"
        :event="timeline.event"
        :src="timeline.src"
        :time="timeline.time"
        :description="timeline.description"
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

const timelines = [
  {
    state: "1",
    event: "Lionel idea",
    src: "/journey-lioneldevelopment.webp",
    time: "Early 2018",
    description:
      "A small team of engineers, led by Founder Alex Wyatt, begins work on the Lionel project",
  },
  {
    state: "2",
    event: "Lionel Stamp Version",
    src: "/lionelhistory-first.webp",
    time: "Mid 2019",
    description:
      "August Robotics releases the first version of Lionel (the stamp robot), capable of stamping booth corners for exhibition halls",
  },
  {
    state: "3",
    event: "First Customer",
    src: "/journey-lionelprototype.webp",
    time: "Late 2019",
    description: "Lionel completes its first commercial job, in Germany",
  },
  {
    state: "4",
    event: "Lionel Pen Version",
    src: "/lionelhistory-pen.webp",
    time: "Mid 2020",
    description:
      "August Robotics releases the second version of Lionel (the pen robot), capable of drawing any symbol on smooth floors",
  },
  {
    state: "5",
    event: "Lionel Spray Version",
    src: "/journey-seriesa.webp",
    time: "Early 2022",
    description:
      "August Robotics releases the third version of Lionel (the spray robot), capable of spraying any symbol on any surface, enabling its adoption on construction sites",
  },
  {
    state: "6",
    event: "Lionel Lease Version",
    src: "/lionelhistory-lease.webp",
    time: "Early 2023",
    description:
      "August Robotics offers, in addition to its existing “service model”, a “lease model”, allowing clients to rent and operate Lionel independently without needing August Robotics engineers on site ",
  },
];
</script>
