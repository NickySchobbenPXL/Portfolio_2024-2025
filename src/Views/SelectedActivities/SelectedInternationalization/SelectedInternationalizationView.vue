<script setup>
import InternationalizationMainComponent
  from "../../../components/SelectedActivities/SelectedInternationalization/InternationalizationMainComponent.vue";
import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import InternationalizationReflectionComponent
  from "../../../components/SelectedActivities/SelectedInternationalization/InternationalizationReflectionComponent.vue";
</script>

<template>
  <component class="NavBarComp" :is="NavbarComponent"/>

  <InternationalizationMainComponent/>
  <InternationalizationReflectionComponent/>
</template>

<style scoped>

</style>