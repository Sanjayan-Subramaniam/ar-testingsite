<template>
  <section
    class="h-[70vh] bg-black/70 bg-lionel-background bg-cover bg-center bg-blend-overlay lg:h-[70vh] relative"
  >
    <!-- Hero content title and button -->

    <div
      class="container mx-auto h-full flex flex-col justify-center items-center lg:items-start"
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
