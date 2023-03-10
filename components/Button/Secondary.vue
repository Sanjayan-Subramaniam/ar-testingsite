<template>
  <button
    class="tracking-wider text-base min-w-32 lg:w-40 max-h-[56px] lg:text-lg rounded-lg bg-arblack px-4 py-3 text-white hover:bg-white hover:border-arprimary hover:border-2 hover:text-arprimary transition-all duration-50 ease-linear"
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
