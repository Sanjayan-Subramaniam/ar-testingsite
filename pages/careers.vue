<template>
  <div>
    <SectionSpacer />

    <section>
      <CareersFeatureWorkingatar></CareersFeatureWorkingatar>
    </section>

    <SectionSpacer />

    <section>
      <SectionSpacer />
      <SectionSeperator class="md:hidden" />
      <CareersFeatureSpotlightslider></CareersFeatureSpotlightslider>
    </section>
    <SectionSpacer />
    <section>
      <SectionSpacer />
      <SectionSeperator class="md:hidden" />
      <CareersFeatureAlternativespotlightslider></CareersFeatureAlternativespotlightslider>
    </section>
    <SectionSpacer />

    <section>
      <CareersFeatureOurteam />
    </section>
    <SectionSpacer />
    <SectionSeperator class="md:hidden" />

    <section>
      <CareersFeatureOpenroles></CareersFeatureOpenroles>
    </section>
    <SectionSpacer />
    <SectionSpacer />
  </div>
</template>

<script setup>
useHead({
  title: "August Robotics | Careers",
  meta: [
    {
      name: "description",
      content:
        "Ready for an exciting career in fast-growing tech startup? Learn more about opportunities at August Robotics.",
    },
  ],
  htmlAttrs: { lang: "en" },
});
</script>
