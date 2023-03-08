<template>
  <div class="w-5/6 max-w-[500px]">
    <div class="flex flex-col gap-y-6">
      <h4
        class="text-center text-mobileCopy lg:text-desktopCopy text-argray lg:w-5/6 lg:min-w-[500px] lg:col-start-2"
      >
        Industry Applications
      </h4>

      <div
        class="my-auto ml-auto mr-auto flex h-60 w-[320px] flex-col items-center justify-center rounded-lg bg-white shadow-md md:w-5/6 lg:ml-0 lg:mr-auto lg:w-[500px] lg:col-start-2"
      >
        <div
          class="mx-auto mt-auto grid h-20 w-[80%] grid-cols-12 items-center border-0 bg-argray/80 bg-construction-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:w-[90%] hover:border-4 hover:border-arsecondary hover:bg-argray/100"
        >
          <p
            class="col-start-2 pl-[30%] font-medium text-white text-mobileCopy lg:text-desktopCopy"
          >
            Construction
          </p>
          <ButtonVisitsite
            class="col-span-4 col-start-7 my-auto"
            button-link="https://www.construction.augustrobotics.com"
          ></ButtonVisitsite>
          <!-- <button
            class="col-span-4 col-start-8 my-auto flex h-10 items-center justify-center gap-2 rounded-md bg-white"
          >
            <p class="text-[9px]">Visit Site</p>
            <svg
              class="my-auto w-[10px] md:self-end lg:w-6"
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
          </button> -->
        </div>

        <div
          class="mx-auto mb-auto grid h-20 w-[80%] grid-cols-12 items-center border-0 bg-arblack/80 bg-exhibition-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:w-[90%] hover:border-4 hover:border-arsecondary hover:bg-arblack/100"
        >
          <p
            class="col-start-2 pl-[30%] font-medium text-white text-mobileCopy lg:text-desktopCopy text-left"
          >
            Exhibition
          </p>
          <ButtonVisitsite
            class="col-span-4 col-start-7 my-auto"
            button-link="https://www.exhibitions.augustrobotics.com"
          ></ButtonVisitsite>
          <!-- <button
            class="col-span-4 col-start-8 my-auto flex h-10 items-center justify-center gap-2 rounded-md bg-white"
          >
            <p class="text-[9px]">Visit Site</p>
            <svg
              class="my-auto w-[10px] md:self-end lg:w-6"
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
          </button> -->
        </div>
      </div>
      <NuxtLink
        class="text-center text-mobileCopy lg:text-desktopCopy text-argray lg:w-5/6 lg:min-w-[500px] lg:col-start-2 underline underline-offset-8"
        to="/"
      >
        Lionel Technology
      </NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
