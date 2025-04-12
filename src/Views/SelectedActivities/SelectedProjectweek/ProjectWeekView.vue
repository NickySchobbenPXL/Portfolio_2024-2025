<script setup>

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import ProjectweekMainComponent
  from "../../../components/SelectedActivities/SelectedProjectweek/ProjectweekMainComponent.vue";
import ProjectweekReflectionComponent
  from "../../../components/SelectedActivities/SelectedProjectweek/ProjectweekReflectionComponent.vue";
</script>

<template>
  <component class="NavBarComp" :is="NavbarComponent"/>
  <ProjectweekMainComponent/>
  <hr class="mt-16 border-t-2 border-gray-900 w-1/2 mx-auto"/>
  <ProjectweekReflectionComponent/>
</template>

<style scoped>

</style>