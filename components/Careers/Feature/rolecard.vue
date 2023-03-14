<template>
  <div class="container mx-auto w-[80%] lg:w-[1000px]">
    <div class="shadow-md bg-white mx-auto">
      <div class="flex lg:flex-row flex-col p-6 gap-y-6">
        <div
          class="flex flex-row justify-around lg:items-start lg:flex-col basis-1/4 lg:justify-center items-center gap-y-6"
        >
          <div
            class="flex flex-col lg:flex-row items-center justify-start gap-x-3 gap-y-3"
          >
            <img :src="flag" class="h-[12]" />
            <p class="text-ardarkgray text-[12px]">{{ country }}</p>
          </div>
          <div
            class="flex flex-col lg:flex-row items-center justify-start gap-x-3 gap-y-3"
          >
            <img :src="iconType" class="h-[4]" />
            <p class="text-ardarkgray text-[12px]">{{ roleType }}</p>
          </div>
        </div>
        <div class="flex flex-col basis-3/4 gap-y-6">
          <hr class="lg:hidden" />
          <h4 class="text-mobileCopy lg:text-desktopCopy">{{ roleTitle }}</h4>
          <p class="max-w-[640px] text-arblack">{{ roleDescription }}</p>

          <ButtonDownloadjobdescription
            :to="jdLink"
          ></ButtonDownloadjobdescription>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  roleTitle: String,
  country: String,
  flag: String,
  roleType: String,
  iconType: String,
  roleDescription: String,
  jdLink: String,
});
</script>

<style lang="scss" scoped></style>
