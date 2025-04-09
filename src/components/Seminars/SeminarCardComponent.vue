<template>
  <div class="max-w-xl bg-white border border-gray-200 rounded-lg shadow" :class="{ 'ml-auto': index % 2 === 0 }">
    <div v-if="seminar.image" class="mb-3 shadow-lg p-2 bg-white rounded-lg">
      <img :src="seminar.image" alt="seminar image" class="w-full h-[250px] object-contain" />
    </div>
    <div v-else class="bg-seminarpage-uncanny bg-cover bg-center h-[250px] w-full mb-3 shadow-lg rounded-lg"></div>


    <div class="p-5">
      <h5 class="mb-2 py-1 text-2xl md:text-3xl font-bold tracking-tight text-gray-900">
        {{ seminar.title }}
      </h5>

      <h2 class="text-lg font-semibold text-gray-900 dark:text-white font-serif">Bedrijf: {{ seminar.company }}</h2>
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white font-serif">Locatie: {{ seminar.location }}</h2>
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white pb-8 font-serif">Datum: {{ seminar.date }}</h2>

      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {{ seminar.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  seminar: Object,
  index: Number
});
</script>

<style scoped>
</style>