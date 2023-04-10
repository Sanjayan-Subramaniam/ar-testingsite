<!-- <template>
  <section
    class="md:h-[70vh] bg-arblack/70 bg-diego-hero bg-cover bg-center bg-blend-overlay h-[50vh] relative"
  >


    <div
      class="container h-full grid grid-cols-12 lg:items-start mx-auto pt-[5%] lg:pt-[5%]"
    >
      <div
        class="col-span-10 lg:col-span-11 col-start-2 md:col-start-1 flex flex-col gap-y-6"
      >
        <h1
          class="text-xl text-white md:text-4xl lg:text-5xl lg:leading-normal"
        >
          Meet Diego, the most powerful <br />
          and reliable disinfection robot
        </h1>

        <ButtonPrimarydiego class="bg-arblue" />
      </div>
    </div>
  </section>
</template> -->

<template>
  <section
    class="md:h-[70vh] bg-lionel-background h-[50vh] relative overflow-hidden bg-cover bg-center bg-blend-overlay"
  >
    <video
      autoplay
      loop
      muted
      playsinline
      alt=""
      class="object-cover absolute h-full w-full"
    >
      <source src="/DiegoHero.webm" type="video/webm" />
    </video>
    <!-- Hero content title and button -->

    <div
      class="container h-full grid grid-cols-12 lg:items-start mx-auto pt-[5%] lg:pt-[5%] relative z-10"
    >
      <div
        class="col-span-10 lg:col-span-11 col-start-2 md:col-start-1 flex flex-col gap-y-6"
      >
        <h1
          class="text-xl text-white md:text-4xl lg:text-5xl lg:leading-normal"
        >
          Meet Diego, the most powerful <br />
          and reliable disinfection robot
        </h1>

        <ButtonPrimarydiego class="bg-arblue" />
      </div>
    </div>
  </section>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>
