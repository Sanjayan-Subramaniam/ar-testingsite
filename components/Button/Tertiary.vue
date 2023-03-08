<template>
  <button
    class="tracking-wider text-base min-w-32 lg:w-40 lg:text-lg border-2 border-arprimary rounded-lg px-4 py-3 text-arprimary hover:bg-arblack hover:border-argray hover:border-2 hover:text-white hover:translate-y-[-0.5rem] transition-all duration-50 ease-linear"
  >
    {{ buttonText }}
  </button>
</template>

<script setup>
defineProps({
  buttonText: String,
});
</script>

<style lang="scss" scoped></style>
