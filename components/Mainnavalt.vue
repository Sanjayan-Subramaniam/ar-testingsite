<template>
  <!-- <Announcement /> -->
  <header class="bg-white py-8">
    <nav
      class="mx-auto container flex items-center justify-between px-8 sm:px-16"
      aria-label="Global"
    >
      <NuxtLink to="/home/">
        <span class="sr-only">August Robotics</span>
        <img class="w-32 md:w-40" src="/logos/ar_logo.svg" alt="" />
      </NuxtLink>

      <div class="flex lg:hidden">
        <button
          type="button"
          class="inline-flex items-center justify-center rounded-md text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="text-arblack h-12 w-12" aria-hidden="true" />
        </button>
      </div>
      <div class="lg:flex lg:gap-x-12 hidden">
        <NuxtLink
          to="https://construction.augustrobotics.com/"
          class="text-left text-[12px] xl:text-[16px] text-arblack font-medium hover:text-arprimary"
          >Construction</NuxtLink
        >
        <NuxtLink
          to="https://exhibitions.augustrobotics.com/"
          class="text-left text-[12px] xl:text-[16px] text-arblack font-medium hover:text-arprimary"
          >Exhibitions</NuxtLink
        >
        <div
          class="flex flex-col justify-center items-center"
          @click="openTech"
          ref="techMenu"
        >
          <button
            class="flex items-center gap-x-1 text-left text-[12px] xl:text-[16px] text-arblack font-medium hover:text-arprimary focus:text-arprimary relative"
          >
            Technology
            <ChevronDownIcon
              class="h-5 w-5 flex-none text-argray"
              aria-hidden="true"
            />
          </button>

          <div
            v-if="techOpen"
            class="w-56 rounded-xl bg-white p-2 shadow-lg z-20 absolute mt-[10%]"
          >
            <NuxtLink
              @click="techOpen === false"
              to="/lionel"
              class="block rounded-lg py-2 px-3 text-sm font-semibold leading-6 text-arblack hover:bg-arsecondary/50 hover:text-white"
            >
              Lionel
            </NuxtLink>

            <NuxtLink
              @click="techOpen === false"
              to="/diego/"
              class="block rounded-lg py-2 px-3 text-sm font-semibold leading-6 text-arblack hover:bg-arblue/50 hover:text-white z-50"
              >Diego</NuxtLink
            >
          </div>
        </div>
        <div
          class="flex flex-col justify-center items-center"
          @click="openCompany"
          ref="companyMenu"
        >
          <button
            class="flex items-center gap-x-1 text-left text-[12px] xl:text-[16px] text-arblack font-medium hover:text-arprimary focus:text-arprimary relative"
          >
            Company
            <ChevronDownIcon
              class="h-5 w-5 flex-none text-argray"
              aria-hidden="true"
            />
          </button>

          <div
            v-if="companyOpen"
            class="w-56 rounded-xl bg-white p-2 shadow-lg z-20 absolute mt-[10%]"
          >
            <NuxtLink
              @click="companyOpen === false"
              to="/about"
              class="block rounded-lg py-2 px-3 text-sm font-semibold leading-6 text-arblack hover:bg-arsecondary/50 hover:text-white"
            >
              About us
            </NuxtLink>

            <NuxtLink
              @click="companyOpen === false"
              to="/news"
              class="block rounded-lg py-2 px-3 text-sm font-semibold leading-6 text-arblack hover:bg-arsecondary/50 hover:text-white z-50"
              >News</NuxtLink
            >
          </div>
        </div>

        <NuxtLink
          to="/careers/"
          class="text-left text-[12px] xl:text-[16px] text-arblack font-medium hover:text-arprimary"
          >Careers</NuxtLink
        >
      </div>
      <div class="hidden lg:flex lg:justify-end">
        <!-- Secondary Navbar items -->
        <div class="flex flex-col items-center justify-center">
          <ButtonPrimary
            @click="
              va(
                'send',
                'event',
                'corporate_ALL_mainNavigation_desktop_primaryButton',
                'onClick',
                'mainDeskstop_CTA',
                null,
                null
              )
            "
          />
          <a
            class="text-center text-sm text-arprimary mt-3"
            href="mailto:info@augustrobotics.com"
          >
            info@augustrobotics.com
          </a>
        </div>
      </div>
    </nav>
    <Dialog
      v-show="mobileMenuOpen"
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <nuxt-link to="/home/" class="-m-1.5 p-1.5">
            <span class="sr-only">August Robotics</span>
            <img class="h-8 w-auto" src="/logos/ar_logo.svg" alt="" />
          </nuxt-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a
                href="https://construction.augustrobotics.com/"
                class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-arblack hover:bg-argray/50 hover:text-white"
                >Construction</a
              >
              <a
                href="https://exhibitions.augustrobotics.com/"
                class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-arblack hover:bg-arblack/50 hover:text-white"
                >Exhibitions</a
              >

              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-ardarkgreen/80 hover:text-white"
                >
                  Technology
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <Disclosure
                    ><NuxtLink to="/lionel"
                      ><DisclosureButton
                        class="block rounded-lg py-2 pl-6 pr-64 text-sm font-semibold leading-7 text-arblack/50 hover:bg-ardarkgreen/50 hover:text-white"
                        @click="closeMobile()"
                        >Lionel</DisclosureButton
                      ></NuxtLink
                    ></Disclosure
                  >

                  <Disclosure
                    ><NuxtLink to="/diego"
                      ><DisclosureButton
                        class="block rounded-lg py-2 pl-6 pr-64 text-sm font-semibold leading-7 text-arblack/50 hover:bg-arblue/50 hover:text-white"
                        @click="closeMobile()"
                        >Diego</DisclosureButton
                      ></NuxtLink
                    ></Disclosure
                  >
                </DisclosurePanel>
              </Disclosure>

              <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                <DisclosureButton
                  class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-ardarkgreen/80 hover:text-white"
                >
                  Company
                  <ChevronDownIcon
                    :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                    aria-hidden="true"
                  />
                </DisclosureButton>
                <DisclosurePanel class="mt-2 space-y-2">
                  <!-- <DisclosureButton
                    v-for="item in company"
                    :key="item.name"
                    as="a"
                    :href="item.href"
                    class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >{{ item.name }}</DisclosureButton
                  > -->

                  <Disclosure
                    ><NuxtLink to="/about"
                      ><DisclosureButton
                        class="block rounded-lg py-2 pl-6 pr-64 text-sm font-semibold leading-7 text-arblack/50 hover:bg-ardarkgreen/50 hover:text-white"
                        @click="mobileMenuOpen = false"
                        >About Us</DisclosureButton
                      ></NuxtLink
                    ></Disclosure
                  >

                  <Disclosure
                    ><NuxtLink to="/news"
                      ><DisclosureButton
                        class="block rounded-lg py-2 pl-6 pr-64 text-sm font-semibold leading-7 text-arblack/50 hover:bg-ardarkgreen/50 hover:text-white"
                        @click="mobileMenuOpen = false"
                        >News</DisclosureButton
                      ></NuxtLink
                    ></Disclosure
                  >
                </DisclosurePanel>
              </Disclosure>
              <nuxt-link
                to="/careers"
                class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-arblack hover:bg-ardarkgreen/80 hover:text-white"
                @click="mobileMenuOpen = false"
                >Careers</nuxt-link
              >
            </div>

            <!-- Secondary Navbar items -->
            <div class="flex flex-col py-6">
              <ButtonPrimary />
              <p class="my-4 text-sm text-arprimary">info@augustrobotics.com</p>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { onClickOutside } from "@vueuse/core";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/vue/24/outline";
