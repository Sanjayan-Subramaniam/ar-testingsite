<template>
  <div class="mx-auto w-[280px] md:w-[560px] xl:w-[420px]">
    <p
      class="text-mobileCopy lg:text-desktopCopy text-center font-regular leading-normal"
      :class="`${textColor} ${textAlign}`"
    >
      <slot />
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  textColor: {
    type: String,
    default: "text-arblack",
  },
  textAlign: {
    type: String,
    default: "text-center",
  },
});
</script>
