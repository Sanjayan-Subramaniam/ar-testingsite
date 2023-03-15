<template>
  <nuxt-link
    class="text-center tracking-wider text-base max-w-[160px] max-h-[56px] lg:text-lg rounded-lg bg-arprimary px-3 py-3 text-white hover:bg-white hover:border-black hover:border hover:text-arblack transition-all duration-50 ease-linear"
    :to="linkLocation"
  >
    {{ buttonCopy }}
  </nuxt-link>
</template>

<script setup>
defineProps({
  linkLocation: {
    type: String,
    default: "https://form.formcan.com/fr5r920fujg/",
  },
  buttonCopy: {
    type: String,
    default: "Speak to us",
  },
});
</script>
<style></style>
