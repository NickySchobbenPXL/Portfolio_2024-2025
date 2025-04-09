<template>
  <div class="flex max-w-[100%]">
    <section class="relative mx-auto">
      <!-- navbar -->
      <nav class="flex justify-between bg-gray-900 text-white w-screen">
        <div class="px-5 xl:px-12 py-6 flex w-full items-center">
          <!-- Nav Links -->
          <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12 text-center inline-flex items-center">
            <!-- LI1 -->
            <router-link to="/">
              <li>
                <a class="hover:text-gray-200 text-2xl">Home</a>
              </li>
            </router-link>

            <router-link to="/activiteiten">
              <li>
                <a class="hover:text-gray-200 text-2xl">Overzicht activiteiten</a>
              </li>
            </router-link>

            <!-- LI3 - Dropdown -->
            <li class="relative group">
              <button id="dropdownHoverButton" class="text-white text-2xl bg-gray-900 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg px-5 py-2.5 text-center inline-flex items-center" type="button">
                <a>Geselecteerde activiteiten</a>
                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                </svg>
              </button>

              <!-- Dropdown menu LI3 -->
              <div id="dropdownHover" class="z-10 hidden absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 group-hover:block">
                <ul class="py-2 text-sm text-gray-700">
                  <li>
                    <router-link to="/test">
                      <a class="block px-4 py-2 hover:bg-gray-100">Activiteit1</a>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/test">
                      <a class="block px-4 py-2 hover:bg-gray-100">Activiteit2</a>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/test">
                      <a class="block px-4 py-2 hover:bg-gray-100">Activiteit3</a>
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/test">
                      <a class="block px-4 py-2 hover:bg-gray-100">Activiteit4</a>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li>

            <!-- LI4 -->
            <li>
              <router-link to="/">
                <a class="hover:text-gray-200 text-2xl" href="#">Reflectie</a>
              </router-link>
            </li>
          </ul>
        </div>
        <!-- Responsive navbar -->
        <a class="navbar-burger self-center mr-12 xl:hidden" href="#">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hover:text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </a>
      </nav>
    </section>
  </div>

</template>



<script>
document.addEventListener('DOMContentLoaded', function() {
  const dropdownButton = document.getElementById('dropdownHoverButton');
  const dropdownMenu = document.getElementById('dropdownHover');

  dropdownButton.addEventListener('mouseenter', function() {
    dropdownMenu.classList.remove('hidden');
  });

  dropdownButton.addEventListener('mouseleave', function() {
    dropdownMenu.classList.add('hidden');
  });

  dropdownMenu.addEventListener('mouseenter', function() {
    dropdownMenu.classList.remove('hidden');
  });

  dropdownMenu.addEventListener('mouseleave', function() {
    dropdownMenu.classList.add('hidden');
  });
});

export default {
  name: "TestComponent"
}
</script>

<style scoped>

</style>






<!--

<template>

  <nav class="bg-white border-slate border-[1px]">

    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img :src="logoPxl" class="h-8" alt="PxlLogo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">I-talent 2023-2024</span>
      </a>

      <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>

      <div class="hidden w-full md:block md:w-auto" id="navbar-dropdown">

        <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

          <router-link to="/">
            <li>
              <a class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0" aria-current="page">Home</a>
            </li>
          </router-link>

          <li class='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
            <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Activiteiten
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block" viewBox="0 0 24 24">
                <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" data-name="16" data-original="#000000" />
              </svg>
            </a>

            <ul class='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[120px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>

              <router-link to="/seminaries">
                <li class='border-b py-3'>
                  <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                    Seminaries
                  </a>
                </li>
              </router-link>

              <router-link to="/test">
                <li class='border-b py-3'>
                  <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                    Innovatie
                  </a>
                </li>
              </router-link>

              <router-link to="/persoonlijke-ontwikkeling">
                <li class='border-b py-3'>
                  <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                    Persoonlijke ontwikkeling
                  </a>
                </li>
              </router-link>

              <router-link to="/internationalisering">
                <li class='border-b py-3'>
                  <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                    Internationalisering
                  </a>
                </li>
              </router-link>
            </ul>
          </li>

          <li class='group max-lg:border-b max-lg:px-3 max-lg:py-3 relative'>
            <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>Geselecteerde activiteiten
              <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" class="ml-1 inline-block" viewBox="0 0 24 24">
                <path d="M12 16a1 1 0 0 1-.71-.29l-6-6a1 1 0 0 1 1.42-1.42l5.29 5.3 5.29-5.29a1 1 0 0 1 1.41 1.41l-6 6a1 1 0 0 1-.7.29z" data-name="16" data-original="#000000" />
              </svg>
            </a>

            <ul class='absolute top-5 max-lg:top-8 left-0 z-50 block space-y-2 shadow-lg bg-white max-h-0 overflow-hidden min-w-[120px] group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500'>

              <router-link to="/test">
                <li class='border-b py-3'>
                  <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                    Internationalisering
                  </a>
                </li>
              </router-link>

              <router-link to="/test">
                <li class='border-b py-3'>
                  <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                    StudyBuddy
                  </a>
                </li>
              </router-link>

              <router-link to="/test">
                <li class='border-b py-3'>
                  <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                    Projectweek
                  </a>
                </li>
              </router-link>

              <router-link to="/test">
                <li class='border-b py-3'>
                  <a class='hover:text-[#007bff] hover:fill-[#007bff] text-gray-600 font-semibold text-[15px] block'>
                    Activiteit4
                  </a>
                </li>
              </router-link>
            </ul>
          </li>

          <router-link to="/test">
            <li>
              <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0">Reflectie</a>
            </li>
          </router-link>

        </ul>

      </div>

    </div>

  </nav>

</template>

<script>

import Logo from "../../../public/images/logopxl.png"

export default {
  name: "NavbarComponent",
  data() {
    return {
      logoPxl: Logo
    };
  }
}
</script>

<style scoped>

</style>

-->