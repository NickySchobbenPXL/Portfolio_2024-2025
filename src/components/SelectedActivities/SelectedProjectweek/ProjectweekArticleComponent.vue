<script setup>
defineProps({
  title: String,
  description: String,
  imgUrl: String,
});
</script>

<template>
  <article class="mx-auto w-full my-4 flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white text-gray-900 transition hover:translate-y-2 hover:shadow-lg">
    <a href="#">
      <img src="https://images.unsplash.com/photo-1594122230689-45899d9e6f69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YXdhcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" class="h-56 w-full object-cover" alt="" />
      <div class="flex-auto px-6 py-5">
        <h3 class="mt-4 mb-3 text-xl font-semibold xl:text-2xl">{{title}}</h3>
        <p v-html="description" class="mb-4 text-base font-light"/>
      </div>
    </a>
  </article>
</template>

<style scoped>

</style>