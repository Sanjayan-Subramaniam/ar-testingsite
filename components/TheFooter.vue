<template>
  <div class="bg-black py-24 text-center text-white">
    <div class="container mx-auto">
      <div
        class="flex flex-col items-center justify-center gap-y-24 lg:flex-row lg:items-start lg:justify-around lg:gap-0 lg:text-left"
      >
        <div>
          <nuxt-link to="/">
            <img
              class="w-40"
              src="~/assets/img/white_logo.svg"
              alt=""
              srcset=""
            />
          </nuxt-link>
        </div>
        <div class="flex flex-col gap-y-4">
          <h4 class="text-mobileCopy lg:text-desktopCopy text-white">
            Industries
          </h4>
          <nuxt-link
            class="hover:text-arsecondary"
            to="https://exhibitions.augustrobotics.com"
            >Exhibitions</nuxt-link
          >
          <NuxtLink
            class="hover:text-arsecondary"
            to="https://construction.augustrobotics.com"
            >Construction
          </NuxtLink>
          <NuxtLink class="hover:text-arsecondary" to="/diego"
            >Disinfection</NuxtLink
          >
        </div>
        <div class="flex flex-col gap-y-4">
          <h4 class="text-mobileCopy lg:text-desktopCopy text-white">
            Technology
          </h4>
          <NuxtLink class="hover:text-arsecondary" to="lionel">Lionel</NuxtLink>
          <NuxtLink class="hover:text-arsecondary" to="/diego">Diego</NuxtLink>
        </div>
        <div class="flex flex-col gap-y-4">
          <h4 class="text-mobileCopy lg:text-desktopCopy text-white">
            Company
          </h4>
          <NuxtLink class="hover:text-arsecondary" to="/about"
            >About us</NuxtLink
          >

          <NuxtLink class="hover:text-arsecondary" to="/careers"
            >Careers</NuxtLink
          >
          <NuxtLink class="hover:text-arsecondary hidden" to="/">News</NuxtLink>
        </div>
        <div class="flex flex-col gap-y-4">
          <h4 class="text-mobileCopy lg:text-desktopCopy text-white">
            Social Links
          </h4>
          <nuxt-link
            class="hover:text-arsecondary"
            href="https://www.linkedin.com/company/august-robotics"
            >LinkedIn</nuxt-link
          >

          <nuxt-link
            class="hover:text-arsecondary"
            href="https://www.facebook.com/augustrobotics"
            >Facebook</nuxt-link
          >

          <nuxt-link
            class="hover:text-arsecondary"
            href="https://twitter.com/AugustRobotics"
            >Twitter</nuxt-link
          >

          <nuxt-link
            class="hover:text-arsecondary"
            href="https://angel.co/company/augustrobotics"
            >Wellfound</nuxt-link
          >
        </div>
      </div>
      <div class="flex flex-row justify-center lg:justify-start">
        <p class="mt-10 lg:ml-16 text-sm">
          Copyright August Robotics 2023. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>
