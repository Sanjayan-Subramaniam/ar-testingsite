<template>
  <div>
    <SeoKit />
    <OgImageScreenshot />
    <OgImageStatic />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useSeoMeta({
  keywords: [
    "robotics",
    "commerical robotics",
    "autonomous robotics",
    "construction layout",
    "exhibition floor marking",
    "commerical disinfection",
    "lionel",
    "diego",
  ].join(","),
});
useHead({
  script: [
    {
      // type: "text/partytown",
      src: "https://www.googletagmanager.com/gtag/js?id=G-C2B8H4W1NJ",
      async: true,
    },
    {
      // type: "text/partytown",
      innerHTML: "_VH_CODE = 9714663130;",
    },
    {
      // type: "text/partytown",
      src: "https://visithunter.io/collect.js",
      async: true,
    },
    {
      // type: "text/partytown",
      innerHTML: `window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-C2B8H4W1NJ");`,
    },

    {
      // type: "text/partytown",

      innerHTML: `
      
    var hubalzscript = document.createElement("script");
    hubalzscript.src = "https://www.hubalz.com/script.js";
    hubalzscript.async = 1;
    hubalzscript.dataset.apikey = "baf9deae02348415839b2d42ecc4c8";
    document.getElementsByTagName('head')[0].append(hubalzscript);

`,
    },
    {
      // type: "text/partytown",
      src: "https://platform.illow.io/banner.js?siteId=10e62391-b031-477d-95a9-52e1a13173ea",
    },
  ],
});
</script>

<style lang="scss" scoped></style>
