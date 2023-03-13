<template>
  <div class="container mx-auto">
    <div class="grid lg:grid-cols-2 gap-y-9">
      <div class="order-2 ml-auto mr-auto lg:ml-0 lg:row-span-3 lg:row-start-1">
        <div class="flex flex-row lg:flex-col justify-center">
          <div class="rounded-2xl w-[80%]">
            <nuxt-picture
              src="/Working1.jpg"
              class="object-cover"
              style="border-radius: 5px"
            />
          </div>
        </div>
      </div>

      <h2
        class="leading-normal font-base order-1 lg:order-first lg:col-start-2 lg:text-left md:text-5xl text-center text-3xl text-ardarkgreen"
      >
        Founder
      </h2>

      <p
        class="w-[270px] md:w-[440px] lg:w-[480px] xl:w-[640px] order-3 mx-auto text-center text-mobileCopy lg:text-desktopCopy text-arblack lg:mx-0 lg:text-left lg:col-start-2"
      >
        August Robotics was founded by CEO Alex Wyatt.
        <br class="hidden xl:block" />Born and raised in Melbourne, Australia,
        Alex has always been fascinated and inspired by technology. <br /><br />

        After completing undergraduate degrees in Computer Science and Law, Alex
        received the prestigious Rhodes Scholarship from Oxford University.
        There, he completed an MBA and an MPhil in Modern Chinese Studies.<br /><br />

        Alex had always wanted to apply his entrepreneurial efforts to globally
        connected, technology-oriented and purpose-driven projects. In 2006, he
        co-founded Climate Bridge, an international clean energy and carbon
        trading company. By the time he exited in 2013, the company had grown
        its portfolio to 200+ clean energy projects, comprising more than 7GW of
        power and US$2.5 billion total asset value. <br /><br />

        Hungry for an even bigger adventure, in 2017, Alex founded August
        Robotics with the mission to automate “dirty, dangerous and dull” jobs
        across the economy. Alex’s role quickly pivoted from tinkering with
        robots to leading a global team across five offices, while maintaining
        an unwavering mission to improve businesses through technological
        innovation.
      </p>
    </div>
  </div>
</template>

<script setup></script>

<style scoped></style>
