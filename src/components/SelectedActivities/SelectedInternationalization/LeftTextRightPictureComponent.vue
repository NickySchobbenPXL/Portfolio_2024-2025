<script setup>
defineProps({
  title: String,
  description: String,
  imgUrl: String,
});
</script>

<template>
  <section class="py-20 bg-gray-200">
    <div class="magazine-container w-[90%] mx-auto">
      <div class="relative overflow-hidden">
        <div class="flex">
          <div class="min-w-full">
            <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
              <div class="md:pr-8">
                <h3 class="mb-12 font-serif text-3xl leading-tight font-medium md:text-4xl text-center">{{ title }}</h3>
                <p v-html="description" class="text-muted-foreground mb-6"></p>
              </div>
              <div class="overflow-hidden rounded-lg">
                <img :src="imgUrl" alt="The Architecture of Light" class="h-[400px] w-full object-cover md:h-[500px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<style scoped>

</style>