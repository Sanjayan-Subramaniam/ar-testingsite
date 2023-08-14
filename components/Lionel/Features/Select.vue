<template>
  <div>
    <nuxt-link :class="styles" :to="buttonLink">
      <!-- <h2 class="my-auto text-center text-sm text-white lg:text-2xl">
        {{ title }}
      </h2> -->
      <TypographyHeadingtwo class="text-center" text-color="ardarkgreen">{{
        title
      }}</TypographyHeadingtwo>

      <p>{{ copy }}</p>
      <ButtonVisit />
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  buttonLink: String,
  styles: String,
  title: String,
  copy: String,
});
</script>

<style lang="scss" scoped></style>
