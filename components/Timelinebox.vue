<template>
  <div class="container mx-auto pr-3">
    <div class="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-x-3 gap-y-3">
      <div
        class="col-start-1 col-span-3 row-span-2 lg:col-span-2 lg:row-span-1 relative flex flex-col justify-center items-center"
      >
        <div class="w-[4px] bg-argray h-full"></div>
        <div
          class="ring-4 bg-white ring-argray w-8 h-8 rounded-full z-10 absolute"
        ></div>
      </div>
      <div
        class="flex flex-col lg:justify-center col-span-4 row-start-1 col-start-4 lg:col-start-3 lg:col-span-2 gap-y-3"
      >
        <h4
          class="text-desktopCopy font-medium"
          :class="activatedState ? activated.title : unactivated.title"
        >
          {{ timelineTime }}
        </h4>
        <p class="text-[12px]">{{ timelineEvent }}</p>
      </div>
      <div
        class="bg-center basis-2/6 row-start-1 row-span-1 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 bg-cover lg:h-[200px] lg:mb-6"
        :class="imagePath"
      ></div>
      <div
        class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy lg:text-desktopCopy pb-6 lg:pb-0"
      >
        <p>
          {{ copy }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  timelineTime: String,
  timelineEvent: String,
  imagePath: String,
  copy: String,
});

let activatedState = false;

const unactivated = {
  title: "text-argray",
  description: "text-argray",
  image: "bg-opacity-10",
  copy: "text-gray",
};

const activated = {
  title: "text-arprimary",
  description: "text-arblack",
  image: "bg-opacity-100",
  copy: "text-arblack",
};

const activate = () => {
  activatedState = true;
  console.log("clicked");
};
</script>
