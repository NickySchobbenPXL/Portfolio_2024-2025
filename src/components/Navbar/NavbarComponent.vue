<template>

  <nav class="bg-blue-700 border-slate border-[1px]">

    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img :src="imgUrl" class="h-8" alt="PxlLogo"/>
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">I-talent 2024-2025</span>
      </a>

      <!-- Start hamburger menu -->
      <button data-collapse-toggle="navbar-dropdown" type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <!-- End hamburger menu -->

      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">

        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-blue-700">

          <router-link to="/">
            <li class='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative bg-blue-700'>
              <a class='hover:text-[#007bff] hover:fill-[#007bff] text-white font-semibold text-[15px] block'>Home</a>
            </li>
          </router-link>

          <router-link to="/activiteiten">
            <li class='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative bg-blue-700'>
              <a class='hover:text-[#007bff] hover:fill-[#007bff] text-white font-semibold text-[15px] block'>Activiteiten
              </a>
            </li>
          </router-link>

          <li class='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative bg-blue-700'>
            <a class='hover:text-[#007bff] hover:fill-[#007bff] font-semibold text-[15px] block text-white'>Geselecteerde
              activiteiten
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block"
                   viewBox="0 0 24 24">
                <path
                    d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z"
                    data-name="16" data-original="#000000"/>
              </svg>
            </a>

            <ul class='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[120px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>

              <router-link to="/activiteiten/geselecteerde/internationalisering">
                <li class='border-b py-3'>
                  <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                    Internationalisering
                  </a>
                </li>
              </router-link>

              <router-link to="/activiteiten/geselecteerde/projectweek">
                <li class='border-b py-3'>
                  <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                    Projectweek
                  </a>
                </li>
              </router-link>

              <router-link to="/activiteiten/geselecteerde/studybuddy">
                <li class='border-b py-3'>
                  <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                    Study Buddy
                  </a>
                </li>
              </router-link>

              <router-link to="/activiteiten/geselecteerde/hackathon-hackthefuture">
                <li class='border-b py-3'>
                  <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                    Hackathon: Hack The Future
                  </a>
                </li>
              </router-link>
            </ul>
          </li>

          <router-link to="/test">
            <li class='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative bg-blue-700'>
              <a class='hover:text-[#007bff] hover:fill-[#007bff] text-white font-semibold text-[15px] block'>Reflectie</a>
            </li>
          </router-link>

        </ul>

      </div>

    </div>

  </nav>

</template>

<script setup>
const imgUrl = "/Portfolio_2024/images/logopxl.png";
</script>

<style scoped>

</style>
