to="/lionel"
<template>
  <header class="bg-white py-8">
    <nav
      class="mx-auto container flex items-center justify-between px-8 sm:px-16"
      aria-label="Global"
    >
      <NuxtLink to="/">
        <span class="sr-only">August Robotics</span>
        <img class="w-32 md:w-40" src="~/assets/img/ar_logo.svg" alt="" />
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
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <NuxtLink
          to="https://www.construction.augustrobotics.com"
          class="text-left text-[12px] xl:text-[16px] text-arblack font-medium hover:text-arprimary"
          >Construction</NuxtLink
        >
        <NuxtLink
          to="https://exhibitions.augustrobotics.com/"
          class="text-left text-[12px] xl:text-[16px] text-arblack font-medium hover:text-arprimary"
          >Exhibitions</NuxtLink
        >

        <Popover class="relative">
          <PopoverButton
            class="flex items-center gap-x-1 text-left text-[12px] xl:text-[16px] text-arblack font-medium hover:text-arprimary focus:text-arprimary"
          >
            Technology
            <ChevronDownIcon
              class="h-5 w-5 flex-none text-argray"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg"
            >
              <!-- <a
                v-for="item in technology"
                :key="item.name"
                :href="item.href"
                class="block rounded-lg py-2 px-3 text-sm font-semibold leading-6 text-arblack hover:bg-arsecondary/50 hover:text-white"
                >{{ item.name }}</a
              > -->
              <NuxtLink
                to="/lionel"
                class="block rounded-lg py-2 px-3 text-sm font-semibold leading-6 text-arblack hover:bg-arsecondary/50 hover:text-white"
                >Lionel</NuxtLink
              >

              <NuxtLink
                to="/diego"
                class="block rounded-lg py-2 px-3 text-sm font-semibold leading-6 text-arblack hover:bg-arblue/50 hover:text-white"
                >Diego</NuxtLink
              >
            </PopoverPanel>
          </transition>
        </Popover>
        <Popover class="relative">
          <PopoverButton
            class="flex items-center gap-x-1 text-left text-[12px] xl:text-[16px] text-arblack font-medium hover:text-arprimary focus:text-arprimary"
          >
            Company
            <ChevronDownIcon
              class="h-5 w-5 flex-none text-argray"
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <PopoverPanel
              class="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg"
            >
              <nuxt-link
                v-for="item in company"
                :key="item.name"
                :to="item.to"
                class="block rounded-lg py-2 px-3 text-sm font-semibold leading-6 text-arblack hover:bg-ardarkgreen/80 hover:text-white"
                >{{ item.name }}</nuxt-link
              >
            </PopoverPanel>
          </transition>
        </Popover>
        <NuxtLink
          to="/careers"
          class="text-left text-[12px] xl:text-[16px] text-arblack font-medium hover:text-arprimary"
          >Careers</NuxtLink
        >
      </PopoverGroup>
      <div class="hidden lg:flex lg:justify-end">
        <!-- Secondary Navbar items -->
        <div class="flex flex-col items-center justify-center">
          <ButtonPrimary />
          <p class="text-center text-sm text-arprimary mt-3">
            info@augustrobotics.com
          </p>
        </div>
      </div>
    </nav>
    <Dialog
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
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">August Robotics</span>
            <img class="h-8 w-auto" src="~/assets/img/ar_logo.svg" alt="" />
          </a>
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
                    ><NuxtLink to="/about"
                      ><DisclosureButton
                        class="block rounded-lg py-2 pl-6 pr-64 text-sm font-semibold leading-7 text-arblack/50 hover:bg-arprimary/50 hover:text-white"
                        >Lionel</DisclosureButton
                      ></NuxtLink
                    ></Disclosure
                  >
                  <Disclosure
                    ><NuxtLink to="/about"
                      ><DisclosureButton
                        class="block rounded-lg py-2 pl-6 pr-64 text-sm font-semibold leading-7 text-arblack/50 hover:bg-arblue/50 hover:text-white"
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
                        >About Us</DisclosureButton
                      ></NuxtLink
                    ></Disclosure
                  >

                  <Disclosure
                    ><NuxtLink to="/about"
                      ><DisclosureButton
                        class="block rounded-lg py-2 pl-6 pr-64 text-sm font-semibold leading-7 text-arblack/50 hover:bg-ardarkgreen/50 hover:text-white"
                        >News</DisclosureButton
                      ></NuxtLink
                    ></Disclosure
                  >
                </DisclosurePanel>
              </Disclosure>
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

const technology = [
  { name: "Lionel", to: "/lionel" },
  { name: "Diego", to: "/diego" },
];
const company = [
  { name: "About us", to: "/about" },
  { name: "News", to: "/news" },
];

const mobileMenuOpen = ref(false);
</script>
