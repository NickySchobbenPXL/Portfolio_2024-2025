<script setup>
defineProps({
  title: String,
  year: String,
});
</script>

<template>
  <div class="flex items-center justify-center text-center h-[300px] my-20 bg-black">
    <div>
      <h2 class="text-6xl font-medium text-black">
        {{title}}
        <span class="text-purple-500 font-bold" style="font-family: 'Nothing You Could Do', cursive;">
        {{year}}
      </span>
      </h2>
      <div class="mt-4">
        <span class="inline-block w-[450px] h-1 bg-purple-500 rounded-full"></span>
        <span class="inline-block w-2 h-1 mx-1 bg-purple-500 rounded-full"></span>
        <span class="inline-block w-1 h-1 bg-purple-500 rounded-full"></span>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>