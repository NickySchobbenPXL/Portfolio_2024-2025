import { createRouter, createWebHistory } from 'vue-router'
import TestViewComponent from "../Views/TestViewComponent.vue";
import HomePageView from "../Views/HomePage/HomePageView.vue";

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
        }
    ]
})

export default router