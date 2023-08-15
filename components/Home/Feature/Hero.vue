<template>
  <section
    class="bg-lionel-background relative overflow-hidden bg-cover bg-center bg-blend-overlay min-h-[40vh] lg:min-h-[50vh]"
  >
    <video
      autoplay
      loop
      muted
      playsinline
      alt=""
      class="object-cover absolute h-full w-full"
    >
      <source src="/HomeHero.webm" type="video/webm" />
    </video>
    <!-- Hero content title and button -->

    <div
      class="container h-full grid grid-cols-12 lg:items-start mx-auto pt-[5%] lg:pt-[5%] relative z-10"
    >
      <div
        class="col-span-10 lg:col-span-11 col-start-2 md:col-start-1 flex flex-col gap-y-4"
      >
        <TypographyMainheading>
          We automate dirty, dangerous <br />
          and dull tasks all over the world.
        </TypographyMainheading>

        <ButtonPrimary></ButtonPrimary>
      </div>
    </div>
    <Mainbuttonsarrow class="z-10"></Mainbuttonsarrow>
  </section>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>
