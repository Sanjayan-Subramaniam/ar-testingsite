<template>
  <div>
    <div
      class="w-32 md:w-32 lg:w-40 flex flex-col justify-center items-center h-20 rounded-lg shadow-lg p-6"
      :class="currentState === 'active' ? 'bg-arprimary/20 border' : 'bg-white'"
    >
      <img :src="iconImage" alt="" class="w-10" />
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
