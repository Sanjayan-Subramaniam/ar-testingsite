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
    "diego",
    "lionel",
  ].join(","),
});
useHead({
  script: [
    // {
    //   // type: "text/partytown",
    //   src: "https://www.googletagmanager.com/gtag/js?id=G-C2B8H4W1NJ",
    //   async: true,
    // },
    {
      // type: "text/partytown",
      innerHTML: "_VH_CODE = 9714663130;",
    },
    {
      // type: "text/partytown",
      src: "https://visithunter.io/collect.js",
      async: true,
    },
    // {
    //   // type: "text/partytown",
    //   innerHTML: `window.dataLayer = window.dataLayer || [];
    //   function gtag() {
    //     dataLayer.push(arguments);
    //   }
    //   gtag("js", new Date());

    //   gtag("config", "G-C2B8H4W1NJ");`,
    // },

    {
      // Visitor analytics script",
      type: "text/javascript",
      innerHTML: `
      (function(v,i,s,a,t){v[t]=v[t]||function(){(v[t].v=v[t].v||[]).push(arguments)};if(!v._visaSettings){v._visaSettings={}}v._visaSettings[a]={v:'1.0',s:a,a:'1',t:t};var b=i.getElementsByTagName('body')[0];var p=i.createElement('script');p.defer=1;p.async=1;p.src=s+'?s='+a;b.appendChild(p)})(window,document,'//app-worker.visitor-analytics.io/main.js','7590327c-3291-11ee-b589-901b0edac50a','va')
`,
      tagPosition: "bodyClose",
    },

    //     {
    //       // type: "text/hubalz",

    //       innerHTML: `

    //     var hubalzscript = document.createElement("script");
    //     hubalzscript.src = "https://www.hubalz.com/script.js";
    //     hubalzscript.async = 1;
    //     hubalzscript.dataset.apikey = "baf9deae02348415839b2d42ecc4c8";
    //     document.getElementsByTagName('head')[0].append(hubalzscript);

    // `,
    //     },

    //     {
    //       // type: "text/partytown",
    //       type: "text/javascript",
    //       tagPosition: "bodyClose",

    //       innerHTML: `

    //       _linkedin_partner_id = "5270084";
    // window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
    // window._linkedin_data_partner_ids.push(_linkedin_partner_id);
    // `,
    //     },
    {
      // type: "vistoranalytics",
      type: "text/javascript",
      tagPosition: "bodyClose",

      innerHTML: `

          (function(v,i,s,a,t){v[t]=v[t]||function(){(v[t].v=v[t].v||[]).push(arguments)};if(!v._visaSettings){v._visaSettings={}}v._visaSettings[a]={v:'1.0',s:a,a:'1',t:t};var b=i.getElementsByTagName('body')[0];var p=i.createElement('script');p.defer=1;p.async=1;p.src=s+'?s='+a;b.appendChild(p)})(window,document,'//app-worker.visitor-analytics.io/main.js','f7e03de4-10c8-11ef-8f4b-ea58703f3ef6','va')
    `,
    },
    {
      // Heap script",
      type: "text/javascript",
      innerHTML: `
      window.heapReadyCb=window.heapReadyCb||[],window.heap=window.heap||[],heap.load=function(e,t){window.heap.envId=e,window.heap.clientConfig=t=t||{},window.heap.clientConfig.shouldFetchServerConfig=!1;var a=document.createElement("script");a.type="text/javascript",a.async=!0,a.src="https://cdn.us.heap-api.com/config/"+e+"/heap_config.js";var r=document.getElementsByTagName("script")[0];r.parentNode.insertBefore(a,r);var n=["init","startTracking","stopTracking","track","resetIdentity","identify","getSessionId","getUserId","getIdentity","addUserProperties","addEventProperties","removeEventProperty","clearEventProperties","addAccountProperties","addAdapter","addTransformer","addTransformerFn","onReady","addPageviewProperties","removePageviewProperty","clearPageviewProperties","trackPageview"],i=function(e){return function(){var t=Array.prototype.slice.call(arguments,0);window.heapReadyCb.push({name:e,fn:function(){heap[e]&&heap[e].apply(heap,t)}})}};for(var p=0;p<n.length;p++)heap[n[p]]=i(n[p])};
  heap.load("4141890377");
`,
      tagPosition: "bodyClose",
    },
  ],
});
</script>
