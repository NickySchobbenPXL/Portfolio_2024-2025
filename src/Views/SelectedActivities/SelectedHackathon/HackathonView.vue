<script setup>

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";

import HackathonReflectionComponent
  from "../../../components/SelectedActivities/SelectedHackathon/HackathonReflectionComponent.vue";
import HackathonMainComponent
  from "../../../components/SelectedActivities/SelectedHackathon/HackathonMainComponent.vue";
</script>

<template>
  <component class="NavBarComp" :is="NavbarComponent"/>
  <HackathonMainComponent/>
  <hr class="mt-16 border-t-2 border-gray-900 w-1/2 mx-auto"/>
  <HackathonReflectionComponent/>
</template>

<style scoped>

</style>