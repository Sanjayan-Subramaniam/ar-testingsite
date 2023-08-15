<template>
  <div class="container lg:w-[1000px] mx-auto relative">
    <!-- <h2
      class="leading-normal md:text-5xl text-center text-3xl text-ardarkgreen"
    >
      Team Spotlight
    </h2> -->
    <TypographyHeadingtwo class="text-center" text-color="ardarkgreen"
      >Team Spotlight</TypographyHeadingtwo
    >

    <div class="px-6 pt-6 w-[90%] lg:w-full mx-auto lg:px-0">
      <div class="flex flex-col lg:flex-row lg:gap-x-0">
        <div
          class="shadow-md lg:rounded-lg rounded-none flex flex-row lg:flex-col-reverse items-center gap-x-6 gap-y-3 lg:basis-1/2 px-6 py-6 lg:p-0"
        >
          <img
            :src="content[state - 1].personnelImage"
            class="rounded-t-lg rounded-bl-lg rounded-br-lg w-12 h-12 lg:w-full lg:h-[400px] lg:rounded-t-none lg:rounded-bl-lg lg:rounded-br-none object-cover object-center"
          />

          <div
            class="flex flex-col gap-y-1 items-start lg:justify-center lg:items-center mt-auto lg:py-12"
          >
            <h4 class="text-arprimary text-[11px] lg:text-desktopCopy">
              {{ content[state - 1].role }}
            </h4>

            <div class="flex flex-row gap-x-3 items-center">
              <img :src="content[state - 1].flagImage" class="h-12" />

              <h4>
                {{ content[state - 1].country }}
              </h4>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col lg:basis-1/2 bg-gradient-to-b from-arsecondary/100 to-white/50 lg:p-6"
        >
          <div class="flex flex-col p-6 md:p-12 lg:p-6 justify-center">
            <h4 class="text-white text-[20px] md:text-[30px] italic">
              {{ content[state - 1].mission }}
            </h4>

            <div class="flex flex-col items-start py-6">
              <img :src="quoteIcon" class="lg:h-16 ml-0" alt="" srcset="" />
            </div>
            <h4
              class="text-arblack text-mobileCopy md:text-desktopCopy basis-2/3"
            >
              {{ content[state - 1].quote }}
            </h4>

            <div
              @click="changeState((state += 1))"
              class="hover:shadow-lg hover:bg-arblack hover:ring-4 cursor-pointer flex flex-col rounded-full w-20 h-20 bg-arprimary justify-center items-center absolute right-4 md:right-20 lg:right-6 top-[40%] md:top-[50%]"
            >
              <img :src="chevron" class="w-12" />
            </div>
          </div>
          <div
            class="p-3 mx-auto flex flex-row w-full justify-center items-center gap-x-6 mt-auto cursor-pointer"
          >
            <div
              @click="changeState(1)"
              class="w-2 h-2 md:w-6 md:h-6"
              :class="
                state === 1
                  ? 'bg-arprimary rounded-full  shadow-lg'
                  : 'border-2 border-arprimary rounded-full'
              "
            ></div>
            <div
              @click="changeState(2)"
              class="w-2 h-2 md:w-6 md:h-6"
              :class="
                state === 2
                  ? 'bg-arprimary rounded-full  shadow-lg'
                  : 'border-2 border-arprimary rounded-full'
              "
            ></div>
            <div
              @click="changeState(3)"
              class="w-2 h-2 md:w-6 md:h-6"
              :class="
                state === 3
                  ? 'bg-arprimary rounded-full  shadow-lg'
                  : 'border-2 border-arprimary rounded-full'
              "
            ></div>
            <div
              @click="changeState(4)"
              class="w-2 h-2 md:w-6 md:h-6"
              :class="
                state === 4
                  ? 'bg-arprimary rounded-full  shadow-lg'
                  : 'border-2 border-arprimary rounded-full'
              "
            ></div>
            <div
              @click="changeState(5)"
              class="w-2 h-2 md:w-6 md:h-6"
              :class="
                state === 5
                  ? 'bg-arprimary rounded-full  shadow-lg'
                  : 'border-2 border-arprimary rounded-full'
              "
            ></div>
            <div
              @click="changeState(6)"
              class="w-2 h-2 md:w-6 md:h-6"
              :class="
                state === 6
                  ? 'bg-arprimary rounded-full  shadow-lg'
                  : 'border-2 border-arprimary rounded-full'
              "
            ></div>
            <div
              @click="changeState(7)"
              class="w-2 h-2 md:w-6 md:h-6"
              :class="
                state === 7
                  ? 'bg-arprimary rounded-full  shadow-lg'
                  : 'border-2 border-arprimary rounded-full'
              "
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let state = ref(1);

