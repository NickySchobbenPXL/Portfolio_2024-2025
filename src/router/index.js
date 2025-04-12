import { createRouter, createWebHistory } from 'vue-router'
import TestViewComponent from "../Views/TestViewComponent.vue";
import HomePageView from "../Views/HomePage/HomePageView.vue";
import SeminarsViewComponent from "../Views/Seminars/SeminarsViewComponent.vue";
import TestComponent from "../components/TestComponent/TestComponent.vue";
import OverviewActivitiesView from "../Views/OverviewActivities/OverviewActivitiesView.vue";
import HackathonView from "../Views/SelectedActivities/SelectedHackathon/HackathonView.vue";
import ProjectWeekView from "../Views/SelectedActivities/SelectedProjectweek/ProjectWeekView.vue";
import StudyBuddyView from "../Views/SelectedActivities/SelectedStudyBuddy/StudyBuddyView.vue";
import InternationalizationView from "../Views/Internationalization/InternationalizationView.vue";
import SelectedInternationalizationView
    from "../Views/SelectedActivities/SelectedInternationalization/SelectedInternationalizationView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePageView
        },
        {
            path: '/test',
            name: 'test',
            component: TestViewComponent
        },
        {
            path: '/seminaries',
            name: 'seminaries',
            component: SeminarsViewComponent
        },
        {
            path: '/internationalisering',
            name: 'internationalisering',
            component: InternationalizationView,
        },
        {
          path: '/test123',
          name: 'test123',
          component: TestComponent
        },
        {
          path: '/activiteiten',
          name: '/activiteiten',
          component: OverviewActivitiesView
        },
        {
            path: '/activiteiten/geselecteerde/internationalisering',
            name: '/activiteiten/geselecteerde/internationalisering',
            component: SelectedInternationalizationView
        },
        {
            path: '/activiteiten/geselecteerde/projectweek',
            name: '/activiteiten/geselecteerde/projectweek',
            component: ProjectWeekView
        },
        {
            path: '/activiteiten/geselecteerde/studybuddy',
            name: '/activiteiten/geselecteerde/studybuddy',
            component: StudyBuddyView
        },
        {
            path: '/activiteiten/geselecteerde/hackathon-hackthefuture',
            name: '/activiteiten/geselecteerde/hackathon-hackthefuture',
            component: HackathonView
        },
    ]
})

export default router