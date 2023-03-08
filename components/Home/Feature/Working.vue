<template>
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 gap-y-10">
      <div class="order-2 ml-auto mr-auto lg:mr-0 lg:col-start-2 lg:row-span-4">
        <div class="flex flex-row lg:flex-col justify-center">
          <img
            src="~/assets/img/Working1.jpg"
            class="w-[40%] xl:w-[480px] xl:h-[320px] xl:translate-x-[-5%] object-cover rounded-tl-2xl rounded-bl-2xl lg:rounded-bl-2xl-none lg:rounded-bl-none lg:rounded-tr-2xl"
          />
          <img
            src="~/assets/img/Working2.png"
            class="w-[40%] xl:w-[480px] xl:h-[320px] xl:translate-x-[-5%] object-cover rounded-tr-2xl rounded-br-2xl lg:rounded-tr-2xl-none lg:rounded-tr-none lg:rounded-bl-2xl"
          />
        </div>
      </div>

      <h2
        class="lg:w-[640px] leading-normal font-base order-1 lg:order-first lg:col-start-1 lg:text-left md:text-5xl text-center text-3xl text-ardarkgreen"
      >
        Working at August Robotics
      </h2>

      <p
        class="order-3 mx-auto w-[270px] text-center text-mobileCopy lg:text-desktopCopy text-arblack lg:mx-0 lg:w-[440px] lg:text-left"
      >
        Our robots are brought to life by our incredible team of passionate
        people
        <br /><br />Our team is located across Europe, America, Asia and Oceania
        and is growing quickly <br /><br />From robot design to on-site
        engineering to commercial strategy, August Robotics offers a career
        pathway for everyone<br /><br />Our diversity in backgrounds, skills and
        thinking have enabled us to push creative and technological boundaries
        and transform entire industries <br /><br />
        Join us on our journey
      </p>
      <div
        class="flex flex-row gap-x-6 justify-center lg:justify-start order-last"
      >
        <ButtonSecondary button-text="Careers" />
        <ButtonTertiary button-text="About Us" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
