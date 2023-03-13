<template>
  <div>
    <CareersFeatureSpotlightslider
      personnelImage="/Mine.png"
      flagImage="/flags/usa.svg"
      jobTitle="Chief Marketing Officer"
      country="USA"
      :number="1"
    />
    <CareersFeatureSpotlightslider
      v-if="number === 2"
      personnelImage="/Airport.png"
      flagImage="/flags/usa.svg"
      jobTitle="Chief Marketing Officer"
      country="USA"
      :number="2"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
