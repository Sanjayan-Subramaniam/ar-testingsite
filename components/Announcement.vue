<template>
  <div
    class="rounded-md bg-arprimary/20 p-4"
    :class="[clickClosed ? 'hidden' : 'block']"
  >
    <div class="flex justify-between">
      <div class="flex-shrink-0"></div>
      <div class="ml-3">
        <div class="mt-2 text-sm text-green-700">
          <p>
            <strong>Announcement: &emsp;</strong>August Robotics has launched
            its Lease model in conjunction with Leipzig Messe. <br />
          </p>
        </div>

        <div class="mt-4">
          <div class="-mx-2 -my-1.5 flex">
            <NuxtLink
              type="button"
              class="rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              to="https://www.augustrobotoics.com/pr/Leipzig_Messe_and_August_Robotics(EN).pdf"
            >
              Download Press Release (English)
            </NuxtLink>
            <NuxtLink
              type="button"
              class="ml-3 rounded-md bg-green-50 px-2 py-1.5 text-sm font-medium text-green-800 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
              to="https://www.augustrobotoics.com/pr/Leipziger_Messe_und_August_Robotics(DE)"
            >
              Pressemitteilung herunterladen (Deutsch)
            </NuxtLink>
          </div>
        </div>
      </div>
      <button
        @click="closeAnnouncement"
        type="button"
        class="h-8 w-8 inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50"
      >
        <span class="sr-only">Dismiss</span>
        <XMarkIcon class="h-5 w-5" aria-hidden="true" />
      </button>
    </div>
  </div>
</template>

<script setup>
import { CheckCircleIcon, XMarkIcon } from "@heroicons/vue/20/solid";

let clickClosed = ref(false);

const closeAnnouncement = () => {
  clickClosed.value = true;
};
</script>
