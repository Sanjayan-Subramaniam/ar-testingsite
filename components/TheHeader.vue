<template>
  <header>
    <!-- Navbar goes here -->
    <nav class="bg-white py-8 shadow-lg">
      <div class="container mx-auto">
        <div class="grid grid-cols-12 content-center">
          <div
            class="col-span-3 col-start-2 my-auto lg:col-span-2 lg:col-start-1"
          >
            <!-- Website Logo -->
            <a href="#" class="">
              <img src="../assets/img/ar_logo.svg" alt="Logo" class="w-48" />
            </a>
          </div>
          <!-- Primary Navbar items -->
          <div
            class="col-span-6 col-start-4 my-auto hidden space-x-8 text-left text-[12px] lg:block xl:text-[16px]"
          >
            <a
              href=""
              class="border-b-4 border-arprimary py-4 font-medium text-arprimary"
              >Construction</a
            >
            <a
              href=""
              class="py-4 px-2 font-medium text-arblack transition duration-300 hover:text-arprimary"
              >Exhibitions</a
            >
            <a
              href=""
              class="py-4 px-2 font-medium text-arblack transition duration-300 hover:text-arprimary"
              >Technology</a
            >
            <a
              href=""
              class="py-4 px-2 font-medium text-arblack transition duration-300 hover:text-arprimary"
              >Company</a
            >
            <a
              href=""
              class="py-4 px-2 font-medium text-arblack transition duration-300 hover:text-arprimary"
              >Careers</a
            >
          </div>

          <!-- Secondary Navbar items -->
          <div
            class="col-span-2 col-start-11 hidden items-center space-x-3 lg:block"
          >
            <div class="flex flex-col items-center justify-center gap-y-3">
              <ButtonPrimary />
              <p class="text-center text-sm text-arprimary">
                info@augustrobotics.com
              </p>
            </div>
          </div>
          <!-- Mobile menu button -->
          <div class="col-start-10 flex flex-col pt-2 align-middle lg:hidden">
            <button class="mobile-menu-button my-auto outline-none">
              <svg
                class="h-12 w-12 text-gray-500 hover:text-arprimary"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <!-- mobile menu -->
      <div class="mobile-menu mt-6 hidden lg:hidden">
        <ul class="">
          <li class="active">
            <a
              href="index.html"
              class="block px-2 py-4 text-sm font-semibold text-white hover:bg-arprimary hover:text-white"
              >Construction</a
            >
          </li>
          <li>
            <a
              href="#services"
              class="block px-2 py-4 text-sm transition duration-300 hover:bg-arprimary hover:text-white"
              >Exhibitions</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="block px-2 py-4 text-sm transition duration-300 hover:bg-arprimary hover:text-white"
              >Technology</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="block px-2 py-4 text-sm transition duration-300 hover:bg-arprimary hover:text-white"
              >Company</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="block px-2 py-4 text-sm transition duration-300 hover:bg-arprimary hover:text-white"
              >Careers</a
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup></script>
