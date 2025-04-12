<template>
  <div class="bg-slate-50">

    <div class="flex justify-center items-end text-center font-bold text-4xl font-serif min-h-[250px] pb-[20%] md:pb-[5%] underline underline-offset-8 underline decoration-red-500">
      Interesses
    </div>

    <div class="container m-auto p-8 min-h-[500px]">

      <div class="flex flex-col md:flex-row justify-center items-center md:space-x-8 space-y-4 md:space-y-0">

        <div class="flex-1"></div>

        <div class="flex-1 text-center flex flex-col items-center justify-center">
          <img class="w-[100px] h-[100px] mb-3 shadow-lg" src="/Portfolio_2024-2025/images/travel.png" alt="study" />
          <h4 class="text-xl font-bold mb-2">Reizen</h4>
          <p class="bg-yellow-200 overflow-clip overflow-hidden">Description: the text of this title should automatically truncate but it should never use more than 100% of the parent element</p>
        </div>

        <div class="flex-1 text-center flex flex-col items-center justify-center">
          <img class="w-[100px] h-[100px] mb-3 shadow-lg" src="/Portfolio_2024-2025/images/cooking.png" alt="study" />
          <h4 class="text-xl font-bold mb-2">Koken</h4>
          <p class="bg-yellow-200 overflow-clip overflow-hidden">Description: the text of this title should automatically truncate but it should never use more than 100% of the parent element</p>
        </div>

        <div class="flex-1 text-center flex flex-col items-center justify-center">
          <img class="w-[100px] h-[100px] mb-3 shadow-lg" src="/Portfolio_2024-2025/images/study.png" alt="study" />
          <h4 class="text-xl font-bold mb-2">Studeren</h4>
          <p class="bg-yellow-200 overflow-clip overflow-hidden">Description: the text of this title should automatically truncate but it should never use more than 100% of the parent element</p>
        </div>

        <div class="flex-1"></div>

      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "InterestsComponent"
}
</script>

<style scoped>

</style>