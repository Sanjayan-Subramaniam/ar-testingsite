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
      // Visitor analytics script",
      type: "text/javascript",
      innerHTML: `
      (function(v,i,s,a,t){v[t]=v[t]||function(){(v[t].v=v[t].v||[]).push(arguments)};if(!v._visaSettings){v._visaSettings={}}v._visaSettings[a]={v:'1.0',s:a,a:'1',t:t};var b=i.getElementsByTagName('body')[0];var p=i.createElement('script');p.defer=1;p.async=1;p.src=s+'?s='+a;b.appendChild(p)})(window,document,'//app-worker.visitor-analytics.io/main.js','7590327c-3291-11ee-b589-901b0edac50a','va')
`,
      tagPosition: "bodyClose",
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
