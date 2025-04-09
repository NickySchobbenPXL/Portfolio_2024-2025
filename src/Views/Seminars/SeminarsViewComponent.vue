<template>
  <SeminarsTopTitleComponent/>
  <SeminarsComponent/>
</template>

<script>


import SeminarsTopTitleComponent from "../../components/Seminars/SeminarsTopTitleComponent.vue";
import SeminarsComponent from "../../components/Seminars/SeminarsComponent.vue";

export default {
  name: "SeminarsViewComponent",
  components: {SeminarsComponent, SeminarsTopTitleComponent},
  data() {
    return {}
  }
}
</script>

<style scoped>

</style>