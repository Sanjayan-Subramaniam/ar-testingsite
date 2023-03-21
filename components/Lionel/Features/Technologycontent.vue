<template>
  <div>
    <div class="flex flex-col w-full lg:flex-row bg-argray/5">
      <div
        class="w-full h-[200px] lg:h-[320px] bg-[url('/journey-research.webp')] bg-cover bg-center transition-all duration-1000 ease-in-out"
      ></div>
      <div class="w-full h-[240px] lg:h-full p-6 flex flex-col gap-y-3">
        <div class="flex flex-row items-center gap-x-4">
          <div class="basis-2/6">
            <div
              class="flex flex-col border-arprimary bg-white border-4 rounded-md h-20 w-20 justify-center items-center"
            >
              <img
                :src="iconPath"
                alt=""
                srcset=""
                class="w-12 transition-all duration-1000 ease-in-out"
              />
            </div>
          </div>
          <div class="flex flex-col justify-end">
            <h4
              class="basis-4/6 text-[20px] lg:text-desktopCopy text-arprimary text-left font-medium transition-all duration-1000 ease-in-out"
            >
              {{ title }}
            </h4>
          </div>
        </div>
        <div>
          <p
            class="text-mobileCopy lg:text-desktopCopy transition-all duration-1000 ease-in-out"
          >
            {{ copy }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  iconPath: String,
  copy: String,
});
</script>

<style lang="scss" scoped></style>
