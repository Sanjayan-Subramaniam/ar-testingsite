<template>
  <div
    class="container mx-auto pr-3 transition-all duration-1000 ease-in-out"
    @mouseover="changeState('state')"
    @click="changeState('state')"
    :class="state === 'state' ? 'opacity-100' : 'opacity-20'"
  >
    <div class="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-x-3 gap-y-3">
      <div
        class="col-start-1 col-span-3 row-span-2 lg:col-span-2 lg:row-span-1 relative flex flex-col justify-center items-center"
      >
        <div
          class="w-[4px] bg-argray h-full"
          :class="state === 'state' ? 'bg-arprimary' : 'bg-argray'"
        ></div>
        <div
          class="ring-4 w-8 h-8 rounded-full z-10 absolute bg-white"
          :class="state === 'state' ? ' ring-arprimary ' : ' ring-argray'"
        ></div>
      </div>
      <div
        class="flex flex-col lg:justify-center col-span-4 row-start-1 col-start-4 lg:col-start-3 lg:col-span-2 gap-y-3"
      >
        <h4 class="text-desktopCopy lg:text-[32px] text-arprimary font-medium">
          {{ time }}
        </h4>
        <p class="text-[16px] text-arblack">{{ event }}</p>
      </div>
      <img
        class="bg-center basis-2/6 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 lg:mb-6 object-cover w-[100px] h-[100px] lg:h-[200px] lg:w-[480px]"
        :src="src"
      />
      <div
        class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy xl:text-desktopCopy pb-6 lg:pb-0"
      >
        <p class="text-mobileCopy lg:text-desktopCopy">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
let state = ref("1");

const changeState = (newState) => {
  state.value = newState;
  console.log(state.value);
};

defineProps({
  state: String,
  event: String,
  src: String,
  time: String,
  description: String,
});
</script>

<style lang="scss" scoped></style>
