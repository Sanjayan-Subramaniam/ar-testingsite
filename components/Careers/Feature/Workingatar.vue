<template>
  <div class="container w-[1000px] mx-auto">
    <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">
      Working at August Robotics
    </h2>
    <SectionSpacer></SectionSpacer> <SectionSpacer></SectionSpacer>

    <div class="shadow-md bg-white mb-12 rounded-xl p-6">
      <div class="flex flex-row justify-between flex-wrap">
        <CareersFeatureWorkingbutton
          class="basis-1/4"
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
          class="basis-1/4"
          :icon-image="
            state === '2' ? '/icons/agilegreen.svg' : '/icons/agilegray.svg'
          "
          title="Agile"
          :currentState="state === '2' ? 'active' : 'inactive'"
          @mouseover="changeState('2')"
          @click="changeState('2')"
        ></CareersFeatureWorkingbutton>
        <CareersFeatureWorkingbutton
          class="basis-1/4"
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
          class="basis-1/4"
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
        v-if="state === '1'"
        title="We honor teamwork"
        imagePath="/working-collaborative.webp"
        workingCopy="Our small team size means everyone has outsized influence on the
          trajectory of the company. We make big strategic decisions every day –
          from what robot to build to what market to enter – and everyone, no
          matter their role or seniority, has a say."
      />
      <CareersFeatureWorkingcontent
        v-else-if="state === '2'"
        title="We are always moving"
        image-path="/working-agile.webp"
        working-copy="Our small team size means everyone has outsized influence on the
          trajectory of the company. We make big strategic decisions every day –
          from what robot to build to what market to enter – and everyone, no
          matter their role or seniority, has a say."
      />
      <CareersFeatureWorkingcontent
        v-else-if="state === '3'"
        title="We challenge convention"
        image-path="/working-bold.webp"
        working-copy="Our small team size means everyone has outsized influence on the
          trajectory of the company. We make big strategic decisions every day –
          from what robot to build to what market to enter – and everyone, no
          matter their role or seniority, has a say."
      />
      <CareersFeatureWorkingcontent
        v-else-if="state === '4'"
        title="Everyone has a say"
        image-path="/working-inclusive.webp"
        working-copy="Our small team size means everyone has outsized influence on the
          trajectory of the company. We make big strategic decisions every day –
          from what robot to build to what market to enter – and everyone, no
          matter their role or seniority, has a say."
      />
    </div>
    <!-- <div class="shadow-md bg-white mx-auto w-[90%] lg:w-full">
        <div class="flex flex-col lg:flex-row-reverse">
          <nuxt-img
            class="h-[120px] object-cover obejct-center lg:h-[320px] lg:w-[50%]"
            src="/Mine.png"
          ></nuxt-img>

          <div v-if="state === '1'" class="flex-flex-col px-6 py-6 lg:w-[80%]">
            <h4 class="text-arprimary text-[20px]">Diverse</h4>
            <p class="w-full text-mobileCopy">
              At August Robotics, we believe that diversity is the spark for
              innovation and impact. We have brought together a team of top
              engineers and business professionals from around the world, each
              with unique backgrounds and a common passion for robotics.
            </p>
          </div>
          <div
            v-else-if="state === '2'"
            class="flex-flex-col px-6 py-6 lg:w-[80%]"
          >
            <h4 class="text-arprimary text-[20px]">Diverse</h4>
            <p class="w-full text-mobileCopy">
              As a young tech startup, we are quick to make decisions, quick to
              execute and quick to pivot. From developing new robots to
              launching in untested markets, every day brings a new set of
              challenges and opportunities – change is the only constant.
            </p>
          </div>
        </div>
      </div> -->

    <!-- 
    <div class="grid grid-cols-12 grid-rows-6 gap-y-3">
      <div
        class="shadow-md bg-white col-start-2 col-span-10 lg:col-start-1 lg:col-span-12"
      >
        <div
          class="flex flex-row flex-wrap justify-around items-center gap-y-6 gap-x-6"
        >
          <div
            class="basis-[45%] lg:basis-[20%] flex flex-col justify-center items-center w-32 h-16 rounded-lg border"
          >
            <img src="~/assets/img/icons/phone.svg" alt="" class="w-6" />
            <h4>Diverse</h4>
          </div>
          <div
            class="basis-[45%] lg:basis-[20%] flex flex-col justify-center items-center w-32 h-16 rounded-lg border"
          >
            <img src="~/assets/img/icons/phone.svg" alt="" class="w-6" />
            <h4>Diverse</h4>
          </div>
          <div
            class="basis-[45%] lg:basis-[20%] flex flex-col justify-center items-center w-32 h-16 rounded-lg border"
          >
            <img src="~/assets/img/icons/phone.svg" alt="" class="w-6" />
            <h4>Diverse</h4>
          </div>
          <div
            class="basis-[45%] lg:basis-[20%] flex flex-col justify-center items-center w-32 h-16 rounded-lg border"
          >
            <img src="~/assets/img/icons/phone.svg" alt="" class="w-6" />
            <h4>Diverse</h4>
          </div>
        </div>
      </div>
      <div
        class="shadow-md bg-white col-start-2 col-span-10 row-start-2 row-span-2"
      >
        <div class="flex flex-col">
          <div
            class="h-[120px] bg-cover bg-center bg-[url('assets/img/Mine.png')]"
          ></div>

          <div class="flex-flex-col p-6">
            <h4 class="text-arprimary text-[20px]">Diverse</h4>
            <p class="w-full text-mobileCopy">
              At August Robotics, we believe that diversity is the spark for
              innovation and impact. We have brought together a team of top
              engineers and business professionals from around the world, each
              with unique backgrounds and a common passion for robotics.
            </p>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup>
let state = ref("1");

const changeState = (newState) => {
  state.value = newState;
  console.log(state.value);
};
</script>
