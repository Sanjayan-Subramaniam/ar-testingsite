<template>
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 gap-y-9">
      <div
        class="order-2 ml-auto mr-auto lg:ml-0 lg:col-start-1 lg:row-start-1 lg:row-span-3"
      >
        <div
          class="flex flex-row lg:flex-col justify-center lg:mr-auto lg:ml-0"
        >
          <img
            :src="imagePath"
            class="w-[70%] md:w-[480px] lg:h-[480px] object-cover rounded-3xl"
          />
        </div>
      </div>
      <div
        class="ml-auto mr-auto lg:mr-0 w-[270px] md:w-[520px] xl:w-[520px]leading-normal font-base order-1 lg:order-first lg:col-start-2"
      >
        <div
          class="flex flex-row lg:justify-start justify-center gap-x-6 lg:gap-x-12"
        >
          <div
            class="flex flex-col h-20 w-20 lg:h-40 lg:w-40 p-3 bg-arblue/30 justify-center items-center translate-y-[-30%] rounded-xl"
          >
            <img :src="iconPath" alt="" srcset="" class="w-12 lg:w-20" />
          </div>
          <h2 class="lg:text-left md:text-5xl text-center text-3xl text-arblue">
            {{ title }}
          </h2>
        </div>
      </div>
      <p
        class="order-3 lg:mr-0 lg:text-left ml-auto mr-auto w-[270px] md:w-[440px] lg:w-[440px] xl:w-[520px] text-center text-mobileCopy lg:text-desktopCopy text-arblack"
      >
        {{ para1 }}} <br /><br />
        {{ para2 }}}<br /><br />
        {{ para3 }}} <br /><br />
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  imagePath: String,
  iconPath: String,
  para1: String,
  para2: String,
  para3: String,
});
</script>

<style scoped></style>
