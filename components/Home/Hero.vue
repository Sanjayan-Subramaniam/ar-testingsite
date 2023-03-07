<template>
  <section
    class="md:h-[70vh] bg-black/70 bg-lionel-background bg-cover bg-center bg-blend-overlay h-[50vh] relative"
  >
    <!-- Hero content title and button -->

    <div
      class="container pt-[10%] lg:pt-[2%] h-full flex flex-col items-start mx-auto"
    >
      <div class="flex flex-col gap-y-6 lg:gap-y-12 lg:justify-start">
        <h1
          class="text-xl text-white md:text-4xl lg:text-6xl lg:leading-normal"
        >
          We automate dirty, dangerous <br />
          and dull tasks all over the world.
        </h1>

        <ButtonPrimary></ButtonPrimary>
      </div>
    </div>
    <Mainbuttons></Mainbuttons>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
