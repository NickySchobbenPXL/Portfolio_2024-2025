<script setup>
defineProps({
  name: String,
  dateString: String,
  text: String,
  image: String,
});
</script>

<template>
  <div class="w-full flex flex-start overflow-y-auto">
    <div class="w-1/2">
      <div class="flex items-center">
        <img class="h-5 w-5 overflow-hidden rounded-full"
             src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500"
             alt="">
        <p class="font-semibold ml-3 text-sm text-slate-600"> {{name}} <span
            class="text-slate-400 text-xs">{{dateString}}</span></p>
      </div>

      <div class="mt-3 w-full bg-slate-50 p-4 rounded-b-xl rounded-tr-xl">
        <p v-html="text" class=" text-sm text-slate-500"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>