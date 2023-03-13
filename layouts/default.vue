<template>
  <div>
    <Mainnav></Mainnav>
    <slot />
    <SectionSpacer />
    <section>
      <HomeSocials />
    </section>

    <section>
      <HomeFeatureContact />
    </section>

    <section class="">
      <TheFooter></TheFooter>
    </section>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
