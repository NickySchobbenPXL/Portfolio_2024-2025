<template>
  <main>
    <component class="NavBarComp" :is="NavbarComponent"/>
    <component class="HomepageBodyComp" :is="HomepageBodyComponent"/>
  </main>
</template>

<script>
import NavbarComponent from "../../components/Navbar/NavbarComponent.vue";
import HomepageBodyComponent from "../../components/Homepage/HomepageBodyComponent.vue";

export default {
  data() {
    return {
      NavbarComponent: NavbarComponent,
      HomepageBodyComponent:HomepageBodyComponent,
    }
  }
}
</script>

<style scoped>
</style>
