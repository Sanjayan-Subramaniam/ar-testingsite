<template>
  <div class="w-5/6 max-w-[500px]">
    <div class="flex flex-col gap-y-6">
      <h4
        class="text-center text-mobileCopy lg:text-desktopCopy text-argray lg:w-5/6 lg:min-w-[500px] lg:col-start-2"
      >
        Industry Applications
      </h4>

      <div
        class="my-auto ml-auto mr-auto flex h-60 w-[320px] flex-col items-center justify-center rounded-lg bg-white shadow-md md:w-5/6 lg:ml-0 lg:mr-auto lg:w-[500px] lg:col-start-2"
      >
        <!-- <nuxt-link
          class="mx-auto mt-auto grid h-20 w-[80%] grid-cols-12 items-center border-0 bg-argray/80 bg-construction-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:w-[90%] hover:border-4 hover:border-arsecondary hover:bg-argray/100"
          to="https://www.construction.augustrobotics.com"
        >
          <p
            class="col-start-2 pl-[30%] font-medium text-white text-mobileCopy lg:text-desktopCopy"
          >
            Construction
          </p>
          <ButtonVisit class="col-span-4 col-start-7 my-auto"></ButtonVisit>
        </nuxt-link> -->
        <IndustryApplicationsApplicationbutton
          to="https://www.construction.augustrobotics.com"
          styles="hover:bg-argray/100 mt-auto bg-construction-background bg-argray/80 "
          buttonCopy="Construction"
        />
        <IndustryApplicationsApplicationbutton
          to="https://www.exhibitions.augustrobotics.com"
          styles="hover:bg-arblack/100 mt-auto bg-exhibition-background bg-arblack/80 "
          buttonCopy="Exhibitions"
        />
      </div>
      <NuxtLink
        class="invisible text-center text-mobileCopy lg:text-desktopCopy text-argray lg:w-5/6 lg:min-w-[500px] lg:col-start-2 underline underline-offset-8"
        to="/lionel"
      >
        Lionel Technology
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
