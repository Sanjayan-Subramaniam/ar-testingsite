<template>
  <div class="container mx-auto">
    <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl mb-6">
      Our Reach
    </h2>

    <div class="grid grid-cols-12 grid-rows-6 gap-x-3">
      <div
        class="col-start-2 col-span-3 row-start-2 row-span-5 bg-white shadow-lg rounded-md py-6 lg:row-start-1 lg:row-span-3 lg:col-start-1 lg:col-span-2"
      >
        <div
          class="flex flex-col h-full justify-between items-center gap-y-6 lg:gap-x-6 lg:px-6 lg:gap-y-3"
        >
          <h4
            class="text-argray text-mobileCopy lg:text-desktopCopy mt-auto text-center"
          >
            Locations
          </h4>

          <a
            class="flex flex-col gap-y-1 items-center shadow-sm py-3 w-[80%] rounded-lg"
            @mouseover="changeState('lasvegas')"
            @click="changeState('lasvegas')"
          >
            <div href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Las Vegas Office</span>
              <img class="h-8 w-auto" src="~/assets/img/flags/usa.svg" alt="" />
            </div>
            <h4 class="text-argray text-[9px] text-center">Las Vegas</h4>
          </a>

          <a
            class="flex flex-col gap-y-1 items-center shadow-sm py-3 w-[80%] rounded-lg"
            @mouseover="changeState('indy')"
            @click="changeState('indy')"
          >
            <div href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Indianapolis Office</span>
              <img class="h-8 w-auto" src="~/assets/img/flags/usa.svg" alt="" />
            </div>
            <h4 class="text-argray text-[9px] text-center">Indianapolis</h4>
          </a>

          <a
            class="flex flex-col gap-y-1 items-center shadow-sm py-3 w-[80%] rounded-lg"
            @mouseover="changeState('germany')"
            @click="changeState('germany')"
          >
            <div href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Germany Office</span>
              <img
                class="h-8 w-auto"
                src="~/assets/img/flags/germany.svg"
                alt=""
              />
            </div>
            <h4 class="text-argray text-[9px] text-center">Germany</h4>
          </a>

          <a
            class="flex flex-col gap-y-1 items-center shadow-sm py-3 w-[80%] rounded-lg"
            @mouseover="changeState('hongkong')"
            @click="changeState('hongkong')"
          >
            <div href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Hong Kong Office</span>
              <img
                class="h-8 w-auto"
                src="~/assets/img/flags/hongkong.svg"
                alt=""
              />
            </div>
            <h4 class="text-argray text-[9px] text-center">Hong Kong</h4>
          </a>

          <a
            class="flex flex-col gap-y-1 items-center shadow-sm py-3 w-[80%] rounded-lg"
            @mouseover="changeState('china')"
            @click="changeState('china')"
          >
            <div href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Mainland China Office</span>
              <img
                class="h-8 w-auto"
                src="~/assets/img/flags/mainlandchina.svg"
                alt=""
              />
            </div>
            <h4 class="text-argray text-[9px] text-center">Mainland China</h4>
          </a>
        </div>
      </div>
      <div
        class="col-start-5 col-span-7 row-span-6 bg-white shadow-lg lg:col-span-10 lg:row-span-4"
      >
        <div class="flex flex-col h-full" v-if="state === 'lasvegas'">
          <div
            class="h-[80px] lg:h-[200px] bg-[url('assets/img/Mine.png')] bg-cover bg-center"
          ></div>
          <div
            class="flex flex-row justify-start items-center p-3 gap-x-3 lg:p-6 lg:gap-x-6"
          >
            <img
              class="h-full w-auto"
              src="~~/assets/img/flags/usa.svg"
              alt=""
            />
            <h4 class="text-arprimary text-mobileCopy lg:text-desktopCopy">
              Las Vegas, USA
            </h4>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col lg:flex-row p-3 gap-y-3 lg:p-6 lg:gap-x-6">
            <div class="lg:basis-2/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.0478372154957!2d114.20385292988665!3d22.42722523810468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040890c6e5ba1d%3A0xef42d8046db41843!2sUnit%20230%2C%20Building%2C%2019%20Science%20Park%20W%20Ave%2C%20Sha%20Tin%2C%20Hong%20Kong!5e0!3m2!1sen!2sau!4v1678599783145!5m2!1sen!2sau"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-auto lg:h-[240px]"
              ></iframe>
            </div>
            <div class="flex flex-col gap-y-3 lg:basis-1/3">
              <h4
                class="text-argray text-[14px] md:text-center lg:text-left lg:text-desktopCopy"
              >
                Address
              </h4>
              <p
                class="text-[10px] text-left md:text-center lg:text-desktopCopy lg:items-start lg:text-left"
              >
                Unit 230, Building 19W,<br />
                Science and Technology Ave W, <br />
                Hong Kong Science Park, Sha Tin
              </p>
            </div>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col gap-y-3 p-3 lg:p-6">
            <h4
              class="text-argray text-[14px] md:text-center lg:text-desktopCopy lg:text-left"
            >
              Contact
            </h4>
            <div
              class="flex flex-col lg:flex-row gap-y-3 md:items-center lg:justify-start lg:items-center lg:mt-6"
            >
              <div
                class="w-full grid grid-cols-12 items-center justify-start lg:grid-cols-4 lg:basis-1/3"
              >
                <img
                  class="h-4 lg:h-8 col-start-1 md:col-start-4 col-span-1 justify-self-center lg:col-start-1 lg:mr-auto"
                  src="~/assets/img/icons/phone.svg"
                  alt=""
                />
                <p
                  class="col-start-3 md:col-start-5 col-span-6 md:col-span-6 text-[9px] lg:col-start-2 lg:col-span-3 lg:text-[13px]"
                >
                  +656546546546
                </p>
              </div>
              <div
                class="w-full grid grid-cols-12 items-center justify-start lg:grid-cols-4 lg:basis-1/3"
              >
                <img
                  class="h-4 lg:h-8 col-start-1 md:col-start-4 col-span-1 justify-self-center lg:col-start-1 lg:mr-auto"
                  src="~/assets/img/icons/email.svg"
                  alt=""
                />
                <p
                  class="col-start-3 md:col-start-5 col-span-6 md:col-span-6 text-[9px] lg:col-start-2 lg:col-span-3 lg:text-[13px]"
                >
                  dan.tofigh@augustrobotics.com
                </p>
              </div>
              <ButtonPrimary
                class="mt-3 lg:mt-0 mx-auto w-full justify-center"
              ></ButtonPrimary>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-full" v-if="state === 'indy'">
          <div
            class="h-[80px] lg:h-[200px] bg-[url('assets/img/Mine.png')] bg-cover bg-center"
          ></div>
          <div
            class="flex flex-row justify-start items-center p-3 gap-x-3 lg:p-6 lg:gap-x-6"
          >
            <img
              class="h-full w-auto"
              src="~~/assets/img/flags/usa.svg"
              alt=""
            />
            <h4 class="text-arprimary text-mobileCopy lg:text-desktopCopy">
              Indianapolis, USA
            </h4>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col lg:flex-row p-3 gap-y-3 lg:p-6 lg:gap-x-6">
            <div class="lg:basis-2/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.0478372154957!2d114.20385292988665!3d22.42722523810468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040890c6e5ba1d%3A0xef42d8046db41843!2sUnit%20230%2C%20Building%2C%2019%20Science%20Park%20W%20Ave%2C%20Sha%20Tin%2C%20Hong%20Kong!5e0!3m2!1sen!2sau!4v1678599783145!5m2!1sen!2sau"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-auto lg:h-[240px]"
              ></iframe>
            </div>
            <div class="flex flex-col gap-y-3 lg:basis-1/3">
              <h4
                class="text-argray text-[14px] md:text-center lg:text-left lg:text-desktopCopy"
              >
                Address
              </h4>
              <p
                class="text-[10px] text-left md:text-center lg:text-desktopCopy lg:items-start lg:text-left"
              >
                Unit 230, Building 19W,<br />
                Science and Technology Ave W, <br />
                Hong Kong Science Park, Sha Tin
              </p>
            </div>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col gap-y-3 p-3 lg:p-6">
            <h4
              class="text-argray text-[14px] md:text-center lg:text-desktopCopy lg:text-left"
            >
              Contact
            </h4>
            <div
              class="flex flex-col lg:flex-row gap-y-3 md:items-center lg:justify-start lg:items-center lg:mt-6"
            >
              <div
                class="w-full grid grid-cols-12 items-center justify-start lg:grid-cols-4 lg:basis-1/3"
              >
                <img
                  class="h-4 lg:h-8 col-start-1 md:col-start-4 col-span-1 justify-self-center lg:col-start-1 lg:mr-auto"
                  src="~/assets/img/icons/phone.svg"
                  alt=""
                />
                <p
                  class="col-start-3 md:col-start-5 col-span-6 md:col-span-6 text-[9px] lg:col-start-2 lg:col-span-3 lg:text-[13px]"
                >
                  +656546546546
                </p>
              </div>
              <div
                class="w-full grid grid-cols-12 items-center justify-start lg:grid-cols-4 lg:basis-1/3"
              >
                <img
                  class="h-4 lg:h-8 col-start-1 md:col-start-4 col-span-1 justify-self-center lg:col-start-1 lg:mr-auto"
                  src="~/assets/img/icons/email.svg"
                  alt=""
                />
                <p
                  class="col-start-3 md:col-start-5 col-span-6 md:col-span-6 text-[9px] lg:col-start-2 lg:col-span-3 lg:text-[13px]"
                >
                  dan.tofigh@augustrobotics.com
                </p>
              </div>
              <ButtonPrimary
                class="mt-3 lg:mt-0 mx-auto w-full justify-center"
              ></ButtonPrimary>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-full" v-if="state === 'germany'">
          <div
            class="h-[80px] lg:h-[200px] bg-[url('assets/img/Mine.png')] bg-cover bg-center"
          ></div>
          <div
            class="flex flex-row justify-start items-center p-3 gap-x-3 lg:p-6 lg:gap-x-6"
          >
            <img
              class="h-full w-auto"
              src="~/assets/img/flags/germany.svg"
              alt=""
            />
            <h4 class="text-arprimary text-mobileCopy lg:text-desktopCopy">
              Krefeld Uerdingen,, Germany
            </h4>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col lg:flex-row p-3 gap-y-3 lg:p-6 lg:gap-x-6">
            <div class="lg:basis-2/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.0478372154957!2d114.20385292988665!3d22.42722523810468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040890c6e5ba1d%3A0xef42d8046db41843!2sUnit%20230%2C%20Building%2C%2019%20Science%20Park%20W%20Ave%2C%20Sha%20Tin%2C%20Hong%20Kong!5e0!3m2!1sen!2sau!4v1678599783145!5m2!1sen!2sau"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-auto lg:h-[240px]"
              ></iframe>
            </div>
            <div class="flex flex-col gap-y-3 lg:basis-1/3">
              <h4
                class="text-argray text-[14px] md:text-center lg:text-left lg:text-desktopCopy"
              >
                Address
              </h4>
              <p
                class="text-[10px] text-left md:text-center lg:text-desktopCopy lg:items-start lg:text-left"
              >
                Unit 230, Building 19W,<br />
                Science and Technology Ave W, <br />
                Hong Kong Science Park, Sha Tin
              </p>
            </div>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col gap-y-3 p-3 lg:p-6">
            <h4
              class="text-argray text-[14px] md:text-center lg:text-desktopCopy lg:text-left"
            >
              Contact
            </h4>
            <div
              class="flex flex-col lg:flex-row gap-y-3 md:items-center lg:justify-start lg:items-center lg:mt-6"
            >
              <div
                class="w-full grid grid-cols-12 items-center justify-start lg:grid-cols-4 lg:basis-1/3"
              >
                <img
                  class="h-4 lg:h-8 col-start-1 md:col-start-4 col-span-1 justify-self-center lg:col-start-1 lg:mr-auto"
                  src="~/assets/img/icons/phone.svg"
                  alt=""
                />
                <p
                  class="col-start-3 md:col-start-5 col-span-6 md:col-span-6 text-[9px] lg:col-start-2 lg:col-span-3 lg:text-[13px]"
                >
                  +656546546546
                </p>
              </div>
              <div
                class="w-full grid grid-cols-12 items-center justify-start lg:grid-cols-4 lg:basis-1/3"
              >
                <img
                  class="h-4 lg:h-8 col-start-1 md:col-start-4 col-span-1 justify-self-center lg:col-start-1 lg:mr-auto"
                  src="~~/assets/img/icons/email.svg"
                  alt=""
                />
                <p
                  class="col-start-3 md:col-start-5 col-span-6 md:col-span-6 text-[9px] lg:col-start-2 lg:col-span-3 lg:text-[13px]"
                >
                  dan.tofigh@augustrobotics.com
                </p>
              </div>
              <ButtonPrimary
                class="mt-3 lg:mt-0 mx-auto w-full justify-center"
              ></ButtonPrimary>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-full" v-if="state === 'hongkong'">
          <div
            class="h-[80px] lg:h-[200px] bg-[url('assets/img/Mine.png')] bg-cover bg-center"
          ></div>
          <div
            class="flex flex-row justify-start items-center p-3 gap-x-3 lg:p-6 lg:gap-x-6"
          >
            <img
              class="h-full w-auto"
              src="~/assets/img/flags/usa.svg"
              alt=""
            />
            <h4 class="text-arprimary text-mobileCopy lg:text-desktopCopy">
              Hong Kong, Mainland China
            </h4>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col lg:flex-row p-3 gap-y-3 lg:p-6 lg:gap-x-6">
            <div class="lg:basis-2/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.0478372154957!2d114.20385292988665!3d22.42722523810468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040890c6e5ba1d%3A0xef42d8046db41843!2sUnit%20230%2C%20Building%2C%2019%20Science%20Park%20W%20Ave%2C%20Sha%20Tin%2C%20Hong%20Kong!5e0!3m2!1sen!2sau!4v1678599783145!5m2!1sen!2sau"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-auto lg:h-[240px]"
              ></iframe>
            </div>
            <div class="flex flex-col gap-y-3 lg:basis-1/3">
              <h4
                class="text-argray text-[14px] md:text-center lg:text-left lg:text-desktopCopy"
              >
                Address
              </h4>
              <p
                class="text-[10px] text-left md:text-center lg:text-desktopCopy lg:items-start lg:text-left"
              >
                Unit 230, Building 19W,<br />
                Science and Technology Ave W, <br />
                Hong Kong Science Park, Sha Tin
              </p>
            </div>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col gap-y-3 p-3 lg:p-6">
            <h4
              class="text-argray text-[14px] md:text-center lg:text-desktopCopy lg:text-left"
            >
              Contact
            </h4>
            <div
              class="flex flex-col lg:flex-row gap-y-3 md:items-center lg:justify-start lg:items-center lg:mt-6"
            >
              <div
                class="w-full grid grid-cols-12 items-center justify-start lg:grid-cols-4 lg:basis-1/3"
              >
                <img
                  class="h-4 lg:h-8 col-start-1 md:col-start-4 col-span-1 justify-self-center lg:col-start-1 lg:mr-auto"
                  src="~/assets/img/icons/phone.svg"
                  alt=""
                />
                <p
                  class="col-start-3 md:col-start-5 col-span-6 md:col-span-6 text-[9px] lg:col-start-2 lg:col-span-3 lg:text-[13px]"
                >
                  +656546546546
                </p>
              </div>
              <div
                class="w-full grid grid-cols-12 items-center justify-start lg:grid-cols-4 lg:basis-1/3"
              >
                <img
                  class="h-4 lg:h-8 col-start-1 md:col-start-4 col-span-1 justify-self-center lg:col-start-1 lg:mr-auto"
                  src="~/assets/img/icons/email.svg"
                  alt=""
                />
                <p
                  class="col-start-3 md:col-start-5 col-span-6 md:col-span-6 text-[9px] lg:col-start-2 lg:col-span-3 lg:text-[13px]"
                >
                  dan.tofigh@augustrobotics.com
                </p>
              </div>
              <ButtonPrimary
                class="mt-3 lg:mt-0 mx-auto w-full justify-center"
              ></ButtonPrimary>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-full" v-if="state === 'china'">
          <div
            class="h-[80px] lg:h-[200px] bg-[url('assets/img/Mine.png')] bg-cover bg-center"
          ></div>
          <div
            class="flex flex-row justify-start items-center p-3 gap-x-3 lg:p-6 lg:gap-x-6"
          >
            <img
              class="h-full w-auto"
              src="~/assets/img/flags/usa.svg"
              alt=""
            />
            <h4 class="text-arprimary text-mobileCopy lg:text-desktopCopy">
              Shenzen, Mainland China
            </h4>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col lg:flex-row p-3 gap-y-3 lg:p-6 lg:gap-x-6">
            <div class="lg:basis-2/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.0478372154957!2d114.20385292988665!3d22.42722523810468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040890c6e5ba1d%3A0xef42d8046db41843!2sUnit%20230%2C%20Building%2C%2019%20Science%20Park%20W%20Ave%2C%20Sha%20Tin%2C%20Hong%20Kong!5e0!3m2!1sen!2sau!4v1678599783145!5m2!1sen!2sau"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-auto lg:h-[240px]"
              ></iframe>
            </div>
            <div class="flex flex-col gap-y-3 lg:basis-1/3">
              <h4
                class="text-argray text-[14px] md:text-center lg:text-left lg:text-desktopCopy"
              >
                Address
              </h4>
              <p
                class="text-[10px] text-left md:text-center lg:text-desktopCopy lg:items-start lg:text-left"
              >
                Unit 230, Building 19W,<br />
                Science and Technology Ave W, <br />
                Hong Kong Science Park, Sha Tin
              </p>
            </div>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col gap-y-3 p-3 lg:p-6">
            <h4
              class="text-argray text-[14px] md:text-center lg:text-desktopCopy lg:text-left"
            >
              Contact
            </h4>
            <div
              class="flex flex-col lg:flex-row gap-y-3 md:items-center lg:justify-start lg:items-center lg:mt-6"
            >
              <div
                class="w-full grid grid-cols-12 items-center justify-start lg:grid-cols-4 lg:basis-1/3"
              >
                <img
                  class="h-4 lg:h-8 col-start-1 md:col-start-4 col-span-1 justify-self-center lg:col-start-1 lg:mr-auto"
                  src="~/assets/img/icons/phone.svg"
                  alt=""
                />
                <p
                  class="col-start-3 md:col-start-5 col-span-6 md:col-span-6 text-[9px] lg:col-start-2 lg:col-span-3 lg:text-[13px]"
                >
                  +656546546546
                </p>
              </div>
              <div
                class="w-full grid grid-cols-12 items-center justify-start lg:grid-cols-4 lg:basis-1/3"
              >
                <img
                  class="h-4 lg:h-8 col-start-1 md:col-start-4 col-span-1 justify-self-center lg:col-start-1 lg:mr-auto"
                  src="~/assets/img/icons/email.svg"
                  alt=""
                />
                <p
                  class="col-start-3 md:col-start-5 col-span-6 md:col-span-6 text-[9px] lg:col-start-2 lg:col-span-3 lg:text-[13px]"
                >
                  dan.tofigh@augustrobotics.com
                </p>
              </div>
              <ButtonPrimary
                class="mt-3 lg:mt-0 mx-auto w-full justify-center"
              ></ButtonPrimary>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let state = ref("lasvegas");

const changeState = (newState) => {
  state.value = newState;
};
</script>
