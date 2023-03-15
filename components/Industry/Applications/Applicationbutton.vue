<template>
  <div>
    <nuxt-link
      class="mx-auto grid h-20 w-[80%] grid-cols-12 items-center border-0 bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:w-[90%] hover:border-4 hover:border-arsecondary"
      :to="to"
      :class="styles"
    >
      <p
        class="col-start-2 pl-[30%] font-medium text-white text-mobileCopy lg:text-desktopCopy"
      >
        {{ buttonCopy }}
      </p>
      <ButtonVisit class="col-span-4 col-start-7 my-auto"></ButtonVisit>
    </nuxt-link>
  </div>
</template>

<script setup>
defineProps({
  to: String,
  class: String,
  styles: String,
  buttonCopy: String,
});
</script>

<style scoped></style>
