<template>
  <div class="bg-white rounded-md w-[70%] mx-auto shadow-xl">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-4xl">
        <dl class="mt-10 space-y-6">
          <Disclosure
            as="div"
            v-for="(faq, index) in faqs"
            :key="faq.question"
            class="pt-6 pb-12 border-b-2"
            :class="[index === faqs.length - 1 ? 'border-none' : '']"
            v-slot="{ open }"
          >
            <dt>
              <DisclosureButton
                class="flex w-full items-start justify-between text-left text-gray-900"
              >
                <span
                  class="font-semibold leading-7"
                  :class="[
                    open
                      ? 'text-arprimary text-[28px] lg:text-[30px]'
                      : 'text-arblack text-mobileCopy lg:text-desktopCopy ',
                  ]"
                  >{{ faq.question }}</span
                >
                <span class="ml-6 flex h-7">
                  <div
                    v-if="!open"
                    class="bg-arblack h-[40px] w-[40px] rounded-full justify-center items-center"
                  >
                    <ChevronDownIcon
                      class="h-6 w-6 text-white mx-auto mt-2"
                      aria-hidden="true"
                    />
                  </div>
                  <div
                    v-else
                    class="bg-arprimary h-[40px] w-[40px] rounded-full justify-center items-center"
                  >
                    <ChevronUpIcon
                      class="h-6 w-6 text-white mx-auto mt-2"
                      aria-hidden="true"
                    />
                  </div>
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-8 pr-12">
              <p
                style="white-space: pre-wrap"
                v-html="faq.answer"
                class="leading-7 text-gray-600 text-mobileCopy lg:text-desktopCopy"
              ></p>
            </DisclosurePanel>
            <component v-if="open" :is="faq.button" class="mt-4"></component>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import {
  MinusSmallIcon,
  PlusSmallIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline";

const faqs = [
  {
    question: "How fast is Lionel?",
    answer: `Each robot can make 80 marks per hour. This means that 3 robots can mark a 10,000 sq m hall in 2 hours<br><br>The job time depends on your hall size, mark density and the number of robots deployed. Send us a sample floorplan to receive a tailored job time quote.
`,
  },
  {
    question: "Can multiple robots be deployed at the same time?",
    answer: `Yes, multiple robots can be deployed resulting in faster marking speed (e.g. 2 robots to double the speed, 3 robots to triple the speed, and so on)<br><br>The robots all work on one integrated system – you only need to set up once and the system will automatically divide the work amongst the robots.`,
  },
  {
    question: "How accurate is Lionel?",
    answer: `Lionel makes every mark to at least +/- 5mm accuracy. It measures each mark independently, meaning errors will not accumulate.`,
  },
  {
    question: "What kinds of marks and layouts can Lionel mark?",
    answer: `Lionel can mark anything in your CAD plan. The most common marks are booth corners, booth numbers, rigging points, electrical points, and furniture locations<br><br> 
Lionel can also mark all kinds of layouts, including creative, curved and non-rectangular layouts
`,
  },
  {
    question: "Can Lionel work while other activities are happening on site?",
    answer: `Yes. Lionel has state-of-the-art navigation, obstacle avoidance and safety systems<br><br>
It can, in real time, see and work around obstacles such as equipment, people and other moving activities, allowing it to fit seamlessly into your workflow

`,
  },
  {
    question: "What does Lionel use to mark?",
    answer: `Lionel uses a proprietary washable paint that August Robotics developed especially for exhibition floor marking<br><br>The paint is the perfect balance of robustness (can withstand people and equipment moving over the marks) and easiness to clean
`,
  },
  {
    question: "How easy is it to clean the paint off the floor?",
    answer: `As soon as you apply water, Lionel’s marks are easily removed<br><br>Each mark can be wiped off by a wet mop in a few seconds, and even more quickly by regular cleaning machines
`,
  },
  {
    question: "Does Lionel need a WiFi connection on site?",
    answer: `No. Lionel uses its own local network, meaning it does not need to connect to (and does not depend on) a WiFi network on site.
`,
  },
  {
    question: "How long does Lionel’s battery last?",
    answer: `Lionel has a battery life of 10 hours<br><br>Furthermore, you can pre-charge additional batteries and swap them in very quickly, allowing Lionel can work continuously around-the-clock
`,
  },
  {
    question: "What format do my floorplans need to be in for Lionel?",
    answer: `Lionel can use CAD plans in DXF or DWG format<br><br>Simply upload your plan to August portal, which will automatically process the file to be Lionel-ready
`,
  },
  {
    question: "How long has Lionel been around?",
    answer: `Lionel has been marking exhibition shows since 2019<br><br>To date, Lionel robots have marked over 4 million sq m and over 500 halls for customers
`,
  },
];
</script>
