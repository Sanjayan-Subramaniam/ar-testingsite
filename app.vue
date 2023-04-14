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
      src: "https://www.googletagmanager.com/gtag/js?id=G-3WC3XHZM91",
      async: true,
    },
    {
      // type: "text/partytown",
      innerHTML: `window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag("js", new Date());

      gtag("config", "G-3WC3XHZM91");`,
    },

    {
      // type: "text/partytown",

      innerHTML: `
    var hubalzscript = document.createElement("script");
    hubalzscript.src = "https://www.hubalz.com/script.js";
    hubalzscript.async = 1;
    hubalzscript.dataset.apikey = "36fc68e7e2cdabc8e91717f1bdefff";
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
