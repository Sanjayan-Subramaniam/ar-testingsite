<template>
  <div class="container mx-auto w-[80%] lg:w-[1000px]">
    <div class="shadow-md bg-white mx-auto">
      <div class="flex lg:flex-row flex-col p-6 gap-y-6">
        <div
          class="flex flex-row justify-around lg:flex-col basis-1/4 lg:justify-center items-center"
        >
          <nuxt-picture src="/flags/mainlandchina.svg" />
          <nuxt-picture src="/flags/mainlandchina.svg" />
        </div>
        <div class="flex flex-col basis-3/4 gap-y-6">
          <hr class="lg:hidden" />
          <h4 class="text-mobileCopy lg:text-desktopCopy">Robotics Engineer</h4>
          <p class="max-w-[640px] text-arblack">
            澳谷智能 (August Robotics) 是一家国际化公司，致力
            为商业用户提供各类特种应用机器人，帮助企业实现流
            程自动化。公司的研发位于中国深圳，商务和销售办公
            室在香港、德国和美国。
          </p>

          <ButtonDownloadjobdescription></ButtonDownloadjobdescription>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
