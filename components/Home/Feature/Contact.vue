<template>
  <div
    class="bg-center h-[40vh] lg:h-[50vh] flex flex-col justify-center items-center object-cover"
    :class="bgImagepath"
  >
    <div class="flex flex-col space-y-9 items-center">
      <h2 class="text-center text-3xl text-white md:text-5xl">Contact Us</h2>
      <p
        class="w-[270px] md:w-full text-center text-mobileCopy lg:text-desktopCopy text-white"
      >
        Have a question or comment?
      </p>
      <ButtonContact button-text="Speak to us"></ButtonContact>
      <p
        class="w-[270px] md:w-full text-center text-mobileCopy lg:text-desktopCopy text-white"
      >
        Or email us: <br />
        info@augustrobotics.com
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({ bgImagepath: String });
</script>