const changeState = (newState) => {
  if (state.value > 7) {
    state.value = state.value % 7;
  } else {
    state.value = newState;
  }
};

defineProps({
  personnelImage: String,
  flagImage: String,
  jobTitle: String,
  country: String,
  number: Number,
});

const chevron = "/icons/chevronright.svg";
const quoteIcon = "/icons/quoteleft.svg";

const content = [
  {
    mission: "Deploying robots and upskilling clients",
    role: "On-Site Engineering Global Lead",
    country: "Germany",
    quote:
      "Working with clients every day allows me to see first-hand their fascination and delight with the technology - the robots make short work of a tedious and unloved aspect of their job.",
    flagImage: "/flags/germany.svg",
    personnelImage: "/spotlight-engineeringgloballead.webp",
  },
  {
    mission: "Creating breakthrough innovations",
    role: "Robotics Engineer",
    country: "Mainland China",
    quote:
      "At August Robotics, we are led by a strong team and a clear strategy. The culture allows every voice to be heard and every individual to flourish to their full potential.",
    flagImage: "/flags/mainlandchina.svg",
    personnelImage: "/spotlight-roboticsengineer.webp",
  },
  {
    mission: "Championing robotics to the world",
    role: "Chief Marketing Officer",
    country: "Hong Kong",
    quote:
      "I'm pretty lucky to work at August Robotics. I get to improve the world through robotics and do so with some of the smartest, kindest people l've met.",
    flagImage: "/flags/hongkong.svg",
    personnelImage: "/spotlight-cmo.webp",
  },
  {
    mission: "Translating solutions to real-world impact",
    role: "Business Development Manager",
    country: "United States",
    quote:
      "I've always been interested in emerging technologies. I enjoy finding ways to explain sophisticated technology and its benefits to a layperson. Being that bridge is exciting and rewarding..",
    flagImage: "/flags/usa.svg",
    personnelImage: "/spotlight-bdm.webp",
  },
  {
    mission: "Leading teams to success",
    role: "Senior Project Manager",
    country: "Mainland China",
    quote:
      "We identify clients' real problems and develop the best solutions for their needs. Working here is very interesting - we are always experimenting and new things are happening every day.",
    flagImage: "/flags/mainlandchina.svg",
    personnelImage: "/spotlight-seniorprojectmanager.webp",
  },
  {
    mission: "Developing the next generation of software",
    role: "Chief Information Officer",
    country: "United States",
    quote:
      "I am building the software powering our autonomous and intelligent robots, which is very fun and exciting. By making people's lives easier, robotics is changing the world.",
    flagImage: "/flags/usa.svg",
    personnelImage: "/spotlight-cio.webp",
  },
  {
    mission: "Ensuring premium quality in every robot",
    role: "Testing Engineer",
    country: "Mainland China",
    quote:
      "August Robotics has exposed me to a range of new knowledge and expanded my horizons. The culture and atmosphere are great - everyone supports each other and helps each other grow.",
    flagImage: "/flags/mainlandchina.svg",
    personnelImage: "/spotlight-testingengineer.webp",
  },
];
</script>

<style lang="scss" scoped></style>
