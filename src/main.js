import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import Lara from './presets/lara'
import './style.css'
import App from './App.vue'

createApp(App)
    .use(PrimeVue, {
        unstyled: true,
        pt: Lara
    })
    .mount('#app');
