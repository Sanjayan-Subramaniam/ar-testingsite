<template>
  <nuxt-link
    class="tracking-wider text-base text-center min-w-32 lg:w-40 max-h-[56px] lg:text-lg border-2 border-arprimary rounded-lg px-4 py-3 text-arprimary hover:bg-arblack hover:border-argray hover:border-2 hover:text-white transition-all duration-50 ease-linear"
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
