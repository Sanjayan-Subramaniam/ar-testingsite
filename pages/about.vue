<template>
  <div>
    <AboutFeatureHero />
    <SectionSpacer />

    <section>
      <AboutFeatureOverview></AboutFeatureOverview>
    </section>
    <SectionSpacer />
    <section>
      <AboutFeatureFounder></AboutFeatureFounder>
    </section>

    <SectionSpacer />

    <section>
      <AboutFeatureInnovation></AboutFeatureInnovation>
    </section>

    <SectionSpacer />

    <section>
      <AboutFeatureJourney></AboutFeatureJourney>
    </section>
    <SectionSpacer />
    <section><AboutFeatureReach></AboutFeatureReach></section>
  </div>
</template>

<script setup>
useHead({
  title: "August Robotics | About us",
  meta: [
    {
      name: "description",
      content: "Learn about our history and mission",
    },
  ],
  htmlAttrs: { lang: "en" },
});
</script>

<style lang="scss" scoped></style>
