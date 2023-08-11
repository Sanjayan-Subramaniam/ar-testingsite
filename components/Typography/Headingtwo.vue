<template>
  <div>
    <h2
      class="text-[24px] md:text-[28px] lg:text-[36px] xl:text-[48px] font-regular leading-none whitespace-normal tracking-wide container"
      :class="`text-${textColor}`"
    >
      {{ content }}
      <slot></slot>
    </h2>
  </div>
</template>

<script setup>
const props = defineProps({
  textColor: { type: String, default: "arprimary" },
  content: String,
});
</script>
