<template>
  <div>
    <Mainnav></Mainnav>
    <slot />
    <SectionSpacer />
    <section>
      <HomeSocials />
    </section>

    <section>
      <HomeFeatureContact bgImagepath="bg-[url('/contactusdiego.webp')]" />
    </section>

    <section class="">
      <TheFooter></TheFooter>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
