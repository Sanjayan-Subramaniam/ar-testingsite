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
          class="container mx-auto pr-3 transition-all duration-1000 ease-in-out"
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
              <div
                class="w-[4px] bg-argray h-full"
                :class="state === '1' ? 'bg-arprimary' : 'bg-argray'"
              ></div>
              <div
                class="ring-4 w-8 h-8 rounded-full z-10 absolute bg-white"
                :class="state === '1' ? ' ring-arprimary ' : ' ring-argray'"
              ></div>
            </div>
            <div
              class="flex flex-col lg:justify-center col-span-4 row-start-1 col-start-4 lg:col-start-3 lg:col-span-2 gap-y-3"
            >
              <h4
                class="text-desktopCopy lg:text-[32px] text-arprimary font-medium"
              >
                Early 2022
              </h4>
              <p class="text-[12px] text-arblack">Lionel Idea</p>
            </div>
            <img
              class="bg-center basis-2/6 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 lg:mb-6 object-cover lg:h-[200px] lg:w-[480px]"
              src="/journey-lioneldevelopment.jpg"
            />
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy xl:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>
                A small team of engineers, led by Founder Alex Wyatt, begins
                work on the Lionel project
              </p>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto pr-3 transition-all duration-1000 ease-in-out"
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
              <div
                class="w-[4px] bg-argray h-full"
                :class="state === '2' ? 'bg-arprimary' : 'bg-argray'"
              ></div>
              <div
                class="ring-4 w-8 h-8 rounded-full z-10 absolute bg-white"
                :class="state === '2' ? ' ring-arprimary ' : ' ring-argray'"
              ></div>
            </div>
            <div
              class="flex flex-col lg:justify-center col-span-4 row-start-1 col-start-4 lg:col-start-3 lg:col-span-2 gap-y-3"
            >
              <h4
                class="text-desktopCopy lg:text-[32px] text-arprimary font-medium"
              >
                Mid 2018
              </h4>
              <p class="text-[12px] text-arblack">Seed funding raised</p>
            </div>
            <img
              class="bg-center basis-2/6 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 lg:mb-6 object-cover lg:h-[200px] lg:w-[480px]"
              src="/journey-seed.jpeg"
            />
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy xl:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>August Robotics raises $4M in seed funding</p>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto pr-3 transition-all duration-1000 ease-in-out"
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
              <div
                class="w-[4px] bg-argray h-full"
                :class="state === '3' ? 'bg-arprimary' : 'bg-argray'"
              ></div>
              <div
                class="ring-4 w-8 h-8 rounded-full z-10 absolute bg-white"
                :class="state === '3' ? ' ring-arprimary ' : ' ring-argray'"
              ></div>
            </div>
            <div
              class="flex flex-col lg:justify-center col-span-4 row-start-1 col-start-4 lg:col-start-3 lg:col-span-2 gap-y-3"
            >
              <h4
                class="text-desktopCopy lg:text-[32px] text-arprimary font-medium"
              >
                Mid 2019
              </h4>
              <p class="text-[12px] text-arblack">Lionel prototype released</p>
            </div>
            <img
              class="bg-center basis-2/6 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 lg:mb-6 object-cover lg:h-[200px] lg:w-[480px]"
              src="/journey-lionelprototype.jpg"
            />
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy xl:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>
                August Robotics releases the first version of Lionel, a floor
                marking robot for the exhibition industry
              </p>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto pr-3 transition-all duration-1000 ease-in-out"
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
              <div
                class="w-[4px] bg-argray h-full"
                :class="state === '4' ? 'bg-arprimary' : 'bg-argray'"
              ></div>
              <div
                class="ring-4 w-8 h-8 rounded-full z-10 absolute bg-white"
                :class="state === '4' ? ' ring-arprimary ' : ' ring-argray'"
              ></div>
            </div>
            <div
              class="flex flex-col lg:justify-center col-span-4 row-start-1 col-start-4 lg:col-start-3 lg:col-span-2 gap-y-3"
            >
              <h4
                class="text-desktopCopy lg:text-[32px] text-arprimary font-medium"
              >
                Early 2020
              </h4>
              <p class="text-[12px] text-arblack">Pandemic crisis</p>
            </div>
            <img
              class="bg-center basis-2/6 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 lg:mb-6 object-cover lg:h-[200px] lg:w-[480px]"
              src="/journey-diego.jpg"
            />
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy xl:text-desktopCopy pb-6 lg:pb-0"
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
          class="container mx-auto pr-3 transition-all duration-1000 ease-in-out"
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
              <div
                class="w-[4px] bg-argray h-full"
                :class="state === '5' ? 'bg-arprimary' : 'bg-argray'"
              ></div>
              <div
                class="ring-4 w-8 h-8 rounded-full z-10 absolute bg-white"
                :class="state === '5' ? ' ring-arprimary ' : ' ring-argray'"
              ></div>
            </div>
            <div
              class="flex flex-col lg:justify-center col-span-4 row-start-1 col-start-4 lg:col-start-3 lg:col-span-2 gap-y-3"
            >
              <h4
                class="text-desktopCopy lg:text-[32px] text-arprimary font-medium"
              >
                Late 2020
              </h4>
              <p class="text-[12px] text-arblack">Diego released</p>
            </div>
            <img
              class="bg-center basis-2/6 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 lg:mb-6 object-cover lg:h-[200px] lg:w-[480px]"
              src="/journey-diego.png"
            />
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy xl:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>
                August Robotics releases the first version of Diego, a
                disinfection robot
              </p>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto pr-3 transition-all duration-1000 ease-in-out"
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
              <div
                class="w-[4px] bg-argray h-full"
                :class="state === '6' ? 'bg-arprimary' : 'bg-argray'"
              ></div>
              <div
                class="ring-4 w-8 h-8 rounded-full z-10 absolute bg-white"
                :class="state === '6' ? ' ring-arprimary ' : ' ring-argray'"
              ></div>
            </div>
            <div
              class="flex flex-col lg:justify-center col-span-4 row-start-1 col-start-4 lg:col-start-3 lg:col-span-2 gap-y-3"
            >
              <h4
                class="text-desktopCopy lg:text-[32px] text-arprimary font-medium"
              >
                Mid 2020
              </h4>
              <p class="text-[12px] text-arblack">Series A funding</p>
            </div>
            <img
              class="bg-center basis-2/6 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 lg:mb-6 object-cover lg:h-[200px] lg:w-[480px]"
              src="/journey-seriesa.jpg"
            />
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy xl:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>
                August Robotics raises an additional $10M in Series A funding
              </p>
            </div>
          </div>
        </div>
        <div
          class="container mx-auto pr-3 transition-all duration-1000 ease-in-out"
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
              <div
                class="w-[4px] bg-argray h-full"
                :class="state === '7' ? 'bg-arprimary' : 'bg-argray'"
              ></div>
              <div
                class="ring-4 w-8 h-8 rounded-full z-10 absolute bg-white"
                :class="state === '7' ? ' ring-arprimary ' : ' ring-argray'"
              ></div>
            </div>
            <div
              class="flex flex-col lg:justify-center col-span-4 row-start-1 col-start-4 lg:col-start-3 lg:col-span-2 gap-y-3"
            >
              <h4
                class="text-desktopCopy lg:text-[32px] text-arprimary font-medium"
              >
                Late 2022
              </h4>
              <p class="text-[12px] text-arblack">Lionel for construction</p>
            </div>
            <img
              class="bg-center basis-2/6 col-start-8 col-span-4 lg:col-start-5 lg:col-span-4 lg:mb-6 object-cover lg:h-[200px] lg:w-[480px]"
              src="/journey-lionelconstruction.jpg"
            />
            <div
              class="flex flex-col lg:justify-center row-start-2 col-start-4 col-span-8 lg:row-start-1 lg:col-start-9 lg:col-span-4 text-mobileCopy xl:text-desktopCopy pb-6 lg:pb-0"
            >
              <p>
                August Robotics releases a version of Lionel optimised for
                marking layout for the construction industry
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
