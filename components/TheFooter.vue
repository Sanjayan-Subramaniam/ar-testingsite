<template>
  <div class="bg-black py-24 text-center text-white">
    <div class="container mx-auto">
      <div
        class="flex flex-col items-center justify-center gap-y-24 lg:flex-row lg:items-start lg:justify-around lg:gap-0 lg:text-left"
      >
        <div>
          <img
            class="w-40"
            src="~/assets/img/white_logo.svg"
            alt=""
            srcset=""
          />
        </div>
        <div class="flex flex-col gap-y-4">
          <h4 class="text-mobileCopy lg:text-desktopCopy text-white">
            Industries
          </h4>
          <a
            class="hover:text-arsecondary"
            href="https://exhibitions.augustrobotics.com"
            >Exhibitions</a
          >
          <a
            class="hover:text-arsecondary"
            href="https://construction.augustrobotics.com"
            >Construction</a
          >
          <NuxtLink class="hover:text-arsecondary" to="/"
            >Disinfection</NuxtLink
          >
        </div>
        <div class="flex flex-col gap-y-4">
          <h4 class="text-mobileCopy lg:text-desktopCopy text-white">
            Technology
          </h4>
          <NuxtLink class="hover:text-arsecondary" to="/">Lionel</NuxtLink>
          <NuxtLink class="hover:text-arsecondary" to="/">Diego</NuxtLink>
        </div>
        <div class="flex flex-col gap-y-4">
          <h4 class="text-mobileCopy lg:text-desktopCopy text-white">
            Company
          </h4>
          <NuxtLink class="hover:text-arsecondary" to="/">About</NuxtLink>
          <NuxtLink class="hover:text-arsecondary" to="/">News</NuxtLink>
          <NuxtLink class="hover:text-arsecondary" to="/">Careers</NuxtLink>
        </div>
        <div class="flex flex-col gap-y-4">
          <h4 class="text-mobileCopy lg:text-desktopCopy text-white">
            Social Links
          </h4>
          <a
            class="hover:text-arsecondary"
            href="https://www.linkedin.com/company/august-robotics"
            >Linked In</a
          >

          <a
            class="hover:text-arsecondary"
            href="https://www.facebook.com/augustrobotics"
            >Facebook</a
          >
          <a
            class="hover:text-arsecondary"
            href="https://twitter.com/AugustRobotics"
            >Twitter</a
          >
          <a
            class="hover:text-arsecondary"
            href="https://angel.co/company/augustrobotics"
            >Wellfound</a
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
