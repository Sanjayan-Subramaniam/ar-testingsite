<template>
  <div>
    <h3
      class="uppercase text-argray text-center container text-[14px] lg:text-desktopCopy"
      :class="textColor"
    >
      <slot></slot>
    </h3>
  </div>
</template>

<script setup>
const props = defineProps({
  textColor: {
    type: String,
    default: "text-arblack",
  },
});
</script>
