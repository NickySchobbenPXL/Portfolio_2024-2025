<template>
  <component class="NavBarComp" :is="NavbarComponent"/>
  <TopTitleSelectedActivitiesComponent
  :title="'Overzicht activiteiten'"
  :year="'2024-2025'"
  />
  <PersonalDevelopmentView/>
  <InternationalizationView/>
  <InnovationView/>
  <SeminarsViewComponent/>
  <StudentEngagementView/>
</template>

<script>
import NavbarComponent from "../../components/Navbar/NavbarComponent.vue";
import SeminarsComponent from "../../components/Seminars/SeminarsComponent.vue";
import SeminarsViewComponent from "../Seminars/SeminarsViewComponent.vue";
import PersonalDevelopmentView from "../PersonalDevelopment/PersonalDevelopmentView.vue";
import InternationalizationView from "../Internationalization/InternationalizationView.vue";
import InnovationView from "../Innovation/InnovationView.vue";
import StudentEngagementView from "../StudentEngagement/StudentEngagementView.vue";
import TopTitleSelectedActivitiesComponent
  from "../../components/SelectedActivities/TopTitleSelectedActivitiesComponent.vue";

export default {
  name: "OverviewActivitiesView",
  components: {
    TopTitleSelectedActivitiesComponent,
    StudentEngagementView,
    InnovationView, InternationalizationView, PersonalDevelopmentView, SeminarsViewComponent},
  data() {
    return {
      NavbarComponent: NavbarComponent,
      SeminarsComponent:SeminarsComponent,
    }
  }
}
</script>

<style scoped>

</style>