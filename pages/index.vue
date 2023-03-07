<template>
  <div>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="output.css" rel="stylesheet" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
    </head>
    <body class="font-sans">
      <header>
        <!-- <nav class="bg-white py-8">
        <div class="container mx-auto">
          <div class="grid grid-cols-12 items-center">
            <div class="col-span-4 col-start-2">
              <img src="/dist/../assets/img/ar_logo.svg" class="w-24" alt="" srcset="" />
            </div>
            <div
              class="col-span-8 col-start-7 hidden flex-col content-center justify-center md:flex"
            >
              <button
                class="h-12 w-32 rounded-lg bg-arprimary px-4 py-3 text-white"
              >
                Speak to us
              </button>
              <p class="text-center text-sm text-ardarkgreen">
                info@augustrobotics.com
              </p>
            </div>
          </div>
        </div>
      </nav> -->
        <!-- Navbar goes here -->
        <nav class="bg-white py-8 shadow-lg">
          <div class="container mx-auto">
            <div class="grid grid-cols-12 content-center">
              <div
                class="col-span-3 col-start-2 my-auto lg:col-span-2 lg:col-start-1"
              >
                <!-- Website Logo -->
                <a href="#" class="">
                  <img
                    src="../assets/img/ar_logo.svg"
                    alt="Logo"
                    class="w-48"
                  />
                </a>
              </div>
              <!-- Primary Navbar items -->
              <div
                class="col-span-6 col-start-4 my-auto hidden space-x-8 text-left text-[12px] lg:block xl:text-[16px]"
              >
                <a
                  href=""
                  class="border-b-4 border-arprimary py-4 font-medium text-arprimary"
                  >Construction</a
                >
                <a
                  href=""
                  class="py-4 px-2 font-medium text-arblack transition duration-300 hover:text-arprimary"
                  >Exhibitions</a
                >
                <a
                  href=""
                  class="py-4 px-2 font-medium text-arblack transition duration-300 hover:text-arprimary"
                  >Technology</a
                >
                <a
                  href=""
                  class="py-4 px-2 font-medium text-arblack transition duration-300 hover:text-arprimary"
                  >Company</a
                >
                <a
                  href=""
                  class="py-4 px-2 font-medium text-arblack transition duration-300 hover:text-arprimary"
                  >Careers</a
                >
              </div>

              <!-- Secondary Navbar items -->
              <div
                class="col-span-2 col-start-11 hidden items-center space-x-3 lg:block"
              >
                <div class="flex flex-col items-center justify-center gap-y-3">
                  <button
                    class="h-12 w-32 rounded-lg bg-arprimary px-4 py-3 text-white"
                  >
                    Speak to us
                  </button>
                  <p class="text-center text-sm text-arprimary">
                    info@augustrobotics.com
                  </p>
                </div>
              </div>
              <!-- Mobile menu button -->
              <div
                class="col-start-10 flex flex-col pt-2 align-middle lg:hidden"
              >
                <button class="mobile-menu-button my-auto outline-none">
                  <svg
                    class="h-12 w-12 text-gray-500 hover:text-arprimary"
                    x-show="!showMenu"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <!-- mobile menu -->
          <div class="mobile-menu mt-6 hidden lg:hidden">
            <ul class="">
              <li class="active">
                <a
                  href="index.html"
                  class="block px-2 py-4 text-sm font-semibold text-white hover:bg-arprimary hover:text-white"
                  >Construction</a
                >
              </li>
              <li>
                <a
                  href="#services"
                  class="block px-2 py-4 text-sm transition duration-300 hover:bg-arprimary hover:text-white"
                  >Exhibitions</a
                >
              </li>
              <li>
                <a
                  href="#about"
                  class="block px-2 py-4 text-sm transition duration-300 hover:bg-arprimary hover:text-white"
                  >Technology</a
                >
              </li>
              <li>
                <a
                  href="#contact"
                  class="block px-2 py-4 text-sm transition duration-300 hover:bg-arprimary hover:text-white"
                  >Company</a
                >
              </li>
              <li>
                <a
                  href="#contact"
                  class="block px-2 py-4 text-sm transition duration-300 hover:bg-arprimary hover:text-white"
                  >Careers</a
                >
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <section
        class="relative flex h-[70vh] flex-col bg-black/70 bg-lionel-background bg-cover bg-center bg-blend-overlay lg:h-[90vh]"
      >
        <div class="absolute bottom-0 flex h-2/5 w-full flex-row">
          <button
            class="mt-auto h-3/6 basis-1/3 bg-argray/20 bg-construction-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-3/5 hover:bg-argray/60 hover:bg-construction-background-full hover:md:h-4/5 lg:h-2/5"
          >
            <div
              class="mx-[10%] flex flex-col justify-center gap-2 md:flex-row"
            >
              <h2
                class="h-1/2 w-[90%] text-left text-[11px] text-white md:text-[14px] lg:w-[80%] lg:text-[16px] xl:text-[20px]"
              >
                Construction layout marking<br />
                with Lionel
              </h2>
              <svg
                class="w-6 md:w-12 md:self-end lg:w-16"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0,0,256,256"
                fill-rule="nonzero"
              >
                <g
                  fill="#ffffff"
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
            </div>
          </button>
          <button
            class="mt-auto h-3/6 basis-1/3 bg-arblack/20 bg-exhibition-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-3/5 hover:bg-arblack/60 hover:bg-exhibition-background-full hover:md:h-4/5 lg:h-2/5"
          >
            <div
              class="mx-[10%] flex flex-col justify-center gap-2 md:flex-row"
            >
              <h2
                class="h-1/2 w-[90%] text-left text-[11px] text-white md:text-[14px] lg:w-[80%] lg:text-[16px] xl:text-[20px]"
              >
                Exhibition floor marking<br />
                with Lionel
              </h2>
              <svg
                class="w-6 md:w-12 md:self-end lg:w-16"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0,0,256,256"
                fill-rule="nonzero"
              >
                <g
                  fill="#ffffff"
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
            </div>
          </button>
          <button
            class="mt-auto h-3/6 basis-1/3 bg-arblue/20 bg-disinfection-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-3/5 hover:bg-arblue/60 hover:bg-disinfection-background-full hover:md:h-4/5 lg:h-2/5"
          >
            <div
              class="mx-[10%] flex flex-col justify-center gap-2 md:flex-row"
            >
              <h2
                class="h-1/2 w-[90%] text-left text-[11px] text-white md:text-[14px] lg:w-[80%] lg:text-[16px] xl:text-[20px]"
              >
                Commercial Disinfection<br />
                with Lionel
              </h2>
              <svg
                class="w-6 md:w-12 md:self-end lg:w-16"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                viewBox="0,0,256,256"
                fill-rule="nonzero"
              >
                <g
                  fill="#ffffff"
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
            </div>
          </button>
        </div>

        <!-- Hero content title and button -->

        <div class="container mx-auto grid h-full">
          <div class="grid grid-cols-12 grid-rows-6">
            <div class="col-span-8 col-start-4">
              <div class="mx-auto mt-32 flex flex-col gap-y-6 xl:gap-y-12">
                <h1
                  class="text-xl text-white md:text-3xl lg:text-3xl xl:text-4xl"
                >
                  We automate dirty, dangerous <br />
                  and dull tasks all over the world.
                </h1>
                <button
                  class="h-12 w-32 rounded-lg bg-arprimary px-4 py-3 text-white"
                >
                  Speak to us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Hero />
      <SectionSpacer />
      <!-- ORIGINAL Industries Section -->

      <!-- <section class="container mx-auto">
      <div class="flex flex-col">
        <div class="container mx-auto mt-[5%]">
          <h3 class="mb-6 text-center text-3xl text-ardarkgreen md:text-3xl">
            Industries we serve
          </h3>
          <p class="mx-auto w-5/6 text-center text-sm md:text-base">
            We are the world leader in autonomous commercial robots, <br />
            serving the exhibition, construction and facilities management
            industries
          </p>
        </div>
        <div
          class="container mx-auto mb-10 h-5/6 w-5/6 max-w-[800px] justify-start"
        >
          <div class="flex h-[160px] max-h-[220px] flex-row">
            <div
              class="mt-auto flex h-2/5 basis-1/3 content-center justify-center bg-argray/80 bg-construction-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-3/5 hover:bg-argray/100 hover:bg-construction-background-full"
            >
              <h2 class="my-auto text-center text-sm text-white md:text-base">
                Construction
              </h2>
            </div>
            <div
              class="mt-auto flex h-2/5 basis-1/3 content-center justify-center bg-arblack/80 bg-exhibition-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-3/5 hover:bg-arblack/100 hover:bg-exhibition-background-full"
            >
              <h2 class="my-auto text-center text-sm text-white md:text-base">
                Exhibitions
              </h2>
            </div>
            <div
              class="mt-auto flex h-2/5 basis-1/3 content-center justify-center bg-arblue/60 bg-disinfection-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:h-3/5 hover:bg-arblue/80 hover:bg-disinfection-background"
            >
              <h2 class="my-auto text-center text-sm text-white md:text-base">
                Commercial <br />
                Disinfection
              </h2>
            </div>
          </div>
          <div
            class="flex h-full min-h-[240px] flex-row rounded-lg shadow-md"
          ></div>
        </div>
      </div>
    </section> -->

      <FeatureContentCenter />
      <SectionSeperator />
      <FeatureContentImageLeft />
      <SectionSeperator />
      <FeatureContentImageRight />
      <SectionSeperator />
      <FeatureContentCenter />
      <section class="container mx-auto my-auto px-[5%]">
        <div class="mx-auto mt-[5%]">
          <h3
            class="mb-6 mt-6 text-center text-3xl text-ardarkgreen md:text-5xl"
          >
            Industries we serve
          </h3>
          <p class="mx-auto text-center text-lg text-arblack">
            We are the world leader in autonomous commercial robots, <br />
            serving the exhibition, construction and facilities management
            industries
          </p>
        </div>
        <div class="container mx-auto mt-24 w-5/6 max-w-[800px] justify-start">
          <div class="flex h-[240px] flex-row">
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
            class="flex h-[420px] flex-col-reverse justify-center gap-y-6 gap-x-6 rounded-lg p-12 shadow-md md:h-[360px] md:flex-row md:gap-y-0"
          >
            <div class="md:basis-3/5">
              <h4
                class="text-center text-base font-medium md:text-left md:text-xl"
              >
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
      </section>

      <section>
        <div class="container mx-auto mt-24 mb-24 flex h-1/6 flex-col px-[5%]">
          <h3
            class="http://127.0.0.1:5500/dist/index.html# mb-6 text-center text-3xl text-ardarkgreen md:text-5xl"
          >
            Our Robots
          </h3>
          <p class="mx-auto w-5/6 text-center text-lg">
            All our robots have been developed using August Robotics’
            industry-leading <br />
            technology. View our current robot portfolio below
          </p>
        </div>
        <!-- Lionel Robot Section -->
        <div
          class="container mx-auto mb-24 px-[5%] sm:max-w-xl md:max-w-full lg:w-[80%] lg:max-w-screen-xl"
        >
          <div
            class="lg:gap-x-15 mx-auto grid gap-y-2 lg:grid-cols-2 lg:gap-y-12"
          >
            <div
              class="order-2 mx-auto mt-[40px] md:min-w-[320px] lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:mt-0"
            >
              <img
                src="../assets/img/Lionel.png"
                class="mr-auto ml-auto w-96 lg:mr-0 lg:w-full"
              />
            </div>

            <h4
              class="font-base order-1 mt-[80px] text-center text-4xl leading-6 text-arprimary lg:order-first lg:col-start-2 lg:mt-0 lg:text-left lg:text-8xl"
            >
              Lionel
            </h4>

            <p
              class="order-3 mx-auto w-[270px] text-center text-lg text-arblack lg:mx-0 lg:w-[320px] lg:text-left"
            >
              Lionel moves around your floor and marks your digital plan on the
              ground <br /><br />
              Fully autonomous, no supervision needed <br />
              <br />
              Much faster and more accurate than manual floor marking
            </p>

            <h4
              class="order-4 mt-12 text-center text-lg text-argray lg:mt-24 lg:w-5/6 lg:min-w-[500px]"
            >
              Industry Applications
            </h4>

            <div
              class="order-5 my-auto ml-auto mr-auto flex h-60 w-[320px] flex-col items-center justify-center rounded-lg bg-white shadow-md md:w-5/6 lg:ml-0 lg:mr-auto lg:w-[500px]"
            >
              <div
                class="mx-auto mt-auto grid h-20 w-[80%] grid-cols-12 items-center border-0 bg-argray/80 bg-construction-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:w-[90%] hover:border-4 hover:border-arsecondary hover:bg-argray/100"
              >
                <p
                  class="col-start-2 pl-[30%] text-sm font-medium text-white lg:text-lg"
                >
                  Construction
                </p>
                <button
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
                </button>
              </div>

              <div
                class="mx-auto mb-auto grid h-20 w-[80%] grid-cols-12 items-center border-0 bg-arblack/80 bg-exhibition-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:w-[90%] hover:border-4 hover:border-arsecondary hover:bg-arblack/100"
              >
                <p
                  class="col-start-2 pl-[30%] text-sm font-medium text-white lg:text-lg"
                >
                  Exhibition
                </p>
                <button
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
                </button>
              </div>
            </div>

            <a
              class="order-last text-center text-sm text-argray underline underline-offset-8 lg:col-start-2 lg:w-5/6 lg:min-w-[500px]"
              href="#"
            >
              Lionel Technology
            </a>
            <!-- <a
        class="order-last text-center mx-auto text-sm text-argray underline underline-offset-8 lg:w-5/6 lg:col-start-2"
        href="#"
      >
        Lionel Technology
      </a> -->
          </div>
        </div>
        <hr class="border-1 mx-auto my-24 max-w-[80%] border-opacity-80" />
        <!-- Diego Robot Section -->

        <!-- Old Diego Section -->
        <!-- <div
        class="mx-auto mt-24 mb-24 px-[5%] sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
      >
        <div class="grid gap-y-2 lg:grid-cols-2 lg:gap-y-12">
          <div
            class="order-2 mt-[40px] lg:col-start-2 lg:row-span-4 lg:row-start-2 lg:mt-0"
          >
            <img
              src="../dist/../assets/img/Diego.png"
              class="ml-auto mr-auto w-[80%] md:ml-0"
            />
          </div>

          <h4
            class="font-base order-1 mt-[80px] text-center text-4xl leading-6 text-arblue lg:order-first lg:col-start-1 lg:mt-0 lg:text-right lg:text-8xl"
          >
            Diego
          </h4>

          <p
            class="lg:mr:auto lg:pl-auto order-3 mr-auto ml-auto w-[70%] text-center text-lg text-arblack lg:col-start-1 lg:mr-0 lg:w-[60%] lg:text-right"
          >
            Lionel moves around your floor and marks your digital plan on the
            ground <br /><br />
            Fully autonomous, no supervision needed <br />
            <br />
            Much faster and more accurate than manual floor marking
          </p>

          <div
            class="order-last my-auto ml-auto mr-auto flex h-40 max-w-[320px] flex-col items-center justify-center rounded-lg bg-white shadow-md md:ml-0 md:mr-auto md:w-5/6"
          >
            <div
              class="mx-auto my-auto grid h-20 w-[80%] grid-cols-12 items-center border-0 bg-arblack/80 bg-exhibition-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:w-[90%] hover:border-4 hover:border-arsecondary hover:bg-arblack/100"
            >
              <p
                class="mt:24 col-start-2 text-sm font-medium text-white lg:mt-0 lg:pl-[30%] lg:text-lg"
              >
                Commercial <br />
                Disinfection
              </p>
              <button
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
              </button>
            </div>
          </div>
        </div>
      </div> -->

        <div
          class="container mx-auto mb-24 sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
        >
          <div
            class="lg:gap-x-15 mx-auto grid gap-y-2 lg:grid-cols-2 lg:gap-y-12"
          >
            <div
              class="order-2 mt-[40px] lg:col-start-2 lg:row-span-4 lg:row-start-2 lg:mt-0"
            >
              <img
                src="../assets/img/Diego.png"
                class="mr-auto ml-auto w-96 lg:mr-0 lg:w-full"
              />
            </div>

            <h4
              class="font-base order-1 mt-[80px] text-center text-4xl leading-6 text-arblue lg:order-first lg:col-start-1 lg:mt-0 lg:w-[500px] lg:justify-self-end lg:text-left lg:text-8xl"
            >
              Diego
            </h4>

            <p
              class="order-3 mr-auto ml-auto w-[270px] text-center text-lg text-arblack lg:col-start-1 lg:ml-auto lg:mr-0 lg:w-[500px] lg:justify-self-end lg:text-left"
            >
              Keep your team and patrons safe <br /><br />
              Diego uses UV-C light to disinfect air and surfaces <br />
              <br />
              Hospital grade disinfection to protect people in your
              facilities<br /><br />
              Moves from room to room autonomously without needing any
              supervision
            </p>

            <h4
              class="order-4 mt-12 text-center text-lg text-argray lg:mt-24 lg:w-[500px] lg:justify-self-end"
            >
              Industry Applications
            </h4>

            <div
              class="order-5 my-auto ml-auto mr-auto flex h-40 w-[320px] flex-col items-center justify-center rounded-lg bg-white shadow-md md:w-5/6 lg:ml-0 lg:mr-0 lg:w-[500px] lg:justify-self-end"
            >
              <div
                class="mx-auto my-auto grid h-20 w-[80%] grid-cols-12 items-center border-0 bg-arblue/80 bg-disinfection-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:w-[90%] hover:border-4 hover:border-arsecondary hover:bg-arblue/100"
              >
                <p
                  class="col-start-2 pl-[30%] text-sm font-medium text-white lg:text-lg"
                >
                  Commercial Disinfection
                </p>
                <button
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
                </button>
              </div>
            </div>

            <!-- <a
        class="order-last text-center mx-auto text-sm text-argray underline underline-offset-8 lg:w-5/6 lg:col-start-2"
        href="#"
      >
        Lionel Technology
      </a> -->
          </div>
        </div>

        <!-- <div
          class="ml-auto mr-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl"
        >
          <div class="row-gap-8 order-2 grid gap-5 lg:grid-cols-2 lg:gap-x-20">
            <div class="order-2 row-span-3 row-start-1 lg:col-start-2">
              <img src="../dist/../assets/img/Diego.png" class="mr-auto lg:w-[60%]" />
            </div>

            <h4
              class="font-base text-center text-4xl leading-6 text-arblue lg:col-start-1 lg:ml-auto lg:mb-12 lg:justify-self-start lg:text-right lg:text-8xl"
            >
              Diego
            </h4>

            <p
              class="text-right text-base text-gray-700 md:text-lg lg:order-3 lg:mx-0 lg:ml-auto lg:w-[60%] lg:text-right"
            >
              Lionel moves around your floor and marks your digital plan on the
              ground <br /><br />
              Fully autonomous, no supervision needed <br />
              <br />
              Much faster and more accurate than manual floor marking
            </p>

            <div
              class="max-w-320 order-last my-auto ml-auto mr-auto mt-20 flex h-60 w-5/6 flex-col items-center justify-center rounded-lg bg-white shadow-md md:mr-0 md:ml-auto"
            >
              <div
                class="justify-conten mx-auto mt-auto grid h-20 w-[80%] grid-cols-12 items-center border-0 bg-argray/80 bg-construction-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:w-[90%] hover:border-4 hover:border-arsecondary hover:bg-argray/100"
              >
                <p class="col-start-2 pl-[30%] text-lg font-medium text-white">
                  Construction
                </p>
                <button
                  class="col-span-4 col-start-8 my-auto flex h-10 items-center justify-center gap-2 rounded-md bg-white"
                >
                  <p class="text-[9px]">Visit Site</p>
                  <svg
                    class="my-auto w-6 md:self-end"
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
              <div
                class="mx-auto mb-auto grid h-20 w-[80%] grid-cols-12 items-center border-0 bg-arblack/80 bg-exhibition-background bg-cover bg-center bg-blend-overlay transition-all ease-in-out hover:w-[90%] hover:border-4 hover:border-arsecondary hover:bg-arblack/100"
              >
                <p class="col-start-2 pl-[30%] text-lg font-medium text-white">
                  Exhibition
                </p>
                <button
                  class="col-span-4 col-start-8 my-auto flex h-10 items-center justify-center gap-2 rounded-md bg-white"
                >
                  <p class="text-[9px]">Visit Site</p>
                  <svg
                    class="my-auto w-6 md:self-end"
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
            </div>
          </div>
        </div> -->
      </section>
      <hr class="border-1 mx-auto max-w-[80%] border-opacity-80" />
      <section>
        <div
          class="container mx-auto mt-6 mb-6 flex h-1/6 flex-col gap-y-16 px-[5%]"
        >
          <h4
            class="font-base mx-auto mt-[80px] text-center text-4xl leading-6 text-argray lg:order-first lg:col-start-1 lg:mt-0 lg:text-right lg:text-8xl"
          >
            In Development
          </h4>
          <p class="mx-auto w-5/6 gap-y-16 text-center text-lg">
            We have an exciting pipeline of new robots currently under
            development
            <br />
            <br />
            Our proprietary and modular technology platform allows us to spin
            off new robots quickly <br />
            <br />
            Have an idea? Reach out for a chat!
          </p>
          <button
            class="mx-auto mb-16 h-12 w-32 rounded-lg bg-arprimary px-4 py-3 text-white"
          >
            Speak to us
          </button>
        </div>

        <div
          class="mx-auto grid h-[10%] w-[40%] grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2"
        >
          <img
            class="rounded-tl-lg object-cover"
            src="../assets/img/Suspension Bridge.png"
            alt=""
          />
          <img
            src="../assets/img/Commercial Building.png"
            class="rounded-tr-lg object-cover md:rounded-none"
            alt=""
          />
          <img src="" alt="" class="bg-arsecondary/80" />
          <img
            src="../assets/img/Mine.png"
            class="object-cover md:rounded-tr-lg"
            alt=""
          />
          <img
            src="../assets/img/Port.png"
            alt=""
            class="rounded-bl-lg object-cover"
          />
          <img src="" class="bg-argray/80 object-cover" alt="" />
          <img
            src="../assets/img/Road Construction.png"
            alt=""
            class="rounded-bl-lg object-cover md:rounded-none"
          />
          <img
            src="../assets/img/Airport.png"
            class="rounded-br-lg object-cover"
            alt=""
          />
        </div>
      </section>
      <hr class="border-1 my-24 mx-auto max-w-[80%] border-opacity-80" />

      <section class="container mx-auto mt-24 mb-24">
        <div class="grid lg:grid-cols-2">
          <div class="basis-7/12 lg:col-start-1 lg:pl-[25%]">
            <h3
              class="order-1 col-start-1 mb-6 text-center text-4xl text-ardarkgreen lg:text-left"
            >
              Working at August Robotics
            </h3>
            <p
              class="order-3 mr-auto ml-auto w-5/6 text-center text-lg text-arblack lg:col-start-1 lg:mr-auto lg:ml-0 lg:w-[370px] lg:text-left"
            >
              Our robots are brought to life by our incredible team of
              passionate people <br />
              <br />
              Our team is located across Europe, America, Asia and Oceania and
              is growing quickly <br />
              <br />
              From robot design to on-site engineering to commercial strategy,
              August Robotics offers a career pathway for everyone <br />
              <br />
              Our diversity in backgrounds, skills and thinking have enabled us
              to push creative and technological boundaries and transform entire
              industries <br />
              <br />
              Join us on our journey <br />
              <br />
            </p>

            <div class="flex flex-row justify-center gap-x-4 lg:justify-start">
              <button
                class="flex h-12 w-32 flex-row items-center justify-center rounded-lg bg-arblack px-4 py-3 text-white shadow-md shadow-black"
              >
                Careers
              </button>
              <button
                class="flex h-12 w-32 flex-row items-center justify-center rounded-lg border-2 border-arsecondary px-4 py-3 text-base text-arsecondary"
              >
                Speak to us
              </button>
            </div>
          </div>
          <div class="hidden basis-5/12 lg:flex lg:flex-col">
            <img
              src="../assets/img/Airport.png"
              class="ml-auto lg:w-1/2"
              alt=""
            />
            <img
              src="../assets/img/Airport.png"
              class="ml-auto lg:w-1/2"
              alt=""
            />
          </div>
        </div>
      </section>
      <section class="mt-40">
        <h3
          class="mx-auto mb-24 text-center text-3xl text-ardarkgreen md:text-5xl"
        >
          Follow us
        </h3>
        <div
          class="mx-auto flex flex-wrap items-center justify-around md:w-[60%] lg:w-[40%]"
        >
          <div
            class="mb-16 flex h-16 w-16 items-center justify-center rounded-lg bg-arprimary opacity-50 md:mb-24 md:h-24 md:w-24 md:gap-x-4"
          >
            <img src="../assets/img/bell.svg" alt="" />
          </div>
          <div
            class="mb-16 flex h-16 w-16 items-center justify-center rounded-lg bg-linkedinblue opacity-50 md:mb-24 md:h-24 md:w-24"
          >
            <img src="../assets/img/linkedin.svg" alt="" />
          </div>
          <div
            class="mb-16 flex h-16 w-16 items-center justify-center rounded-lg bg-facebookblue opacity-50 md:mb-24 md:h-24 md:w-24"
          >
            <img src="../assets/img/facebook.svg" alt="" />
          </div>
          <div
            class="mb-16 flex h-16 w-16 items-center justify-center rounded-lg bg-twitterblue opacity-50 md:mb-24 md:h-24 md:w-24"
          >
            <img src="../assets/img/twitter.svg" alt="" />
          </div>
        </div>
      </section>

      <!-- <section
      class="relative flex h-[70vh] flex-col bg-lionel-contactsection"
    >
  <img src="/dist/../assets/img/Lionel on site.JPG" class="object-cover opacity-25 lg:h-[500px] bg-opacity-5"> -->
      <!-- <div class="bg-lionel-background bg-center bg-cover bg-opacity-40 z-2 h-[500px] w-full ">

    </div> 
    </section>  -->
      <section class="bg-arblack py-24 text-center text-white">
        <div
          class="container mx-auto flex flex-col items-center justify-center gap-y-24 lg:flex-row lg:items-start lg:justify-around lg:gap-0 lg:text-left"
        >
          <div>
            <img
              class="w-40"
              src="../assets/img/ar_logo.svg"
              alt=""
              srcset=""
            />
          </div>
          <div class="flex flex-col gap-y-4">
            <h4 class="text-4xl text-white">Test</h4>
            <p class="hover:text-arprimary">Exhibitions</p>
            <p class="hover:text-arprimary">Construction</p>
            <p class="hover:text-arprimary">Disinfection</p>
          </div>
          <div class="flex flex-col gap-y-4">
            <h4 class="text-4xl text-white">Industries</h4>
            <p>Exhibitions</p>
            <p>Construction</p>
            <p>Disinfection</p>
          </div>
          <div class="flex flex-col gap-y-4">
            <h4 class="text-4xl text-white">Industries</h4>
            <p>Exhibitions</p>
            <p>Construction</p>
            <p>Disinfection</p>
          </div>
        </div>
      </section>
    </body>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
