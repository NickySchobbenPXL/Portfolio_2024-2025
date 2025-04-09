<template>
  <div class="flex justify-center items-center bg-gray-200 h-[1100px]">
    <div class="w-1/2">
      <phone-component/>
    </div>
    <div class="w-1/2">
      <internationalization-left-side-title-component/>
    </div>
  </div>
</template>

<script>

import PhoneComponent from "../../components/Internationalization/PhoneComponent.vue";
import LeftSideTitleComponent from "../../components/PersonalDevelopment/PersonalDevelopmentLeftSideTitleComponent.vue";
import LaptopComponent from "../../components/PersonalDevelopment/LaptopComponent.vue";
import InternationalizationLeftSideTitleComponent
  from "../../components/Internationalization/InternationalizationLeftSideTitleComponent.vue";

export default {
  name: "InternationalizationView",
  components: {LaptopComponent, LeftSideTitleComponent, InternationalizationLeftSideTitleComponent, PhoneComponent},
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>