<template>
  <NavbarComponent/>
  <HomepageBodyComponent/>
  <PersonalDevelopmentView/>
  <SeminarsViewComponent/>
  <InternationalizationView/>
  <innovation-view/>
  <StudentEngagementView/>
</template>

<script>
import HomepageBodyComponent from "../components/Homepage/HomepageBodyComponent.vue";
import NavbarComponent from "../components/Navbar/NavbarComponent.vue";
import PersonalDevelopmentView from "./PersonalDevelopment/PersonalDevelopmentView.vue";
import InternationalizationView from "./Internationalization/InternationalizationView.vue";
import SeminarsViewComponent from "./Seminars/SeminarsViewComponent.vue";
import InnovationView from "./Innovation/InnovationView.vue";
import StudentEngagementView from "./StudentEngagement/StudentEngagementView.vue";

export default {
  name: "TestViewComponent",
  components: {
    StudentEngagementView,
    InnovationView,
    SeminarsViewComponent,
    InternationalizationView,
    PersonalDevelopmentView,
    NavbarComponent,
    HomepageBodyComponent,
  }
}
</script>

<style scoped>
</style>
