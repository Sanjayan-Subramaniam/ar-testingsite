<template>
  <button
    class="tracking-wider text-base w-32 lg:w-40 lg:text-lg rounded-lg bg-arblack px-4 py-3 text-white hover:bg-white hover:border-arprimary hover:border-2 hover:text-arprimary hover:translate-y-[-0.5rem] transition-all duration-50 ease-linear"
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
