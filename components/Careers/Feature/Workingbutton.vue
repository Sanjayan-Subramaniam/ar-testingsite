<template>
  <div>
    <div
      class="w-28 md:w-44 flex flex-col justify-center items-center h-20 rounded-lg shadow-lg"
      :class="currentState === 'active' ? 'bg-arprimary/20 border' : 'bg-white'"
    >
      <nuxt-img :src="iconImage" alt="" class="w-10"></nuxt-img>
      <h4 :class="currentState === 'active' ? 'text-arprimary' : 'text-argray'">
        {{ title }}
      </h4>
    </div>
  </div>
</template>

<script setup>
defineProps({
  iconImage: String,
  title: String,
  currentState: String,
});
</script>

<style lang="scss" scoped></style>
