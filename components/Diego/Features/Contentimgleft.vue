<template>
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 gap-x-6 gap-y-9">
      <div
        class="order-2 ml-auto mr-auto lg:ml-0 lg:col-start-1 lg:row-start-1 lg:row-span-3"
      >
        <div
          class="flex flex-row lg:flex-col justify-center ml-auto lg:mr-auto lg:ml-0 rounded-tl-2xl bg-arblue/40 bg-url bg-blend-overlay bg-cover rounded-xl h-[200px] w-[320px] lg:h-[480px] lg:w-[400px] xl:w-[480px] object-cover"
          :class="bgimagePath"
        ></div>
      </div>
      <div
        class="ml-auto mr-auto lg:mr-0 w-[270px] md:w-[480px] leading-normal font-base order-1 lg:order-first lg:col-start-2"
      >
        <div
          class="flex flex-row lg:justify-start justify-center items-center lg:items-start gap-x-6 lg:gap-x-12"
        >
          <div
            class="flex flex-col h-16 w-16 lg:h-20 lg:w-20 p-3 bg-arblue/30 justify-center items-center lg:translate-y-[-30%] rounded-xl"
          >
            <img :src="iconPath" alt="" srcset="" class="w-12 lg:w-16" />
          </div>
          <h2 class="lg:text-left md:text-3xl text-center text-2xl text-arblue">
            {{ title }}
          </h2>
        </div>
      </div>
      <p
        class="order-3 lg:mr-0 lg:text-left ml-auto mr-auto w-[240px] md:w-[360px] lg:w-[480px] text-center text-mobileCopy lg:text-desktopCopy text-arblack"
      >
        {{ para1 }} <br /><br />
        {{ para2 }}<br /><br />
        {{ para3 }} <br /><br />
        {{ para4 }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  bgimagePath: String,
  iconPath: String,
  para1: String,
  para2: String,
  para3: String,
  para4: String,
});
</script>

<style scoped></style>
