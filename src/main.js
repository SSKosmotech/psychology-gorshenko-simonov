import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from '@meforma/vue-toaster'


// import '@/assets/css/reset.scss'
import '@/assets/css/hamburger.scss'
// import '@/assets/css/fonts_style.css'
// import '@/assets/css/contacts.scss'
import '@/assets/css/main.scss'
import '@/assets/css/respons.scss'

createApp(App)
    .use(router)
    .use(Toaster)
    .mount('#app')
