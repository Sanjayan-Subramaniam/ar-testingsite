<template>
  <nuxt-link
    class="tracking-wider text-center text-base min-w-32 lg:w-40 max-h-[56px] lg:text-lg rounded-lg bg-arblack px-4 py-3 text-white hover:bg-white hover:border-arprimary hover:border-2 hover:text-arprimary transition-all duration-50 ease-linear"
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