import { ChevronDownIcon } from "@heroicons/vue/20/solid";
import consolaGlobalInstance from "consola";

const technology = [
  { name: "Lionel", to: "/lionel/" },
  { name: "Diego", to: "/diego/" },
];
const company = [
  { name: "About us", to: "/about/" },
  { name: "News", to: "/news/" },
];

const mobileMenuOpen = ref(false);
const techMenuOpen = ref(false);
const companyMenuOpen = ref(false);
const techOpen = ref(false);
const companyOpen = ref(false);
const techMenu = ref(null);
const companyMenu = ref(null);

const closeMobile = () => {
  mobileMenuOpen.value = false;
};

const openTech = () => {
  techOpen.value = !techOpen.value;
};

const openCompany = () => {
  companyOpen.value = !companyOpen.value;
};

const closeTech = () => {
  techOpen.value = false;
};

const closeCompany = () => {
  companyOpen.value = false;
};

onClickOutside(techMenu, () => {
  closeTech();
});

onClickOutside(companyMenu, () => {
  closeCompany();
});

// document
//   .getElementById("mainContactButton_desktop")
//   .addEventListener("click", function () {
//     va(
//       "send",
//       "event",
//       "corporate_ALL_mainNavigation_desktop_primaryButton",
//       "onClick",
//       "mainDeskstop_CTA",
//       null,
//       null
//     );
//   });
</script>
