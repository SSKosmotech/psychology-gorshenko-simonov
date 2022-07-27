import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from '@meforma/vue-toaster'
import BackToTop from 'vue-backtotop'

import '@/assets/css/hamburger.scss'
import '@/assets/css/main.scss'
import '@/assets/css/respons.scss'

createApp(App)
    .use(router)
    .use(Toaster)
    .use(BackToTop)
    .mount('#app')
