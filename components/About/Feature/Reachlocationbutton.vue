<template>
  <a
    class="flex flex-col gap-y-1 items-center shadow-sm py-3 w-[80%] rounded-lg"
  >
    <div href="#" class="-m-1.5 p-1.5">
      <span class="sr-only">{{ srlocation }}</span>
      <img class="h-8 w-auto" :src="flagImage" alt="" />
    </div>
    <h4 class="text-argray text-[16px] text-center">{{ location }}</h4>
  </a>
</template>

<script setup>
defineProps({
  flagImage: String,
  srlocation: String,
  location: String,
});
</script>
