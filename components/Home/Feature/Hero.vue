<template>
  <section
    class="md:h-[70vh] bg-black/70 bg-lionel-background bg-cover bg-center bg-blend-overlay h-[50vh] relative"
  >
    <!-- Hero content title and button -->

    <div
      class="container h-full grid grid-cols-12 lg:items-start mx-auto pt-[5%] lg:pt-[5%]"
    >
      <div
        class="col-span-10 lg:col-span-11 col-start-2 md:col-start-1 flex flex-col gap-y-6"
      >
        <h1
          class="text-xl text-white md:text-4xl lg:text-5xl lg:leading-normal"
        >
          We automate dirty, dangerous <br />
          and dull tasks all over the world.
        </h1>

        <ButtonPrimary></ButtonPrimary>
      </div>
    </div>
    <Mainbuttonsarrow></Mainbuttonsarrow>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
