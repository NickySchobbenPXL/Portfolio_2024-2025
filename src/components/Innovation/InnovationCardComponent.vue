<script setup>
defineProps({
  title: String,
  location: String,
  company: String,
  date: String,
  time: String,
  description: String,
  imgUrl: String,
});
</script>

<template>
  <div>
    <img class="relative z-10 object-cover w-full rounded-md h-96" :src="imgUrl" alt="">

    <div class="relative z-20 max-w-lg p-6 mx-auto -mt-20 bg-white rounded-md shadow border-2 border-blue-200">
      <a href="#" class="font-semibold text-gray-800 hover:underline dark:text-white md:text-xl">
        {{title}}
      </a>

      <p class="mt-3 text-sm text-gray-500 md:text-sm">
        {{description}}
      </p>

      <p class="mt-3 text-sm text-blue-500">{{date}}</p>
      <p class="mt-3 text-sm text-blue-500">{{time}}</p>
      <p class="mt-3 text-sm text-blue-500"> {{location}}</p>
      <p class="mt-3 text-sm text-blue-500">Georganiseerd door: {{company}}</p>
    </div>
  </div>
</template>

<style scoped>

</style>