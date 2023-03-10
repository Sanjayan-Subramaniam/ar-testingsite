<template>
  <div>
    <Mainnav></Mainnav>

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
    <section>
      <HomeSocials></HomeSocials>
    </section>

    <HomeFeatureContact></HomeFeatureContact>

    <section class="">
      <TheFooter></TheFooter>
    </section>
  </div>
</template>

<script>
import Mainnav from "~~/components/Mainnav.vue";

export default {
  setup() {
    return {};
  },
  components: { Mainnav },
};
</script>

<style lang="scss" scoped></style>
