<template>
  <Header></Header>
  <Hero />
  <SectionSpacer />

  <section>
    <div class="container mx-auto">
      <div
        class="flex flex-col items-center gap-y-6 lg:gap-y-16 lg:w-[800px] mx-auto"
      >
        <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">
          Industries we Serve
        </h2>
        <p
          class="text-center text-mobileCopy lg:text-desktopCopy text-arblack leading-10"
        >
          We are the world leader in autonomous commercial robots, serving the
          exhibition, construction and facilities management industries
        </p>
      </div>
    </div>
    <IndustrySelector></IndustrySelector>
  </section>

  <SectionSeperator />
  <section>
    <div class="container mx-auto">
      <div
        class="flex flex-col items-center gap-y-6 lg:gap-y-16 lg:w-[800px] mx-auto"
      >
        <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl">
          Our Robots
        </h2>
        <p
          class="text-center text-mobileCopy lg:text-desktopCopy text-arblack leading-10"
        >
          All our robots have been developed using August Robotics’
          <br />industry-leading technology. View our current robot portfolio
          below
        </p>
      </div>
    </div>
    <SectionSpacer />
    <FeatureLionel />
    <SectionSeperator />
    <FeatureDiego />
    <SectionSeperator />
  </section>
  <section>
    <HomeFeatureInDevelopment></HomeFeatureInDevelopment>
  </section>

  <section class="mt-40">
    <h3 class="mx-auto mb-24 text-center text-3xl text-ardarkgreen md:text-5xl">
      Follow us
    </h3>
    <div
      class="mx-auto flex flex-wrap items-center justify-around md:w-[60%] lg:w-[40%]"
    >
      <div
        class="mb-16 flex h-16 w-16 items-center justify-center rounded-lg bg-arprimary opacity-50 md:mb-24 md:h-24 md:w-24 md:gap-x-4"
      >
        <img src="../assets/img/bell.svg" alt="" />
      </div>
      <div
        class="mb-16 flex h-16 w-16 items-center justify-center rounded-lg bg-linkedinblue opacity-50 md:mb-24 md:h-24 md:w-24"
      >
        <img src="../assets/img/linkedin.svg" alt="" />
      </div>
      <div
        class="mb-16 flex h-16 w-16 items-center justify-center rounded-lg bg-facebookblue opacity-50 md:mb-24 md:h-24 md:w-24"
      >
        <img src="../assets/img/facebook.svg" alt="" />
      </div>
      <div
        class="mb-16 flex h-16 w-16 items-center justify-center rounded-lg bg-twitterblue opacity-50 md:mb-24 md:h-24 md:w-24"
      >
        <img src="../assets/img/twitter.svg" alt="" />
      </div>
    </div>
  </section>

  <!-- <section
      class="relative flex h-[70vh] flex-col bg-lionel-contactsection"
    >
  <img src="/dist/../assets/img/Lionel on site.JPG" class="object-cover opacity-25 lg:h-[500px] bg-opacity-5"> -->
  <!-- <div class="bg-lionel-background bg-center bg-cover bg-opacity-40 z-2 h-[500px] w-full ">

    </div> 
    </section>  -->
  <section class="bg-arblack py-24 text-center text-white">
    <div
      class="container mx-auto flex flex-col items-center justify-center gap-y-24 lg:flex-row lg:items-start lg:justify-around lg:gap-0 lg:text-left"
    >
      <div>
        <img class="w-40" src="../assets/img/ar_logo.svg" alt="" srcset="" />
      </div>
      <div class="flex flex-col gap-y-4">
        <h4 class="text-4xl text-white">Test</h4>
        <p class="hover:text-arprimary">Exhibitions</p>
        <p class="hover:text-arprimary">Construction</p>
        <p class="hover:text-arprimary">Disinfection</p>
      </div>
      <div class="flex flex-col gap-y-4">
        <h4 class="text-4xl text-white">Industries</h4>
        <p>Exhibitions</p>
        <p>Construction</p>
        <p>Disinfection</p>
      </div>
      <div class="flex flex-col gap-y-4">
        <h4 class="text-4xl text-white">Industries</h4>
        <p>Exhibitions</p>
        <p>Construction</p>
        <p>Disinfection</p>
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

<style lang="scss" scoped></style>
