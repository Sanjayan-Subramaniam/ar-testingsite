<template>
  <div class="container mx-auto w-5/6 max-w-[1000px] justify-start">
    <div class="flex h-[200px] flex-row">
      <button
        class="mt-auto flex h-3/6 basis-1/3 content-center justify-center bg-argray/80 bg-construction-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-5/6 hover:bg-argray/100 hover:bg-construction-background-full"
      >
        <h2 class="my-auto text-center text-sm text-white md:text-3xl">
          Construction
        </h2>
      </button>
      <div
        class="mt-auto flex h-3/6 basis-1/3 content-center justify-center bg-arblack/80 bg-exhibition-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-5/6 hover:bg-arblack/100 hover:bg-exhibition-background-full"
      >
        <h2 class="my-auto text-center text-sm text-white md:text-3xl">
          Exhibitions
        </h2>
      </div>
      <div
        class="mt-auto flex h-3/6 basis-1/3 content-center justify-center bg-arblue/60 bg-disinfection-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-5/6 hover:bg-arblue/80 hover:bg-disinfection-background"
      >
        <h2 class="my-auto text-center text-sm text-white md:text-3xl">
          Commercial <br />
          Disinfection
        </h2>
      </div>
    </div>
    <div
      class="h-[420px] rounded-lg p-12 shadow-md md:h-[360px] flex flex-col items-center justify-center"
    >
      <div
        class="flex flex-col-reverse justify-center gap-y-6 gap-x-6 md:flex-row md:gap-y-0"
      >
        <div class="md:basis-3/5">
          <h4 class="text-center text-base font-medium md:text-left md:text-xl">
            Exhibition Floor Marking
          </h4>
          <p class="mt-6 text-center text-sm md:text-left md:text-lg">
            Our Lionel robot is helping exhibition venues around the world
            streamline the floor marking and show set-up process
          </p>
          <button
            class="col-span-4 col-start-8 my-auto ml-auto mr-auto mt-6 flex h-10 items-center justify-center gap-2 rounded-md border-2 border-arblack bg-white pr-12 pl-6 md:ml-0 md:mr-auto"
          >
            <p class="text-[12px]">Visit Site</p>
            <svg
              class="my-auto w-4 md:self-end lg:w-8"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0,0,256,256"
              fill-rule="nonzero"
            >
              <g
                fill="#000000"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <g transform="scale(5.12,5.12)">
                  <path
                    d="M38.03516,13.98828c-0.40625,-0.00781 -0.77734,0.23438 -0.94141,0.60547c-0.16016,0.375 -0.07812,0.80859 0.20703,1.09766l7.97656,8.30859h-43.25391c-0.35937,-0.00391 -0.69531,0.18359 -0.875,0.49609c-0.18359,0.3125 -0.18359,0.69531 0,1.00781c0.17969,0.3125 0.51563,0.5 0.875,0.49609h43.25391l-7.97656,8.30859c-0.38281,0.39844 -0.36719,1.03125 0.03125,1.41406c0.39844,0.38281 1.03125,0.37109 1.41406,-0.03125l10.26563,-10.69141l-10.26562,-10.69141c-0.18359,-0.19922 -0.44141,-0.3125 -0.71094,-0.32031z"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
        </div>
        <div class="ml-auto mr-auto md:basis-2/5 md:align-top">
          <img
            src="../assets/img/Airport.png"
            alt=""
            srcset=""
            class="h-[80px] w-[160px] rounded-lg object-cover md:h-[200px] md:w-[1600px]"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
