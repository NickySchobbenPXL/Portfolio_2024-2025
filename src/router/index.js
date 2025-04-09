import { createRouter, createWebHistory } from 'vue-router'
import TestViewComponent from "../Views/TestViewComponent.vue";
import HomePageView from "../Views/HomePage/HomePageView.vue";
import SeminarsViewComponent from "../Views/Seminars/SeminarsViewComponent.vue";
import InternationalizationView from "../Views/Internationalization/InternationalizationView.vue";
import TestComponent from "../components/TestComponent/TestComponent.vue";
import OverviewActivitiesView from "../Views/OverviewActivities/OverviewActivitiesView.vue";

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
    ]
})

export default router