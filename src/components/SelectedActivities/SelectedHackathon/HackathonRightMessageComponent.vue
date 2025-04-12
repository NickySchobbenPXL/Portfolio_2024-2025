<script setup>
defineProps({
  name: String,
  dateString: String,
  text: String,
  image: String,
});
</script>

<template>
  <div class="w-full flex justify-end mt-3">
    <div class="w-1/2 ">
      <div class="flex items-center justify-end">
        <p class="font-semibold mr-6 text-sm text-slate-600 ">{{name}}<span
            class="text-slate-400 text-xs">{{dateString}}</span></p>

        <img class="h-5 w-5 overflow-hidden rounded-full"
             src="https://source.unsplash.com/random/500x500/?face"
             alt="">

      </div>

      <div class="mt-3 w-full bg-blue-500 p-4 rounded-b-xl rounded-tl-xl">
        <p v-html="text" class=" text-sm text-white"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>