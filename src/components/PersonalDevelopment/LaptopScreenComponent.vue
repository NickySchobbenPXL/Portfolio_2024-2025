<script setup>
defineProps({
  title: String,
  location: String,
  date: String,
  time: String,
  description: String,
  url: String,
});

const imgUrl = "/images/google_logo.png"
</script>

<template>

    <div class="relative w-full h-full flex flex-col">
      <!-- Outer container takes full space and flexes -->

      <div class="flex flex-col w-full h-full rounded-t-lg border border-gray-300 shadow-lg">

        <!-- Top Bar -->
        <div class="bg-gray-200 h-10 flex items-center justify-between px-4 rounded-t-lg shrink-0">
          <img
              :src="imgUrl"
              alt="Google"
              class="w-20 h-7 mr-2"
          />

          <!-- Address Bar -->
          <div class="flex items-center bg-white border border-gray-300 rounded-md h-7 w-2/3 px-2">
            <span class="text-sm text-gray-600 truncate">{{url}}</span>
          </div>

          <!-- Dots -->
          <div class="flex items-center space-x-2 ml-4">
            <div class="w-3 h-3 bg-red-500 rounded-full"></div>
            <div class="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div class="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        </div>

        <div class="bg-white flex-1 overflow-y-auto p-6">
          <div class="flex flex-col md:flex-row w-full h-full space-y-6 md:space-y-0 md:space-x-6">

            <!-- Left Side: Description (60%) -->
            <div class="md:w-3/5 w-full">
              <h2 class="text-2xl font-bold text-blue-700">
                {{ title }}
              </h2>
              <p class="text-gray-700 mt-10">
                {{ description }}
              </p>
            </div>

            <!-- Right Side: Icons (40%) -->
            <div class="md:w-2/5 w-full flex flex-col justify-start"> <!-- added flex and justify-start -->
              <div id="icon1" class="flex items-center text-gray-700 mt-16">
                <i class="bi bi-geo-alt-fill"></i>
                <span class="ml-2">{{ location }}</span>
              </div>
              <div id="icon2" class="flex items-center text-gray-700 mt-5">
                <i class="bi bi-calendar2-event"></i>
                <span class="ml-2">{{ date }}</span>
              </div>
              <div id="icon3" class="flex items-center text-gray-700 mt-5">
                <i class="bi bi-clock"></i>
                <span class="ml-2">{{ time }}</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

</template>

<style scoped>
</style>
