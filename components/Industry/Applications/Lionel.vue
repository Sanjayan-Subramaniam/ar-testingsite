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
        class="text-center text-mobileCopy lg:text-[20px] text-argray lg:w-5/6 lg:min-w-[500px] lg:col-start-2 underline underline-offset-8"
        to="/lionel/"
      >
        Lionel Technology
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
