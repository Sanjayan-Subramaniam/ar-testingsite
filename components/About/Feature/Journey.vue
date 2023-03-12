<template>
  <div class="container mx-auto">
    <div class="flex flex-col gap-y-12">
      <div
        class="flex flex-col items-center gap-y-6 lg:gap-y-9 lg:w-[800px] mx-auto"
      >
        <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">
          Our Journey
        </h2>
      </div>
      <div>
        <div
          class="container mx-auto pr-3"
          @mouseover="changeState('1')"
          @click="changeState('1')"
          :class="state === '1' ? 'opacity-100' : 'opacity-20'"
        >
          <div
            class="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-x-3 gap-y-3"
          >
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
              <h4 class="text-desktopCopy font-medium">Early 2018</h4>
              <p class="text-[12px]">Early 2018</p>
            </div>
            <div
              class="bg-center basis-2/6 row-start-1 row-span-1 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 bg-cover lg:h-[200px] lg:mb-6 bg-[url('assets/img/Mine.png')]"
            ></div>
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy lg:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>
                Covid-19 pandemic shuts down the global exhibition industry and
                customer demand, providing focused time for August Robotics to
                advance R&D
              </p>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto pr-3"
          @mouseover="changeState('2')"
          @click="changeState('2')"
          :class="state === '2' ? 'opacity-100' : 'opacity-20'"
        >
          <div
            class="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-x-3 gap-y-3"
          >
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
              <h4 class="text-desktopCopy font-medium">Early 2018</h4>
              <p class="text-[12px]">Early 2018</p>
            </div>
            <div
              class="bg-center basis-2/6 row-start-1 row-span-1 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 bg-cover lg:h-[200px] lg:mb-6 bg-[url('assets/img/Mine.png')]"
            ></div>
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy lg:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>
                Covid-19 pandemic shuts down the global exhibition industry and
                customer demand, providing focused time for August Robotics to
                advance R&D
              </p>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto pr-3"
          @mouseover="changeState('3')"
          @click="changeState('3')"
          :class="state === '3' ? 'opacity-100' : 'opacity-20'"
        >
          <div
            class="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-x-3 gap-y-3"
          >
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
              <h4 class="text-desktopCopy font-medium">Early 2018</h4>
              <p class="text-[12px]">Early 2018</p>
            </div>
            <div
              class="bg-center basis-2/6 row-start-1 row-span-1 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 bg-cover lg:h-[200px] lg:mb-6 bg-[url('assets/img/Mine.png')]"
            ></div>
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy lg:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>
                Covid-19 pandemic shuts down the global exhibition industry and
                customer demand, providing focused time for August Robotics to
                advance R&D
              </p>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto pr-3"
          @mouseover="changeState('4')"
          @click="changeState('4')"
          :class="state === '4' ? 'opacity-100' : 'opacity-20'"
        >
          <div
            class="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-x-3 gap-y-3"
          >
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
              <h4 class="text-desktopCopy font-medium">Early 2018</h4>
              <p class="text-[12px]">Early 2018</p>
            </div>
            <div
              class="bg-center basis-2/6 row-start-1 row-span-1 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 bg-cover lg:h-[200px] lg:mb-6 bg-[url('assets/img/Mine.png')]"
            ></div>
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy lg:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>
                Covid-19 pandemic shuts down the global exhibition industry and
                customer demand, providing focused time for August Robotics to
                advance R&D
              </p>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto pr-3"
          @mouseover="changeState('5')"
          @click="changeState('5')"
          :class="state === '5' ? 'opacity-100' : 'opacity-20'"
        >
          <div
            class="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-x-3 gap-y-3"
          >
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
              <h4 class="text-desktopCopy font-medium">Early 2018</h4>
              <p class="text-[12px]">Early 2018</p>
            </div>
            <div
              class="bg-center basis-2/6 row-start-1 row-span-1 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 bg-cover lg:h-[200px] lg:mb-6 bg-[url('assets/img/Mine.png')]"
            ></div>
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy lg:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>
                Covid-19 pandemic shuts down the global exhibition industry and
                customer demand, providing focused time for August Robotics to
                advance R&D
              </p>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto pr-3"
          @mouseover="changeState('6')"
          @click="changeState('6')"
          :class="state === '6' ? 'opacity-100' : 'opacity-20'"
        >
          <div
            class="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-x-3 gap-y-3"
          >
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
              <h4 class="text-desktopCopy font-medium">Early 2018</h4>
              <p class="text-[12px]">Early 2018</p>
            </div>
            <div
              class="bg-center basis-2/6 row-start-1 row-span-1 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 bg-cover lg:h-[200px] lg:mb-6 bg-[url('assets/img/Mine.png')]"
            ></div>
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy lg:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>
                Covid-19 pandemic shuts down the global exhibition industry and
                customer demand, providing focused time for August Robotics to
                advance R&D
              </p>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto pr-3"
          @mouseover="changeState('7')"
          @click="changeState('7')"
          :class="state === '7' ? 'opacity-100' : 'opacity-20'"
        >
          <div
            class="grid grid-cols-12 grid-rows-2 lg:grid-rows-1 gap-x-3 gap-y-3"
          >
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
              <h4 class="text-desktopCopy font-medium">Early 2018</h4>
              <p class="text-[12px]">Early 2018</p>
            </div>
            <div
              class="bg-center basis-2/6 row-start-1 row-span-1 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 bg-cover lg:h-[200px] lg:mb-6 bg-[url('assets/img/Mine.png')]"
            ></div>
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy lg:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>
                Covid-19 pandemic shuts down the global exhibition industry and
                customer demand, providing focused time for August Robotics to
                advance R&D
              </p>
            </div>
          </div>
        </div>
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
</script>
