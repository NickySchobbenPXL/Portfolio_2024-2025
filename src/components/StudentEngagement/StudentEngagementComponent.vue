<script setup>
import {computed, ref} from 'vue';

const studentEngagementImgUrls = ref([
  {
    imgUrl: "/Portfolio_2024-2025/images/java_essentials_logo.jpg"
  },
  {
    imgUrl: "/Portfolio_2024-2025/images/python_essentials_logo.jpg"
  },
]);

let currentImgIndex = ref(0);

const currentImg = computed(() => studentEngagementImgUrls.value[currentImgIndex.value]);

function changeCurrentImgToLower() {
  if (currentImgIndex.value - 1 < 0) {
    currentImgIndex.value = studentEngagementImgUrls.value.length - 1;
  } else {
    currentImgIndex.value -= 1;
  }
}

function changeCurrentImgToHigher() {
  if (currentImgIndex.value + 1 >= studentEngagementImgUrls.value.length) {
    currentImgIndex.value = 0;
  } else {
    currentImgIndex.value += 1;
  }
}
</script>


<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="relative flex">
      <div class="min-h-screen lg:w-1/3"></div>
      <div class="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

      <div
          class="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          Study Engagement
        </h1>
        <h1 class="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
          <span class="text-blue-500">Tutor: Java essentials & IT essentials</span> <br>
        </h1>

        <div class="mt-10 lg:mt-20 lg:flex lg:items-center">
          <img class="w-[420px] rounded-lg h-96"
               :src="currentImg.imgUrl"
               alt="">

          <div class="mt-8 lg:px-10 lg:mt-0">
            <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
              Java & IT Essentials
            </h1>

            <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
              Als tutor tijdens verschillende sessies bijles gegeven aan een student van het eerste jaar voor het vak IT Essentials en Java Essentials.
            </p>

            <h3 class="mt-6 text-lg font-medium text-blue-500">Ronik Ederson</h3>
            <p class="text-gray-600 dark:text-gray-300">Marketing Manager at Stech</p>
          </div>
        </div>

        <div class="flex items-center justify-between mt-12 lg:justify-start">
          <button title="left arrow" @click="changeCurrentImgToLower"
                  class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <button title="right arrow" @click="changeCurrentImgToHigher"
                  class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>