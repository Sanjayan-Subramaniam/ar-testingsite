<template>
  <div class="w-5/6 max-w-[500px]">
    <div class="flex flex-col gap-y-6">
      <h4
        class="text-center text-mobileCopy lg:text-desktopCopy text-argray lg:w-5/6 lg:min-w-[500px] lg:col-start-2"
      >
        Industry Applications
      </h4>

      <div
        class="order-5 my-auto ml-auto mr-auto flex h-40 w-[320px] flex-col items-center justify-center rounded-lg bg-white shadow-md md:w-5/6 lg:w-[500px] lg:col-start-2"
      >
        <nuxt-link
          class="mx-auto my-auto mb-auto grid h-20 w-[80%] grid-cols-12 items-center border-0 bg-arblue/60 bg-disinfection-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:w-[90%] hover:border-4 hover:border-arsecondary hover:bg-arblue/100"
          to="/diego/"
        >
          <p
            class="col-start-2 pl-[30%] text-mobileCopy lg:text-[24px] font-medium text-white"
          >
            Commercial Disinfection
          </p>

          <ButtonVisit
            to="/diego/"
            class="col-span-4 col-start-7 my-auto"
          ></ButtonVisit>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
