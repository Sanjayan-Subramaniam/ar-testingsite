<template>
  <Mainnav />
  <div class="container mx-auto">
    <div class="flex flex-col my-auto gap-y-8 py-6">
      <h1 class="mx-auto text-center text-[32px] lg:text-[96px] text-argray">
        Error Code: <span class="text-arprimary font-semibold">401</span>
      </h1>
      <img
        src="/icons/error.svg"
        alt=""
        srcset=""
        class="mx-auto w-[160px] lg:w-[320px]"
      />
      <h2 class="mx-auto text-center text-[24px] lg:text-[32px]">
        Your path-planning algorithm <br />
        has malfuctioned slightly ;-)
      </h2>
      <h2 class="mx-auto text-center text-[24px] lg:text-[32px]">
        Here are some useful links <br />
        that might help.
      </h2>
      <ButtonTertiary
        class="mx-auto text-center"
        button-copy="Go back"
        link-location="/"
      />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
