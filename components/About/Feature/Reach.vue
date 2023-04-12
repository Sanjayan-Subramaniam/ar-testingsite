<template>
  <div class="container mx-auto transition-all duration-1000 ease-in-out">
    <h2 class="text-center text-3xl text-ardarkgreen md:text-5xl mb-6">
      Our Reach
    </h2>

    <div class="grid grid-cols-12 grid-rows-3 gap-x-3">
      <div
        class="col-start-2 col-span-3 row-start-1 row-span-3 bg-white shadow-lg rounded-md py-6 lg:row-start-1 lg:row-span-3 lg:col-start-1 lg:col-span-2"
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
            :class="
              state === 'lasvegas' ? 'border-arprimary border-2' : 'border-none'
            "
            @mouseover="changeState('lasvegas')"
            @click="changeState('lasvegas')"
          >
            <div href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Las Vegas Office</span>
              <img class="h-8 w-auto" src="~/assets/img/flags/usa.svg" alt="" />
            </div>
            <h4
              class="text-argray text-[9px] md:text-[12px] lg:text-[16px] text-center"
            >
              Las Vegas
            </h4>
          </a>

          <a
            class="flex flex-col gap-y-1 items-center shadow-sm py-3 w-[80%] rounded-lg"
            :class="
              state === 'indy' ? 'border-arprimary border-2' : 'border-none'
            "
            @mouseover="changeState('indy')"
            @click="changeState('indy')"
          >
            <div href="#" class="-m-1.5 p-1.5">
              <span class="sr-only">Indianapolis Office</span>
              <img class="h-8 w-auto" src="~/assets/img/flags/usa.svg" alt="" />
            </div>
            <h4
              class="text-argray text-[9px] md:text-[12px] lg:text-[16px] text-center"
            >
              Indianapolis
            </h4>
          </a>

          <a
            class="flex flex-col gap-y-1 items-center shadow-sm py-3 w-[80%] rounded-lg"
            :class="
              state === 'germany' ? 'border-arprimary border-2' : 'border-none'
            "
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
            <h4
              class="text-argray text-[9px] md:text-[12px] lg:text-[16px] text-center"
            >
              Düsseldorf
            </h4>
          </a>

          <a
            class="flex flex-col gap-y-1 items-center shadow-sm py-3 w-[80%] rounded-lg"
            :class="
              state === 'hongkong' ? 'border-arprimary border-2' : 'border-none'
            "
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
            <h4
              class="text-argray text-[9px] md:text-[12px] lg:text-[16px] text-center"
            >
              Hong Kong
            </h4>
          </a>

          <a
            class="flex flex-col gap-y-1 items-center shadow-sm py-3 w-[80%] rounded-lg"
            :class="
              state === 'china' ? 'border-arprimary border-2' : 'border-none'
            "
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
            <h4
              class="text-argray text-[9px] md:text-[12px] lg:text-[16px] text-center"
            >
              Shenzhen
            </h4>
          </a>
        </div>
      </div>
      <div
        class="col-start-5 col-span-7 row-span-3 bg-white shadow-lg lg:col-span-10 lg:row-span-3"
      >
        <div class="flex flex-col h-full" v-if="state === 'lasvegas'">
          <div
            class="flex flex-row justify-start items-center p-3 gap-x-3 lg:p-6 lg:gap-x-6"
          >
            <img
              class="h-full w-auto"
              src="~/assets/img/flags/usa.svg"
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3222.4792830781475!2d-115.19201106920048!3d36.13054184914143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c402ce1b6b5b%3A0x12b7b021d3b72502!2s3400%20W%20Desert%20Inn%20Rd%2C%20Las%20Vegas%2C%20NV%2089102%2C%20USA!5e0!3m2!1sen!2sau!4v1678739736438!5m2!1sen!2sau"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-[280px] lg:h-[320px]"
              ></iframe>
            </div>
            <div class="flex flex-col gap-y-3 lg:basis-1/3">
              <h4
                class="text-argray text-[24px] md:text-center lg:text-left lg:text-desktopCopy"
              >
                Address
              </h4>
              <p
                class="text-[14px] text-left md:text-center lg:text-desktopCopy lg:items-start lg:text-left"
              >
                3400 W Desert Inn Rd,<br />
                Las Vegas <br />
                NV 89102, United States
              </p>
              <ButtonPrimary
                class="mt-3 mx-auto lg:ml-0 w-full justify-center"
              ></ButtonPrimary>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-full" v-if="state === 'indy'">
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3065.765431607279!2d-86.30925378439913!3d39.78981920145045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca8fab2523ced%3A0x75cf024ef5a933be!2s8255%20Indy%20Ct%2C%20Indianapolis%2C%20IN%2046214%2C%20USA!5e0!3m2!1sen!2sau!4v1678740003684!5m2!1sen!2sau"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-[280px] lg:h-[320px]"
              ></iframe>
            </div>
            <div class="flex flex-col gap-y-3 lg:basis-1/3">
              <h4
                class="text-argray text-[24px] md:text-center lg:text-left lg:text-desktopCopy"
              >
                Address
              </h4>
              <p
                class="text-[14px] text-left md:text-center lg:text-desktopCopy lg:items-start lg:text-left"
              >
                8255 Indy Court<br />
                Indianapolis, <br />
                IN 46214, United States
              </p>
              <ButtonPrimary
                class="mt-3 mx-auto lg:ml-0 w-full justify-center"
              ></ButtonPrimary>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-full" v-if="state === 'germany'">
          <div
            class="flex flex-row justify-start items-center p-3 gap-x-3 lg:p-6 lg:gap-x-6"
          >
            <img
              class="h-full w-auto"
              src="~/assets/img/flags/germany.svg"
              alt=""
            />
            <h4 class="text-arprimary text-mobileCopy lg:text-desktopCopy">
              Krefeld, Germany
            </h4>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col lg:flex-row p-3 gap-y-3 lg:p-6 lg:gap-x-6">
            <div class="lg:basis-2/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2499.490098841227!2d6.803136416087169!3d51.21004667958731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8cbb5ce0ecb37%3A0xf0b5c1c9771e86b9!2sOberbilker%20Allee%20270A%2C%2040227%20D%C3%BCsseldorf%2C%20Germany!5e0!3m2!1sen!2sau!4v1681270635793!5m2!1sen!2sau"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-[280px] lg:h-[320px]"
              ></iframe>
            </div>
            <div class="flex flex-col gap-y-3 lg:basis-1/3">
              <h4
                class="text-argray text-[24px] md:text-center lg:text-left lg:text-desktopCopy"
              >
                Address
              </h4>
              <p
                class="text-[14px] text-left md:text-center lg:text-desktopCopy lg:items-start lg:text-left"
              >
                Oberbilker Allee 270A,<br />
                40227 Düsseldorf, <br />Germany
              </p>
              <ButtonPrimary
                class="mt-3 mx-auto lg:ml-0 w-full justify-center"
              ></ButtonPrimary>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-full" v-if="state === 'hongkong'">
          <div
            class="flex flex-row justify-start items-center p-3 gap-x-3 lg:p-6 lg:gap-x-6"
          >
            <img
              class="h-full w-auto"
              src="~/assets/img/flags/hongkong.svg"
              alt=""
            />
            <h4 class="text-arprimary text-mobileCopy lg:text-desktopCopy">
              Hong Kong, China
            </h4>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col lg:flex-row p-3 gap-y-3 lg:p-6 lg:gap-x-6">
            <div class="lg:basis-2/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688.0477054796943!2d114.20385292864755!3d22.4272301968038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34040890c6e5ba1d%3A0xef42d8046db41843!2sUnit%20230%2C%20Building%2C%2019%20Science%20Park%20W%20Ave%2C%20Sha%20Tin%2C%20Hong%20Kong!5e0!3m2!1sen!2sau!4v1678740805492!5m2!1sen!2sau"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-[280px] lg:h-[320px]"
              ></iframe>
            </div>
            <div class="flex flex-col gap-y-3 lg:basis-1/3">
              <h4
                class="text-argray text-[24px] md:text-center lg:text-left lg:text-desktopCopy"
              >
                Address
              </h4>
              <p
                class="text-[14px] text-left md:text-center lg:text-desktopCopy lg:items-start lg:text-left"
              >
                Unit 230, Building 19<br />
                Science Park W Ave <br />
                Sha Tin, Hong Kong
              </p>
              <ButtonPrimary
                class="mt-3 mx-auto lg:ml-0 w-full justify-center"
              ></ButtonPrimary>
            </div>
          </div>
        </div>
        <div class="flex flex-col h-full" v-if="state === 'china'">
          <div
            class="flex flex-row justify-start items-center p-3 gap-x-3 lg:p-6 lg:gap-x-6"
          >
            <img
              class="h-full w-auto"
              src="~/assets/img/flags/mainlandchina.svg"
              alt=""
            />
            <h4 class="text-arprimary text-mobileCopy lg:text-desktopCopy">
              Shenzhen, China
            </h4>
          </div>
          <hr class="h-[1px] bg-argray/20 mx-3" />
          <div class="flex flex-col lg:flex-row p-3 gap-y-3 lg:p-6 lg:gap-x-6">
            <div class="lg:basis-2/3">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14737.133757782785!2d114.06484!3d22.5685!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403f46257252eaf%3A0x87ab2098ed666ff4!2zQ2hpbmEsIEd1YW5nIERvbmcgU2hlbmcsIFNoZW4gWmhlbiBTaGksIEZ1IFRpYW4gUXUsIOaiheael-i3rzQ25Y-3IOmCruaUv-e8lueggTogNTE4MDQ5!5e0!3m2!1sen!2shk!4v1681196019809!5m2!1sen!2shk"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-[280px] lg:h-[320px]"
              ></iframe>
            </div>
            <div class="flex flex-col gap-y-3 lg:basis-1/3">
              <h4
                class="text-argray text-[24px] md:text-center lg:text-left lg:text-desktopCopy"
              >
                Address
              </h4>
              <p
                class="text-[14px] text-left md:text-center lg:text-desktopCopy lg:items-start lg:text-left"
              >
                Suite 316, West Lake Building<br />
                46 Meilin Road, Futian District <br />
                Shenzhen, China
              </p>
              <ButtonPrimary
                class="mt-3 mx-auto lg:ml-0 w-full justify-center"
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
