<template>
  <div class="flex justify-center items-center h-[800px]">
    <!-- LeftSideTitleComponent: takes 50% of the width -->
    <div class="w-1/2">
      <LeftSideTitleComponent />
    </div>
    <!-- LaptopComponent: takes 50% of the width -->
    <div class="w-1/2">
      <LaptopComponent />
    </div>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import LaptopComponent from "../../components/PersonalDevelopment/LaptopComponent.vue";
import LeftSideTitleComponent from "../../components/PersonalDevelopment/PersonalDevelopmentLeftSideTitleComponent.vue";

export default defineComponent({
  components: {LeftSideTitleComponent, LaptopComponent}
})
</script>

<style>

</style>