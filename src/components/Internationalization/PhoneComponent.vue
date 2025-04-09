<script setup>
import PhonescreenComponent from "./PhonescreenComponent.vue";

</script>

<template>
  <div class="relative mx-auto border-gray-800 bg-blue-100/70 bg-gray-800 border-[14px] rounded-[2.5rem] h-[900px] w-[450px]">
    <div class="h-[32px] w-[7px] bg-gray-800 dark:bg-gray-800 absolute -start-[19px] top-[82px] rounded-s-lg">
    </div>

    <div class="h-[46px] w-[7px] bg-gray-800 dark:bg-gray-800 absolute -start-[19px] top-[135px] rounded-s-lg">
    </div>

    <div class="h-[46px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -start-[18px] top-[195px] rounded-s-lg">
    </div>

    <div class="h-[64px] w-[7px] bg-gray-800 dark:bg-gray-800 absolute -end-[21px] top-[142px] rounded-e-lg">
    </div>

    <div class="rounded-[2rem] overflow-auto w-[422px] h-[870px] bg-white dark:bg-gray-800">
      <PhonescreenComponent/>
    </div>
  </div>
</template>

<style scoped>

</style>