<template>
  <main>
    <component class="NavBarComp" :is="NavbarComponent"/>
    <component class="FirstBodyComp" :is="FirstBodyComponent"/>
    <component class="IntroductionComp" :is="IntroductionComponent"/>
    <component class="InterestsComp" :is="InterestsComponent"/>
  </main>
</template>

<script>
import NavbarComponent from "../../components/navbar/NavbarComponent.vue";
import FirstBodyComponent from "../../components/Homepage/FirstBodyComponent.vue";
import IntroductionComponent from "../../components/Homepage/IntroductionComponent.vue";
import InterestsComponent from "../../components/Homepage/InterestsComponent.vue";

export default {
  data() {
    return {
      NavbarComponent: NavbarComponent,
      FirstBodyComponent: FirstBodyComponent,
      IntroductionComponent: IntroductionComponent,
      InterestsComponent: InterestsComponent,
    }
  }
}
</script>

<style scoped>
</style>
