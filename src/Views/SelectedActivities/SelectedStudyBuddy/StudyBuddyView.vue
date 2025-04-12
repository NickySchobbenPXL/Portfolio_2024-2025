<script setup>

import NavbarComponent from "../../../components/Navbar/NavbarComponent.vue";
import StudyBuddyMainComponent
  from "../../../components/SelectedActivities/SelectedStudyBuddy/StudyBuddyMainComponent.vue";
import StudyBuddyReflectionComponent
  from "../../../components/SelectedActivities/SelectedStudyBuddy/StudyBuddyReflectionComponent.vue";
</script>

<template>
  <component class="NavBarComp" :is="NavbarComponent"/>
  <StudyBuddyMainComponent/>
  <hr class="mt-16 border-t-2 border-gray-900 w-1/2 mx-auto" />
  <StudyBuddyReflectionComponent/>
</template>

<style scoped>

</style>